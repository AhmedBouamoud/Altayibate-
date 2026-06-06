"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["الكل", "تغذية", "وصفات", "أسلوب حياة", "صحة نفسية", "أطفال"];

const articles = [
  {
    id: 1,
    tag: "تغذية",
    emoji: "🥗",
    color: "from-green-50 to-emerald-100",
    title: "لماذا يُعدّ السكر المكرّر من أكثر المواد ضرراً؟",
    excerpt:
      "السكر المضاف يرتبط بمخاطر صحية متعددة كالسمنة وأمراض القلب ومقاومة الأنسولين. في هذا المقال نكشف حقيقة السكر وكيف تتعامل معه بوعي.",
    readTime: "5 دقائق",
    date: "5 يونيو 2026",
    featured: true,
  },
  {
    id: 2,
    tag: "وصفات",
    emoji: "🍳",
    color: "from-amber-50 to-orange-100",
    title: "وجبة إفطار متكاملة في 10 دقائق",
    excerpt:
      "ابدأ يومك بوجبة مغذية تمنحك الطاقة وتُحسّن تركيزك طوال الصباح. بروتين + كربوهيدرات معقدة + دهون مفيدة في عشر دقائق فقط.",
    readTime: "3 دقائق",
    date: "3 يونيو 2026",
    featured: false,
  },
  {
    id: 3,
    tag: "أسلوب حياة",
    emoji: "🌿",
    color: "from-teal-50 to-green-100",
    title: "كيف تبدأ نظام الطيبات بدون قواعد صارمة؟",
    excerpt:
      "ليس نظام الطيبات حمية قاسية، بل هو وعي غذائي تدريجي يبدأ بخطوة واحدة. اكتشف كيف تبدأ بلا ضغط.",
    readTime: "7 دقائق",
    date: "1 يونيو 2026",
    featured: false,
  },
  {
    id: 4,
    tag: "صحة نفسية",
    emoji: "🧠",
    color: "from-violet-50 to-purple-100",
    title: "الغذاء والمزاج: كيف يؤثر ما تأكله على مشاعرك؟",
    excerpt:
      "علم الأمعاء-الدماغ يكشف أن اختياراتنا الغذائية تؤثر مباشرة على الصحة النفسية والتوازن الهرموني.",
    readTime: "6 دقائق",
    date: "28 مايو 2026",
    featured: false,
  },
  {
    id: 5,
    tag: "تغذية",
    emoji: "🫒",
    color: "from-lime-50 to-green-100",
    title: "زيت الزيتون: الدهن المفيد الذي لا يجب إغفاله",
    excerpt:
      "من أبرز ما أوصى به نظام الطيبات هو استخدام زيت الزيتون بديلاً عن الزيوت المكررة، وهذا هو السبب.",
    readTime: "4 دقائق",
    date: "25 مايو 2026",
    featured: false,
  },
  {
    id: 6,
    tag: "أطفال",
    emoji: "👶",
    color: "from-pink-50 to-rose-100",
    title: "كيف تُعلّم طفلك حب الطعام الصحي منذ الصغر؟",
    excerpt:
      "العادات الغذائية تتشكل مبكراً. إليك أساليب مجربة لجعل الطعام الصحي محبباً لدى أطفالك.",
    readTime: "8 دقائق",
    date: "22 مايو 2026",
    featured: false,
  },
  {
    id: 7,
    tag: "وصفات",
    emoji: "🥑",
    color: "from-green-50 to-teal-100",
    title: "٥ وصفات صحية بالأفوكادو لكل وجبة",
    excerpt:
      "الأفوكادو من أغنى الأطعمة بالدهون الصحية. إليك طرقاً إبداعية لإدراجه في وجباتك اليومية.",
    readTime: "5 دقائق",
    date: "19 مايو 2026",
    featured: false,
  },
  {
    id: 8,
    tag: "أسلوب حياة",
    emoji: "🚶",
    color: "from-sky-50 to-blue-100",
    title: "المشي بعد الأكل: عادة صغيرة فوائدها كبيرة",
    excerpt:
      "١٠ دقائق مشي بعد كل وجبة تُحسّن مستوى السكر في الدم وتُساعد على الهضم وتُقلّل الوزن تدريجياً.",
    readTime: "4 دقائق",
    date: "15 مايو 2026",
    featured: false,
  },
];

const tagColors: Record<string, string> = {
  تغذية: "bg-green-50 text-green-700",
  وصفات: "bg-amber-50 text-amber-700",
  "أسلوب حياة": "bg-teal-50 text-teal-700",
  "صحة نفسية": "bg-violet-50 text-violet-700",
  أطفال: "bg-pink-50 text-pink-700",
};

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");

  const filtered =
    activeCategory === "الكل"
      ? articles
      : articles.filter((a) => a.tag === activeCategory);

  const featured = articles.find((a) => a.featured);
  const rest = filtered.filter((a) => !a.featured || activeCategory !== "الكل");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-bl from-primary-50 via-white to-earth-50 py-16 section-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-green mb-4">المقالات التثقيفية</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 mt-3">
            اقرأ، تعلّم، طبّق
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            محتوى تثقيفي مبسّط في التغذية الصحية — كل أسبوع مقال جديد
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto no-scrollbar">
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
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Featured Article */}
        {activeCategory === "الكل" && featured && (
          <div className="mb-10">
            <Link href={`/articles/${featured.id}`} className="group card cursor-pointer overflow-hidden block">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div
                  className={`h-56 md:h-auto bg-gradient-to-br ${featured.color} flex items-center justify-center text-8xl md:text-9xl relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary-600/10 transition-opacity duration-300" />
                  <span className="group-hover:scale-110 transition-transform duration-500">
                    {featured.emoji}
                  </span>
                </div>
                <div className="p-7 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`badge ${tagColors[featured.tag] ?? "badge-green"}`}>
                      {featured.tag}
                    </span>
                    <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2.5 py-1 rounded-full">
                      ✨ مقال مميّز
                    </span>
                  </div>
                  <h2 className="font-extrabold text-gray-900 text-2xl mb-3 group-hover:text-primary-700 transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                          <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                        </svg>
                        {featured.readTime}
                      </span>
                      <span>·</span>
                      <span>{featured.date}</span>
                    </div>
                    <span className="text-primary-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      اقرأ المقال
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
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg">لا توجد مقالات في هذا التصنيف حتى الآن</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(activeCategory === "الكل" ? rest : filtered).map((article) => (
              <Link
                key={article.id}
                href={`/articles/${article.id}`}
                className="card group cursor-pointer hover:-translate-y-1 transition-all duration-300 block"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${article.color} flex items-center justify-center text-7xl relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-primary-600/10 transition-opacity duration-300" />
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {article.emoji}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`badge ${tagColors[article.tag] ?? "badge-green"}`}>
                      {article.tag}
                    </span>
                    <span className="text-xs text-gray-400">{article.date}</span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-base mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                      {article.readTime}
                    </span>
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

        {/* Load More */}
        <div className="text-center mt-14">
          <button className="btn-secondary px-10 py-3">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <polyline points="6 9 12 15 18 9" />
            </svg>
            تحميل المزيد
          </button>
        </div>
      </div>
    </div>
  );
}
