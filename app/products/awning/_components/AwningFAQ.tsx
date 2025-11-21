"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "ROOVTECT มีความโดดเด่นกว่าร้านทำกันสาดเจ้าอื่น ๆ อย่างไร ?",
    answer:
      "เราใช้วิธี Tailor Made Design สามารถออกแบบทุกชิ้นส่วนให้เหมาะกับการใช้งาน มั่นใจด้วยคุณภาพเหล็กมาตรฐานญี่ปุ่น ที่สำคัญคือ มีการคำนวณโครงสร้างและน้ำหนักโหลดอย่างละเอียด ลดข้อผิดพลาดในการติดตั้ง และเพิ่มความปลอดภัยในการใช้งานระยะยาว",
  },
  {
    question: "เลือกหลังคากันสาดแบบโปร่งแสงหรือทึบแสงดีกว่ากัน ?",
    answer:
      "ขึ้นอยู่กับความต้องการและทิศทางของบ้าน หากคุณต้องการแสงธรรมชาติในพื้นที่ เช่น ต้องการทำพื้นที่นั่งเล่นหรือสวนหลังบ้าน กันสาดโปร่งแสงมีความเหมาะสมมากกว่า แต่หากต้องการต่อเติมกันสาดโรงรถ ซึ่งเน้นคุณสมบัติด้านการป้องกันแดดและฝนได้ดี แบบทึบแสงจะเหมาะสมกว่า",
  },
  {
    question: "บริการหลังการขายของ ROOVTECT มีอะไรบ้าง ?",
    answer:
      "เรามีบริการหลังการขายที่ได้มาตรฐานจากเจ้าหน้าที่มืออาชีพ เพื่อดูแลกันสาดให้ใช้งานได้อย่างดีหลังการติดตั้ง ซึ่งรวมถึงการตรวจสอบงานให้แน่ใจว่าจะใช้งานได้อย่างราบรื่น ตลอดจนให้การบำรุงรักษาเบื้องต้น โดยงานหลังคากันสาดจะมีการรับประกันยาวนานถึง 5 ปี ดูแลปัญหาการรั่วซึม และปัญหาสีของโครงสร้างเป็นสนิมหรือลอกล่อน โดยไม่มีค่าใช้จ่ายเพิ่มเติม",
  },
];

export default function AwningFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#fffffd] py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* FAQ Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#314556] text-center mb-12 italic">
          คำถามที่พบบ่อยเกี่ยวกับบริการต่อเติมกันสาด
        </h2>

        {/* FAQ List */}
        <div className="w-full mb-20">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none group"
              >
                <span className="text-lg font-semibold text-[#314556] pr-4 group-hover:text-black transition-colors">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-gray-500"
                  >
                    <path
                      d="M5.83325 7.5L9.99992 11.6667L14.1666 7.5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100 pb-6"
                    : "grid-rows-[0fr] opacity-0 pb-0"
                }`}
              >
                <div className="overflow-hidden text-gray-600 leading-relaxed text-sm md:text-base">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Content Section */}
        <div className="text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-[#314556] mb-6 italic leading-tight">
            ROOVTECT ผู้นำในธุรกิจรับทำกันสาด มั่นใจ รับประกันโครงสร้าง 5 ปี
          </h3>
          <p className="text-gray-600 text-sm md:text-base leading-relaxed">
            หากคุณต้องการติดตั้งกันสาดคุณภาพดี ทนทาน และปลอดภัย
            สามารถใช้งานได้อย่างยาวนาน ROOVTECT คือคำตอบในการให้บริการ
            เรามีรูปแบบและวัสดุให้เลือกหลากหลาย สามารถปรับแต่งได้ตามความต้องการ
            และให้บริการทุกขั้นตอนโดยวิศวกร สถาปนิก และทีมช่างมืออาชีพ
            สนใจสามารถขอคำปรึกษาเบื้องต้นได้ที่เบอร์โทรศัพท์ 02-096-3464 หรือ
            LINE Official Account : @roovtect
          </p>
        </div>
      </div>
    </section>
  );
}
