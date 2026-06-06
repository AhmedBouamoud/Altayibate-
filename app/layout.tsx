import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "نظام الطيبات | تغذية صحية واعية",
    template: "%s | نظام الطيبات",
  },
  description:
    "موقع تثقيفي متخصص في التغذية الصحية يرشدك إلى اختيار الطعام الطيّب بأسلوب بسيط ومتوازن — بعيداً عن الحميات القاسية والتعقيد.",
  keywords: "تغذية صحية, طعام طيب, صحة, نصائح غذائية, الطيبات, وعي غذائي, أكل صحي",
  openGraph: {
    title: "نظام الطيبات | تغذية صحية واعية",
    description: "اختر الطيّب من الطعام وعِش بصحة أفضل",
    locale: "ar_SA",
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
