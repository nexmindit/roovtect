import React from "react";
import Image from "next/image";

const featuresData = [
  {
    id: 1,
    imageSrc: "/feature1.webp",
    title: "Unique Design",
    subtitle: "ดีไซน์สวยงามเป็นเอกลักษณ์",
    points: [
      "ออกแบบให้สอดคล้องกับไลฟ์สไตล์ และความต้องการของลูกค้า",
      "ติดตั้งอย่างลงตัว เสริมความสวยงามของบ้านและอาคาร",
      "รักษาสุนทรียภาพและบรรยากาศโดยรวมของพื้นที่อย่างครบถ้วน",
      "สะท้อนเอกลักษณ์การอยู่อาศัย ด้วยดีไซน์ที่เป็นหนึ่งเดียวตามที่ลูกค้าต้องการ",
    ],
    bgColorClass: "bg-[#DBD6D1]",
    textColorClass: "text-[#314556]",
  },
  {
    id: 2,
    imageSrc: "/feature2.webp",
    title: "Quality That Lasts",
    subtitle: "การันตีความทนทานและปลอดภัย",
    points: [
      "ใช้วัสดุเหล็กคุณภาพสูง มาตรฐาน JIS (Japanese Industrial Standard)",
      "ปั๊มตัดขึ้นรูปแบบพิเศษโดยเครื่องจักรจากโรงงานเหล็กกล้า พร้อมกำหนดขนาดและความหนาตามมาตรฐาน",
      "เคลือบกันสนิมด้วยกระบวนการทำสี 3 ขั้นตอน โดยใช้เทคนิคการทำสีแบบพ่นทรายมาตรฐานอุตสาหกรรม ทำให้ได้พื้นผิวสัมผัสแบบ Premium",
    ],
    bgColorClass: "bg-[#314556]",
    textColorClass: "text-white",
  },
  {
    id: 3,
    imageSrc: "/feature3.webp",
    title: "Knockdown System",
    subtitle: "ประหยัดเวลา ลดปัญหาการทรุดตัว",
    points: [
      "ใช้วิธีการ Tailor Made Design เพื่อเสริมฟังก์ชันการใช้งานของเหล็กกล้าให้เหมาะสมกับความต้องการเฉพาะของลูกค้า",
      "ติดตั้งแบบ Joint System ระบบรอยต่อที่เพิ่มประสิทธิภาพการยึดติดสูง ลดการเชื่อมด้วยความร้อนหน้างานลดปัญหาการทรุดตัวของโครงสร้าง ซึ่งทำให้โครงสร้างมีความแข็งแรงและทนทาน",
      "ประหยัดเวลาในการประกอบติดตั้ง โดยยังรักษาคุณภาพและความคงทนสูงเหมือนเดิม",
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
          จุดเด่นของบริการต่อเติมหลังคาหน้าบ้านจาก ROOVTECT
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3">
        {featuresData.map((feature) => (
          <div
            key={feature.id}
            className={`${feature.bgColorClass} ${feature.textColorClass} p-8 lg:p-12`}
          >
            <div className="mb-6 w-full">
              <Image
                src={feature.imageSrc}
                alt={feature.title}
                width={500}
                height={350}
                className="w-full h-auto object-cover"
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
    </section>
  );
}
