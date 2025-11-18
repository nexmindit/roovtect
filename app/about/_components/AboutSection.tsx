import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="w-full bg-[#F3F4F6] py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start w-full mb-16">
          <div className="shrink-0 w-full md:w-1/3 flex justify-center md:justify-start">
            <Image
              src="/logo-full.png"
              alt="ROOVTECT Inventive Prefab Logo"
              width={300}
              height={60}
              className="object-contain"
            />
          </div>

          <div className="grow w-full md:w-2/3 text-gray-700 text-lg leading-relaxed tracking-wide">
            <p className="mb-4">
              เราระดมความคิดเพื่อเปลี่ยนโฉมการต่อเติมให้ก้าวหน้าไปอีกขั้น
              รวมเอาความสวยงามของ
              ดีไซน์ที่ทันสมัยให้เข้ากับเทคโนโลยีที่ก้าวหน้าได้อย่างลงตัวเสริม
              ให้การใช้งานของหลังคาหรือกันสาดมีคุณภาพมากยิงขึ้น
              เลือกดีโซนหลังคาโรงรถให้เข้ากับงานสถาปัตยกรรมรวมถึงการเลือกใช้วัสดุที่แตกต่างกันให้เข้ากับ
              ไลฟ์สไตล์ของคุณ ตอบโจทย์ทุกกลุ่มคนที่อยากปรับรูปแบบงานสถาปัตยกรรม
              หลังคาโรงรถ หลังคากันสาด
              รวมถึงการใช้งานพืนทีรอบอาคารให้ตรงตามใจปราถนา
            </p>
            <p className="mb-8 text-lg tracking-wide">
              เราเป็นที่ปรึกษาตั้งแต่ขั้นตอนแรกถึงขั้นตอนสุดท้ายจนได้ชิ้นงานที่ตรงใจคุณ
              ทำ โครงสร้างให้ลงตัวกับทุกรูปแบบของอาคารด้วยงบประมาณที่คุณพอใจ
              ได้งานที่ ดีตรงตามดีไซน์การันตีวัสดุคุณภาพสูง
              เก็บงานเรียบร้อยโดยช่างที่มีความ เชียวชาญโดยเฉพาะ
              มืออาชีพทุกขันตอนจนได้งานที่ออกมาดีที่สุดเพื่อคุณ
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="https://line.me/ti/p/~@roovtect"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-white bg-[#314556] px-6 py-2 rounded-full font-medium transition-colors hover:bg-[#1e2a35] text-sm"
              >
                LINE &rsaquo;
              </Link>
              <Link
                href="tel:020963464"
                className="inline-flex items-center text-white bg-[#314556] px-6 py-2 rounded-full font-medium transition-colors hover:bg-[#1e2a35] text-sm"
              >
                CALL &rsaquo;
              </Link>
              <Link
                href="/consultation"
                className="inline-flex items-center text-white bg-[#314556] px-6 py-2 rounded-full font-medium transition-colors hover:bg-[#1e2a35] text-sm"
              >
                ปรึกษาฟรี &rsaquo;
              </Link>
            </div>
          </div>
        </div>

        <img src="/About-01.jpg" alt="ROOVTECT Team" />
      </div>
    </section>
  );
}
