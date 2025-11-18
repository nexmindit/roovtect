import React from "react";
import Image from "next/image";

const features = [
  {
    image: "/About-03.jpg",
    title: "Unique Design",
    description:
      "เราให้ความสำคัญเรื่องดีไซน์ที่คำนึงถึงสุนทรียภาพระหว่างอาคารบ้านเดิม และหลังคาส่วนต่อเติมรอบบ้านถูกออกแบบอย่างพิถีพิถันโดยทีมงานสถาปนิก และวิศวกรมืออาชีพ",
  },
  {
    image: "/About-04.jpg",
    title: "Quality That Lasts",
    description:
      "เราเลือกใช้วัสดุเหล็กมาตรฐาน JIS (Japanese Industrial Standard) ที่ถูกกำหนดขนาด และความหนาตามมาตรฐาน ปั๊มตัดขึ้นรูปแบบพิเศษโดยเครื่องจักรจากโรงงานเหล็กกล้า เคลือบกันสนิมผ่านกระบวนการทำสี 3 ขั้นตอน เทคนิคการทำสีแบบพ่นทราย ให้สัมผัสแบบ Premium",
  },
  {
    image: "/About-05.jpg",
    title: "Knockdown System",
    description:
      "เพราะคุณภาพ และระยะเวลาในการติดตั้งคือ สิ่งสำคัญ เราจึง Tailor made design โครงสร้างให้กับบ้านทุกหลัง ติดตั้งแบบ Joint System ไม่ต้องใช้การเชื่อมร้อนหน้างานช่วยลดปัญหาที่เกิดจากการทรุดตัวของโครงสร้าง และร่นระยะเวลาการติดตั้งด้วยระบบ Knockdown",
  },
];

export default function CoreValues() {
  return (
    <section className="w-full bg-[#EAE8E4] pt-10 pb-16 px-4">
      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 mb-16">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-full aspect-[4/5] mb-8 shadow-sm">
              <Image
                src={feature.image}
                alt={feature.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-[#314556] mb-6">
              {feature.title}
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base px-2">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* Video 1 */}
      <div className="max-w-5xl mx-auto mb-10">
        <div className="relative w-full aspect-video overflow-hidden shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/YmCRFPTY2t4?si=ta2J-IXEAN5RXH9I"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>

      {/* Video 2 */}
      <div className="max-w-5xl mx-auto">
        <div className="relative w-full aspect-video overflow-hidden shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/qiMm76D87YM?si=uziraU5xkmZv12GE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
