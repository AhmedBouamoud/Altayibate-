import Link from "next/link";

const stats = [
  { value: "3", label: "مستويات دراسية" },
  { value: "29+", label: "إنفوغرافيك" },
  { value: "45+", label: "درس" },
  { value: "3", label: "مواد" },
];

const cards = [
  {
    href: "/drous",
    title: "الدروس",
    desc: "ملخصات شاملة لدروس 3AC و 1Bac",
    color: "bg-blue-50 text-blue-600",
    borderHover: "hover:border-blue-200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
  },
  {
    href: "/infographie",
    title: "الإنفوغرافيك",
    desc: "29 ملخصاً بصرياً للدروس",
    color: "bg-green-50 text-green-600",
    borderHover: "hover:border-green-200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21 3 6" />
        <line x1="9" y1="3" x2="9" y2="18" />
        <line x1="15" y1="6" x2="15" y2="21" />
      </svg>
    ),
  },
  {
    href: "/manhajiya",
    title: "المنهجية",
    desc: "مناهج تحليل الوثائق والخرائط",
    color: "bg-purple-50 text-purple-600",
    borderHover: "hover:border-purple-200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
  },
  {
    href: "/imtihane",
    title: "الامتحانات",
    desc: "نماذج وامتحانات جهوية",
    color: "bg-orange-50 text-orange-600",
    borderHover: "hover:border-orange-200",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

const recentLessons = [
  {
    level: "3AC",
    subject: "التاريخ",
    title: "الحرب الباردة وتشكّل عالم ثنائي القطبية",
    desc: "ملخص شامل لمرحلة ما بعد الحرب العالمية الثانية والصراع الأمريكي السوفيتي.",
    color: "bg-blue-100 text-blue-700",
  },
  {
    level: "1Bac",
    subject: "الجغرافيا",
    title: "المجال الجغرافي المغربي: الموارد والتحديات",
    desc: "دراسة الموارد الطبيعية في المغرب وتحديات التنمية المستدامة.",
    color: "bg-green-100 text-green-700",
  },
  {
    level: "3AC",
    subject: "الجغرافيا",
    title: "التحولات الاقتصادية في العالم المعاصر",
    desc: "تحليل التحولات الكبرى في الاقتصاد العالمي خلال القرن العشرين.",
    color: "bg-purple-100 text-purple-700",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-24 md:py-36" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 40%, #065f46 100%)" }}>
        {/* Decorative blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-20" style={{ background: "radial-gradient(circle, #60a5fa, transparent)" }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #34d399, transparent)" }} />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-blue-100 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse-slow" />
            Prof Hanane — مادة الاجتماعيات
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            الأستاذة{" "}
            <span className="text-blue-300">حنانة</span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 max-w-2xl mx-auto mb-4 leading-relaxed">
            مادة الاجتماعيات — التاريخ والجغرافيا
          </p>
          <p className="text-base text-blue-200/80 max-w-xl mx-auto mb-12 leading-relaxed">
            ملخصات شاملة وإنفوغرافيك تعليمي ومناهج تحليل للثالثة إعدادي والأولى باكالوريا
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/drous"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              استعرض الدروس
            </Link>
            <Link
              href="/infographie"
              className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/20 transition-all duration-200 active:scale-95"
            >
              الإنفوغرافيك
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/15">
                <div className="text-3xl font-extrabold text-white mb-1">{s.value}</div>
                <div className="text-xs text-blue-200 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge bg-primary-100 text-primary-700 mb-4 inline-block px-4 py-1 rounded-full text-sm font-semibold">محتوى الموقع</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-3">كل ما تحتاجه في الاجتماعيات</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto leading-relaxed">
              دروس ملخصة وإنفوغرافيك ومناهج تحليل ونماذج امتحانات — كل شيء في مكان واحد
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {cards.map((c) => (
              <Link
                key={c.title}
                href={c.href}
                className={`group p-6 rounded-2xl border border-gray-100 ${c.borderHover} bg-white hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}
              >
                <div className={`w-12 h-12 rounded-xl ${c.color} flex items-center justify-center mb-5`}>
                  {c.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary-700 transition-colors">
                  {c.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{c.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Lessons */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                آخر الإضافات
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2">آخر الدروس المضافة</h2>
              <p className="text-gray-500 mt-1">دروس جديدة تُضاف باستمرار</p>
            </div>
            <Link
              href="/drous"
              className="hidden sm:inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 transition-colors text-sm font-semibold"
            >
              كل الدروس
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentLessons.map((lesson) => (
              <Link
                key={lesson.title}
                href="/drous"
                className="group bg-white rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 p-6 block"
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${lesson.color}`}>
                    {lesson.level}
                  </span>
                  <span className="text-xs text-gray-400">{lesson.subject}</span>
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                  {lesson.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{lesson.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-primary-600 text-sm font-semibold group-hover:gap-2 transition-all">
                  اقرأ الدرس
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                    <path d="M19 12H5M12 5l-7 7 7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #1e40af 100%)" }} />
        <div className="absolute inset-0 section-pattern opacity-10" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            ابدأ المذاكرة الآن
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            دروس الاجتماعيات بين يديك — ملخصات وإنفوغرافيك ومناهج تحليل لمستوياتك الدراسية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/drous"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-800 px-8 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl active:scale-95"
            >
              ابدأ المذاكرة
            </Link>
            <Link
              href="/infographie"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all active:scale-95"
            >
              استعرض الإنفوغرافيك
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
