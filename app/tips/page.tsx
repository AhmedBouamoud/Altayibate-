const tipCategories = [
  {
    icon: "🌅",
    title: "روتين الصباح",
    color: "from-amber-50 to-orange-50 border-amber-200",
    iconBg: "bg-amber-100",
    tips: [
      "ابدأ يومك بكوب ماء دافئ مع عصير ليمون قبل أي شيء",
      "تناول إفطاراً يحتوي على بروتين لتحسين التركيز والطاقة",
      "تجنب قهوتك الأولى قبل مرور 90 دقيقة على الاستيقاظ",
    ],
  },
  {
    icon: "🛒",
    title: "تسوق بذكاء",
    color: "from-green-50 to-emerald-50 border-green-200",
    iconBg: "bg-green-100",
    tips: [
      "تسوق دائماً بعد الأكل لا عندما تكون جائعاً",
      "اقرأ مكوّنات المنتج قبل شرائه — كلما قلّت المكوّنات كان أفضل",
      "فضّل المنتجات الطازجة على المعلّبة والمصنّعة",
    ],
  },
  {
    icon: "🍽️",
    title: "عادات الأكل",
    color: "from-blue-50 to-cyan-50 border-blue-200",
    iconBg: "bg-blue-100",
    tips: [
      "كل ببطء وامضغ طعامك جيداً — الهضم يبدأ في الفم",
      "توقف عن الأكل حين تشعر بالشبع ٨٠٪ — لا حتى الامتلاء",
      "أبعد الشاشات عن مائدة الطعام لتحسين الوعي الغذائي",
    ],
  },
  {
    icon: "💧",
    title: "الترطيب",
    color: "from-sky-50 to-blue-50 border-sky-200",
    iconBg: "bg-sky-100",
    tips: [
      "اشرب ٨ أكواب ماء يومياً على الأقل",
      "اجعل الماء المشروب الأساسي — قلّل العصائر والمشروبات السكرية",
      "ضع زجاجة ماء أمامك دائماً كتذكير مستمر",
    ],
  },
  {
    icon: "🌙",
    title: "روتين المساء",
    color: "from-purple-50 to-violet-50 border-purple-200",
    iconBg: "bg-purple-100",
    tips: [
      "تجنب الأكل قبل النوم بساعتين على الأقل",
      "أكلة خفيفة ليلاً خير من وجبة ثقيلة تُثقل النوم",
      "النوم الجيد يُنظّم هرمونات الجوع — اجعله أولوية",
    ],
  },
  {
    icon: "🔄",
    title: "الاستبدال الذكي",
    color: "from-rose-50 to-pink-50 border-rose-200",
    iconBg: "bg-rose-100",
    tips: [
      "استبدل السكر الأبيض بالتمر أو العسل الطبيعي",
      "استبدل الخبز الأبيض بخبز الحبوب الكاملة أو العيش البلدي",
      "استبدل الزيوت النباتية المكررة بزيت الزيتون أو جوز الهند",
    ],
  },
];

const quickWins = [
  { emoji: "✅", text: "أضف خضاراً لكل وجبة" },
  { emoji: "✅", text: "قلّل الملح المضاف" },
  { emoji: "✅", text: "اختر الفاكهة بدلاً من الحلويات" },
  { emoji: "✅", text: "امشِ ١٠ دقائق بعد الوجبة" },
  { emoji: "✅", text: "جهّز وجباتك مسبقاً" },
  { emoji: "✅", text: "تناول وجبة واحدة في البيت يومياً" },
];

export default function TipsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-bl from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">نصائح عملية</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            خطوات بسيطة يمكن تطبيقها اليوم — بلا تعقيد ولا قواعد صارمة
          </p>
        </div>
      </div>

      {/* Quick Wins */}
      <div className="bg-primary-700 py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-white text-xl font-bold mb-6 text-center">
            6 عادات صغيرة تُحدث فرقاً كبيراً
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {quickWins.map((win) => (
              <div
                key={win.text}
                className="bg-primary-600 bg-opacity-60 rounded-xl p-4 text-center text-white"
              >
                <div className="text-2xl mb-2">{win.emoji}</div>
                <p className="text-xs font-medium leading-snug">{win.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tips by Category */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          نصائح مفصّلة حسب الوقت والموقف
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tipCategories.map((cat) => (
            <div
              key={cat.title}
              className={`rounded-2xl border p-6 bg-gradient-to-br ${cat.color}`}
            >
              <div className={`w-12 h-12 rounded-xl ${cat.iconBg} flex items-center justify-center text-2xl mb-4`}>
                {cat.icon}
              </div>
              <h3 className="font-bold text-gray-800 text-lg mb-4">{cat.title}</h3>
              <ul className="space-y-3">
                {cat.tips.map((tip, i) => (
                  <li key={i} className="flex gap-3 text-sm text-gray-700 leading-relaxed">
                    <span className="text-primary-500 mt-0.5 flex-shrink-0">◆</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Reminder Banner */}
      <div className="bg-earth-50 border-t border-earth-200 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-4xl mb-4">🌟</p>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            تذكّر: الاستمرارية أهم من الكمال
          </h3>
          <p className="text-gray-500 leading-relaxed">
            لا تحتاج إلى تغيير كل شيء دفعة واحدة. اختر نصيحة واحدة هذا الأسبوع وطبّقها حتى تصبح عادة، ثم انتقل إلى التالية. هكذا يعمل التغيير الحقيقي.
          </p>
        </div>
      </div>
    </div>
  );
}
