import Link from "next/link";

const categories = ["الكل", "تغذية", "وصفات", "أسلوب حياة", "صحة نفسية", "أطفال"];

const articles = [
  {
    id: 1,
    tag: "تغذية",
    emoji: "🥗",
    title: "لماذا يُعدّ السكر المكرّر من أكثر المواد ضرراً؟",
    excerpt:
      "السكر المضاف يرتبط بمخاطر صحية متعددة كالسمنة وأمراض القلب ومقاومة الأنسولين. في هذا المقال نكشف حقيقة السكر وكيف تتعامل معه بوعي.",
    readTime: "5 دقائق",
    date: "5 يونيو 2026",
  },
  {
    id: 2,
    tag: "وصفات",
    emoji: "🍳",
    title: "وجبة إفطار متكاملة في 10 دقائق",
    excerpt:
      "ابدأ يومك بوجبة مغذية تمنحك الطاقة وتُحسّن تركيزك طوال الصباح. بروتين + كربوهيدرات معقدة + دهون مفيدة في عشر دقائق فقط.",
    readTime: "3 دقائق",
    date: "3 يونيو 2026",
  },
  {
    id: 3,
    tag: "أسلوب حياة",
    emoji: "🌿",
    title: "كيف تبدأ نظام الطيبات بدون قواعد صارمة؟",
    excerpt:
      "ليس نظام الطيبات حمية قاسية، بل هو وعي غذائي تدريجي يبدأ بخطوة واحدة. اكتشف كيف تبدأ بلا ضغط.",
    readTime: "7 دقائق",
    date: "1 يونيو 2026",
  },
  {
    id: 4,
    tag: "صحة نفسية",
    emoji: "🧠",
    title: "الغذاء والمزاج: كيف يؤثر ما تأكله على مشاعرك؟",
    excerpt:
      "علم الأمعاء-الدماغ يكشف أن اختياراتنا الغذائية تؤثر مباشرة على الصحة النفسية والتوازن الهرموني.",
    readTime: "6 دقائق",
    date: "28 مايو 2026",
  },
  {
    id: 5,
    tag: "تغذية",
    emoji: "🫒",
    title: "زيت الزيتون: الدهن المفيد الذي لا يجب إغفاله",
    excerpt:
      "من أبرز ما أوصى به نظام الطيبات هو استخدام زيت الزيتون بديلاً عن الزيوت المكررة، وهذا هو السبب.",
    readTime: "4 دقائق",
    date: "25 مايو 2026",
  },
  {
    id: 6,
    tag: "أطفال",
    emoji: "👶",
    title: "كيف تُعلّم طفلك حب الطعام الصحي منذ الصغر؟",
    excerpt:
      "العادات الغذائية تتشكل مبكراً. إليك أساليب مجربة لجعل الطعام الصحي محبباً لدى أطفالك.",
    readTime: "8 دقائق",
    date: "22 مايو 2026",
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-bl from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">المقالات</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            محتوى تثقيفي مبسّط في التغذية الصحية — كل أسبوع مقال جديد
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b bg-white sticky top-16 z-40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex gap-2 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                cat === "الكل"
                  ? "bg-primary-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-primary-50 hover:text-primary-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article key={article.id} className="card group cursor-pointer">
              <div className="h-48 bg-gradient-to-br from-primary-100 to-earth-100 flex items-center justify-center text-7xl">
                {article.emoji}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-primary-600 bg-primary-50 px-2 py-0.5 rounded-full">
                    {article.tag}
                  </span>
                  <span className="text-xs text-gray-400">{article.date}</span>
                </div>
                <h2 className="font-bold text-gray-800 text-base mb-2 group-hover:text-primary-600 transition-colors leading-snug">
                  {article.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-400">⏱ {article.readTime}</span>
                  <span className="text-primary-600 text-sm font-medium group-hover:underline">
                    اقرأ المقال ←
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="btn-secondary px-10">
            تحميل المزيد
          </button>
        </div>
      </div>
    </div>
  );
}
