import React from "react";
import Image from "next/image";

const serviceSteps = [
  {
    icon: "/membership1.png",
    title: "ติดต่อเรา",
    description:
      "พูดคุยพร้อมส่งข้อมูลภาพหน้างานบริเวณที่ต้องการต่อเติม และรูปแบบภาพงานหลังคาหรืองานต่อเติมของเราที่ลูกค้าสนใจผ่านทาง LINE: @roovtect หรือกรอกฟอร์ม “ปรึกษาฟรี”",
  },
  {
    icon: "/membership2.png",
    title: "ประเมินราคา",
    description:
      "ทีมงานจะประเมินราคางบประมาณของงานต่อเติมหลังคาโรงรถ พร้อมแนบภาพตัวอย่างผลงานที่ใกล้เคียงกับหน้างานของลูกค้าเพื่อพิจารณา หรือสามารถประเมินราคาเบื้องต้นด้วยตนเองได้ทันที ด้วยระบบ SmartQuote",
  },
  {
    icon: "/membership3.png",
    title: "สำรวจหน้างาน",
    description:
      "บริการสำรวจและประเมินหน้างานโดยทีมงานฝ่ายขาย ราคา 1,500 บาท โดยสามารถใช้เป็นส่วนลดในการทำงานกับเราได้เต็มจำนวน หรือสามารถเลือกชำระเงินและอนุมัติเริ่มงานหลังจากประเมินราคาเบื้องต้นผ่านทางออนไลน์ เพื่อเริ่มกระบวนการออกแบบหลังคา",
  },
  {
    icon: "/membership4.png",
    title: "การออกแบบ",
    description:
      "ทีมงานสถาปนิกและวิศวกรจะเข้าทำการออกแบบงานหลังคา หรือต่อเติมพื้นที่รอบบ้านเมื่อได้รับการคอนเฟิร์มเริ่มงาน เพื่อดำเนินการเขียนแบบ Drawing แบบก่อสร้างพร้อมรายละเอียดวัสดุ และ 3D Perspective เพื่อให้ลูกค้าพิจารณารูปแบบที่ใกล้เคียงกับงานจริง ก่อนอนุมัติการผลิตโครงสร้าง",
  },
  {
    icon: "/membership5.png",
    title: "การผลิต",
    description:
      "ทีมงานฝ่ายผลิตของ ROOVTECT จะทำการ Fabricate โครงสร้างงานต่อเติมที่โรงงานของเรา โดยผ่านกระบวนการเชื่อมประกอบที่ได้มาตรฐาน พร้อมขั้นตอนทำสี เพื่อให้ได้โครงสร้างแบบกึ่งสำเร็จรูปพร้อมประกอบที่หน้างาน",
  },
  {
    icon: "/membership6.png",
    title: "การติดตั้ง",
    description:
      "เราใช้ระบบติดตั้งแบบ Knockdown (ประกอบโครงสร้างและแผ่นหลังคาที่หน้างาน) โดยกำหนดวันติดตั้งหลังลูกค้าอนุมัติแบบ ก่อนส่งมอบงาน เราจะทดสอบการรั่วซึมและตรวจสอบคุณภาพสีอย่างละเอียดเพื่อความมั่นใจสูงสุดของลูกค้า พร้อมการรับประกันหลังคา/กันสาด และบริการหลังการขายนาน 5 ปี",
  },
];

export default function ServiceSteps() {
  return (
    <section className="w-full bg-[#314556] text-gray-100 py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          ขั้นตอนการใช้บริการ ROOVTECT
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {serviceSteps.map((step) => (
            <div
              key={step.title}
              className="flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 mb-6">
                <Image
                  src={step.icon}
                  alt={step.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>

              <h3 className="text-2xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
