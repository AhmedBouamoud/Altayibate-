import Link from "next/link";

const stats = [
  { value: "١٢٠+", label: "مقال تثقيفي" },
  { value: "٥٠+", label: "نصيحة عملية" },
  { value: "١٠ آلاف+", label: "قارئ شهرياً" },
  { value: "٥", label: "تصنيف غذائي" },
];

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "محتوى موثوق",
    desc: "مقالات مبنية على أسس علمية وتغذوية حديثة، مراجَعة بعناية قبل النشر.",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2-8 0-8 8-8 8s6-4 13-3c0 0-9 1-12 9C5 12.5 8 8 17 8z" />
      </svg>
    ),
    title: "بلا قواعد صارمة",
    desc: "منهج مرن قائم على الوعي الغذائي التدريجي — تغيير حقيقي يدوم.",
    color: "bg-primary-50 text-primary-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "صحة شاملة",
    desc: "نربط التغذية بالصحة النفسية والجسدية — لأن الجسد والعقل وجهان لعملة واحدة.",
    color: "bg-violet-50 text-violet-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z" />
        <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
      </svg>
    ),
    title: "سهل التطبيق",
    desc: "نصائح يومية عملية يمكن تطبيقها فوراً دون وقت إضافي أو تكلفة عالية.",
    color: "bg-earth-50 text-earth-600",
  },
];

const articles = [
  {
    tag: "تغذية",
    emoji: "🥗",
    title: "لماذا يُعدّ السكر المكرّر من أكثر المواد ضرراً؟",
    excerpt: "السكر المضاف يرتبط بمخاطر صحية متعددة. ففهمه هو الخطوة الأولى نحو حماية صحتك.",
    readTime: "5 دقائق",
    color: "from-green-100 to-emerald-100",
  },
  {
    tag: "وصفات",
    emoji: "🍳",
    title: "وجبة إفطار متكاملة في 10 دقائق",
    excerpt: "ابدأ يومك بوجبة مغذية تمنحك الطاقة وتُحسّن تركيزك طوال الصباح.",
    readTime: "3 دقائق",
    color: "from-amber-100 to-orange-100",
  },
  {
    tag: "أسلوب حياة",
    emoji: "🌿",
    title: "كيف تبدأ نظام الطيبات بدون قواعد صارمة؟",
    excerpt: "ليس نظام الطيبات حمية قاسية، بل هو وعي غذائي تدريجي يبدأ بخطوة واحدة.",
    readTime: "7 دقائق",
    color: "from-blue-100 to-cyan-100",
  },
];

const testimonials = [
  {
    name: "سارة المطيري",
    role: "أم وربة منزل",
    text: "نظام الطيبات غيّر نظرتي للطعام تماماً. أصبحت أختار بوعي دون الشعور بالحرمان.",
    avatar: "س",
  },
  {
    name: "محمد العتيبي",
    role: "مهندس",
    text: "النصائح العملية سهلة التطبيق في حياتي المزدحمة. ما أحتاجه تماماً.",
    avatar: "م",
  },
  {
    name: "نورة الشمري",
    role: "طالبة جامعية",
    text: "المقالات مبسّطة وموثوقة. وجدت إجابات عن أسئلة كنت أبحث عنها طويلاً.",
    avatar: "ن",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-primary-50 via-white to-earth-50 py-20 md:py-32 section-pattern">
        {/* Decorative orbs */}
        <div className="hero-orb w-80 h-80 bg-primary-200 opacity-30 top-[-80px] right-[-80px]" />
        <div className="hero-orb w-64 h-64 bg-earth-200 opacity-20 bottom-[-60px] left-[-40px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="inline-flex items-center gap-2 bg-white border border-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-sm animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-primary-500 animate-pulse-slow" />
            طعامك دواؤك — ابدأ رحلتك اليوم
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight mb-6 animate-slide-up">
            اختر{" "}
            <span className="gradient-text">الطيّب</span>،{" "}
            <br className="hidden md:block" />
            وعِش بصحة أفضل
          </h1>

          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up">
            نظام الطيبات موقع تثقيفي يساعدك على فهم التغذية الصحية وتطبيقها في حياتك
            اليومية بأسلوب بسيط ومتوازن — بعيداً عن الحميات القاسية والتعقيد.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link href="/articles" className="btn-primary text-base px-8 py-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              اقرأ المقالات
            </Link>
            <Link href="/tips" className="btn-secondary text-base px-8 py-4">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <circle cx="12" cy="12" r="10" />
                <line x1="12" y1="8" x2="12" y2="12" />
                <line x1="12" y1="16" x2="12.01" y2="16" />
              </svg>
              نصائح عملية
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-white shadow-card"
              >
                <div className="text-2xl font-extrabold text-primary-700 mb-1">{s.value}</div>
                <div className="text-xs text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="badge-green mb-4">لماذا نظام الطيبات؟</span>
            <h2 className="section-title text-4xl mt-3">نهج غذائي مختلف</h2>
            <p className="section-subtitle max-w-xl mx-auto mt-2">
              نعتمد على الوعي والتدرج لا على القواعد الصارمة — لأن التغيير الحقيقي يأتي من الداخل
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="group p-6 rounded-2xl border border-gray-100 hover:border-primary-200 bg-white hover:bg-primary-50/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${f.color} flex items-center justify-center mb-5`}>
                  {f.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-24 bg-gray-50/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="badge-green mb-3">المقالات</span>
              <h2 className="section-title mt-2">أحدث المقالات</h2>
              <p className="text-gray-500 mt-1">محتوى تثقيفي جديد كل أسبوع</p>
            </div>
            <Link href="/articles" className="btn-secondary hidden sm:inline-flex">
              كل المقالات
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a, i) => (
              <article
                key={a.title}
                className="card group cursor-pointer hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${a.color} flex items-center justify-center text-7xl relative overflow-hidden`}
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-primary-600/10 to-transparent transition-opacity duration-300" />
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {a.emoji}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <span className="badge-green">{a.tag}</span>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3 h-3">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      {a.readTime}
                    </span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-primary-700 transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 mb-4">
                    {a.excerpt}
                  </p>
                  <span className="text-primary-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                    اقرأ المقال
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-3.5 h-3.5">
                      <path d="M19 12H5M12 5l-7 7 7 7" />
                    </svg>
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link href="/articles" className="btn-secondary">كل المقالات</Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="badge-earth mb-3">آراء القراء</span>
            <h2 className="section-title mt-3">ماذا يقول مجتمعنا</h2>
            <p className="section-subtitle mt-2">تجارب حقيقية من قراء بدأوا رحلتهم مع الطيبات</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="card-flat p-6 relative">
                <div className="text-primary-200 text-5xl font-serif absolute top-4 left-5 leading-none select-none">
                  "
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6 mt-4 relative z-10">
                  {t.text}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white font-bold text-base">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.role}</p>
                  </div>
                </div>
                {/* Stars */}
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
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-bl from-primary-800 via-primary-700 to-primary-900" />
        <div className="absolute inset-0 section-pattern opacity-20" />
        <div className="hero-orb w-96 h-96 bg-primary-500 opacity-10 top-[-100px] left-[-100px]" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-flex items-center gap-2 bg-white/10 text-primary-100 px-4 py-1.5 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-primary-300 animate-pulse-slow" />
            ابدأ اليوم، ليس غداً
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            رحلتك نحو الطعام الطيّب
            <br />
            تبدأ بخطوة واحدة
          </h2>
          <p className="text-primary-200 text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            لا تحتاج إلى تغيير كل شيء دفعة واحدة. خطوة صغيرة كل يوم تُحدث فرقاً كبيراً في صحتك وجودة حياتك.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tips"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-base hover:bg-primary-50 transition-all duration-200 shadow-lg hover:shadow-xl active:scale-95"
            >
              اكتشف النصائح العملية
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-4 h-4">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
            </Link>
            <Link
              href="/articles"
              className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-white/40 text-white px-8 py-4 rounded-xl font-bold text-base hover:bg-white/10 transition-all duration-200 active:scale-95"
            >
              اقرأ المقالات
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
