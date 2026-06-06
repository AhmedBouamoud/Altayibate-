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
    title: "الأساسيات الخمس التي تُؤكل يومياً بلا قيود",
    excerpt: "الأرز، البطاطس، التمر، الزبدة الطبيعية، والسكر — هذه هي ركائز نظام الطيبات التي تمنحك الطاقة وتحمي جهازك الهضمي.",
    readTime: "٦ دقائق",
    date: "٥ يونيو ٢٠٢٦",
    featured: true,
  },
  {
    id: "2",
    tag: "الممنوعات",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "لماذا الدقيق الأبيض والألبان على رأس قائمة الممنوعات؟",
    excerpt: "نظام الطيبات يحظر الدقيق الأبيض ومنتجات الألبان بالكامل — اكتشف السبب العلمي وراء هذا القرار الجذري.",
    readTime: "٨ دقائق",
    date: "٣ يونيو ٢٠٢٦",
    featured: false,
  },
  {
    id: "3",
    tag: "تجارب حقيقية",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    title: "قصص نجاح حقيقية مع نظام الطيبات",
    excerpt: "آلاف الأشخاص حول العالم جربوا النظام. إليك أبرز القصص الملهمة مع تفاصيل التجربة.",
    readTime: "٥ دقائق",
    date: "١ يونيو ٢٠٢٦",
    featured: false,
  },
  {
    id: "4",
    tag: "المسموحات",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
    title: "الأسماك في نظام الطيبات: دليلك الكامل",
    excerpt: "الأسماك مسموحة بجميع أنواعها ما عدا الجمبري والسبيط — كيف تطبخها وكم مرة في الأسبوع؟",
    readTime: "٤ دقائق",
    date: "٢٩ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "5",
    tag: "ردود علمية",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    title: "الموقف الطبي من نظام الطيبات — رأي الأطباء",
    excerpt: "النقابة الطبية والأطباء المتخصصون ناقشوا النظام — إليك الرأي العلمي الموضوعي بالحجج والأدلة.",
    readTime: "١٠ دقائق",
    date: "٢٦ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "6",
    tag: "أساسيات النظام",
    image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=600&q=80",
    title: "مناطق الألوان الخمس في نظام الطيبات",
    excerpt: "خضراء، صفراء، برتقالية، بنفسجية، حمراء — نظام تصنيف الأغذية حسب درجة الأمان والخطورة.",
    readTime: "٧ دقائق",
    date: "٢٢ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "7",
    tag: "الممنوعات",
    image: "https://images.unsplash.com/photo-1582901369304-9bf38e4e9e11?w=600&q=80",
    title: "لماذا يُمنع الدجاج في نظام الطيبات؟",
    excerpt: "من أكثر الأسئلة التي يطرحها المبتدئون: لماذا الدجاج ممنوع؟ الإجابة الكاملة موثّقة هنا.",
    readTime: "٥ دقائق",
    date: "١٨ مايو ٢٠٢٦",
    featured: false,
  },
  {
    id: "8",
    tag: "تجارب حقيقية",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    title: "تجربتي مع نظام الطيبات: ٦ أشهر من التطبيق",
    excerpt: "قصة مفصّلة من متابع طبّق النظام لمدة ستة أشهر — الإيجابيات والسلبيات والنتائج الحقيقية.",
    readTime: "١٢ دقيقة",
    date: "١٤ مايو ٢٠٢٦",
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
  const featured = articles.find((a) => a.featured);
  const restFiltered = activeCategory === "الكل" ? filtered.filter((a) => !a.featured) : filtered;

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
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="badge bg-primary-900/50 text-primary-400 border border-primary-800 mb-4">
            المقالات التثقيفية
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 mt-3">
            اقرأ، تعلّم، طبّق
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            مقالات متعمقة عن نظام الطيبات — أسسه، تطبيقه، والآراء العلمية حوله
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="border-b bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto">
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
                <div className="relative h-56 md:h-auto overflow-hidden">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent md:block hidden" />
                </div>
                <div className="p-7 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`badge ${tagColors[featured.tag] ?? "badge-green"}`}>{featured.tag}</span>
                    <span className="badge bg-primary-50 text-primary-600">✨ مقال مميّز</span>
                  </div>
                  <h2 className="font-extrabold text-gray-900 text-2xl mb-3 group-hover:text-primary-700 transition-colors leading-snug">
                    {featured.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3">{featured.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span>{featured.readTime}</span>
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className={`absolute top-3 right-3 badge ${tagColors[article.tag] ?? "badge-green"}`}>
                    {article.tag}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="font-bold text-gray-900 text-base mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                    {article.title}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                    <span className="text-xs text-gray-400">{article.readTime} · {article.date}</span>
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

        <div className="text-center mt-14">
          <button className="btn-secondary px-10 py-3">
            تحميل المزيد من المقالات
          </button>
        </div>
      </div>
    </div>
  );
}
