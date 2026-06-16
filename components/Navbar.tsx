"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/drous", label: "الدروس" },
  { href: "/infographie", label: "الإنفوغرافيك" },
  { href: "/manhajiya", label: "المنهجية" },
  { href: "/contact", label: "تواصل" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const rawPathname = usePathname();
  const pathname = rawPathname ?? "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-white"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-green group-hover:scale-105 transition-transform duration-200">
              {/* Book icon */}
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-extrabold text-gray-900 leading-none">
                الأستاذة حنانة
              </span>
              <span className="block text-[10px] text-primary-600 font-medium leading-none mt-0.5">
                دروس الاجتماعيات
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive ? "nav-link-active" : "nav-link"}
                >
                  {link.label}
                  {isActive && (
                    <span className="mr-1 w-1 h-1 rounded-full bg-primary-600 inline-block" />
                  )}
                </Link>
              );
            })}
            <Link href="/drous" className="btn-primary mr-3 py-2 px-5 text-sm">
              ابدأ المذاكرة
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            onClick={() => setOpen(!open)}
            aria-label="القائمة"
            aria-expanded={open}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                  open ? "rotate-45 translate-y-[7px]" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 ${
                  open ? "opacity-0 scale-x-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 bg-gray-700 rounded-full transition-all duration-300 origin-center ${
                  open ? "-rotate-45 -translate-y-[7px]" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-100 px-4 py-3 space-y-1 shadow-lg">
          {links.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive
                    ? "bg-primary-50 text-primary-700"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-primary-500" />
                )}
              </Link>
            );
          })}
          <div className="pt-2 pb-1">
            <Link href="/drous" className="btn-primary w-full text-sm py-3">
              ابدأ المذاكرة
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
