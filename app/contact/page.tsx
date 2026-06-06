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
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-bl from-primary-50 to-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-3">تواصل معنا</h1>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            سؤال، اقتراح، أو مشاركة تجربتك — نحن هنا ويسعدنا الاستماع
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="card p-8">
            {submitted ? (
              <div className="text-center py-10">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  شكراً لتواصلك!
                </h3>
                <p className="text-gray-500">
                  تلقّينا رسالتك وسنردّ عليك خلال 24-48 ساعة.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-primary mt-6"
                >
                  إرسال رسالة أخرى
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">أرسل رسالة</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        الاسم
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="اسمك الكريم"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        البريد الإلكتروني
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="your@email.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                        dir="ltr"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      الموضوع
                    </label>
                    <input
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      placeholder="موضوع رسالتك"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      الرسالة
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="اكتب رسالتك هنا..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all resize-none"
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full py-3 text-base">
                    إرسال الرسالة
                  </button>
                </form>
              </>
            )}
          </div>

          {/* Info + FAQ */}
          <div className="space-y-8">
            {/* Contact Info */}
            <div className="card p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-5">معلومات التواصل</h2>
              <div className="space-y-4">
                {[
                  { icon: "📧", label: "البريد الإلكتروني", value: "info@altayibate.com" },
                  { icon: "📍", label: "الموقع", value: "المملكة العربية السعودية" },
                  { icon: "⏰", label: "وقت الاستجابة", value: "24-48 ساعة عمل" },
                ].map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-xl flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                      <p className="text-gray-700 font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-4">أسئلة شائعة</h2>
              <div className="space-y-4">
                {faqs.map((faq, i) => (
                  <div key={i} className="card p-5">
                    <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-snug">
                      {faq.q}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
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
