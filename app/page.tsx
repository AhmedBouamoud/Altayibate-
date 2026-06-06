import Link from "next/link";

const features = [
  {
    icon: "🥗",
    title: "اختيار الطيّب",
    desc: "نتعلم كيف نختار الطعام الطيّب الذي يغذي الجسد ويقوّيه بدلاً من إضعافه.",
  },
  {
    icon: "📖",
    title: "مقالات مبسّطة",
    desc: "محتوى تثقيفي سهل الفهم عن التغذية الصحية، مناسب للجميع دون تعقيد.",
  },
  {
    icon: "💡",
    title: "نصائح يومية",
    desc: "خطوات عملية يمكن تطبيقها فوراً في حياتك اليومية للانتقال نحو نمط غذائي أفضل.",
  },
  {
    icon: "🧠",
    title: "صحة الجسد والعقل",
    desc: "نربط بين الغذاء الصحي والصحة النفسية لأن ما نأكله يؤثر على مزاجنا وتفكيرنا.",
  },
];

const articles = [
  {
    tag: "تغذية",
    title: "لماذا يُعدّ السكر المكرّر من أكثر المواد ضرراً؟",
    excerpt:
      "السكر المضاف يرتبط بمخاطر صحية متعددة، ففهمه هو الخطوة الأولى نحو حماية صحتك.",
    readTime: "5 دقائق",
  },
  {
    tag: "وصفات",
    title: "وجبة إفطار متكاملة في 10 دقائق",
    excerpt:
      "ابدأ يومك بوجبة مغذية تمنحك الطاقة وتُحسّن تركيزك طوال الصباح.",
    readTime: "3 دقائق",
  },
  {
    tag: "أسلوب حياة",
    title: "كيف تبدأ نظام الطيبات بدون قواعد صارمة؟",
    excerpt:
      "ليس نظام الطيبات حمية قاسية، بل هو وعي غذائي تدريجي يبدأ بخطوة واحدة.",
    readTime: "7 دقائق",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-bl from-primary-50 via-earth-50 to-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 right-10 text-9xl">🌿</div>
          <div className="absolute bottom-10 left-20 text-8xl">🥦</div>
          <div className="absolute top-1/2 left-1/3 text-7xl">🍋</div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
            🌱 طعامك دواؤك
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight mb-6">
            اختر{" "}
            <span className="text-primary-600">الطيّب</span>،{" "}
            <br className="hidden md:block" />
            وعِش بصحة أفضل
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            نظام الطيبات موقع تثقيفي يساعدك على فهم التغذية الصحية وتطبيقها في حياتك
            اليومية بأسلوب بسيط ومتوازن — بعيداً عن الحميات القاسية والتعقيد.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/articles" className="btn-primary text-lg px-8 py-4">
              اقرأ المقالات
            </Link>
            <Link href="/tips" className="btn-secondary text-lg px-8 py-4">
              نصائح عملية
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title">لماذا نظام الطيبات؟</h2>
            <p className="section-subtitle">نهج غذائي واعٍ يعتمد على الوضوح لا التعقيد</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <div key={f.title} className="card p-6 text-center hover:-translate-y-1 transition-transform duration-200">
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="font-bold text-gray-800 text-lg mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-20 bg-earth-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="section-title mb-1">أحدث المقالات</h2>
              <p className="text-gray-500">محتوى تثقيفي جديد كل أسبوع</p>
            </div>
            <Link href="/articles" className="btn-secondary hidden sm:inline-block">
              كل المقالات
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {articles.map((a) => (
              <article key={a.title} className="card group cursor-pointer">
                <div className="h-44 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-6xl">
                  {a.tag === "تغذية" ? "🥗" : a.tag === "وصفات" ? "🍳" : "🌿"}
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                    {a.tag}
                  </span>
                  <h3 className="font-bold text-gray-800 mt-3 mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{a.excerpt}</p>
                  <span className="text-xs text-gray-400">⏱ {a.readTime} للقراءة</span>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8 sm:hidden">
            <Link href="/articles" className="btn-secondary">
              كل المقالات
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            ابدأ رحلتك نحو الطعام الطيّب اليوم
          </h2>
          <p className="text-primary-100 text-lg mb-8 leading-relaxed">
            لا تحتاج إلى تغيير كل شيء دفعة واحدة. خطوة صغيرة كل يوم تُحدث فرقاً كبيراً.
          </p>
          <Link
            href="/tips"
            className="inline-block bg-white text-primary-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary-50 transition-colors shadow-lg"
          >
            اكتشف النصائح العملية
          </Link>
        </div>
      </section>
    </>
  );
}
