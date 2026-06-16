import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "المنهجية",
  description: "مناهج تحليل الوثائق والخرائط والرسوم البيانية لمادة الاجتماعيات",
};

const manahij = [
  {
    num: 1,
    title: "تحليل الوثيقة التاريخية",
    color: "bg-blue-50 border-blue-200 text-blue-700",
    iconBg: "bg-blue-600",
    steps: [
      "تحديد طبيعة الوثيقة (نص، صورة، خريطة، جدول...)",
      "التعريف بمصدر الوثيقة وصاحبها وتاريخها",
      "تحديد الفكرة العامة للوثيقة",
      "استخراج المعطيات والمعلومات الأساسية",
      "تحليل المضمون وربطه بالسياق التاريخي",
      "إبراز أهمية الوثيقة وحدودها",
      "الخلاصة والاستنتاج",
    ],
  },
  {
    num: 2,
    title: "إنجاز الخط الزمني",
    color: "bg-green-50 border-green-200 text-green-700",
    iconBg: "bg-green-600",
    steps: [
      "تحديد الفترة الزمنية المراد تمثيلها",
      "جمع الأحداث التاريخية المتعلقة بالموضوع",
      "ترتيب الأحداث ترتيباً زمنياً تصاعدياً",
      "رسم المحور الزمني مع تحديد التدرج الزمني",
      "تمثيل الأحداث على المحور بشكل دقيق",
      "كتابة تسميات واضحة لكل حدث",
      "إضافة عنوان دال على المحتوى",
    ],
  },
  {
    num: 3,
    title: "إنتاج نص جغرافي",
    color: "bg-purple-50 border-purple-200 text-purple-700",
    iconBg: "bg-purple-600",
    steps: [
      "قراءة التعليمة وتحديد الموضوع والإشكالية",
      "تحديد الأفكار والعناصر الرئيسية للموضوع",
      "بناء مخطط منطقي ومنظم للنص",
      "كتابة المقدمة: تقديم الموضوع وطرح الإشكالية",
      "تطوير العرض بتوظيف المعطيات والمفاهيم الجغرافية",
      "الربط المنطقي بين الفقرات",
      "كتابة خاتمة تستنتج الأفكار الرئيسية",
    ],
  },
  {
    num: 4,
    title: "تحليل خريطة جغرافية",
    color: "bg-teal-50 border-teal-200 text-teal-700",
    iconBg: "bg-teal-600",
    steps: [
      "قراءة عنوان الخريطة وتحديد موضوعها",
      "التعرف على عناصر الخريطة (المفتاح، الاتجاهات، السلّم)",
      "وصف المجال الجغرافي الممثَّل",
      "قراءة مفتاح الخريطة وفهم الرموز",
      "وصف التوزيعات الجغرافية الظاهرة",
      "تفسير الظواهر المرصودة وربطها بالعوامل المؤثرة",
      "استنتاج الأفكار الأساسية وصياغة خلاصة",
    ],
  },
  {
    num: 5,
    title: "كتابة الموضوع المقالي",
    color: "bg-indigo-50 border-indigo-200 text-indigo-700",
    iconBg: "bg-indigo-600",
    steps: [
      "قراءة الموضوع وتحليل مكوناته وتحديد نوعه",
      "صياغة الإشكالية انطلاقاً من التساؤلات المطروحة",
      "وضع مخطط يتضمن مقدمة وعرضاً وخاتمة",
      "كتابة المقدمة: التقديم والإشكالية والتصميم",
      "تطوير العرض وفق المخطط بأدلة ومعطيات",
      "الربط المنطقي بين المحاور والأفكار",
      "كتابة خاتمة تُجيب على الإشكالية وتفتح آفاقاً",
    ],
  },
  {
    num: 6,
    title: "تحليل الرسم البياني",
    color: "bg-orange-50 border-orange-200 text-orange-700",
    iconBg: "bg-orange-600",
    steps: [
      "قراءة عنوان الرسم البياني وتحديد نوعه",
      "تحديد محاور الرسم ووحدات القياس",
      "قراءة مفتاح الرسم وفهم الألوان والرموز",
      "وصف المعطيات الكمية والنوعية الظاهرة",
      "رصد التطورات والاتجاهات العامة",
      "المقارنة بين الفئات أو الفترات الزمنية",
      "تفسير المعطيات واستخلاص النتائج",
    ],
  },
  {
    num: 7,
    title: "تحليل جدول إحصائي",
    color: "bg-red-50 border-red-200 text-red-700",
    iconBg: "bg-red-600",
    steps: [
      "قراءة عنوان الجدول وتحديد موضوعه ومصدره",
      "التعرف على الأعمدة والصفوف ووحدات القياس",
      "قراءة المعطيات الواردة في الجدول",
      "رصد أعلى القيم وأدناها والفوارق البارزة",
      "حساب النسب المئوية أو المعدلات إن لزم",
      "تفسير المعطيات وربطها بالسياق",
      "استنتاج الدلالات والمعطيات الجوهرية",
    ],
  },
  {
    num: 8,
    title: "منهجية الامتحان الجهوي",
    color: "bg-gray-50 border-gray-200 text-gray-700",
    iconBg: "bg-gray-700",
    steps: [
      "قراءة الورقة الامتحانية كاملة قبل البدء في الإجابة",
      "توزيع الوقت بشكل عادل على كل الأسئلة",
      "البدء بالأسئلة الأكثر يُسراً لاستثمار الوقت",
      "الإجابة بلغة سليمة وخط واضح ومنظم",
      "توظيف المصطلحات العلمية المناسبة",
      "تقديم تحليلات مدعومة بالأدلة والحجج",
      "مراجعة الإجابات قبل تسليم الورقة",
    ],
  },
];

export default function ManhajiyaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Page Header */}
      <div className="bg-gradient-to-l from-blue-800 to-blue-600 py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-white/15 text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            الأستاذة حنانة
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            المنهجية
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto leading-relaxed">
            مناهج تحليل الوثائق والخرائط والرسوم البيانية — أدوات أساسية لاجتياز امتحانات الاجتماعيات
          </p>
        </div>
      </div>

      {/* Manahij Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {manahij.map((m) => (
            <div
              key={m.num}
              className={`rounded-2xl border-2 ${m.color} bg-white overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5`}
            >
              {/* Card Header */}
              <div className={`${m.iconBg} px-6 py-4 flex items-center gap-3`}>
                <span className="w-8 h-8 rounded-full bg-white/20 text-white font-extrabold text-sm flex items-center justify-center flex-shrink-0">
                  {m.num}
                </span>
                <h2 className="text-white font-bold text-lg leading-snug">{m.title}</h2>
              </div>

              {/* Steps */}
              <div className="px-6 py-5">
                <ol className="space-y-3">
                  {m.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="w-6 h-6 rounded-full bg-gray-100 text-gray-600 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <p className="text-gray-700 text-sm leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom tip */}
        <div className="mt-10 bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center">
          <p className="text-blue-800 font-semibold text-base">
            نصيحة الأستاذة: تدرّب على هذه المناهج بانتظام — التطبيق هو مفتاح النجاح
          </p>
        </div>
      </div>
    </div>
  );
}
