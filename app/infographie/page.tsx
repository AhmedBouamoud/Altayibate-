"use client";

import { useState } from "react";
import Image from "next/image";

type Infographic = {
  num: number;
  title: string;
  category: string;
  level: string;
  imageUrl: string;
};

const infographics: Infographic[] = [
  // 3AC - التاريخ
  { num: 1, title: "الازدهار الرأسمالي — الثورة الصناعية", category: "التاريخ", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf01.png" },
  { num: 2, title: "الإمبريالية وتقسيم أفريقيا", category: "التاريخ", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf02.png" },
  { num: 3, title: "الحرب العالمية الأولى", category: "التاريخ", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf03.png" },
  { num: 4, title: "أزمة 1929", category: "التاريخ", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf04.png" },
  { num: 5, title: "الأنظمة الشمولية — النازية", category: "التاريخ", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf05.png" },
  { num: 6, title: "الحرب العالمية الثانية", category: "التاريخ", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf06.png" },
  { num: 7, title: "القضية الفلسطينية", category: "التاريخ", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf07.png" },
  { num: 8, title: "الاستقلال وإتمام الوحدة الترابية", category: "التاريخ", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf08.png" },
  // 3AC - الجغرافيا
  { num: 9, title: "المغرب العربي — الوحدة والتنوع", category: "الجغرافيا", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf09.png" },
  { num: 10, title: "الاتحاد الأوروبي", category: "الجغرافيا", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf10.png" },
  { num: 11, title: "الولايات المتحدة — قوة عالمية", category: "الجغرافيا", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf11.png" },
  { num: 12, title: "اليابان — قوة تكنولوجية", category: "الجغرافيا", level: "3AC", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf12.png" },
  // 1Bac - التاريخ
  { num: 13, title: "التحولات الكبرى في أوروبا القرن 19م", category: "التاريخ", level: "1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf13.png" },
  { num: 14, title: "التنافس الإمبريالي والحرب العالمية الأولى", category: "التاريخ", level: "1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf14.png" },
  { num: 15, title: "الأنظمة الشمولية وأوروبا بين الحربين", category: "التاريخ", level: "1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf15.png" },
  { num: 16, title: "الحرب العالمية الثانية", category: "التاريخ", level: "1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf16.png" },
  { num: 17, title: "الحماية الفرنسية والاستغلال", category: "التاريخ", level: "1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf17.png" },
  { num: 18, title: "نضال الاستقلال", category: "التاريخ", level: "1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf18.png" },
  // 1Bac - الجغرافيا
  { num: 19, title: "مفهوم التنمية وخريطة العالم", category: "الجغرافيا", level: "1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf19.png" },
  { num: 20, title: "المجال المغربي", category: "الجغرافيا", level: "1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf20.png" },
  { num: 21, title: "الاختيارات الكبرى لإعداد التراب", category: "الجغرافيا", level: "1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf21.png" },
  { num: 22, title: "الصين — قوة صاعدة", category: "الجغرافيا", level: "1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf22.png" },
  // مشترك - تاريخ المغرب
  { num: 23, title: "مراحل بناء الدولة المغربية", category: "تاريخ المغرب", level: "3AC + 1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf23.png" },
  { num: 24, title: "المقاومة المسلحة والحركة الوطنية", category: "تاريخ المغرب", level: "3AC + 1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf24.png" },
  { num: 25, title: "السلطان محمد الخامس", category: "تاريخ المغرب", level: "3AC + 1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf25.png" },
  // مشترك - المنهجية
  { num: 26, title: "منهجية تحليل الوثيقة التاريخية", category: "المنهجية", level: "3AC + 1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf26.png" },
  { num: 27, title: "منهجية الخط الزمني", category: "المنهجية", level: "3AC + 1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf27.png" },
  { num: 28, title: "منهجية النص الجغرافي", category: "المنهجية", level: "3AC + 1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf28.png" },
  { num: 29, title: "منهجية الموضوع المقالي", category: "المنهجية", level: "3AC + 1Bac", imageUrl: "https://raw.githubusercontent.com/AhmedBouamoud/Infographie/main/inf29.png" },
];

const levels = ["الكل", "3AC", "1Bac", "3AC + 1Bac"];
const categories = ["الكل", "التاريخ", "الجغرافيا", "تاريخ المغرب", "المنهجية"];

const levelColors: Record<string, string> = {
  "3AC": "bg-purple-100 text-purple-700",
  "1Bac": "bg-orange-100 text-orange-700",
  "3AC + 1Bac": "bg-teal-100 text-teal-700",
};

const categoryColors: Record<string, string> = {
  "التاريخ": "bg-amber-50 text-amber-800",
  "الجغرافيا": "bg-emerald-50 text-emerald-800",
  "تاريخ المغرب": "bg-red-50 text-red-800",
  "المنهجية": "bg-blue-50 text-blue-800",
};

function InfographicCard({ inf }: { inf: Infographic }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:border-primary-300 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
        onClick={() => setOpen(true)}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <img
            src={inf.imageUrl}
            alt={inf.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'%3E%3Crect width='300' height='400' fill='%23f3f4f6'/%3E%3Ctext x='150' y='200' text-anchor='middle' fill='%239ca3af' font-size='14'%3Eقريباً%3C/text%3E%3C/svg%3E";
            }}
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-5 h-5 text-primary-700">
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
              </svg>
            </div>
          </div>
          <div className="absolute top-3 right-3">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${levelColors[inf.level] ?? "bg-gray-100 text-gray-700"}`}>
              {inf.level}
            </span>
          </div>
        </div>
        <div className="p-4">
          <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${categoryColors[inf.category] ?? "bg-gray-50 text-gray-700"}`}>
            {inf.category}
          </span>
          <h3 className="font-bold text-gray-900 text-sm mt-2 leading-snug group-hover:text-primary-700 transition-colors">
            {inf.title}
          </h3>
        </div>
      </div>

      {/* Lightbox */}
      {open && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full bg-white rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full mr-2 ${levelColors[inf.level] ?? ""}`}>
                  {inf.level}
                </span>
                <span className="font-bold text-gray-900">{inf.title}</span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="p-2">
              <img
                src={inf.imageUrl}
                alt={inf.title}
                className="w-full rounded-xl"
                onError={(e) => {
                  (e.target as HTMLImageElement).alt = "الصورة غير متاحة";
                }}
              />
            </div>
            <div className="p-4 flex justify-end">
              <a
                href={inf.imageUrl}
                download={`inf${String(inf.num).padStart(2, "0")}.png`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-700 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
                تحميل الإنفوغرافيك
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default function InfographiePage() {
  const [level, setLevel] = useState("الكل");
  const [category, setCategory] = useState("الكل");

  const filtered = infographics.filter((inf) => {
    const levelMatch = level === "الكل" || inf.level === level || inf.level === "3AC + 1Bac";
    const catMatch = category === "الكل" || inf.category === category;
    return (level === "الكل" ? true : levelMatch) && catMatch;
  });

  const actualFiltered = infographics.filter((inf) => {
    const levelMatch = level === "الكل" || inf.level === level;
    const catMatch = category === "الكل" || inf.category === category;
    return levelMatch && catMatch;
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🗺️ مادة الاجتماعيات
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            الإنفوغرافيك
          </h1>
          <p className="text-primary-200 text-lg max-w-xl mx-auto mb-4">
            {infographics.length} إنفوغرافيك تعليمي — ملخصات بصرية لدروس التاريخ والجغرافيا
          </p>
          <p className="text-primary-300 text-sm">انقر على أي إنفوغرافيك لعرضه بالحجم الكامل وتحميله</p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col gap-3">
            {/* Level */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-gray-500 ml-1">المستوى:</span>
              {levels.map((l) => (
                <button
                  key={l}
                  onClick={() => setLevel(l)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                    level === l
                      ? "bg-primary-600 text-white border-primary-600"
                      : "bg-white text-gray-600 border-gray-200 hover:border-primary-300"
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
            {/* Category */}
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs font-bold text-gray-500 ml-1">المادة:</span>
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                    category === c
                      ? "bg-gray-800 text-white border-gray-800"
                      : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Count bar */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5">
          <p className="text-sm text-gray-500">
            <strong className="text-gray-900">{actualFiltered.length}</strong> إنفوغرافيك
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {actualFiltered.map((inf) => (
              <InfographicCard key={inf.num} inf={inf} />
            ))}
          </div>
          {actualFiltered.length === 0 && (
            <div className="text-center py-20 text-gray-400">
              <div className="text-5xl mb-4">🗺️</div>
              <p className="text-lg font-semibold">لا توجد إنفوغرافيكات في هذا التصنيف</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
