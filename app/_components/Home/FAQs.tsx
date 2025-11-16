"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "1. ทําหลังคาโรงรถ ตารางเมตรละกี่บาท ?",
    answer: (
      <p>
        การต่อเติมหลังคาโรงรถ
        ราคาจะขึ้นอยู่กับวัสดุที่เลือกใช้และลักษณะการติดตั้ง
        โดยการติดตั้งหลังคาโรงรถของเราราคาเริ่มต้นประมาณ 3,900 บาทต่อตารางเมตร
        สามารถสอบถามรายละเอียดและคำปรึกษาเพิ่มเติมได้ที่เจ้าหน้าที่ของเรา
      </p>
    ),
  },
  {
    question: "2. ต่อหลังคาโรงรถ ต้องขออนุญาตไหม ?",
    answer: (
      <p>
        การต่อเติมหลังคาโรงรถอาจต้องขออนุญาตจากหน่วยงานท้องถิ่นหรือนิติบุคคลของโครงการ
        ขึ้นอยู่กับกฎระเบียบในแต่ละพื้นที่
        แนะนำให้ติดต่อสอบถามกับหน่วยงานที่เกี่ยวข้องก่อนการดำเนินการ
        เพื่อปฏิบัติตามข้อกฎหมายและข้อกำหนดต่าง ๆ อย่างถูกต้อง
        และไม่มีปัญหาในอนาคต
      </p>
    ),
  },
  {
    question: "3. ทำหลังคาหน้าบ้านหรือต่อเติมหลังคาโรงจอดรถต้องลงเข็มไหม ?",
    answer: (
      <p>
        การลงเสาเข็มในการทำหลังคาโรงจอดรถขึ้นอยู่กับลักษณะของที่ดินและโครงสร้างพื้นฐานเดิม
        หากพื้นดินไม่แข็งแรงหรือมีการปรับปรุงโครงสร้างเพิ่มเติม
        อาจจำเป็นต้องลงเสาเข็มเพื่อเสริมความแข็งแรงของหลังคา โดย ROOVTECT
        แนะนำให้ลงเสาเข็มทุกกรณีสำหรับโครงสร้างแบบตั้งเสาเพื่อลดปัญหาที่จะเกิดขึ้นในระยะยาว
      </p>
    ),
  },
  {
    question: "4. ทำหลังคาโรงรถใช้เวลากี่วันถึงแล้วเสร็จ ?",
    answer: (
      <p>
        ระยะเวลาในการติดตั้งหลังคาโรงจอดรถจะขึ้นอยู่กับขนาดและลักษณะของงาน
        โดยปกติแล้วการติดตั้งสามารถเสร็จได้ภายใน 1-7 วันทำการ
        ขึ้นอยู่กับขนาดและรูปแบบของโครงสร้าง
      </p>
    ),
  },
  {
    question: "5. ราคาและแพ็กเกจ การต่อเติมหลังคาของ ROOVTECT อยู่ที่เท่าไร ?",
    answer: (
      <p>
        ราคาจะขึ้นอยู่กับวัสดุที่เลือกใช้และขนาดของพื้นที่ที่ต้องการติดตั้ง
        สำหรับ งานหลังคาโรงรถและกันสาดโครงสร้างระบบ Knockdown จาก ROOVTECT
        จะมีราคาเริ่มต้นอยู่ที่ 3,900 บาท/ตรม.
        กรุณาติดต่อเราเพื่อขอคำปรึกษาและเสนอราคาที่เหมาะสมกับความต้องการของคุณ
      </p>
    ),
  },
  {
    question: "6. บริการต่อเติมหลังคามีการรับประกันหรือไม่ ระยะเวลาเท่าไร ?",
    answer: (
      <div className="space-y-3">
        <p>ROOVTECT รับประกันงานใน 3 ส่วนหลัก ๆ คือ</p>
        <ul className="list-disc list-inside space-y-2">
          <li>งานรั่วซึมและสีของโครงสร้าง รับประกัน 5 ปี จาก ROOVTECT</li>
          <li>ความคงทนของโครงสร้าง รับประกัน 5 ปี จาก ROOVTECT</li>
          <li>
            วัสดุแผ่นหลังคารับประกัน 10 ปี
            โดยเงื่อนไขการรับประกันจะขึ้นอยู่กับผู้ผลิตแต่ละวัสดุ
          </li>
        </ul>
        <p>
          หากมีปัญหาหรือข้อบกพร่องในระหว่างการใช้งาน
          ทีมงานของเราพร้อมให้บริการแก้ไขและดูแลอย่างเต็มที่
        </p>
      </div>
    ),
  },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#F3F4F6] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#314556] text-center mb-12">
          คำถามที่พบบ่อย
        </h2>

        <div className="w-full">
          {faqData.map((item, index) => (
            <div key={item.question} className="border-b border-gray-300">
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full py-6 text-left cursor-pointer"
              >
                <span className="text-lg font-semibold text-[#314556]">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
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
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="pb-6 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
