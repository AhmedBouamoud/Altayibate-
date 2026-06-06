import Link from "next/link";

const tipCategories = [
  {
    icon: "🌅",
    title: "روتين الصباح",
    gradient: "from-amber-50 to-orange-50",
    border: "border-amber-200",
    iconBg: "bg-amber-100 text-amber-600",
    accent: "text-amber-600",
    tips: [
      "ابدأ يومك بكوب ماء دافئ مع عصير ليمون قبل أي شيء",
      "تناول إفطاراً يحتوي على بروتين لتحسين التركيز والطاقة",
      "تجنب قهوتك الأولى قبل مرور 90 دقيقة على الاستيقاظ",
    ],
  },
  {
    icon: "🛒",
    title: "تسوق بذكاء",
    gradient: "from-green-50 to-emerald-50",
    border: "border-green-200",
    iconBg: "bg-green-100 text-green-600",
    accent: "text-green-600",
    tips: [
      "تسوق دائماً بعد الأكل لا عندما تكون جائعاً",
      "اقرأ مكوّنات المنتج — كلما قلّت المكوّنات كان أفضل",
      "فضّل المنتجات الطازجة على المعلّبة والمصنّعة",
    ],
  },
  {
    icon: "🍽️",
    title: "عادات الأكل",
    gradient: "from-blue-50 to-cyan-50",
    border: "border-blue-200",
    iconBg: "bg-blue-100 text-blue-600",
    accent: "text-blue-600",
    tips: [
      "كل ببطء وامضغ طعامك جيداً — الهضم يبدأ في الفم",
      "توقف عن الأكل حين تشعر بالشبع ٨٠٪ — لا حتى الامتلاء",
      "أبعد الشاشات عن مائدة الطعام لتحسين الوعي الغذائي",
    ],
  },
  {
    icon: "💧",
    title: "الترطيب",
    gradient: "from-sky-50 to-blue-50",
    border: "border-sky-200",
    iconBg: "bg-sky-100 text-sky-600",
    accent: "text-sky-600",
    tips: [
      "اشرب ٨ أكواب ماء يومياً على الأقل",
      "اجعل الماء المشروب الأساسي — قلّل العصائر السكرية",
      "ضع زجاجة ماء أمامك دائماً كتذكير مستمر",
    ],
  },
  {
    icon: "🌙",
    title: "روتين المساء",
    gradient: "from-purple-50 to-violet-50",
    border: "border-purple-200",
    iconBg: "bg-purple-100 text-purple-600",
    accent: "text-purple-600",
    tips: [
      "تجنب الأكل قبل النوم بساعتين على الأقل",
      "أكلة خفيفة ليلاً خير من وجبة ثقيلة تُثقل النوم",
      "النوم الجيد يُنظّم هرمونات الجوع — اجعله أولوية",
    ],
  },
  {
    icon: "🔄",
    title: "الاستبدال الذكي",
    gradient: "from-rose-50 to-pink-50",
    border: "border-rose-200",
    iconBg: "bg-rose-100 text-rose-600",
    accent: "text-rose-600",
    tips: [
      "استبدل السكر الأبيض بالتمر أو العسل الطبيعي",
      "استبدل الخبز الأبيض بخبز الحبوب الكاملة",
      "استبدل الزيوت المكررة بزيت الزيتون",
    ],
  },
];

const quickWins = [
  { emoji: "🥦", text: "أضف خضاراً لكل وجبة" },
  { emoji: "🧂", text: "قلّل الملح المضاف" },
  { emoji: "🍎", text: "اختر الفاكهة بدلاً من الحلويات" },
  { emoji: "🚶", text: "امشِ ١٠ دقائق بعد الوجبة" },
  { emoji: "🍱", text: "جهّز وجباتك مسبقاً" },
  { emoji: "🏠", text: "تناول وجبة في البيت يومياً" },
];

export default function TipsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-bl from-primary-50 via-white to-earth-50 py-16 section-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-green mb-4">نصائح عملية</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 mt-3">
            خطوات صغيرة، تغيير كبير
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            نصائح يمكن تطبيقها اليوم — بلا تعقيد ولا قواعد صارمة
          </p>
        </div>
      </div>

      {/* Quick Wins Banner */}
      <div className="relative overflow-hidden bg-gradient-to-l from-primary-800 to-primary-700 py-12">
        <div className="absolute inset-0 section-pattern opacity-20" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <h2 className="text-white text-2xl font-bold">
              ٦ عادات صغيرة تُحدث فرقاً كبيراً
            </h2>
            <p className="text-primary-200 text-sm mt-2">
              ابدأ بعادة واحدة هذا الأسبوع
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickWins.map((win, i) => (
              <div
                key={win.text}
                className="group bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-4 text-center text-white transition-all duration-200 hover:-translate-y-1 cursor-default"
              >
                <div className="text-3xl mb-2">{win.emoji}</div>
                <p className="text-xs font-medium leading-snug">{win.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips by Category */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-14">
          <span className="badge-earth mb-4">دليل شامل</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-3 mb-3">
            نصائح مفصّلة حسب الوقت والموقف
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            كل فئة تغطي جانباً مختلفاً من يومك لمساعدتك على اتخاذ خيارات أفضل
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipCategories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className={`rounded-2xl border ${cat.border} p-6 bg-gradient-to-br ${cat.gradient} hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center text-2xl`}>
                  {cat.icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className={`${cat.accent} mt-1 flex-shrink-0 font-bold text-xs`}>
                      {i + 1 + catIdx * 3}.
                    </span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Reminder Banner */}
      <div className="bg-white border-t border-gray-100 py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 rounded-2xl bg-primary-50 flex items-center justify-center text-3xl mx-auto mb-6">
            🌟
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            تذكّر: الاستمرارية أهم من الكمال
          </h3>
          <p className="text-gray-500 leading-relaxed mb-8 max-w-lg mx-auto">
            لا تحتاج إلى تغيير كل شيء دفعة واحدة. اختر نصيحة واحدة هذا الأسبوع وطبّقها حتى تصبح عادة، ثم انتقل إلى التالية.
          </p>
          <Link href="/articles" className="btn-primary px-8 py-3">
            اقرأ المزيد من المقالات
          </Link>
        </div>
      </div>
    </div>
  );
}
