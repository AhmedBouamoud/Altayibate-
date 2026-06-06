import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "من هو الدكتور ضياء العوضي",
  description: "سيرة ذاتية شاملة للدكتور ضياء الدين العوضي، مؤسس نظام الطيبات، طبيب التخدير والرعاية المركزة المصري.",
};

const timeline = [
  { year: "١٩٧٩", event: "وُلد ضياء الدين شلبي محمد العوضي في مصر" },
  { year: "٢٠٠٤", event: "تخرّج من كلية الطب جامعة عين شمس بتقدير امتياز" },
  { year: "٢٠١٠", event: "حصل على دكتوراه في التخدير والرعاية المركزة وعلاج الألم" },
  { year: "٢٠١٥", event: "بدأ تطوير نظام الطيبات من خبرته في العناية المركزة" },
  { year: "٢٠١٨", event: "إطلاق نظام الطيبات على نطاق واسع عبر وسائل التواصل الاجتماعي" },
  { year: "٢٠٢٠", event: "انتشار النظام في مصر والدول العربية — ملايين المتابعين" },
  { year: "٢٠٢٣", event: "شغل منصب أستاذ مساعد بقسم الرعاية المركزة — آخر منصب أكاديمي" },
  { year: "أبريل ٢٠٢٦", event: "وفاته في دبي، الإمارات العربية المتحدة — رحمه الله" },
];

const principles = [
  {
    num: "١",
    title: "الالتهاب هو أصل الأمراض",
    body: "يرى النظام أن معظم الأمراض المزمنة — من السكري إلى أمراض القلب — مصدرها التهابات مزمنة منخفضة الدرجة في الجسم يغذّيها الطعام الخاطئ.",
  },
  {
    num: "٢",
    title: "الجهاز الهضمي بوّابة الصحة",
    body: "صحة الأمعاء تؤثر على كل شيء: المناعة، المزاج، الوزن، حتى صحة الجلد. النظام يُركّز على تهدئة الجهاز الهضمي أولاً.",
  },
  {
    num: "٣",
    title: "الفصل بين الطيّب والخبيث",
    body: "الأطعمة مُقسّمة إلى طيبات (تُغذّي وتعالج) وخبيثات (تُشعل الالتهاب وتضعف الجهاز الهضمي). الفصل بينهما هو جوهر النظام.",
  },
  {
    num: "٤",
    title: "التدرّج لا الصدمة",
    body: "لا يُنصح بالتطبيق الكامل دفعة واحدة. النظام يُشجّع على التدرّج لإعطاء الجسم الوقت الكافي للتأقلم والتعافي.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <div className="relative bg-gray-950 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80"
            alt="طبيب"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <span className="badge bg-primary-900/50 text-primary-400 border border-primary-800 mb-6">
            السيرة الذاتية
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 mt-3">
            الدكتور ضياء العوضي
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            طبيب مصري متخصص في التخدير والرعاية المركزة — أسّس نظاماً غذائياً علاجياً غيّر حياة الملايين
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="badge-green mb-4">من هو؟</span>
              <h2 className="text-3xl font-bold text-gray-900 mt-3 mb-6">
                استشاري الرعاية المركزة الذي ثار على الطب التقليدي
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  <strong className="text-gray-900">ضياء الدين شلبي محمد العوضي</strong> (١٩٧٩ – ٢٠٢٦)، طبيب مصري تخرّج من كلية الطب بجامعة عين شمس بتقدير امتياز، وحصل على دكتوراه في التخدير والرعاية المركزة وعلاج الألم.
                </p>
                <p>
                  عمل طويلاً في وحدات العناية المركزة، حيث لاحظ نمطاً متكرراً: كثير من المرضى الذين يدخلون الرعاية المركزة يشتركون في عادات غذائية مشتركة. هذه الملاحظات السريرية كانت بذرة نظام الطيبات.
                </p>
                <p>
                  في عام ٢٠١٨، بدأ ينشر نظامه عبر وسائل التواصل الاجتماعي ليجد صدىً واسعاً في العالم العربي. اتّسم النظام بالجرأة في تحدّي التوصيات الغذائية التقليدية.
                </p>
                <p className="text-sm bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800">
                  ⚠️ <strong>ملاحظة مهمة:</strong> نظام الطيبات أثار جدلاً علمياً واسعاً. استشر دائماً طبيبك أو أخصائي تغذية قبل البدء، خاصة في حالات السكري والحمل والأمراض المزمنة.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <Image
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80"
                  alt="طبيب"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white rounded-2xl p-4 shadow-green">
                <div className="text-2xl font-extrabold">٢٠١٥</div>
                <div className="text-xs text-primary-200">بداية النظام</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-earth mb-3">المسيرة</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">المحطات الرئيسية</h2>
          </div>
          <div className="relative">
            <div className="absolute right-[11px] top-0 bottom-0 w-0.5 bg-gray-200" />
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-5 items-start relative">
                  <div className="w-6 h-6 rounded-full bg-primary-600 border-4 border-white shadow flex-shrink-0 mt-0.5 relative z-10" />
                  <div className="bg-white rounded-xl p-4 shadow-card flex-1">
                    <span className="text-primary-600 font-bold text-sm">{item.year}</span>
                    <p className="text-gray-700 mt-1 text-sm leading-relaxed">{item.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="badge-green mb-3">الفلسفة</span>
            <h2 className="text-3xl font-bold text-gray-900 mt-3">مبادئ نظام الطيبات</h2>
            <p className="text-gray-500 mt-2 max-w-xl mx-auto">
              الأسس الفكرية التي يقوم عليها النظام
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((p) => (
              <div key={p.num} className="flex gap-5 p-6 rounded-2xl border border-gray-100 hover:border-primary-200 hover:shadow-card-hover transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-primary-600 text-white flex items-center justify-center text-xl font-extrabold flex-shrink-0">
                  {p.num}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YouTube Interview */}
      <section className="py-16 bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="badge bg-red-900/50 text-red-400 border border-red-800 mb-3">فيديو</span>
            <h2 className="text-2xl font-bold text-white mt-3">
              حلقة جريئة مع الدكتور ضياء العوضي
            </h2>
            <p className="text-gray-400 mt-2">الحقيقة الكاملة عن نظام الطيبات بصوته</p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-800">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/xBJDf1L6UzM"
                title="حلقة مع الدكتور ضياء العوضي"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-white border-t">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">ابدأ مع نظام الطيبات</h3>
          <p className="text-gray-500 mb-8">اطّلع على القائمة الكاملة للمسموحات والممنوعات</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/foods" className="btn-primary px-8 py-3">قائمة الطعام</Link>
            <Link href="/videos" className="btn-secondary px-8 py-3">شاهد الفيديوهات</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
