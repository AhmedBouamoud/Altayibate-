"use client";

import { useState } from "react";

const faqs = [
  {
    q: "هل نظام الطيبات حمية غذائية صارمة؟",
    a: "لا على الإطلاق. نظام الطيبات هو منهج توعوي مرن يهدف إلى زيادة وعيك الغذائي تدريجياً، لا فرض قواعد صارمة.",
  },
  {
    q: "هل يُناسب المشغولين وأصحاب الوقت الضيّق؟",
    a: "بالتأكيد. كثير من نصائحنا مصممة للحياة اليومية المزدحمة — خطوات بسيطة لا تحتاج إلى وقت إضافي.",
  },
  {
    q: "كيف أبدأ؟",
    a: "ابدأ بقراءة مقال أو نصيحة واحدة وطبّقها. التغيير التدريجي أثبت نجاعته أكثر من التغيير الجذري الفوري.",
  },
  {
    q: "هل المحتوى موثوق علمياً؟",
    a: "نعم، نستند في محتوانا على أبحاث علمية وتوصيات تغذوية معتمدة، مع التبسيط للجمهور العام.",
  },
];

const contactInfo = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    label: "البريد الإلكتروني",
    value: "info@altayibate.com",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    label: "الموقع",
    value: "المملكة العربية السعودية",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    label: "وقت الاستجابة",
    value: "خلال ٢٤-٤٨ ساعة عمل",
    color: "bg-amber-50 text-amber-600",
  },
];

const subjects = [
  "سؤال غذائي",
  "اقتراح مقال",
  "مشاركة تجربة",
  "الإبلاغ عن خطأ",
  "تعاون أو شراكة",
  "أخرى",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-bl from-primary-50 via-white to-earth-50 py-16 section-pattern">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-green mb-4">تواصل معنا</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 mt-3">
            نحن هنا للاستماع
          </h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            سؤال، اقتراح، أو مشاركة تجربتك — يسعدنا التواصل معك
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Contact Form — spans 3 columns */}
          <div className="lg:col-span-3">
            <div className="card p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-6">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2.5" className="w-10 h-10">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    شكراً لتواصلك!
                  </h3>
                  <p className="text-gray-500 mb-8">
                    تلقّينا رسالتك وسنردّ عليك خلال ٢٤-٤٨ ساعة.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="btn-secondary"
                  >
                    إرسال رسالة أخرى
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-gray-900 mb-7">أرسل لنا رسالة</h2>
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          الاسم الكريم
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="محمد أحمد"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="your@email.com"
                          className="input-field"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        الموضوع
                      </label>
                      <select
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="input-field appearance-none bg-white"
                      >
                        <option value="" disabled>اختر موضوع رسالتك</option>
                        {subjects.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        الرسالة
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="اكتب رسالتك هنا..."
                        className="input-field resize-none"
                      />
                      <p className="text-xs text-gray-400 mt-1 text-left" dir="ltr">
                        {form.message.length} / 500
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="btn-primary w-full py-3.5 text-base"
                    >
                      {loading ? (
                        <>
                          <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          جارٍ الإرسال...
                        </>
                      ) : (
                        <>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                            <line x1="22" y1="2" x2="11" y2="13" />
                            <polygon points="22 2 15 22 11 13 2 9 22 2" />
                          </svg>
                          إرسال الرسالة
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>

          {/* Sidebar — spans 2 columns */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact Info */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-5">معلومات التواصل</h2>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex gap-4 items-center">
                    <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5 font-medium">{item.label}</p>
                      <p className="text-gray-800 font-semibold text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-5">أسئلة شائعة</h2>
              <div className="space-y-3">
                {faqs.map((faq, i) => (
                  <div
                    key={i}
                    className="border border-gray-100 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-right hover:bg-gray-50 transition-colors"
                    >
                      <span className="font-semibold text-gray-800 text-sm leading-snug">
                        {faq.q}
                      </span>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        className={`w-4 h-4 text-primary-600 flex-shrink-0 mr-3 transition-transform duration-200 ${
                          openFaq === i ? "rotate-180" : ""
                        }`}
                      >
                        <polyline points="6 9 12 15 18 9" />
                      </svg>
                    </button>
                    {openFaq === i && (
                      <div className="px-4 pb-4">
                        <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
