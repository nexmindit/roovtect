import Image from "next/image";
import React from "react";

const expertiseList = [
  {
    title: "Premium Translucent Roofing",
    subtitle: "Shinkolite Specialist",
    points: [
      "ชำนาญงานกรุอะคริลิกเกรดพรีเมียม โปร่งใสเหนือกว่ากระจก",
      "เน้นความโปร่ง โล่ง รับแสงธรรมชาติอย่างสมดุล",
      "ปกป้องรังสียูวี พร้อมดีไซน์ที่ช่วยลดความร้อน",
    ],
  },
  {
    title: "Heavy-Duty Metalwork",
    subtitle: "Steel & Stainless",
    points: [
      "โครงสร้างเหล็กและสแตนเลสสำหรับงานที่ต้องการความแข็งแกร่ง",
      "รองรับการรับน้ำหนักสูง รอยเชื่อมแน่นหนา",
      "เหมาะกับโรงจอดรถขนาดใหญ่หรือโครงสร้างหลักของอาคาร",
    ],
  },
  {
    title: "Architectural Aluminum",
    subtitle: "Modern & Rust-Free",
    points: [
      "น้ำหนักเบาแต่แข็งแรง ปลอดสนิม 100%",
      "งานประกอบเนี๊ยบ เส้นสายคมชัด ผิวสัมผัสเรียบหรู",
      "ตอบโจทย์ดีไซน์โมเดิร์นที่ต้องการความสมบูรณ์แบบ",
    ],
  },
];

const craftsmanship = [
  {
    title: "Precision",
    description:
      "ทีมช่างใส่ใจทุกมิลลิเมตร รอยเชื่อมทุกจุดต้องเนียน กริบ สวยงาม ราวกับงานศิลป์",
  },
  {
    title: "Durability",
    description:
      "โครงสร้างผ่านการคำนวณอย่างดี แข็งแรง ทนสภาพอากาศ อยู่คู่บ้านคุณได้ยาวนาน",
  },
  {
    title: "Versatility",
    description:
      "พร้อมดูแลตั้งแต่งานกันสาดหน้าบ้าน ไปจนถึงหลังคาอาคารพาณิชย์ ด้วยมาตรฐานเดียวกัน",
  },
];

const About = () => {
  return (
    <section className="bg-[#f9fafb] text-[#1f2c38] px-4 sm:px-6 py-20 md:py-28">
      <div className="max-w-6xl mx-auto space-y-20">
        {/* Section 1: Philosophy */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#8f99a2]">
              The Philosophy · Strength in Elegance
            </p>
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Power King: Master of Structure & Design
              </h2>
              <p className="mt-3 text-xl text-[#4b5a66]">
                เรื่องงานโครงสร้างและดีไซน์... ต้องยกให้เรา
              </p>
            </div>
            <p className="text-lg leading-relaxed text-[#4b5a66]">
              เราไม่ได้แค่สร้างหลังคา แต่เราสร้าง &quot;พื้นที่แห่งความสุข&quot; ที่ปลอดภัยและสวยงาม
              Power King มุ่งเน้นการผสานความแข็งแกร่งของวิศวกรรมโครงสร้าง
              เข้ากับความงดงามของสถาปัตยกรรมสมัยใหม่ เพื่อให้บ้านของคุณสมบูรณ์แบบที่สุด
            </p>
          </div>
          <div className="relative h-[360px] w-full overflow-hidden rounded-[36px] bg-white shadow-lg">
            <Image
              src="/gallery1.png"
              alt="Modern carport hero shot"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>

        {/* Section 2: Expertise */}
        <div className="space-y-6">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#8f99a2]">
            Our Expertise
          </p>
          <h3 className="text-3xl md:text-4xl font-semibold">
            ความเชี่ยวชาญของเราในทุกวัสดุและดีไซน์
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {expertiseList.map((item) => (
              <div
                key={item.title}
                className="rounded-[28px] border border-[#e1e7ef] bg-white p-6 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-[#c1a471]">
                  {item.subtitle}
                </p>
                <h4 className="mt-2 text-2xl font-semibold">{item.title}</h4>
                <ul className="mt-4 space-y-3 text-sm text-[#4b5a66]">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-[#1f2c38]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Craftsmanship */}
        <div className="rounded-[36px] bg-white p-8 md:p-12 shadow-xl border border-[#e4e9ef]">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] items-center">
            <div className="space-y-6">
              <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#8f99a2]">
                Craftsmanship
              </p>
              <h3 className="text-3xl md:text-4xl font-semibold">
                มาตรฐานงานช่างที่พิถีพิถันในทุกรายละเอียด
              </h3>
              <div className="grid gap-6 md:grid-cols-3">
                {craftsmanship.map((item) => (
                  <div key={item.title}>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#c1a471]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-sm text-[#4b5a66]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-[280px] w-full overflow-hidden rounded-[28px] bg-[#f3f4f6]">
              <Image
                src="/feature1.png"
                alt="Detail welding craftsmanship"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
