import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

import { GoogleAnalytics } from "@next/third-parties/google";
import { GoogleTagManager } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "POWERKING รับทำโครงเหล็ก หลังคาโรงรถ สแตนเลส โครงป้าย โดยช่างมืออาชีพ",
  description:
    "POWERKING ผู้เชี่ยวชาญด้านงานโครงเหล็ก โครงสแตนเลส รับทำหลังคาโรงรถ กันสาด และโครงป้ายโฆษณา ออกแบบและติดตั้งโดยทีมช่างมืออาชีพ แข็งแรง ทนทาน งานดีไซน์สวย ราคาคุ้มค่า ปรึกษาฟรี",
  keywords: [
    "POWERKING",
    "รับทำโครงเหล็ก",
    "งานสแตนเลส",
    "รับทำหลังคา",
    "หลังคาโรงรถ",
    "กันสาด",
    "โครงป้ายโฆษณา",
    "รับเหมาต่อเติม",
    "ช่างโครงเหล็ก",
    "รับติดตั้งโครงป้าย",
    "โครงสร้างเหล็ก",
    "งานเหล็กสั่งทำ",
    "หลังคาเมทัลชีท",
    "หลังคาไวนิล",
  ],
  icons: {
    icon: "/logo-icon-navy.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-MKDWTZL2" />
      <Script
        id="next"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=G-PMKSK5QMYD`}
      />
      <Script id="next">
        {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PMKSK5QMYD');`}
      </Script>
      <Script id="google-ads-conversion">
        {`
          function gtag_report_conversion(url) {
            var callback = function () {
              if (typeof(url) != 'undefined') {
                window.location = url;
              }
            };
            gtag('event', 'conversion', {
                'send_to': 'AW-17770256522/QHKeCNL_ntEbEIqxwplC',
                'value': 1.0,
                'currency': 'THB',
                'event_callback': callback
            });
            return false;
          }
        `}
      </Script>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
