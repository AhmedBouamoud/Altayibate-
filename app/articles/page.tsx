"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const categories = ["الكل", "أساسيات النظام", "الممنوعات", "المسموحات", "تجارب حقيقية", "ردود علمية"];

const articles = [
  {
    id: "1",
    tag: "أساسيات النظام",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    title: "الأساسيات الخمس في نظام الطيبات — الدليل الشامل",
    excerpt: "الأرز، البطاطس، التمر، الزبدة الطبيعية، والسكر — الركائز التي يقوم عليها النظام بالشرح الكامل والمنطق العلمي.",
    readTime: "١٢ دقيقة",
    date: "٥ يونيو ٢٠٢٦",
    featured: true,
  },
  {
    id: "2",
    tag: "الممنوعات",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "لماذا الدقيق الأبيض والألبان على رأس قائمة الممنوعات؟",
    excerpt: "النظام يحظر الدقيق الأبيض، الألبان، والبيض — اكتشف التفسير التفصيلي لكل قرار والرأي العلمي الموضوعي.",
    readTime: "١٤ دقيقة",
    date: "٣ يونيو ٢٠٢٦",
    featured: false,
  },
  {
    id: "3",
    tag: "تجارب حقيقية",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    title: "قصص نجاح حقيقية مع نظام الطيبات",
    excerpt: "آلاف الأشخاص جرّبوا النظام وشاركوا تجاربهم — قصص موثّقة بالأرقام مع إيجابياتها وتحفّظاتها.",
    readTime: "١٠ دقائق",
    date: "١ يونيو ٢٠٢٦",
    featured: false,
  },
  {
    id: "4",
    tag: "المسموحات",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    title: "الأسماك في نظام الطيبات — الدليل الكامل للأنواع والطريقة",
    excerpt: "الأسماك مسموحة بجميع أنواعها تقريباً — أفضل الأنواع، طرق الطهي الصحيحة، والتكرار الأمثل أسبوعياً.",
    readTime: "٨ دقائق",
    date: "٢٩ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "5",
    tag: "ردود علمية",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    title: "الموقف الطبي من نظام الطيبات — تحليل علمي شامل",
    excerpt: "ما يقوله الأطباء والعلماء — الحجج المؤيدة والمعارضة بموضوعية تامة وبدون مبالغة في الاتجاهين.",
    readTime: "١٦ دقيقة",
    date: "٢٦ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "6",
    tag: "أساسيات النظام",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80",
    title: "نظام المناطق اللونية في الطيبات — الدليل التطبيقي الكامل",
    excerpt: "خمس مناطق لونية تُحدد ما تأكله — من الأخضر الآمن إلى الأحمر الممنوع، بالأمثلة والتطبيق العملي.",
    readTime: "١٣ دقيقة",
    date: "٢٢ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "7",
    tag: "الممنوعات",
    image: "https://images.unsplash.com/photo-1582901369304-9bf38e4e9e11?w=600&q=80",
    title: "لماذا الدجاج ممنوع في نظام الطيبات؟ — الشرح الكامل",
    excerpt: "من أغرب قرارات النظام: تحريم الدجاج كلياً — التفسير الكامل، الرأي الطبي المعارض، والبدائل.",
    readTime: "٩ دقائق",
    date: "١٨ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "8",
    tag: "تجارب حقيقية",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    title: "تجربتي مع نظام الطيبات: ٦ أشهر من البداية للنهاية",
    excerpt: "رحلة مفصّلة بالأرقام — كل شهر بالتفصيل، التحاليل، الإيجابيات، السلبيات، والنتيجة النهائية.",
    readTime: "١٨ دقيقة",
    date: "١٤ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "9",
    tag: "أساسيات النظام",
    image: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&q=80",
    title: "دليل المبتدئين في نظام الطيبات — كيف تبدأ بخطوات عملية",
    excerpt: "تحضير المطبخ، الجدول الأسبوعي، الأخطاء الشائعة، وأجوبة الأسئلة الأكثر شيوعاً — كل ما يحتاجه المبتدئ.",
    readTime: "١٥ دقيقة",
    date: "١٠ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "10",
    tag: "أساسيات النظام",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80",
    title: "التمر والسكر في نظام الطيبات — لماذا هما مسموحان؟",
    excerpt: "التمر يومياً والسكر بحد ١٥ ملعقة — الشرح العلمي لهذا القرار المثير للجدل والفرق بين السكر الطبيعي والمضاف.",
    readTime: "١١ دقيقة",
    date: "٨ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "11",
    tag: "ردود علمية",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80",
    title: "الالتهابات المزمنة والأمراض — كيف يُعالجها نظام الطيبات؟",
    excerpt: "نظرية الالتهاب هي محور النظام — ما صحّتها علمياً؟ أي الأمراض تتأثر؟ وأين يبالغ النظام في ادعاءاته؟",
    readTime: "١٤ دقيقة",
    date: "٤ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "12",
    tag: "أساسيات النظام",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=600&q=80",
    title: "نظام الطيبات والرياضة — كيف تُوفّق بينهما؟",
    excerpt: "هل تكفي طاقة النظام للرياضة والبناء العضلي؟ وجبات ما قبل وبعد التمرين وتجارب الرياضيين.",
    readTime: "١٠ دقائق",
    date: "٢٨ أبريل ٢٠٢٦",
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  "أساسيات النظام": "bg-green-50 text-green-700",
  "الممنوعات": "bg-red-50 text-red-700",
  "المسموحات": "bg-blue-50 text-blue-700",
  "تجارب حقيقية": "bg-amber-50 text-amber-700",
  "ردود علمية": "bg-violet-50 text-violet-700",
};

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filtered = activeCategory === "الكل" ? articles : articles.filter((a) => a.tag === activeCategory);
  const featured = activeCategory === "الكل" ? articles.find((a) => a.featured) : null;
  const restFiltered = featured ? filtered.filter((a) => !a.featured) : filtered;

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gray-950 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=1600&q=80"
            alt="مقالات"
            fill
            className="object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 to-gray-950" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="badge bg-primary-900/50 text-primary-400 border border-primary-800 mb-4">
            المقالات التثقيفية
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 mt-3">
            اقرأ، تعلّم، طبّق
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            ١٢ مقالة معمّقة عن نظام الطيبات — أسسه، تطبيقه، والآراء العلمية حوله
          </p>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-500">
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-green-500"></span>١٢ مقالة</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-blue-500"></span>مصادر علمية موثّقة</span>
            <span className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-500"></span>تجارب حقيقية</span>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
                cat === activeCategory
                  ? "bg-primary-600 text-white shadow-green"
                  : "bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-700"
              }`}
            >
              {cat}
              {cat !== "الكل" && (
                <span className="mr-1.5 text-xs opacity-60">
                  ({articles.filter((a) => a.tag === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Featured Article */}
        {featured && (
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-slow"></span>
              <span className="text-sm font-semibold text-gray-500">المقالة المميّزة</span>
            </div>
            <Link href={`/articles/${featured.id}`} className="group card cursor-pointer overflow-hidden block hover:-translate-y-1 transition-all duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-60 md:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/30 to-transparent md:block hidden" />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`badge ${tagColors[featured.tag] ?? "badge-green"}`}>{featured.tag}</span>
                    <span className="badge bg-primary-50 text-primary-600">✨ مقالة مميّزة</span>
                  </div>
                  <h2 className="font-extrabold text-gray-900 text-2xl mb-3 group-hover:text-primary-700 transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>🕐 {featured.readTime}</span>
                      <span>·</span>
                      <span>{featured.date}</span>
                    </div>
                    <span className="text-primary-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      اقرأ المقالة
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}

        {/* Articles Grid */}
        {restFiltered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">لا توجد مقالات في هذا التصنيف حتى الآن</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restFiltered.map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="card group hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className={`absolute top-3 right-3 badge ${tagColors[article.tag] ?? "badge-green"} text-xs`}>
                    {article.tag}
                  </span>
                  <span className="absolute bottom-3 left-3 text-white text-xs bg-black/50 px-2 py-0.5 rounded-full">
                    🕐 {article.readTime}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-gray-900 text-base mb-2 group-hover:text-primary-700 transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                    <span className="text-xs text-gray-400">{article.date}</span>
                    <span className="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                      اقرأ
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3 h-3">
                        <path d="M19 12H5M12 5l-7 7 7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
