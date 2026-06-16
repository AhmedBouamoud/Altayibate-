import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "الأستاذة حنانة | دروس الاجتماعيات",
    template: "%s | الأستاذة حنانة",
  },
  description:
    "موقع الأستاذة حنانة — ملخصات وإنفوغرافيك لمادة الاجتماعيات للثالثة إعدادي والأولى باكالوريا",
  keywords: "اجتماعيات, تاريخ, جغرافيا, ثالثة إعدادي, أولى باكالوريا, ملخصات, إنفوغرافيك, منهجية",
  openGraph: {
    title: "الأستاذة حنانة | دروس الاجتماعيات",
    description: "ملخصات وإنفوغرافيك لمادة الاجتماعيات",
    locale: "ar_MA",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
