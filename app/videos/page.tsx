"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const categories = ["الكل", "شرح النظام", "مقابلات", "تحليل طبي", "نقاش", "تجارب"];

const featured = {
  id: "L8tgPxTPmxE",
  title: "الدليل الكامل لنظام الطيبات في فيديو واحد",
  desc: "سرد شامل لكل القواعد والمسموحات والممنوعات — الفيديو الأساسي لكل مبتدئ",
  duration: "٤٨ دقيقة",
  views: "٢.٣ مليون مشاهدة",
  category: "شرح النظام",
};

const videos = [
  {
    id: "xBJDf1L6UzM",
    title: "حلقة جريئة جداً مع د. ضياء العوضي",
    desc: "الحقيقة الكاملة عن نظام الطيبات بصوت صاحبه — أسئلة صريحة وإجابات مفصّلة",
    duration: "٦٢ دقيقة",
    category: "مقابلات",
  },
  {
    id: "7kIaWrTxoXc",
    title: "مسموحات وممنوعات نظام الطيبات — شرح كامل",
    desc: "الدكتور ضياء يشرح القائمتين بالتفصيل مع الأسباب والمنطق",
    duration: "٣٥ دقيقة",
    category: "شرح النظام",
  },
  {
    id: "Ek_CtoEQeWE",
    title: "نظام الطيبات: مؤامرة دواء أم اكتشاف طبي؟",
    desc: "نقاش علمي حول أسس النظام ومدى صحته الطبية",
    duration: "٤١ دقيقة",
    category: "نقاش",
  },
  {
    id: "MvKBT6dGl6M",
    title: "الحقيقة الكاملة لنظام الطيبات — د. هيثم طلعت",
    desc: "تحليل طبي موضوعي للنظام من أخصائي تغذية معتمد",
    duration: "٥٥ دقيقة",
    category: "تحليل طبي",
  },
  {
    id: "OXjYiRNTni0",
    title: "ضياء العوضي — القصة الكاملة",
    desc: "كيف بدأ نظام الطيبات وكيف انتشر وما المآخذ عليه",
    duration: "٢٨ دقيقة",
    category: "تجارب",
  },
  {
    id: "6j_eGj3thaA",
    title: "رأيي الشخصي والعلمي في نظام الطيبات",
    desc: "تقييم طبي موضوعي — ما يصح وما لا يصح في النظام",
    duration: "٣٣ دقيقة",
    category: "تحليل طبي",
  },
  {
    id: "KxoB2GOzqJE",
    title: "كيف تبدأ مع نظام الطيبات؟ — خطوة بخطوة",
    desc: "دليل عملي للمبتدئين على النظام من متابعين متمرسين",
    duration: "٢٢ دقيقة",
    category: "شرح النظام",
  },
  {
    id: "9bZkp7q19f0",
    title: "تجربتي مع نظام الطيبات — ٣ أشهر",
    desc: "قصة حقيقية مع صور قبل وبعد ونتائج التحاليل",
    duration: "١٨ دقيقة",
    category: "تجارب",
  },
  {
    id: "dQw4w9WgXcQ",
    title: "نظام الطيبات والأمراض المزمنة — هل يُعالج؟",
    desc: "حوار طبي صريح حول الحدود الحقيقية للنظام",
    duration: "٤٤ دقيقة",
    category: "تحليل طبي",
  },
];

const categoryColors: Record<string, string> = {
  "شرح النظام": "bg-green-100 text-green-700",
  "مقابلات": "bg-blue-100 text-blue-700",
  "نقاش": "bg-violet-100 text-violet-700",
  "تحليل طبي": "bg-amber-100 text-amber-700",
  "تجارب": "bg-rose-100 text-rose-700",
};

export default function VideosPage() {
  const [activeCategory, setActiveCategory] = useState("الكل");
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const filtered = activeCategory === "الكل" ? videos : videos.filter((v) => v.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 py-14 relative overflow-hidden">
        <div className="absolute inset-0 section-pattern opacity-5" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="badge bg-red-900/50 text-red-400 border border-red-800 mb-4 inline-flex items-center gap-1.5">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <polygon fill="white" points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568" />
            </svg>
            مكتبة الفيديوهات
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 mt-3">
            فيديوهات نظام الطيبات
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            شرح كامل بصوت د. ضياء العوضي وتحليلات أطباء آخرين
          </p>
          <div className="flex items-center justify-center gap-6 mt-5 text-sm text-gray-600">
            <span>{videos.length + 1} فيديو</span>
            <span>·</span>
            <span>محتوى عربي</span>
            <span>·</span>
            <a
              href="https://www.youtube.com/playlist?list=PLiCX7WAEtmef6I_PxQSO1swerFnHDggNF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 hover:text-red-300 transition-colors flex items-center gap-1"
            >
              قناة يوتيوب
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Featured Video */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-5">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-slow" />
            <h2 className="text-white font-bold text-xl">الفيديو المميّز — ابدأ من هنا</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${featured.id}?rel=0`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="bg-gray-900 px-6 py-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-white font-bold text-xl mb-2">{featured.title}</h3>
                  <p className="text-gray-400 text-sm mb-3">{featured.desc}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
                        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
                      </svg>
                      {featured.duration}
                    </span>
                    <span>·</span>
                    <span className="text-primary-400 font-medium">{featured.views}</span>
                    <span>·</span>
                    <span className={`badge text-xs ${categoryColors[featured.category]}`}>{featured.category}</span>
                  </div>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${featured.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-bold px-4 py-2 rounded-xl transition-colors"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                    <polygon fill="white" points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568" />
                  </svg>
                  يوتيوب
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${
                cat === activeCategory
                  ? "bg-primary-600 text-white"
                  : "bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {cat}
              {cat !== "الكل" && (
                <span className="mr-1 opacity-60 text-xs">
                  ({videos.filter((v) => v.category === cat).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Video Grid */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-bold text-xl">
              {activeCategory === "الكل" ? "جميع الفيديوهات" : activeCategory}
              <span className="text-gray-500 text-base font-normal mr-2">({filtered.length})</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((v) => (
              <div key={v.id} className="group">
                <div className="relative rounded-2xl overflow-hidden bg-gray-800 aspect-video mb-3 cursor-pointer"
                  onClick={() => setActiveVideo(activeVideo === v.id ? null : v.id)}>
                  {activeVideo === v.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${v.id}?autoplay=1&rel=0`}
                      title={v.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-full"
                    />
                  ) : (
                    <>
                      <Image
                        src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                        alt={v.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-200">
                          <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 translate-x-0.5">
                            <polygon points="5 3 19 12 5 21 5 3" />
                          </svg>
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black/75 text-white text-xs px-2 py-1 rounded-md" dir="ltr">
                        {v.duration}
                      </div>
                      <div className="absolute top-2 right-2">
                        <span className={`badge text-xs ${categoryColors[v.category] ?? "badge-green"}`}>
                          {v.category}
                        </span>
                      </div>
                    </>
                  )}
                </div>
                <div className="flex items-start justify-between gap-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-white text-sm mb-1 group-hover:text-primary-400 transition-colors leading-snug">
                      {v.title}
                    </h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                  </div>
                  <a
                    href={`https://www.youtube.com/watch?v=${v.id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="فتح على يوتيوب"
                    className="flex-shrink-0 mt-0.5 text-gray-600 hover:text-red-400 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                      <path d="M7 17L17 7M17 7H7M17 7v10" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Playlist + Channel Links */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          <a
            href="https://www.youtube.com/playlist?list=PLiCX7WAEtmef6I_PxQSO1swerFnHDggNF"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-gray-800 bg-gray-900 p-6 flex items-center gap-5 hover:border-red-700 transition-all"
          >
            <div className="w-14 h-14 rounded-xl bg-red-900/40 border border-red-800 flex items-center justify-center flex-shrink-0 group-hover:bg-red-900/60 transition-colors">
              <svg viewBox="0 0 24 24" fill="#ef4444" className="w-7 h-7">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
                <polygon fill="white" points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-white text-sm">قائمة التشغيل الكاملة</p>
              <p className="text-gray-400 text-xs mt-1">جميع فيديوهات د. ضياء على يوتيوب</p>
            </div>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4 text-gray-600 group-hover:text-red-400 transition-colors mr-auto">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>

          <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-primary-900/40 border border-primary-800 flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2" className="w-7 h-7">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-white text-sm">اقرأ المقالات أيضاً</p>
              <p className="text-gray-400 text-xs mt-1">١٢ مقالة معمّقة عن النظام بالمصادر</p>
              <Link href="/articles" className="text-primary-400 text-xs hover:text-primary-300 transition-colors mt-1 inline-flex items-center gap-1">
                تصفّح المقالات
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
