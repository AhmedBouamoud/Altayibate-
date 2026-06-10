import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PWAInstall from "@/components/PWAInstall";

export const viewport: Viewport = {
  themeColor: "#16a34a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "نظام الطيبات | تغذية صحية واعية",
    template: "%s | نظام الطيبات",
  },
  description:
    "موقع تثقيفي متخصص في التغذية الصحية يرشدك إلى اختيار الطعام الطيّب بأسلوب بسيط ومتوازن — بعيداً عن الحميات القاسية والتعقيد.",
  keywords: [
    "نظام الطيبات", "ضياء العوضي", "تغذية صحية", "طعام طيب", "صحة",
    "نصائح غذائية", "الطيبات", "وعي غذائي", "أكل صحي", "نظام غذائي"
  ],
  manifest: "/Altayibate-/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "الطيبات",
  },
  applicationName: "نظام الطيبات",
  openGraph: {
    title: "نظام الطيبات | تغذية صحية واعية",
    description: "مرجعك الشامل لنظام الطيبات — اختر الطيّب من الطعام وعِش بصحة أفضل",
    locale: "ar_SA",
    type: "website",
    siteName: "نظام الطيبات",
  },
  twitter: {
    card: "summary_large_image",
    title: "نظام الطيبات | تغذية صحية واعية",
    description: "مرجعك الشامل لنظام الطيبات",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="apple-touch-icon" sizes="192x192" href="/Altayibate-/icons/icon-192.svg" />
        <link rel="apple-touch-icon" sizes="512x512" href="/Altayibate-/icons/icon-512.svg" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="الطيبات" />
        <meta name="msapplication-TileColor" content="#16a34a" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  var base = window.location.pathname.startsWith('/Altayibate-') ? '/Altayibate-' : '';
                  navigator.serviceWorker.register(base + '/sw.js', { scope: base + '/' })
                    .catch(function(e) { console.log('SW registration failed:', e); });
                });
              }
            `,
          }}
        />
      </head>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <PWAInstall />
      </body>
    </html>
  );
}
