import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold text-white">نظام الطيبات</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              نهدف إلى تقريب مفهوم التغذية الصحية المبنية على اختيار الطيّب من الطعام والابتعاد عن كل ما يضر الجسد والعقل.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "الرئيسية" },
                { href: "/articles", label: "المقالات" },
                { href: "/tips", label: "نصائح عملية" },
                { href: "/contact", label: "تواصل معنا" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">تابعنا</h3>
            <p className="text-gray-400 mb-4">
              اشترك في نشرتنا البريدية واحصل على أحدث النصائح الصحية أسبوعياً.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-3 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-500 border border-gray-700 focus:outline-none focus:border-primary-500 text-sm"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
              >
                اشترك
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} نظام الطيبات. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
