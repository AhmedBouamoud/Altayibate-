"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/articles", label: "المقالات" },
  { href: "/tips", label: "نصائح عملية" },
  { href: "/contact", label: "تواصل معنا" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🌿</span>
            <span className="text-xl font-bold text-primary-700">نظام الطيبات</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 rounded-lg text-gray-600 hover:text-primary-700 hover:bg-primary-50 font-medium transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary mr-2 py-2 text-sm">
              ابدأ الآن
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-6 bg-gray-600 transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t px-4 py-3 space-y-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block px-4 py-2 rounded-lg text-gray-600 hover:text-primary-700 hover:bg-primary-50 font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
