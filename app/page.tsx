import Link from "next/link";
import Image from "next/image";

const stats = [
  { value: "١٢٠+", label: "مقال تثقيفي" },
  { value: "٨١+", label: "صنف ممنوع موثّق" },
  { value: "٥ مناطق", label: "تصنيف الأغذية" },
  { value: "ملايين", label: "متابع حول العالم" },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "قائمة المسموحات",
    desc: "أرز، بطاطس، فواكه، لحوم حمراء، أسماك، زيت زيتون — أكل طبيعي لذيذ بلا حرمان.",
    color: "bg-primary-50 text-primary-600",
    href: "/foods",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <circle cx="12" cy="12" r="10" /><line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
      </svg>
    ),
    title: "قائمة الممنوعات",
    desc: "+٨١ صنفاً ضاراً: الدقيق الأبيض، منتجات الألبان، الدجاج، البيض، الخضروات النيئة.",
    color: "bg-red-50 text-red-600",
    href: "/foods#forbidden",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.876V15.124a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
    title: "فيديوهات شرح",
    desc: "مكتبة فيديوهات الدكتور ضياء العوضي — شرح كامل للنظام بصوته ومن متابعيه.",
    color: "bg-blue-50 text-blue-600",
    href: "/videos",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "مقالات علمية",
    desc: "مقالات متعمقة حول مبادئ النظام، الالتهابات، صحة الأمعاء، والغذاء العلاجي.",
    color: "bg-earth-50 text-earth-600",
    href: "/articles",
  },
];

const videos = [
  {
    id: "L8tgPxTPmxE",
    title: "الدليل الكامل لنظام الطيبات في فيديو واحد",
    desc: "سرد شامل لكل القواعد والمسموحات والممنوعات",
    duration: "٤٨ دقيقة",
  },
  {
    id: "xBJDf1L6UzM",
    title: "حلقة جريئة جداً مع د. ضياء العوضي",
    desc: "الحقيقة الكاملة عن نظام الطيبات بصوت صاحبه",
    duration: "٦٢ دقيقة",
  },
  {
    id: "7kIaWrTxoXc",
    title: "مسموحات وممنوعات نظام الطيبات",
    desc: "الدكتور ضياء يكشف أسرار النجاح الصحي",
    duration: "٣٥ دقيقة",
  },
];

const articles = [
  {
    id: "1",
    tag: "أساسيات النظام",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    title: "الأساسيات الخمس التي تُؤكل يومياً بلا قيود",
    excerpt: "الأرز، البطاطس، التمر، الزبدة الطبيعية، والسكر — هذه هي ركائز نظام الطيبات التي تمنحك الطاقة.",
    readTime: "٦ دقائق",
  },
  {
    id: "2",
    tag: "الممنوعات",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    title: "لماذا الدقيق الأبيض والألبان على رأس قائمة الممنوعات؟",
    excerpt: "نظام الطيبات يحظر الدقيق الأبيض ومنتجات الألبان بالكامل — اكتشف السبب العلمي وراء هذا القرار.",
    readTime: "٨ دقائق",
  },
  {
    id: "3",
    tag: "تجارب حقيقية",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
    title: "قصص نجاح حقيقية مع نظام الطيبات",
    excerpt: "آلاف الأشخاص حول العالم جربوا النظام وشاركوا تجاربهم — إليك أبرز القصص الملهمة.",
    readTime: "٥ دقائق",
  },
];

const testimonials = [
  {
    name: "أم خالد",
    role: "متابعة منذ ٢ سنة",
    text: "بعد ٣ أشهر على النظام، اختفى ألم المفاصل وتحسّنت طاقتي بشكل ملحوظ. لم أكن أتوقع نتائج بهذه السرعة.",
    avatar: "أ",
  },
  {
    name: "محمد السيد",
    role: "مهندس، ٤٥ سنة",
    text: "نزلت ١٨ كيلو في ٤ أشهر دون جوع. المفاجأة أنني أكل الأرز والبطاطس يومياً وما زلت أنزل في الوزن!",
    avatar: "م",
  },
  {
    name: "دكتورة هنا",
    role: "طبيبة، متابعة للنظام",
    text: "طبّقت النظام بحذر ومتابعة طبية. نتائج مثيرة للاهتمام خاصة على مستوى مؤشرات الالتهاب في الدم.",
    avatar: "د",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gray-950 py-20 md:py-32">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=1600&q=80"
            alt="طعام صحي"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/80 via-gray-950/60 to-gray-950" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-primary-500/20 border border-primary-500/30 text-primary-300 px-4 py-2 rounded-full text-sm font-semibold mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse-slow" />
            نظام الطيبات للدكتور ضياء العوضي
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            الطعام{" "}
            <span className="text-primary-400">الطيّب</span>
            <br className="hidden md:block" />
            هو الدواء الحقيقي
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            نظام غذائي علاجي طبيعي يفصل بين الطيبات والخبيثات — مبني على فهم الجهاز الهضمي والالتهابات وعلاقتها بالأمراض المزمنة.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/foods" className="btn-primary text-base px-8 py-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              قائمة المسموحات والممنوعات
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-white/20 transition-all duration-200 active:scale-95">
              من هو د. ضياء العوضي؟
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div key={s.label} className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                <div className="text-2xl font-extrabold text-primary-400 mb-1">{s.value}</div>
                <div className="text-xs text-gray-400 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-green mb-4">محتوى الموقع</span>
            <h2 className="section-title text-4xl mt-3">كل ما تحتاجه عن نظام الطيبات</h2>
            <p className="section-subtitle mt-2 max-w-xl mx-auto">
              مرجع شامل للقواعد، الفيديوهات، المقالات، والتجارب الحقيقية
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-primary-200 bg-white hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-5`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-primary-700 transition-colors">
                  {f.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="badge bg-red-900/50 text-red-400 mb-3">يوتيوب</span>
              <h2 className="text-3xl font-bold text-white mt-2">فيديوهات نظام الطيبات</h2>
              <p className="text-gray-400 mt-1">شرح كامل بصوت د. ضياء العوضي</p>
            </div>
            <Link href="/videos" className="hidden sm:inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm font-medium">
              كل الفيديوهات
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((v) => (
              <div key={v.id} className="group">
                <div className="relative rounded-2xl overflow-hidden bg-gray-800 aspect-video mb-4">
                  <Image
                    src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                    alt={v.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-200">
                      <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 translate-x-0.5">
                        <polygon points="5 3 19 12 5 21 5 3" />
                      </svg>
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/70 text-white text-xs px-2 py-1 rounded-md font-medium" dir="ltr">
                    {v.duration}
                  </div>
                </div>
                <a
                  href={`https://www.youtube.com/watch?v=${v.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="font-bold text-white text-sm mb-1 group-hover:text-primary-400 transition-colors leading-snug">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-xs">{v.desc}</p>
                </a>
              </div>
            ))}
          </div>

          {/* Featured Video Player */}
          <div className="mt-12 rounded-2xl overflow-hidden border border-gray-800">
            <div className="bg-gray-900 px-5 py-3 flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <p className="text-gray-300 text-sm font-medium">الدليل الكامل لنظام الطيبات — مشاهدة مباشرة</p>
            </div>
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/L8tgPxTPmxE"
                title="الدليل الكامل لنظام الطيبات"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="badge-green mb-3">المقالات</span>
              <h2 className="section-title mt-2">أحدث المقالات</h2>
              <p className="text-gray-500 mt-1">محتوى تثقيفي عميق حول النظام</p>
            </div>
            <Link href="/articles" className="btn-secondary hidden sm:inline-flex">
              كل المقالات
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <Link
                key={a.id}
                href={`/articles/${a.id}`}
                className="card group hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={a.image}
                    alt={a.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 right-3 badge-green text-xs">{a.tag}</span>
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">{a.excerpt}</p>
                  <span className="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    اقرأ المقال
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                      <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-earth mb-3">تجارب حقيقية</span>
            <h2 className="section-title mt-3">ماذا قال من جرّبوا النظام</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-flat p-6 relative">
                <div className="text-primary-200 text-5xl font-serif absolute top-4 left-5 leading-none select-none">"</div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 mt-4 relative z-10">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
                <div className="flex gap-0.5 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="#f59e0b" className="w-4 h-4">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary-800 via-primary-700 to-primary-900" />
        <div className="absolute inset-0 section-pattern opacity-20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            ابدأ رحلتك مع
            <br />نظام الطيبات اليوم
          </h2>
          <p className="text-primary-200 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            اطّلع على القائمة الكاملة للمسموحات والممنوعات، وشاهد الفيديوهات، واقرأ المقالات — كل ما تحتاجه في مكان واحد.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/foods" className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-base hover:bg-primary-50 transition-all shadow-lg hover:shadow-xl active:scale-95">
              قائمة المسموحات والممنوعات
            </Link>
            <Link href="/about" className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all active:scale-95">
              تعرّف على الدكتور ضياء
            </Link>
          </div>
          <p className="text-primary-300/60 text-xs mt-8">
            ⚕️ تنبيه: استشر طبيبك قبل البدء، خاصة في حالات السكري والحمل والأمراض المزمنة.
          </p>
        </div>
      </section>
    </>
  );
}
