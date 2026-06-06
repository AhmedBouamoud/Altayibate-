"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن النظام" },
  { href: "/foods", label: "المسموحات والممنوعات" },
  { href: "/videos", label: "الفيديوهات" },
  { href: "/articles", label: "المقالات" },
  { href: "/contact", label: "تواصل" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

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
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2-8 0-8 8-8 8s6-4 13-3c0 0-9 1-12 9C5 12.5 8 8 17 8z" />
              </svg>
            </div>
            <div>
              <span className="text-lg font-extrabold text-gray-900 leading-none">
                نظام الطيبات
              </span>
              <span className="block text-[10px] text-primary-600 font-medium leading-none mt-0.5">
                تغذية صحية واعية
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
            <Link href="/foods" className="btn-primary mr-3 py-2 px-5 text-sm">
              قائمة الطعام
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
            <Link href="/foods" className="btn-primary w-full text-sm py-3">
              قائمة المسموحات والممنوعات
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
