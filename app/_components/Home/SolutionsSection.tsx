import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SolutionSection() {
  const features = [
    "รับติดตั้งหลังคาโรงรถคุณภาพสูง แข็งแรงคงทน ป้องกันความร้อนได้ดี",
    "ต่อเติมกันสาดหน้าบ้านและข้างบ้าน ด้วยดีไซน์ที่คิดมาอย่างดี ลงตัวกับภาพรวมของบ้านและอาคาร",
    "ใช้วัสดุที่ได้รับการการันตีมาตรฐาน ออกแบบได้ตามความต้องการ",
    "มืออาชีพทุกขั้นตอนจนได้งานที่ออกมาดีที่สุดเพื่อคุณ",
  ];

  const navLinks = [
    { name: "Prefab Steel Garage & Canopy", href: "#garage" },
    { name: "Aluminum Garage & Canopy", href: "#aluminum" },
    { name: "Facade", href: "#facade" },
  ];

  return (
    <section className="w-full bg-[#314556] text-gray-100 py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center justify-center text-center">
        <h2 className="text-3xl font-bold text-white mb-6">
          ROOVTECT SOLUTION ปฏิวัติการต่อเติมหลังคาจอดรถให้มีดีไซน์
        </h2>

        <p className="text-lg tracking-wide text-gray-300 max-w-3xl mb-10">
          ความก้าวหน้าของนวัตกรรมเหล็กกล้า ที่จะเปลี่ยนมุมมองการตกแต่งบ้านของคุณ
          เปลี่ยนบ้านสวยให้ทันสมัย ดำเนินการทุกขั้นตอนด้วยผู้เชี่ยวชาญ
          ออกแบบจากสถาปนิกรุ่นใหม่ที่ยินดีทำตามความต้องการของคุณ
        </p>

        <ul className="text-left max-w-2xl mx-auto space-y-3 text-gray-200 mb-12">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="text-xl font-bold mr-3 pt-1">●</span>
              <span className="text-lg tracking-wide">{feature}</span>
            </li>
          ))}
        </ul>

        <div className="mb-8">
          <Image
            src="/logo-icon-white.png"
            alt="Roovtect Icon"
            width={48}
            height={48}
            className="h-20 w-20"
          />
        </div>

        <nav className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 mb-10 text-lg">
          {navLinks.map((link, index) => (
            <React.Fragment key={link.name}>
              <Link
                href={link.href}
                className="text-gray-100 hover:text-white font-medium transition-colors"
              >
                {link.name}
              </Link>
              {index < navLinks.length - 1 && (
                <span className="text-gray-500 hidden md:inline">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="#"
            className="bg-gray-200 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-white transition-colors"
          >
            LINE &gt;
          </a>
          <a
            href="tel:"
            className="bg-gray-200 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-white transition-colors"
          >
            CALL &gt;
          </a>
          <a
            href="#"
            className="bg-gray-200 text-gray-900 font-semibold py-3 px-8 rounded-full hover:bg-white transition-colors"
          >
            ปรึกษาฟรี &gt;
          </a>
        </div>
      </div>
    </section>
  );
}
