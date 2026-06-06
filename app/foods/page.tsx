import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المسموحات والممنوعات في نظام الطيبات",
  description: "القائمة الكاملة لمسموحات وممنوعات نظام الطيبات للدكتور ضياء العوضي — أكثر من ٨١ صنف ممنوع.",
};

const zones = [
  {
    name: "المنطقة الخضراء",
    desc: "أمان أعلى — يُؤكل بحرية",
    color: "bg-green-50 border-green-200",
    badge: "bg-green-100 text-green-700",
    dot: "bg-green-500",
    items: [
      { emoji: "🍚", name: "الأرز بكل أشكاله", note: "" },
      { emoji: "🥔", name: "البطاطس بكل أشكالها", note: "مقلية، مسلوقة، مطبوخة" },
      { emoji: "🍠", name: "البطاطا الحلوة والقرع والقلقاس", note: "" },
      { emoji: "🍖", name: "اللحم الضاني والماعز", note: "مرتين أسبوعياً" },
      { emoji: "🐟", name: "الأسماك بجميع أنواعها", note: "ما عدا الجمبري والسبيط" },
      { emoji: "🥩", name: "اللحم البقري والجاموسي", note: "مرة في الأسبوع" },
      { emoji: "🫒", name: "زيت الزيتون", note: "" },
      { emoji: "🧈", name: "الزبدة الطبيعية والسمنة البلدي", note: "" },
      { emoji: "🍞", name: "توست الحبوب الكاملة", note: "نوع ريتش بيك فقط" },
      { emoji: "🫐", name: "جميع أنواع الفواكه وعصائرها", note: "ما عدا البطيخ" },
      { emoji: "🍯", name: "التمر والمربى والعسل الطبيعي", note: "" },
    ],
  },
  {
    name: "المنطقة الصفراء",
    desc: "مسموح باعتدال",
    color: "bg-yellow-50 border-yellow-200",
    badge: "bg-yellow-100 text-yellow-700",
    dot: "bg-yellow-500",
    items: [
      { emoji: "🧀", name: "جبنة الشيدر والموتزريلا والكشكفال", note: "" },
      { emoji: "🧀", name: "الجبنة الرومي والمثلثات المطبوخة", note: "" },
      { emoji: "🍫", name: "النوتيلا والشوكولاتة", note: "بحذر" },
      { emoji: "🍮", name: "الجيلو (الغومي)", note: "" },
      { emoji: "🥄", name: "الحلاوة الطحينية والطحينة الداكنة", note: "" },
      { emoji: "🍰", name: "البسبوسة فقط من الحلويات الشرقية", note: "" },
      { emoji: "🫘", name: "الفريك", note: "" },
      { emoji: "🐇", name: "الأرانب", note: "" },
      { emoji: "🐦", name: "الحمام والسمان", note: "مشوي أو محشي أرز" },
      { emoji: "🥒", name: "الزيتون والليمون المخلّل", note: "بكمية محدودة" },
      { emoji: "☕", name: "القهوة والشاي الأخضر", note: "بدون مبيضات أو ألبان" },
      { emoji: "🧃", name: "العصائر المعلّبة وعصير القصب", note: "" },
      { emoji: "🍿", name: "الشيبسي", note: "بكميات محدودة" },
    ],
  },
];

const forbidden = [
  {
    category: "منتجات الألبان",
    emoji: "🥛",
    color: "bg-red-50 border-red-200",
    items: ["الحليب بكل أنواعه", "الزبادي واللبن الرائب", "الجبنة القريش", "الجبنة البيضاء بكل أنواعها", "القشطة والكريمة"],
  },
  {
    category: "الدقيق والمخبوزات",
    emoji: "🍞",
    color: "bg-orange-50 border-orange-200",
    items: ["العيش الأبيض بكل أنواعه", "المكرونة واللازانيا", "الكيك والكرواسون والبسكويت", "الكنافة وبلح الشام والزلابية", "كل ما صُنع من دقيق أبيض"],
  },
  {
    category: "الدواجن والبيض",
    emoji: "🍗",
    color: "bg-amber-50 border-amber-200",
    items: ["الفراخ (دجاج) بكل أشكالها", "البط والديك الرومي", "البيض بجميع أشكاله", "كبدة وقوانص الفراخ", "الجمبري والسبيط (بحريات)"],
  },
  {
    category: "الخضروات النيئة",
    emoji: "🥗",
    color: "bg-green-50 border-green-200",
    items: ["الخيار والخس والجرجير نيّاً", "البقدونس والكرفس والكزبرة الخضراء", "الجزر النيّ والفلفل الألوان", "السبانخ والبسلة والفاصوليا البيضاء", "الفول واللوبيا"],
  },
  {
    category: "المشروبات الغازية",
    emoji: "🥤",
    color: "bg-blue-50 border-blue-200",
    items: ["الكولا وكل المشروبات الغازية", "المياه الغازية بكل أنواعها"],
  },
  {
    category: "أدوية وأخرى",
    emoji: "💊",
    color: "bg-purple-50 border-purple-200",
    items: ["كل أدوية الحموضة ممنوعة تماماً", "البطيخ (من الفواكه الممنوعة)", "الملبن والفولية والنوجا"],
  },
];

const basics5 = [
  { emoji: "🍚", name: "الأرز البسمتي", desc: "الأساس الأول — مصدر الطاقة" },
  { emoji: "🥔", name: "البطاطس", desc: "الأساس الثاني — نشا طبيعي مفيد" },
  { emoji: "🌴", name: "التمر", desc: "الأساس الثالث — طاقة سريعة طبيعية" },
  { emoji: "🧈", name: "الزبدة الطبيعية", desc: "الأساس الرابع — دهون مفيدة" },
  { emoji: "🍬", name: "السكر الطبيعي", desc: "الأساس الخامس — ١٥ ملعقة يومياً كحد أقصى" },
];

export default function FoodsPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="relative bg-gray-950 py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=1600&q=80"
            alt="طعام"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="badge bg-primary-900/50 text-primary-400 border border-primary-800 mb-4">
            دليل الأغذية
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 mt-3">
            المسموحات والممنوعات
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            القائمة الكاملة والمفصّلة لنظام الطيبات — أكثر من ٨١ صنف ممنوع
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a href="#allowed" className="btn-primary py-2 px-6 text-sm">المسموحات ↓</a>
            <a href="#forbidden" className="inline-flex items-center justify-center gap-2 bg-red-600 text-white px-6 py-2 rounded-xl font-semibold text-sm hover:bg-red-700 transition-all active:scale-95">الممنوعات ↓</a>
          </div>
        </div>
      </div>

      {/* الأساسيات الخمس */}
      <section className="py-14 bg-primary-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-white">الأساسيات الخمس</h2>
            <p className="text-primary-200 mt-2">تُؤكل يومياً بلا قيود — هي عماد النظام</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {basics5.map((b) => (
              <div key={b.name} className="bg-primary-600/50 border border-primary-500/30 rounded-2xl p-5 text-center text-white">
                <div className="text-4xl mb-3">{b.emoji}</div>
                <div className="font-bold text-sm mb-1">{b.name}</div>
                <div className="text-primary-200 text-xs leading-snug">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Allowed Foods */}
      <section id="allowed" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green mb-3">✅ المسموحات</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">ما يُسمح بأكله</h2>
            <p className="text-gray-500 mt-2">مُقسَّم حسب مناطق الأمان</p>
          </div>

          <div className="space-y-8">
            {zones.map((zone) => (
              <div key={zone.name} className={`rounded-2xl border ${zone.color} p-6`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-3 h-3 rounded-full ${zone.dot}`} />
                  <h3 className="font-bold text-gray-900 text-xl">{zone.name}</h3>
                  <span className={`badge ${zone.badge} text-xs`}>{zone.desc}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {zone.items.map((item) => (
                    <div key={item.name} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm">
                      <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                      <div>
                        <p className="font-semibold text-gray-800 text-sm">{item.name}</p>
                        {item.note && (
                          <p className="text-gray-400 text-xs mt-0.5">{item.note}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Forbidden Foods */}
      <section id="forbidden" className="py-16 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge bg-red-900/50 text-red-400 border border-red-800 mb-3">❌ الممنوعات</span>
            <h2 className="text-3xl font-bold text-white mt-3">أكثر من ٨١ صنف ممنوع</h2>
            <p className="text-gray-400 mt-2">هذه الأطعمة تُشعل الالتهاب وتضعف الجهاز الهضمي</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {forbidden.map((cat) => (
              <div key={cat.category} className="bg-gray-900 rounded-2xl border border-gray-800 p-5">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{cat.emoji}</span>
                  <h3 className="font-bold text-white text-base">{cat.category}</h3>
                </div>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-gray-400 text-sm">
                      <span className="text-red-500 mt-0.5 flex-shrink-0">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-amber-800/50 bg-amber-900/20 p-6 text-center">
            <p className="text-amber-300 font-semibold text-sm">
              ⚕️ تنبيه طبي مهم
            </p>
            <p className="text-amber-400/80 text-sm mt-2 leading-relaxed max-w-2xl mx-auto">
              نظام الطيبات أثار جدلاً طبياً واسعاً. بعض الممنوعات كالبيض والخضروات النيئة تعتبر مفيدة وفق التوصيات الغذائية المعتمدة. استشر دائماً طبيبك قبل البدء.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
