"use client";

import React, { useState } from "react";

const faqData = [
  {
    question: "1. หลังคาอะคริลิก หรือหลังคา Shinkolite คืออะไร ?",
    answer: (
      <p>
        หลังคาอะคริลิก หรือหลังคา Shinkolite คือ
        หลังคาที่ทำจากวัสดุอะคริลิกที่มีคุณสมบัติโปร่งแสงและทนทานสูง
        เหมาะสำหรับพื้นที่ที่ต้องการแสงธรรมชาติ เช่น โรงรถ
        หรือพื้นที่ภายนอกที่ต้องมีการป้องกันแดดและฝน
        แต่ยังอยากให้แสงธรรมชาติส่องเข้ามาในพื้นที่ได้
      </p>
    ),
  },
  {
    question: "2. บริการรับต่อเติมหลังคาอะคริลิก (Shinkolite) ราคาเท่าไร ?",
    answer: (
      <p>
        ราคารับติดตั้งหลังคาชินโคไลท์ (Shinkolite)
        ขึ้นอยู่กับขนาดและลักษณะของพื้นที่ที่ต้องการติดตั้ง
        รวมถึงวัสดุและการติดตั้งที่เลือกใช้ ราคาจะเริ่มต้นที่ประมาณ 5,900
        บาทต่อตารางเมตร กรุณาติดต่อทีมงานเพื่อประเมินราคาอีกครั้ง
      </p>
    ),
  },
  {
    question: "3. ข้อดีของหลังคาอะคริลิก (Shinkolite) มีอะไรบ้าง ?",
    answer: (
      <div className="space-y-2">
        <p>
          หลังคาอะคริลิกได้รับความนิยมในการทำหลังคาโรงรถหรือหลังคาสำหรับพื้นที่พักผ่อนในสวน
          โดยมีข้อดีที่สำคัญดังนี้
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            <strong>โปร่งแสง</strong> ช่วยให้แสงธรรมชาติสามารถส่องผ่านได้
            ทำให้พื้นที่ใต้หลังคาสว่างขึ้น ไม่อึดอัด
          </li>
          <li>
            <strong>ทนทาน</strong> วัสดุอะคริลิกมีความแข็งแรง
            ทนทานต่อสภาพอากาศต่าง ๆ ไม่ว่าจะเป็นแสงแดดจัดหรือฝนตก
          </li>
          <li>
            <strong>น้ำหนักเบา</strong> ทำให้การติดตั้งสะดวกและรวดเร็ว
            โครงสร้างไม่ต้องรับน้ำหนักมากจนเกินไป
          </li>
          <li>
            <strong>อายุการใช้งานยาวนาน</strong> ตัววัสดุคงทนต่อสภาพอากาศ
            วัสดุรับประกันการใช้งานยาวนาน 10 ปี
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "4. หลังคาอะคริลิก (Shinkolite) เหมาะกับงานแบบไหน ?",
    answer: (
      <div className="space-y-2">
        <p>
          หลังคาอะคริลิก (Shinkolite)
          เหมาะสำหรับการใช้งานในพื้นที่ที่ต้องการแสงธรรมชาติ
          แต่ยังคงต้องการความทนทานต่อสภาพอากาศและป้องกันแดดได้ดี เช่น
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            โรงจอดรถ ช่วยให้แสงส่องผ่านได้อย่างมีประสิทธิภาพในพื้นที่จอดรถ
          </li>
          <li>
            พื้นที่สาธารณะ เช่น
            ทางเดินในสวนหรืออาคารที่ต้องการให้แสงสว่างจากธรรมชาติ
          </li>
          <li>
            หลังคาผลิตภัณฑ์แสดงสินค้า
            ที่ต้องการกรองแสงให้เหมาะสมกับสินค้าและผู้ที่ใช้งาน
          </li>
          <li>
            หลังคาตามสวนหรือสระว่ายน้ำ ที่ต้องการป้องกันแดดและฝน
            แต่ยังคงรับแสงธรรมชาติ
          </li>
          <li>
            หลังคาโรงงานหรือคลังสินค้า ที่ต้องการแสงสว่างในพื้นที่ส่วนใหญ่
            โดยไม่ต้องใช้ไฟฟ้าส่องสว่างเพิ่มเติม
          </li>
        </ul>
        <p>
          หลังคา Shinkolite เหมาะกับงานที่ต้องการคุณสมบัติโปร่งแสงและทนทาน
          ในพื้นที่แบบ Semi-Outdoor และมีความยืดหยุ่นในการติดตั้ง
        </p>
      </div>
    ),
  },
  {
    question: "5. หลังคาอะคริลิก (Shinkolite) มีแบบไหนบ้าง ?",
    answer: (
      <div className="space-y-2">
        <p>
          บริการรับติดตั้งหลังคาชินโคไลท์ (Shinkolite)
          สามารถเลือกแบบของแผ่นหลังคาได้ ซึ่งปัจจุบันมีทั้งหมด 5 ประเภท ได้แก่
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>
            <strong>Shinkolite Prime</strong> กันความร้อนได้ถึง 69-75%
            เหมาะสำหรับหลังคาที่ต้องการความแข็งแรง
          </li>
          <li>
            <strong>Shinkolite Heat Cut</strong> รุ่นยอดนิยม กันความร้อนได้
            48-59% แสงผ่านได้
          </li>
          <li>
            <strong>Shinkolite Superior</strong> แผ่นโปร่งใส
            สามารถกันรังสียูวีได้ 90%
          </li>
          <li>
            <strong>Shinkolite Nature</strong> ช่วยป้องกันรังสียูวีได้มากกว่า
            90% เหมาะกับพื้นที่ที่ต้องการแสงธรรมชาติ
          </li>
          <li>
            <strong>Shinkolite Shade</strong> เป็นรุ่นสีทึบ
            สะท้อนความร้อนได้สูงกว่า 50%
            เหมาะสำหรับพื้นที่ที่ต้องลดความร้อนมากเป็นพิเศษ
          </li>
        </ul>
      </div>
    ),
  },
  {
    question: "6. การรับประกันหลังคาอะคริลิก (Shinkolite)",
    answer: (
      <div className="space-y-2">
        <p>
          ROOVTECT มีการรับประกันการรับทำหลังคาอะคริลิก (Shinkolite)
          ตามมาตรฐานสูงสุด โดยการรับประกันมี 3 ส่วนหลัก ๆ คือ
        </p>
        <ul className="list-disc list-inside space-y-1 ml-2">
          <li>รับประกันงานรั่วซึมและสีของโครงสร้าง 5 ปี จาก ROOVTECT</li>
          <li>รับประกันความคงทนของโครงสร้าง 5 ปี จาก ROOVTECT</li>
          <li>
            รับประกันตัววัสดุแผ่นหลังคา 10 ปีจาก Shinkolite
            โดยเงื่อนไขการรับประกันจะขึ้นอยู่กับผู้ผลิต
          </li>
        </ul>
        <p>
          การรับประกันโครงสร้างอาจเปลี่ยนแปลงขึ้นอยู่กับประเภทและลักษณะของงานติดตั้ง
          หากมีปัญหาเกี่ยวกับวัสดุหรือการติดตั้งภายในระยะเวลาการรับประกัน
          ทีมงานของเราพร้อมให้การดูแลและซ่อมแซม
        </p>
      </div>
    ),
  },
];

export default function ShinkoliteFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#EAE8E4] py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-[#314556] text-center mb-12">
          คำถามที่พบบ่อย
        </h2>

        <div className="w-full">
          {faqData.map((item, index) => (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => handleToggle(index)}
                className="flex justify-between items-center w-full py-6 text-left focus:outline-none"
              >
                <span className="text-lg font-semibold text-[#314556] pr-4">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 flex-shrink-0 ${
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
      </div>
    </section>
  );
}
