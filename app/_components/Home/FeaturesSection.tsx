import React from "react";
import Image from "next/image";

const featuresData = [
  {
    id: 1,
    imageSrc: "/feature4.webp",
    title: "Shinkolite Roofing & Canopy",
    subtitle: "หลังคาและกันสาด",
    points: [
      "เปลี่ยนพื้นที่รอบบ้านให้ดูดีมีระดับ ด้วยหลังคาโปร่งแสง Shinkolite",
      "กันความร้อนได้ดีเยี่ยม สวยงามเหมือนกระจกแต่เหนียวแน่นกว่า",
      "โครงสร้างดีไซน์ทันสมัย เหมาะสำหรับโรงจอดรถ ลานซักล้าง หรือเฉลียงหน้าบ้าน",
    ],
  },
  {
    id: 2,
    imageSrc: "/images/home/service-2.png",
    title: "Custom Metal & Stainless Works",
    subtitle: "งานสั่งทำ เหล็กและสแตนเลส",
    points: [
      "Bespoke Design Execution: รองรับงาน Custom Made ทุกชนิด",
      "Commercial Signage & Towers: โครงป้ายและทาวเวอร์ขนาดใหญ่ที่มั่นคง",
      "Advanced Fabrication: งานดัด งานพับ และเชื่อมสแตนเลสเนียนกริบ",
    ],
  },
  {
    id: 3,
    imageSrc: "/feature2.jpg",
    title: "Furniture & Knockdown Units",
    subtitle: "เฟอร์นิเจอร์และงานน็อคดาวน์",
    points: [
      "Loft & Industrial Furniture: รับผลิตตามแบบ เน้นความดิบเท่อบอุ่น",
      "Material Mix: ผสานโครงเหล็กกับงานไม้ได้อย่างลงตัว",
      "Smart Knockdown Solutions: งานประกอบสำเร็จรูป ลดฝุ่น ลดเสียง จบงานไว",
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6  lg:items-center lg:justify-center">
          <div>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#7e8ea2] text-center">
              OUR SERVICES
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[#1f2c38] text-center">
              บริการของเรา ครอบคลุมตั้งแต่งานหลังคาไปจนถึงเฟอร์นิเจอร์เหล็ก
            </h2>
          </div>
          <p className="text-center md:text-lg text-[#4b5a66] max-w-xl">
            แบ่งเป็น 3 หมวดหลัก เพื่อให้เลือกบริการได้ง่าย
            ไม่ว่าจะเป็นหลังคา Shinkolite งาน Metal & Stainless หรือเฟอร์นิเจอร์และงานน็อคดาวน์
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuresData.map((feature) => (
            <div
              key={feature.id}
              className="flex h-full flex-col rounded-[28px] border border-[#e4e9ef] bg-[#f9fafb] shadow-sm"
            >
              <div className="relative w-full pt-[70%] overflow-hidden rounded-t-[28px]">
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6 md:p-7 text-[#1f2c38]">
                <p className="text-xs uppercase tracking-[0.2em] text-[#7e8ea2]">
                  {feature.subtitle}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  {feature.title}
                </h3>
                <ul className="mt-6 space-y-4 text-sm text-[#4b5a66]">
                  {feature.points.map((point, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-[#314556]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Material Comparison Image - Full Width */}
      <div className="mt-16 w-screen relative left-[50%] right-[50%] -mx-[50vw] px-4">
        <div className="mx-auto max-w-6xl rounded-[32px] border border-[#e4e9ef] bg-white p-2 shadow-xl">
          <Image
            src="/Compare_Material.png"
            alt="Material Comparison"
            width={1920}
            height={1080}
            className="w-full h-auto rounded-[24px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
