import type { Metadata } from "next";
import { Geist, Geist_Mono, Kanit } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

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
  title: "POWERKING รับทำโครงเหล็ก หลังคาโรงรถ สแตนเลส โครงป้าย โดยช่างมืออาชีพ",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${kanit.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
