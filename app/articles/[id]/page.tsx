import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const articlesData: Record<
  string,
  {
    id: string;
    tag: string;
    emoji: string;
    color: string;
    title: string;
    excerpt: string;
    readTime: string;
    date: string;
    content: string[];
  }
> = {
  "1": {
    id: "1",
    tag: "تغذية",
    emoji: "🥗",
    color: "from-green-100 to-emerald-200",
    title: "لماذا يُعدّ السكر المكرّر من أكثر المواد ضرراً؟",
    excerpt:
      "السكر المضاف يرتبط بمخاطر صحية متعددة كالسمنة وأمراض القلب ومقاومة الأنسولين. في هذا المقال نكشف حقيقة السكر وكيف تتعامل معه بوعي.",
    readTime: "5 دقائق",
    date: "5 يونيو 2026",
    content: [
      "يُعدّ السكر المكرّر من أكثر المواد الغذائية التي تؤثر سلباً على الصحة في عصرنا الحديث. على عكس السكريات الطبيعية الموجودة في الفواكه والخضروات، يفتقر السكر المضاف إلى أي قيمة غذائية حقيقية.",
      "## ما الفرق بين السكر الطبيعي والمضاف؟",
      "السكر الطبيعي الموجود في الفواكه يأتي مصحوباً بالألياف والفيتامينات والمعادن، مما يُبطئ امتصاصه ويُقلّل تأثيره على مستوى السكر في الدم. أما السكر المضاف فيُمتص بسرعة كبيرة، مما يسبب ارتفاعاً حاداً في مستويات الأنسولين.",
      "## المخاطر الصحية المرتبطة بالسكر المضاف",
      "تشمل المخاطر الموثّقة علمياً: السمنة وزيادة الوزن، مقاومة الأنسولين وخطر الإصابة بالسكري من النوع الثاني، أمراض القلب والأوعية الدموية، التسوّس السني، والالتهابات المزمنة في الجسم.",
      "> السكر المضاف لا يُغذّي — بل يُنهك. كل سعرة منه هي سعرة فارغة لا تُقدّم لجسمك شيئاً مفيداً.",
      "## كيف تقلّل السكر المضاف بذكاء؟",
      "الخطوة الأولى هي القراءة الواعية لملصقات الطعام. ابحث عن الكلمات التالية في قائمة المكوّنات: سكروز، فركتوز، شراب الذرة عالي الفركتوز، دكستروز. كلما كانت هذه المكوّنات في بداية القائمة، زادت نسبة السكر في المنتج.",
      "استبدل المشروبات السكرية بالماء أو الشاي غير المحلّى. استخدم التمر أو العسل الطبيعي كبديل محدود المقدار. وتذكّر أن هدفنا ليس إلغاء كل حلاوة من حياتنا، بل تقليل السكر المضاف والاستمتاع بالحلوى الطبيعية.",
    ],
  },
  "2": {
    id: "2",
    tag: "وصفات",
    emoji: "🍳",
    color: "from-amber-100 to-orange-200",
    title: "وجبة إفطار متكاملة في 10 دقائق",
    excerpt:
      "ابدأ يومك بوجبة مغذية تمنحك الطاقة وتُحسّن تركيزك طوال الصباح. بروتين + كربوهيدرات معقدة + دهون مفيدة في عشر دقائق فقط.",
    readTime: "3 دقائق",
    date: "3 يونيو 2026",
    content: [
      "الإفطار هو الوجبة الأهم في اليوم — لكن كثيراً منّا يتخطّاه بسبب ضيق الوقت. الحل: إفطار متكامل في ١٠ دقائق فقط.",
      "## المكوّنات الأساسية للإفطار المثالي",
      "يحتاج الإفطار الجيد إلى ثلاثة عناصر: بروتين لتحسين التركيز والشبع، كربوهيدرات معقدة لطاقة مستدامة، ودهون صحية لامتصاص الفيتامينات.",
      "## الوصفة: بيض + خبز حبوب + أفوكادو",
      "المكوّنات: بيضتان، شريحتا خبز حبوب كاملة، نصف أفوكادو، رشة ملح وفلفل أسود، بضع قطرات عصير ليمون.",
      "الطريقة: سخّن المقلاة على نار متوسطة، اطهِ البيض حسب رغبتك (مقلي أو مسلوق سريع). في الوقت نفسه، حمّص الخبز. هرّس الأفوكادو مع الليمون والملح. ضع كل شيء معاً.",
      "> هذه الوجبة تُزوّدك بـ ٣٥ غرام بروتين، دهون صحية وفيرة، وألياف تُبقيك شبعاناً حتى الغداء.",
    ],
  },
  "3": {
    id: "3",
    tag: "أسلوب حياة",
    emoji: "🌿",
    color: "from-teal-100 to-green-200",
    title: "كيف تبدأ نظام الطيبات بدون قواعد صارمة؟",
    excerpt:
      "ليس نظام الطيبات حمية قاسية، بل هو وعي غذائي تدريجي يبدأ بخطوة واحدة. اكتشف كيف تبدأ بلا ضغط.",
    readTime: "7 دقائق",
    date: "1 يونيو 2026",
    content: [
      "كلمة 'نظام غذائي' تُثير في أذهاننا صور القيود والحرمان والقواعد الصارمة. نظام الطيبات مختلف تماماً — إنه منهج وعي، لا منهج حرمان.",
      "## ما هو نظام الطيبات؟",
      "نظام الطيبات هو فلسفة غذائية بسيطة: اختر الطعام الذي يُغذّيك ولا يضرّك. لا قوائم محظورة، لا حرمان كامل، لا أوزان وحسابات معقدة — فقط وعي تدريجي بما تأكله.",
      "## كيف تبدأ؟",
      "الخطوة الأولى هي الملاحظة: لمدة أسبوع، لاحظ فقط ما تأكله دون تغيير أي شيء. سجّل في دفتر أو تطبيق ما تتناوله. هذا الوعي الأولي هو أساس كل تغيير.",
      "ثم ابدأ بتغيير واحد صغير في الأسبوع: استبدل مشروباً سكرياً بالماء، أو أضف تفاحة لوجبتك، أو استبدل الخبز الأبيض بخبز الحبوب.",
      "> التغيير الحقيقي لا يحدث بالإجبار — بل بالفهم. حين تفهم لماذا تأكل شيئاً معيناً، يصبح الاختيار الأفضل أسهل.",
      "## علامات النجاح",
      "ستعرف أنك على الطريق الصحيح حين تُلاحظ: طاقة أكثر في الصباح، نوم أفضل، شبعاً أطول، وتحسّناً في المزاج. هذه ليست مصادفة — إنها نتائج مباشرة لتحسين التغذية.",
    ],
  },
};

export async function generateStaticParams() {
  return Object.keys(articlesData).map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const article = articlesData[params.id];
  if (!article) return { title: "مقال غير موجود" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

function renderContent(line: string, i: number) {
  if (line.startsWith("## ")) {
    return (
      <h2 key={i} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
        {line.slice(3)}
      </h2>
    );
  }
  if (line.startsWith("> ")) {
    return (
      <blockquote key={i} className="border-r-4 border-primary-500 bg-primary-50 px-5 py-4 my-6 rounded-lg text-primary-800 font-medium leading-relaxed">
        {line.slice(2)}
      </blockquote>
    );
  }
  return (
    <p key={i} className="text-gray-600 leading-loose mb-4">
      {line}
    </p>
  );
}

export default function ArticlePage({ params }: { params: { id: string } }) {
  const article = articlesData[params.id];
  if (!article) notFound();

  const tagColors: Record<string, string> = {
    تغذية: "bg-green-50 text-green-700",
    وصفات: "bg-amber-50 text-amber-700",
    "أسلوب حياة": "bg-teal-50 text-teal-700",
    "صحة نفسية": "bg-violet-50 text-violet-700",
    أطفال: "bg-pink-50 text-pink-700",
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className={`h-64 md:h-80 bg-gradient-to-br ${article.color} flex items-center justify-center text-8xl md:text-9xl`}>
        {article.emoji}
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
          <Link href="/" className="hover:text-primary-600 transition-colors">
            الرئيسية
          </Link>
          <span>/</span>
          <Link href="/articles" className="hover:text-primary-600 transition-colors">
            المقالات
          </Link>
          <span>/</span>
          <span className="text-gray-600 line-clamp-1">{article.title}</span>
        </nav>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`badge ${tagColors[article.tag] ?? "badge-green"}`}>
            {article.tag}
          </span>
          <span className="text-gray-400 text-sm">{article.date}</span>
          <span className="text-gray-400 text-sm flex items-center gap-1">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-3.5 h-3.5">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            {article.readTime} للقراءة
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
          {article.title}
        </h1>
        <p className="text-lg text-gray-500 leading-relaxed mb-10 border-b border-gray-100 pb-10">
          {article.excerpt}
        </p>

        {/* Content */}
        <div className="prose-ar">
          {article.content.map((line, i) => renderContent(line, i))}
        </div>

        {/* Back */}
        <div className="mt-14 pt-8 border-t border-gray-100 flex items-center justify-between">
          <Link href="/articles" className="btn-secondary">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            العودة للمقالات
          </Link>
          <Link href="/tips" className="btn-primary">
            نصائح عملية
          </Link>
        </div>
      </div>
    </div>
  );
}
