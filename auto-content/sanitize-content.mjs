import fs from "node:fs/promises";

const file = new URL("./content.json", import.meta.url);
const forbidden = [
  "معجزة", "شفاء نهائي", "يعالج كل", "علاجك في", "في 12 يوم",
  "أوقف الدواء", "اترك الدواء", "إيقاف العلاج", "وقف العلاج",
  "الاستغناء عن الأدوية", "بديل الأدوية", "بدون أدوية", "بدون طبيب",
  "من قتل", "أخطر وثائقي", "قنبلة", "الحقيقة الكاملة",
  "cure all", "miracle cure", "stop medication", "bombshell"
];

function normalize(value = "") {
  return String(value)
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u064B-\u065F\u0670]/g, "")
    .replace(/[أإآ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/ة/g, "ه")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim();
}

function unsafe(value = "") {
  const text = normalize(value);
  const directMatch = forbidden.some((term) => text.includes(normalize(term)));
  const medicineEscapeClaim = /(يغني|استغن|بديل|اوقف|اترك)/.test(text)
    && /(دواء|ادويه|علاج)/.test(text);
  const rapidTreatmentClaim = /(علاج|شفاء|يعالج)/.test(text)
    && /\b\d{1,2}\s*(يوم|ايام|اسبوع|اسابيع)\b/.test(text);
  const conspiracyClaim = /(قتل|مؤامره|اخطر وثائقي)/.test(text)
    && /(دكتور|طبيب|نظام الطيبات)/.test(text);
  return directMatch || medicineEscapeClaim || rapidTreatmentClaim || conspiracyClaim;
}

function cleanText(value = "") {
  return String(value)
    .replace(/&nbsp;|&#160;/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const data = JSON.parse(await fs.readFile(file, "utf8"));

const articles = (Array.isArray(data.articles) ? data.articles : [])
  .filter((item) => !unsafe(`${item.title || ""} ${item.summary || ""}`))
  .map((item) => {
    const title = cleanText(item.title);
    let summary = cleanText(item.summary);
    const source = cleanText(item.source || "مصدر خارجي");
    const compactSummary = normalize(summary);
    const compactTitle = normalize(title);
    if (!summary || compactSummary === compactTitle || compactSummary.startsWith(compactTitle)) {
      summary = `مادة جديدة من ${source}. افتح الرابط لقراءة التفاصيل من المصدر الأصلي.`;
    }
    return { ...item, title, summary, source };
  })
  .slice(0, 10);

const videos = (Array.isArray(data.videos) ? data.videos : [])
  .filter((item) => !unsafe(`${item.title || ""} ${item.channel || ""}`))
  .map((item) => ({
    ...item,
    title: cleanText(item.title),
    channel: cleanText(item.channel || "YouTube")
  }))
  .slice(0, 6);

data.articles = articles;
data.videos = videos;
data.status = articles.length || videos.length ? "ready" : "degraded";
data.safetyReviewedAt = new Date().toISOString();
data.diagnostics = {
  ...(data.diagnostics || {}),
  articleCount: articles.length,
  videoCount: videos.length,
  safetyFilterVersion: 3
};

await fs.writeFile(file, `${JSON.stringify(data, null, 2)}\n`, "utf8");
console.log(`Safety review kept ${articles.length} articles and ${videos.length} videos.`);
