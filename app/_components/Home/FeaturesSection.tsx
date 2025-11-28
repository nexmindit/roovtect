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
    bgColorClass: "bg-[#DBD6D1]",
    textColorClass: "text-[#314556]",
  },
  {
    id: 2,
    imageSrc: "/feature1.png",
    title: "Custom Metal & Stainless Works ",
    subtitle: "งานสั่งทำ เหล็กและสแตนเลส",
    points: [
      "โครงป้าย: ทำโครงป้ายร้าน ป้ายทาวเวอร์ แข็งแรง ทนทาน",
      "งานประกอบ: งานดัด งานเชื่อมสแตนเลส งานโครงสร้างสถาปัตยกรรม",
    ],
    bgColorClass: "bg-[#314556]",
    textColorClass: "text-white",
  },
  {
    id: 3,
    imageSrc: "/feature2.jpg",
    title: "Furniture & Knockdown Units",
    subtitle: "เฟอร์นิเจอร์และงานน็อคดาวน์",
    points: [
      "Furniture: รับทำม้านั่ง โต๊ะ เก้าอี้ สไตล์ Loft/Industrial",
      "Knockdown: งานประกอบสำเร็จรูปจากโรงงาน ยกไปวางหรือประกอบหน้างานได้ทันที ลดฝุ่นและเสียงรบกวนหน้างาน",
    ],
    bgColorClass: "bg-[#DBD6D1]",
    textColorClass: "text-[#314556]",
  },
];

export default function FeaturesSection() {
  return (
    <section>
      <div className="bg-[#314556] py-12 md:py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-white text-center">
          บริการของเรา
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className={`${feature.bgColorClass} ${feature.textColorClass} p-8 lg:p-12`}
          >
            <div className="mb-6 w-full aspect-[4/5] overflow-hidden">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={500}
                height={375}
                className="w-full h-full object-cover"
              />
            </div>

            <h3 className="text-2xl font-bold text-center">{feature.title}</h3>
            <h4 className="text-2xl font-semibold mb-4 text-center">
              {feature.subtitle}
            </h4>

            <ul className="space-y-3 list-disc list-inside">
              {feature.points.map((point, index) => (
                <li key={index} className="text-lg leading-relaxed text-center">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Material Comparison Image - Full Width */}
      <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw]">
        <Image
          src="/Compare_Material.png"
          alt="Material Comparison"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
