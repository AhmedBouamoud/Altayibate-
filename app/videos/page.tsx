import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "فيديوهات نظام الطيبات",
  description: "مكتبة فيديوهات نظام الطيبات للدكتور ضياء العوضي — شرح كامل للقواعد والمسموحات والممنوعات.",
};

const featured = {
  id: "L8tgPxTPmxE",
  title: "الدليل الكامل لنظام الطيبات في فيديو واحد",
  desc: "سرد شامل لكل القواعد والمسموحات والممنوعات — الفيديو الأكثر مشاهدة",
  duration: "٤٨ دقيقة",
  views: "٢.٣ مليون مشاهدة",
};

const videos = [
  {
    id: "xBJDf1L6UzM",
    title: "حلقة جريئة جداً مع د. ضياء العوضي",
    desc: "الحقيقة الكاملة عن نظام الطيبات بصوت صاحبه",
    duration: "٦٢ دقيقة",
    category: "مقابلات",
  },
  {
    id: "7kIaWrTxoXc",
    title: "مسموحات وممنوعات نظام الطيبات",
    desc: "الدكتور ضياء يكشف أسرار النجاح الصحي",
    duration: "٣٥ دقيقة",
    category: "شرح",
  },
  {
    id: "Ek_CtoEQeWE",
    title: "نظام الطيبات: مؤامرة دواء أم اكتشاف طبي؟",
    desc: "نقاش علمي حول أسس النظام",
    duration: "٤١ دقيقة",
    category: "نقاش",
  },
  {
    id: "MvKBT6dGl6M",
    title: "الحقيقة الكاملة لنظام الطيبات",
    desc: "د. هيثم طلعت ومحمد الخزرجي يناقشان النظام",
    duration: "٥٥ دقيقة",
    category: "تحليل طبي",
  },
  {
    id: "OXjYiRNTni0",
    title: "ضياء العوضي — القصة الكاملة",
    desc: "كيف بدأ نظام الطيبات وكيف انتهى",
    duration: "٢٨ دقيقة",
    category: "قصة",
  },
  {
    id: "6j_eGj3thaA",
    title: "رأيي الشخصي والعلمي في نظام الطيبات",
    desc: "تقييم طبي موضوعي للنظام",
    duration: "٣٣ دقيقة",
    category: "تحليل طبي",
  },
];

const categoryColors: Record<string, string> = {
  "شرح": "bg-green-100 text-green-700",
  "مقابلات": "bg-blue-100 text-blue-700",
  "نقاش": "bg-violet-100 text-violet-700",
  "تحليل طبي": "bg-amber-100 text-amber-700",
  "قصة": "bg-rose-100 text-rose-700",
};

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge bg-red-900/50 text-red-400 border border-red-800 mb-4">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <polygon fill="white" points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568" />
            </svg>
            فيديوهات يوتيوب
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 mt-3">
            مكتبة الفيديوهات
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            شرح كامل لنظام الطيبات — من الدكتور ضياء وأطباء آخرين
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Featured Video */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-slow" />
            <h2 className="text-white font-bold text-xl">الفيديو المميّز</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${featured.id}`}
                title={featured.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <div className="bg-gray-900 px-6 py-4">
              <h3 className="text-white font-bold text-lg mb-1">{featured.title}</h3>
              <div className="flex items-center gap-4 text-gray-400 text-sm">
                <span>{featured.desc}</span>
                <span>·</span>
                <span>{featured.duration}</span>
                <span>·</span>
                <span className="text-primary-400">{featured.views}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div>
          <h2 className="text-white font-bold text-xl mb-6">المزيد من الفيديوهات</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.id} className="group">
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative rounded-2xl overflow-hidden bg-gray-800 aspect-video mb-3">
                    <Image
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={v.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                        <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 translate-x-0.5">
                          <polygon points="5 3 19 12 5 21 5 3" />
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md font-medium" dir="ltr">
                      {v.duration}
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`badge text-xs ${categoryColors[v.category] ?? "badge-green"}`}>
                        {v.category}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-primary-400 transition-colors leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{v.desc}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Playlist Link */}
        <div className="mt-12 rounded-2xl border border-primary-800/40 bg-primary-900/20 p-8 text-center">
          <div className="text-4xl mb-4">▶️</div>
          <h3 className="text-white font-bold text-xl mb-3">قائمة التشغيل الكاملة</h3>
          <p className="text-gray-400 mb-6 text-sm">
            جميع فيديوهات الدكتور ضياء العوضي مجمّعة في قائمة تشغيل واحدة على يوتيوب
          </p>
          <a
            href="https://www.youtube.com/playlist?list=PLiCX7WAEtmef6I_PxQSO1swerFnHDggNF"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-red-500 transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z" />
              <polygon fill="white" points="9.545 15.568 15.818 12 9.545 8.432 9.545 15.568" />
            </svg>
            شاهد على يوتيوب
          </a>
        </div>
      </div>
    </div>
  );
}
