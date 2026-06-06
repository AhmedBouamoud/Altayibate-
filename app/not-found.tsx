import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-primary-50 to-white section-pattern">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="text-8xl mb-6">🌿</div>
        <h1 className="text-6xl font-extrabold text-primary-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          هذه الصفحة غير موجودة
        </h2>
        <p className="text-gray-500 mb-8 leading-relaxed">
          يبدو أن الصفحة التي تبحث عنها قد انتقلت أو لم تُنشأ بعد. لا تقلق — لديك الكثير لاستكشافه!
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary">
            العودة للرئيسية
          </Link>
          <Link href="/articles" className="btn-secondary">
            اقرأ المقالات
          </Link>
        </div>
      </div>
    </div>
  );
}
