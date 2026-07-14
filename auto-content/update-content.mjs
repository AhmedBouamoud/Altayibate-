import fs from "node:fs/promises";

const CONTENT_FILE = new URL("./content.json", import.meta.url);
const UPDATE_INTERVAL_MS = 72 * 60 * 60 * 1000;
const MIN_REFRESH_MS = 68 * 60 * 60 * 1000;
const MAX_ARTICLES = 12;
const MAX_VIDEOS = 8;

const articleQueries = [
  "نظام الطيبات ضياء العوضي",
  "التغذية الصحية",
  "السكري التغذية",
  "ضغط الدم التغذية"
];

const videoQueries = [
  "نظام الطيبات ضياء العوضي",
  "نظام الطيبات التغذية",
  "التغذية الصحية بالعربية"
];

const relevanceTerms = [
  "الطيبات", "تغذية", "غذاء", "طعام", "سكري", "السكر", "ضغط الدم",
  "صحة", "خضار", "فواكه", "زيت الزيتون", "حمية", "نظام غذائي"
];

const unsafeTerms = [
  "معجزة", "شفاء نهائي", "يعالج كل", "أوقف الدواء", "اترك الدواء",
  "بدون طبيب", "cure all", "miracle cure", "stop medication"
];

const preferredSources = [
  "منظمة الصحة العالمية", "وزارة الصحة", "Mayo Clinic", "NHS", "CDC",
  "Harvard Health", "Cleveland Clinic", "NIH", "National Institutes of Health",
  "Nature", "The Conversation", "ويب طب", "الطبي"
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function decodeXml(value = "") {
  return value
    .replace(/^<!\[CDATA\[/, "")
    .replace(/\]\]>$/, "")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(value = "") {
  return decodeXml(value)
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function xmlTag(block, tag) {
  const match = block.match(new RegExp(`<${tag}(?:\\s[^>]*)?>([\\s\\S]*?)<\\/${tag}>`, "i"));
  return match ? decodeXml(match[1]).trim() : "";
}

function normalize(value = "") {
  return value
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function containsAny(text, terms) {
  const haystack = normalize(text);
  return terms.some((term) => haystack.includes(normalize(term)));
}

function isSafeAndRelevant(title, source = "") {
  const combined = `${title} ${source}`;
  if (!containsAny(combined, relevanceTerms)) return false;
  if (containsAny(combined, unsafeTerms)) return false;
  return true;
}

function sourceScore(source = "") {
  const normalized = normalize(source);
  const index = preferredSources.findIndex((item) => normalized.includes(normalize(item)));
  return index === -1 ? 0 : preferredSources.length - index;
}

function safeIsoDate(value) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date.toISOString();
}

async function fetchText(url, options = {}) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: {
      "user-agent": "Mozilla/5.0 (compatible; AltayibateContentBot/1.0; +https://github.com/AhmedBouamoud/Altayibate-)",
      "accept-language": "ar,fr;q=0.8,en;q=0.6",
      ...options.headers
    },
    signal: AbortSignal.timeout(25_000),
    ...options
  });
  if (!response.ok) throw new Error(`HTTP ${response.status} for ${url}`);
  return response.text();
}

async function fetchGoogleNews(query) {
  const url = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=ar&gl=MA&ceid=MA:ar`;
  const xml = await fetchText(url);
  const blocks = xml.match(/<item>[\s\S]*?<\/item>/gi) || [];

  return blocks.map((block) => {
    let title = stripHtml(xmlTag(block, "title"));
    const source = stripHtml(xmlTag(block, "source"));
    if (source && title.endsWith(` - ${source}`)) title = title.slice(0, -(` - ${source}`.length));

    const description = stripHtml(xmlTag(block, "description"));
    const publishedAt = safeIsoDate(xmlTag(block, "pubDate"));
    const link = xmlTag(block, "link");

    return {
      id: `article-${Buffer.from(`${title}|${source}`).toString("base64url").slice(0, 24)}`,
      title,
      summary: description
        ? description.slice(0, 220)
        : `مادة جديدة حول ${query} منشورة لدى ${source || "مصدر خارجي"}.`,
      url: link,
      source: source || "Google News",
      publishedAt,
      query,
      type: "article",
      safetyLabel: "للتثقيف العام — راجع الطبيب عند اتخاذ قرار صحي"
    };
  }).filter((item) => item.title && item.url && isSafeAndRelevant(item.title, item.source));
}

function decodeJsonString(value = "") {
  try {
    return JSON.parse(`"${value}"`);
  } catch {
    return value
      .replace(/\\u([0-9a-fA-F]{4})/g, (_, code) => String.fromCharCode(parseInt(code, 16)))
      .replace(/\\n/g, " ")
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, "\\");
  }
}

function nearbyJsonValue(chunk, field, maxLength = 240) {
  const runPattern = new RegExp(`"${field}":\\{"runs":\\[\\{"text":"((?:\\\\.|[^"\\\\]){1,${maxLength}})"`, "s");
  const simplePattern = new RegExp(`"${field}":\\{"simpleText":"((?:\\\\.|[^"\\\\]){1,${maxLength}})"`, "s");
  const match = chunk.match(runPattern) || chunk.match(simplePattern);
  return match ? decodeJsonString(match[1]).replace(/\s+/g, " ").trim() : "";
}

async function fetchYouTubeSearch(query) {
  const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  const html = await fetchText(url, {
    headers: { accept: "text/html,application/xhtml+xml" }
  });

  const output = [];
  const seen = new Set();
  const regex = /"videoId":"([A-Za-z0-9_-]{11})"/g;
  let match;

  while ((match = regex.exec(html)) && output.length < 20) {
    const videoId = match[1];
    if (seen.has(videoId)) continue;
    seen.add(videoId);

    const chunk = html.slice(match.index, match.index + 6500);
    const title = nearbyJsonValue(chunk, "title", 300);
    if (!title || !isSafeAndRelevant(title, query)) continue;

    const channel = nearbyJsonValue(chunk, "ownerText", 180) || nearbyJsonValue(chunk, "shortBylineText", 180);
    const publishedLabel = nearbyJsonValue(chunk, "publishedTimeText", 120);
    const duration = nearbyJsonValue(chunk, "lengthText", 40);

    output.push({
      id: `youtube-${videoId}`,
      videoId,
      title,
      channel: channel || "YouTube",
      publishedLabel,
      duration,
      url: `https://www.youtube.com/watch?v=${videoId}`,
      embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}`,
      thumbnail: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
      query,
      type: "video",
      safetyLabel: "فيديو خارجي — عرضه لا يعني تبنّي جميع الادعاءات الطبية"
    });
  }

  return output;
}

function dedupe(items, keyFn) {
  const seen = new Set();
  return items.filter((item) => {
    const key = keyFn(item);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

async function readCurrent() {
  try {
    return JSON.parse(await fs.readFile(CONTENT_FILE, "utf8"));
  } catch {
    return { version: 1, articles: [], videos: [], lastUpdated: null };
  }
}

async function main() {
  const current = await readCurrent();
  const now = new Date();
  const force = process.env.FORCE_UPDATE === "true";
  const previousTime = current.lastUpdated ? new Date(current.lastUpdated).getTime() : 0;

  if (!force && previousTime && now.getTime() - previousTime < MIN_REFRESH_MS) {
    console.log("Content is still fresh; no refresh needed.");
    return;
  }

  const articleResults = [];
  for (const query of articleQueries) {
    try {
      articleResults.push(...await fetchGoogleNews(query));
    } catch (error) {
      console.warn(`Article query failed: ${query}`, error.message);
    }
    await sleep(450);
  }

  const videoResults = [];
  for (const query of videoQueries) {
    try {
      videoResults.push(...await fetchYouTubeSearch(query));
    } catch (error) {
      console.warn(`YouTube query failed: ${query}`, error.message);
    }
    await sleep(650);
  }

  const cutoff = Date.now() - 45 * 24 * 60 * 60 * 1000;
  let articles = dedupe(articleResults, (item) => normalize(item.title))
    .filter((item) => !item.publishedAt || new Date(item.publishedAt).getTime() >= cutoff)
    .sort((a, b) => {
      const sourceDifference = sourceScore(b.source) - sourceScore(a.source);
      if (sourceDifference) return sourceDifference;
      return (new Date(b.publishedAt || 0)) - (new Date(a.publishedAt || 0));
    })
    .slice(0, MAX_ARTICLES);

  let videos = dedupe(videoResults, (item) => item.videoId).slice(0, MAX_VIDEOS);

  if (articles.length < 3 && Array.isArray(current.articles)) {
    articles = dedupe([...articles, ...current.articles], (item) => normalize(item.title)).slice(0, MAX_ARTICLES);
  }
  if (videos.length < 2 && Array.isArray(current.videos)) {
    videos = dedupe([...videos, ...current.videos], (item) => item.videoId || item.url).slice(0, MAX_VIDEOS);
  }

  const lastUpdated = now.toISOString();
  const nextUpdateAfter = new Date(now.getTime() + UPDATE_INTERVAL_MS).toISOString();
  const payload = {
    version: 2,
    lastUpdated,
    nextUpdateAfter,
    status: articles.length || videos.length ? "ready" : "degraded",
    notice: "المقالات والفيديوهات روابط خارجية منتقاة آليًا للتثقيف العام. لا توقف دواءً ولا تغيّر علاجًا دون استشارة مختص.",
    articles,
    videos,
    diagnostics: {
      articleCount: articles.length,
      videoCount: videos.length,
      articleQueries,
      videoQueries
    }
  };

  await fs.writeFile(CONTENT_FILE, `${JSON.stringify(payload, null, 2)}\n`, "utf8");
  console.log(`Updated content: ${articles.length} articles, ${videos.length} videos.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
