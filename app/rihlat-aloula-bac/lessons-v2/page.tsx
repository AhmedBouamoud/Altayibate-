"use client";

import { useEffect, useMemo, useState } from "react";

/* =====================================================================
   نموذج بيانات الدرس — النسخة الثانية (lessons-v2)
   كل درس يحمل مُعرِّفاً تسلسلياً id يُستعمل كمرساة رابط: #lesson-{id}
   ===================================================================== */
type Concept = { term: string; def: string };
type DateItem = { date: string; event: string };
type Axis = { heading: string; body: string };

type Lesson = {
  id: number; // تسلسلي عبر كامل الصفحة → المرساة lesson-{id}
  subject: "التاريخ" | "الجغرافيا";
  semester: "الفصل الأول" | "الفصل الثاني";
  title: string;
  status: "مكتمل" | "قريباً";
  minutes?: number; // زمن المذاكرة التقديري
  objectives?: string[]; // أهداف الدرس
  intro?: string; // تمهيد
  axes?: Axis[]; // محاور الدرس
  concepts?: Concept[]; // المفاهيم الأساسية
  dates?: DateItem[]; // محطات ومعطيات مفتاحية
};

/* ---------------------------------------------------------------------
   دروس الأولى باكالوريا — مادة الاجتماعيات (التاريخ + الجغرافيا)
   الترقيم التسلسلي id يبدأ من 1 (أول درس تاريخ) ليطابق #lesson-1
   --------------------------------------------------------------------- */
const LESSONS: Lesson[] = [
  // ===================== التاريخ =====================
  {
    id: 1,
    subject: "التاريخ",
    semester: "الفصل الأول",
    title: "التحولات الاقتصادية والاجتماعية والفكرية بأوروبا خلال القرن 19م",
    status: "مكتمل",
    minutes: 12,
    intro:
      "شهدت أوروبا خلال القرن 19م تحولات عميقة شملت الاقتصاد والمجتمع والفكر، كانت نتيجة مباشرة للثورة الصناعية الثانية التي رسّخت النظام الرأسمالي وأعادت تشكيل بنية المجتمع الأوروبي وأفرزت تيارات فكرية متصارعة لا تزال آثارها حاضرة إلى اليوم.",
    objectives: [
      "تحديد مظاهر التحولات الاقتصادية بأوروبا خلال القرن 19م.",
      "إبراز انعكاسات هذه التحولات على البنية الاجتماعية.",
      "التعرف على أهم التيارات الفكرية التي رافقت هذه التحولات.",
    ],
    axes: [
      {
        heading: "التحولات الاقتصادية",
        body: "قامت الثورة الصناعية الثانية على مصادر جديدة للطاقة (الكهرباء والبترول) وعلى تطور الصناعات الكيماوية والميكانيكية. صاحبها ظهور الرأسمالية المالية وتنامي دور الأبناك والبورصة، وبروز التركيز الرأسمالي عبر الاحتكارات والشركات الكبرى (الكارتيل والتروست)، مع توسع المبادلات التجارية الدولية.",
      },
      {
        heading: "التحولات الاجتماعية",
        body: "أفرزت هذه التحولات مجتمعاً طبقياً واضح المعالم: برجوازية صناعية ومالية مالكة لوسائل الإنتاج في القمة، وطبقة عاملة (البروليتاريا) تعاني ظروف عمل قاسية في القاعدة. أدى ذلك إلى نشوء الحركة العمالية والنقابات وتصاعد الاحتجاجات المطالبة بتحسين ظروف الشغل.",
      },
      {
        heading: "التحولات الفكرية",
        body: "ظهرت تيارات فكرية متعددة: الليبرالية المدافعة عن الحرية الفردية والاقتصاد الحر، والاشتراكية والماركسية المنادية بالملكية الجماعية والعدالة الاجتماعية، إضافة إلى الوضعية والداروينية اللتين رسختا الإيمان بالعلم والتطور.",
      },
    ],
    concepts: [
      { term: "الرأسمالية المالية", def: "نظام يهيمن فيه رأس المال البنكي والمالي على النشاط الاقتصادي." },
      { term: "الليبرالية", def: "تيار فكري يقدّس الحرية الفردية والملكية الخاصة والاقتصاد الحر." },
      { term: "الاشتراكية", def: "تيار يدعو إلى الملكية الجماعية لوسائل الإنتاج وتوزيع عادل للثروات." },
      { term: "الماركسية", def: "نظرية كارل ماركس القائمة على مفهوم الصراع الطبقي بين البرجوازية والبروليتاريا." },
      { term: "البروليتاريا", def: "الطبقة العاملة التي لا تملك سوى قوة عملها." },
    ],
    dates: [
      { date: "1848", event: "صدور «البيان الشيوعي» لماركس وإنجلز." },
      { date: "أواخر القرن 19م", event: "انطلاق الثورة الصناعية الثانية (الكهرباء والبترول)." },
    ],
  },
  {
    id: 2,
    subject: "التاريخ",
    semester: "الفصل الأول",
    title: "التنافس الإمبريالي والحرب العالمية الأولى",
    status: "مكتمل",
    minutes: 11,
    intro:
      "دفع التنافس الإمبريالي بين القوى الأوروبية على المستعمرات والأسواق ومناطق النفوذ إلى تشكل تحالفات عسكرية متنافسة، سرعان ما انفجرت في حرب عالمية طاحنة (1914-1918).",
    objectives: [
      "إبراز مظاهر التنافس الإمبريالي بين القوى الأوروبية.",
      "تفسير اندلاع الحرب العالمية الأولى.",
      "استخلاص نتائجها على أوروبا والعالم.",
    ],
    axes: [
      {
        heading: "التنافس الإمبريالي",
        body: "تسابقت القوى الأوروبية على اقتسام المستعمرات وأسواق التصريف ومصادر المواد الأولية، ما أدى إلى أزمات دولية حادة (أزمتا المغرب 1905 و1911) وسباق التسلح.",
      },
      {
        heading: "التحالفات المتنافسة",
        body: "تشكّل التحالف الثلاثي (ألمانيا، النمسا-المجر، إيطاليا) في مواجهة الوفاق الثلاثي (فرنسا، بريطانيا، روسيا)، فتحول الصراع المحلي إلى صراع كوني.",
      },
      {
        heading: "الحرب ونتائجها",
        body: "كان اغتيال ولي عهد النمسا فرانز فرديناند بسراييفو 1914 الشرارة المباشرة. دامت الحرب أربع سنوات وخلّفت نحو 10 ملايين قتيل، وانتهت بمعاهدة فرساي 1919 وانهيار إمبراطوريات وإعادة رسم خريطة أوروبا.",
      },
    ],
    concepts: [
      { term: "الإمبريالية", def: "سياسة التوسع والهيمنة الاستعمارية بحثاً عن الأسواق والموارد." },
      { term: "التحالف الثلاثي", def: "تكتل ألمانيا والنمسا-المجر وإيطاليا." },
      { term: "الوفاق الثلاثي", def: "تكتل فرنسا وبريطانيا وروسيا." },
    ],
    dates: [
      { date: "1914", event: "اغتيال فرانز فرديناند واندلاع الحرب." },
      { date: "1919", event: "معاهدة فرساي." },
    ],
  },
  {
    id: 3,
    subject: "التاريخ",
    semester: "الفصل الأول",
    title: "اليقظة الفكرية في المشرق العربي",
    status: "قريباً",
  },
  {
    id: 4,
    subject: "التاريخ",
    semester: "الفصل الأول",
    title: "الضغوط الاستعمارية على المغرب ومحاولات الإصلاح",
    status: "مكتمل",
    minutes: 10,
    intro:
      "تصاعدت الأطماع الأوروبية على المغرب خلال القرن 19م، فواجه ضغوطاً عسكرية واقتصادية ودبلوماسية دفعت سلاطينه إلى محاولة الإصلاح لتحديث الدولة.",
    objectives: [
      "تحديد أشكال الضغط الاستعماري على المغرب.",
      "التعرف على محاولات الإصلاح ومحدوديتها.",
    ],
    axes: [
      {
        heading: "الضغوط الاستعمارية",
        body: "مارست فرنسا وإسبانيا وبريطانيا ضغطاً عسكرياً واقتصادياً ودبلوماسياً، تُوّج بهزائم عسكرية: معركة إيسلي 1844 ضد فرنسا وحرب تطوان 1860 ضد إسبانيا، إضافة إلى معاهدات تجارية أضعفت الاقتصاد الوطني.",
      },
      {
        heading: "محاولات الإصلاح",
        body: "قام السلاطين — خاصة الحسن الأول — بإصلاحات عسكرية وإدارية ومالية وتعليمية لتحديث الدولة، لكنها اصطدمت بضعف الموارد ومقاومة الداخل وتزايد التدخل الأجنبي.",
      },
    ],
    concepts: [
      { term: "معركة إيسلي", def: "هزيمة المغرب أمام فرنسا سنة 1844." },
      { term: "الإصلاحات", def: "محاولات تحديث الجيش والإدارة والمالية والتعليم." },
    ],
    dates: [
      { date: "1844", event: "معركة إيسلي." },
      { date: "1860", event: "حرب تطوان." },
    ],
  },
  {
    id: 5,
    subject: "التاريخ",
    semester: "الفصل الثاني",
    title: "أوروبا بين نهاية الحرب العالمية الأولى وأزمة 1929",
    status: "مكتمل",
    minutes: 10,
    intro:
      "خرجت أوروبا من الحرب العالمية الأولى منهكة، ففرضت معاهدة فرساي شروطاً قاسية على ألمانيا، ثم جاءت أزمة 1929 لتزيد الوضع اشتعالاً وتفتح الباب أمام الأنظمة الشمولية.",
    objectives: [
      "إبراز أوضاع أوروبا بعد الحرب العالمية الأولى.",
      "تفسير أزمة 1929 ونتائجها.",
    ],
    axes: [
      {
        heading: "أوروبا بعد الحرب",
        body: "فرضت معاهدة فرساي على ألمانيا خسائر ترابية وتعويضات مالية ضخمة أثارت استياءً عميقاً، في حين عرفت أوروبا صعوبات في إعادة البناء الاقتصادي.",
      },
      {
        heading: "أزمة 1929",
        body: "انطلقت من انهيار بورصة وول ستريت بنيويورك (الخميس الأسود) وامتد الكساد إلى أوروبا: إفلاس الأبناك وارتفاع البطالة وتراجع الإنتاج، ما مهّد لصعود النازية والفاشية.",
      },
    ],
    concepts: [
      { term: "معاهدة فرساي", def: "معاهدة السلام التي عاقبت ألمانيا سنة 1919." },
      { term: "الكساد الكبير", def: "الأزمة الاقتصادية العالمية المنطلقة سنة 1929." },
      { term: "الشمولية", def: "نظام يسيطر فيه الحزب الواحد على الدولة والمجتمع." },
    ],
    dates: [
      { date: "1919", event: "معاهدة فرساي." },
      { date: "24 أكتوبر 1929", event: "انهيار بورصة وول ستريت." },
    ],
  },
  {
    id: 6,
    subject: "التاريخ",
    semester: "الفصل الثاني",
    title: "الحرب العالمية الثانية",
    status: "مكتمل",
    minutes: 12,
    intro:
      "أشعل التوسع النازي وفشل سياسة الاسترضاء حرباً عالمية ثانية (1939-1945) كانت الأعنف في التاريخ، غيّرت موازين القوى وأسست لنظام دولي جديد.",
    objectives: [
      "تحديد أسباب الحرب العالمية الثانية ومراحلها.",
      "استخلاص نتائجها على العالم.",
    ],
    axes: [
      {
        heading: "الأسباب والمراحل",
        body: "نتجت الحرب عن التوسع النازي وفشل سياسة الاسترضاء وغزو ألمانيا لبولندا 1939. عرفت انتصارات المحور أولاً، ثم تحوّلت الكفة لصالح الحلفاء بعد 1942 (ستالينغراد، الإنزال بنورماندي 1944).",
      },
      {
        heading: "النتائج",
        body: "خلّفت نحو 60 مليون قتيل والمحرقة، وانتهت بإلقاء القنبلة الذرية على اليابان 1945، وأفضت إلى تأسيس منظمة الأمم المتحدة وبداية الحرب الباردة بين المعسكرين.",
      },
    ],
    concepts: [
      { term: "المحرقة", def: "الإبادة الجماعية المنظمة لليهود من طرف النازية." },
      { term: "الحرب الباردة", def: "الصراع بين المعسكرين الغربي والشرقي دون مواجهة عسكرية مباشرة." },
      { term: "الأمم المتحدة", def: "المنظمة الدولية المؤسسة سنة 1945 لحفظ السلم." },
    ],
    dates: [
      { date: "1939", event: "غزو بولندا واندلاع الحرب." },
      { date: "1944", event: "الإنزال في نورماندي." },
      { date: "1945", event: "استسلام اليابان وتأسيس الأمم المتحدة." },
    ],
  },
  {
    id: 7,
    subject: "التاريخ",
    semester: "الفصل الثاني",
    title: "المغرب في ظل الحماية — الاستغلال والمقاومة",
    status: "قريباً",
  },
  {
    id: 8,
    subject: "التاريخ",
    semester: "الفصل الثاني",
    title: "نضال المغرب من أجل الاستقلال وإتمام الوحدة الترابية",
    status: "قريباً",
  },
  // ===================== الجغرافيا =====================
  {
    id: 9,
    subject: "الجغرافيا",
    semester: "الفصل الأول",
    title: "مفهوم التنمية وخريطة العالم",
    status: "مكتمل",
    minutes: 10,
    intro:
      "التنمية مفهوم شامل يتجاوز النمو الاقتصادي ليشمل الأبعاد الاجتماعية والبيئية، وتُقاس بمؤشرات دقيقة تكشف التفاوت الكبير بين دول الشمال ودول الجنوب.",
    objectives: [
      "تعريف مفهوم التنمية وتمييزه عن النمو.",
      "التعرف على مؤشرات التنمية وتصنيف دول العالم.",
    ],
    axes: [
      {
        heading: "مفهوم التنمية ومؤشراتها",
        body: "التنمية عملية شاملة لتحسين مستوى المعيشة تشمل أبعاداً اقتصادية واجتماعية وبيئية. من أهم مؤشراتها مؤشر التنمية البشرية (IDH) والدخل الفردي ونسب التعليم والصحة.",
      },
      {
        heading: "خريطة العالم",
        body: "تُصنَّف الدول إلى متقدمة (الشمال) ونامية (الجنوب) مع بروز دول ناشئة، ما يكشف عن فجوة تنموية عميقة بين شمال العالم وجنوبه.",
      },
    ],
    concepts: [
      { term: "التنمية البشرية", def: "مفهوم شامل يتجاوز الدخل ليشمل التعليم والصحة والعيش الكريم." },
      { term: "مؤشر IDH", def: "مؤشر يجمع العمر المتوقع ومستوى التعليم والدخل." },
      { term: "الفجوة الشمال-الجنوب", def: "التفاوت التنموي بين الدول المتقدمة والدول النامية." },
    ],
  },
  {
    id: 10,
    subject: "الجغرافيا",
    semester: "الفصل الأول",
    title: "المجال المغربي — الموارد الطبيعية والبشرية",
    status: "مكتمل",
    minutes: 10,
    intro:
      "يتوفر المغرب على موارد طبيعية وبشرية مهمة تشكّل رافعة للتنمية، غير أن حسن تدبيرها وتوزيعها المجالي يبقى تحدياً أساسياً.",
    objectives: [
      "جرد الموارد الطبيعية والبشرية للمغرب.",
      "إبراز إكراهات تدبير هذه الموارد.",
    ],
    axes: [
      {
        heading: "الموارد الطبيعية",
        body: "يمتلك المغرب نحو 70% من الاحتياطي العالمي للفوسفات، إضافة إلى موارد بحرية غنية وإمكانات كبيرة في الطاقات المتجددة (الشمس والرياح).",
      },
      {
        heading: "الموارد البشرية",
        body: "يقارب عدد السكان 37 مليون نسمة، مع تحديات الأمية والبطالة وتركز السكان في السهول الساحلية والمدن الكبرى نتيجة التحضر.",
      },
    ],
    concepts: [
      { term: "الفوسفات", def: "ثروة معدنية يملك المغرب أكبر احتياطي عالمي منها." },
      { term: "التحضر", def: "انتقال السكان من الريف إلى المدن." },
    ],
  },
  {
    id: 11,
    subject: "الجغرافيا",
    semester: "الفصل الأول",
    title: "الاختيارات الكبرى لإعداد التراب الوطني",
    status: "قريباً",
  },
  {
    id: 12,
    subject: "الجغرافيا",
    semester: "الفصل الأول",
    title: "التهيئة الحضرية والريفية",
    status: "قريباً",
  },
  {
    id: 13,
    subject: "الجغرافيا",
    semester: "الفصل الثاني",
    title: "مشكل الماء والتصحر في العالم العربي",
    status: "مكتمل",
    minutes: 9,
    intro:
      "يعاني العالم العربي من ندرة الماء وزحف التصحر بفعل عوامل مناخية وبشرية، ما يهدد الأمن الغذائي ويستدعي حلولاً مستدامة.",
    objectives: [
      "تحديد أسباب مشكل الماء والتصحر.",
      "اقتراح حلول للتدبير المستدام للموارد المائية.",
    ],
    axes: [
      {
        heading: "الأسباب",
        body: "يرجع مشكل الماء والتصحر إلى المناخ الجاف وقلة التساقطات، إضافة إلى الضغط البشري والرعي الجائر وقطع الأشجار وسوء التدبير.",
      },
      {
        heading: "الحلول",
        body: "بناء السدود وترشيد استهلاك الماء واعتماد الري بالتنقيط ومحاربة التصحر بالتشجير وتثبيت الرمال.",
      },
    ],
    concepts: [
      { term: "الإجهاد المائي", def: "نقص الموارد المائية مقارنة بالحاجيات." },
      { term: "التصحر", def: "تحول الأراضي الخصبة إلى أراضٍ صحراوية." },
    ],
  },
  {
    id: 14,
    subject: "الجغرافيا",
    semester: "الفصل الثاني",
    title: "الولايات المتحدة الأمريكية — قوة اقتصادية عالمية",
    status: "مكتمل",
    minutes: 9,
    intro:
      "تُعد الولايات المتحدة الأمريكية أكبر قوة اقتصادية في العالم، بفضل إمكاناتها الطبيعية والبشرية الهائلة وهيمنتها الصناعية والمالية والتكنولوجية.",
    objectives: [
      "جرد إمكانات القوة الأمريكية.",
      "إبراز مظاهر الهيمنة الاقتصادية.",
    ],
    axes: [
      {
        heading: "الإمكانات",
        body: "مساحة شاسعة وموارد طبيعية ضخمة وسوق داخلية واسعة ورأسمال بشري ومالي كبير، تجعل منها أكبر اقتصاد عالمي.",
      },
      {
        heading: "مظاهر القوة",
        body: "هيمنة صناعية وفلاحية ومالية وتكنولوجية، وانتشار للنموذج الأمريكي عالمياً عبر العولمة.",
      },
    ],
    concepts: [
      { term: "الهيمنة الاقتصادية", def: "تفوق دولة على غيرها في الاقتصاد العالمي." },
      { term: "العولمة", def: "انتشار المبادلات والنماذج الاقتصادية والثقافية على المستوى العالمي." },
    ],
  },
  {
    id: 15,
    subject: "الجغرافيا",
    semester: "الفصل الثاني",
    title: "الاتحاد الأوروبي — اندماج شامل",
    status: "قريباً",
  },
  {
    id: 16,
    subject: "الجغرافيا",
    semester: "الفصل الثاني",
    title: "الصين — قوة صاعدة",
    status: "قريباً",
  },
];

const SUBJECT_STYLES: Record<
  Lesson["subject"],
  { badge: string; ring: string; dot: string; soft: string }
> = {
  التاريخ: {
    badge: "bg-earth-100 text-earth-700 border-earth-200",
    ring: "ring-earth-200",
    dot: "bg-earth-500",
    soft: "bg-earth-50",
  },
  الجغرافيا: {
    badge: "bg-primary-50 text-primary-700 border-primary-200",
    ring: "ring-primary-200",
    dot: "bg-primary-500",
    soft: "bg-primary-50",
  },
};

/* ============================ الفهرس الجانبي ============================ */
function TableOfContents({
  lessons,
  activeId,
}: {
  lessons: Lesson[];
  activeId: number | null;
}) {
  return (
    <nav aria-label="فهرس الدروس" className="space-y-1">
      <p className="text-xs font-bold text-gray-400 px-3 mb-2">فهرس الدروس</p>
      {lessons.map((l) => {
        const active = activeId === l.id;
        const style = SUBJECT_STYLES[l.subject];
        return (
          <a
            key={l.id}
            href={`#lesson-${l.id}`}
            className={`flex items-center gap-2.5 rounded-xl px-3 py-2 text-sm transition-all ${
              active
                ? "bg-primary-50 text-primary-800 font-bold shadow-sm"
                : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span
              className={`flex-shrink-0 w-6 h-6 rounded-lg text-[11px] font-bold flex items-center justify-center text-white ${style.dot} ${
                l.status === "قريباً" ? "opacity-40" : ""
              }`}
            >
              {l.id}
            </span>
            <span className="line-clamp-1 flex-1">{l.title}</span>
            {l.status === "قريباً" && (
              <span className="flex-shrink-0 text-[9px] text-gray-400">قريباً</span>
            )}
          </a>
        );
      })}
    </nav>
  );
}

/* ============================ بطاقة الدرس ============================ */
function LessonSection({ lesson }: { lesson: Lesson }) {
  const [copied, setCopied] = useState(false);
  const style = SUBJECT_STYLES[lesson.subject];
  const done = lesson.status === "مكتمل";

  const copyLink = () => {
    const url = `${window.location.origin}${window.location.pathname}#lesson-${lesson.id}`;
    navigator.clipboard?.writeText(url).then(
      () => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      },
      () => {}
    );
  };

  return (
    <section
      id={`lesson-${lesson.id}`}
      className="scroll-mt-28 card-flat"
    >
      <div className={`h-1.5 w-full ${style.dot}`} />
      <div className="p-6 sm:p-8">
        {/* رأس الدرس */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`flex-shrink-0 w-11 h-11 rounded-2xl text-lg font-extrabold flex items-center justify-center text-white ${style.dot}`}
            >
              {lesson.id}
            </span>
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`badge border ${style.badge}`}>{lesson.subject}</span>
              <span className="text-xs text-gray-400">{lesson.semester}</span>
              {lesson.minutes && done && (
                <span className="text-xs text-gray-400">· ⏱ {lesson.minutes} د</span>
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span
              className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                done ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-400"
              }`}
            >
              {done ? "✓ مكتمل" : "قريباً"}
            </span>
            <button
              onClick={copyLink}
              title="نسخ رابط الدرس"
              aria-label="نسخ رابط الدرس"
              className="text-gray-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg p-1.5 transition-colors"
            >
              {copied ? (
                <span className="text-[11px] font-bold text-primary-600 px-1">نُسخ ✓</span>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <h2 className={`text-xl sm:text-2xl font-extrabold leading-snug mb-3 ${done ? "text-gray-900" : "text-gray-400"}`}>
          {lesson.title}
        </h2>

        {!done && (
          <p className="text-gray-400 text-sm">
            سيتم نشر ملخص هذا الدرس قريباً بإذن الله.
          </p>
        )}

        {done && lesson.intro && (
          <p className="text-gray-600 leading-relaxed mb-6 border-r-4 border-gray-100 pr-4">
            {lesson.intro}
          </p>
        )}

        {done && lesson.objectives && (
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
              🎯 أهداف الدرس
            </h3>
            <ul className="space-y-1.5">
              {lesson.objectives.map((o, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                  <span className="text-primary-500 mt-0.5">◾</span>
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {done && lesson.axes && (
          <div className="mb-6 space-y-4">
            <h3 className="text-sm font-bold text-gray-700 flex items-center gap-2">
              📖 محاور الدرس
            </h3>
            {lesson.axes.map((ax, i) => (
              <div key={i} className={`rounded-2xl p-4 ${style.soft}`}>
                <p className="font-bold text-gray-800 mb-1 text-sm">{ax.heading}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{ax.body}</p>
              </div>
            ))}
          </div>
        )}

        {done && lesson.concepts && (
          <div className="mb-6">
            <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              🔑 المفاهيم الأساسية
            </h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {lesson.concepts.map((c, i) => (
                <div key={i} className="rounded-xl border border-gray-100 bg-white p-3">
                  <p className="font-bold text-primary-700 text-sm mb-0.5">{c.term}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{c.def}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {done && lesson.dates && lesson.dates.length > 0 && (
          <div>
            <h3 className="text-sm font-bold text-gray-700 mb-3 flex items-center gap-2">
              📅 محطات ومعطيات مفتاحية
            </h3>
            <ul className="space-y-2">
              {lesson.dates.map((d, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <span className={`flex-shrink-0 font-bold text-white text-xs px-2.5 py-1 rounded-lg ${style.dot}`}>
                    {d.date}
                  </span>
                  <span className="text-gray-600">{d.event}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

/* ============================ الصفحة ============================ */
export default function LessonsV2Page() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [showTop, setShowTop] = useState(false);
  const [subject, setSubject] = useState<"الكل" | Lesson["subject"]>("الكل");

  const filtered = useMemo(
    () => (subject === "الكل" ? LESSONS : LESSONS.filter((l) => l.subject === subject)),
    [subject]
  );

  const doneCount = LESSONS.filter((l) => l.status === "مكتمل").length;

  // تتبع القسم النشط عبر IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          const id = Number(visible[0].target.id.replace("lesson-", ""));
          if (!Number.isNaN(id)) setActiveId(id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    const sections = document.querySelectorAll("section[id^='lesson-']");
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [filtered]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 py-16 overflow-hidden">
        <div className="hero-orb bg-primary-400/30 w-72 h-72 -top-20 -left-10" />
        <div className="hero-orb bg-earth-400/20 w-72 h-72 -bottom-24 -right-10" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            🚀 رحلة الأولى باك · النسخة الثانية من الدروس
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            دروس الأولى باكالوريا
          </h1>
          <p className="text-primary-200 text-lg max-w-2xl mx-auto">
            ملخصات منظّمة لمادة الاجتماعيات (التاريخ والجغرافيا) بأهداف واضحة ومحاور ومفاهيم أساسية — مع رابط مباشر لكل درس.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8 text-white">
            <div className="text-center">
              <div className="text-3xl font-extrabold">{LESSONS.length}</div>
              <div className="text-xs text-primary-200">درس</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-extrabold text-green-300">{doneCount}</div>
              <div className="text-xs text-primary-200">مكتمل</div>
            </div>
            <div className="w-px h-10 bg-white/20" />
            <div className="text-center">
              <div className="text-3xl font-extrabold text-primary-300">
                {Math.round((doneCount / LESSONS.length) * 100)}%
              </div>
              <div className="text-xs text-primary-200">نسبة الإنجاز</div>
            </div>
          </div>
        </div>
      </section>

      {/* شريط التصفية */}
      <section className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-gray-400 ml-2">تصفية حسب المادة:</span>
            {(["الكل", "التاريخ", "الجغرافيا"] as const).map((s) => (
              <button
                key={s}
                onClick={() => setSubject(s)}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all border ${
                  subject === s
                    ? "bg-primary-600 text-white border-primary-600"
                    : "bg-white text-gray-600 border-gray-200 hover:border-primary-300"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* المحتوى */}
      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* الفهرس الجانبي */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto pl-2 pb-6">
                <TableOfContents lessons={filtered} activeId={activeId} />
              </div>
            </aside>

            {/* قائمة الدروس */}
            <div className="space-y-6 min-w-0">
              {filtered.map((lesson) => (
                <LessonSection key={lesson.id} lesson={lesson} />
              ))}
              {filtered.length === 0 && (
                <div className="text-center py-20 text-gray-400">
                  <div className="text-5xl mb-4">📚</div>
                  <p className="text-lg font-semibold">لا توجد دروس في هذا التصنيف</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* زر العودة للأعلى */}
      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="العودة إلى الأعلى"
          className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full bg-primary-600 text-white shadow-green hover:bg-primary-700 active:scale-95 transition-all flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
      )}
    </>
  );
}
