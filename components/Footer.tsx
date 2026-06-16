"use client";

import Link from "next/link";

const quickLinks = [
  { href: "/", label: "الرئيسية" },
  { href: "/drous", label: "الدروس" },
  { href: "/infographie", label: "الإنفوغرافيك" },
  { href: "/manhajiya", label: "المنهجية" },
  { href: "/imtihane", label: "الامتحانات" },
  { href: "/contact", label: "تواصل معنا" },
];

const levels = [
  { label: "الثالثة إعدادي — التاريخ", href: "/drous" },
  { label: "الثالثة إعدادي — الجغرافيا", href: "/drous" },
  { label: "الأولى باكالوريا — التاريخ", href: "/drous" },
  { label: "الأولى باكالوريا — الجغرافيا", href: "/drous" },
  { label: "الإنفوغرافيك التعليمي", href: "/infographie" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                  <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="text-lg font-extrabold text-white">الأستاذة حنانة</span>
            </Link>
            <p className="text-gray-500 leading-relaxed text-sm mb-6">
              موقع تعليمي متخصص في مادة الاجتماعيات — ملخصات شاملة وإنفوغرافيك تفاعلي ومناهج تحليل للثالثة إعدادي والأولى باكالوريا.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="يوتيوب"
                className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-700 hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
              <a
                href="#"
                aria-label="إنستقرام"
                className="w-9 h-9 rounded-xl bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary-700 hover:text-white transition-all duration-200"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-primary-500 transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Levels */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              المستويات الدراسية
            </h3>
            <ul className="space-y-3">
              {levels.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-700 group-hover:bg-primary-500 transition-colors" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              عن الموقع
            </h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              موقع تعليمي يوفر ملخصات وإنفوغرافيك ومناهج تحليل لمادة الاجتماعيات (التاريخ والجغرافيا) للمستويين الإعدادي والثانوي.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white text-sm px-4 py-2.5 rounded-xl hover:bg-primary-500 transition-colors font-semibold"
            >
              تواصل معنا
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} الأستاذة حنانة | الاجتماعيات. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4 text-xs text-gray-600">
            <Link href="/drous" className="hover:text-gray-400 transition-colors">
              الدروس
            </Link>
            <span>·</span>
            <Link href="/infographie" className="hover:text-gray-400 transition-colors">
              الإنفوغرافيك
            </Link>
            <span>·</span>
            <Link href="/manhajiya" className="hover:text-gray-400 transition-colors">
              المنهجية
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
