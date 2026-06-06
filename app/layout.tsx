import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "نظام الطيبات",
  description:
    "موقع تعريفي وتثقيفي يهدف إلى تقريب مفهوم التغذية الصحية المبنية على اختيار الطيّب من الطعام.",
  keywords: "تغذية صحية, طعام طيب, صحة, نصائح غذائية, الطيبات",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
