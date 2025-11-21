import React from "react";
import Image from "next/image";

const advantagesData = [
  {
    image: "/shinkolite/advantage1.webp", // Replace with your actual image paths
    title: "แข็งแรงคงทน รับประกันนานถึง 10 ปี",
    points: [
      "Shinkolite เป็นวัสดุหลังคาโปร่งแสงอะคริลิกที่สามารถนำมาติดตั้งแทนกระจกได้",
      "เปลี่ยนบ้านของคุณให้ดูทันสมัยมากยิ่งขึ้น น่าอยู่ มองแล้วปลอดโปร่งสบายตา",
      "อายุการใช้งานนาน เสื่อมสภาพช้า รับประกันตัวแผ่นนานถึง 10 ปี",
    ],
  },
  {
    image: "/shinkolite/advantage2.webp",
    title: "ป้องกันรังสี UV",
    points: [
      "ป้องกันความร้อนด้วยเทคโนโลยีรุ่น Heat Cut ที่มีคุณสมบัติกันความร้อน",
      "ป้องกันรังสี UV ได้ถึง 99%",
      "ลดการส่งผ่านความร้อนสูงสุด 58%",
      "บ้านเย็นสบายน่าอยู่อาศัยมากยิ่งขึ้น",
    ],
  },
  {
    image: "/shinkolite/advantage3.webp",
    title: "ปลอดภัยกว่ากระจก",
    points: [
      "มีความปลอดภัยสูงมากกว่าหลังคาแบบกระจก",
      "เมื่อแตกจะมีลักษณะแตกเป็นทางยาว จึงไม่หลุดร่วงลงด้านล่าง",
    ],
  },
  {
    image: "/shinkolite/advantage4.webp",
    title: "ความมีมิติของสีสัน",
    points: [
      "สร้างมิติให้บ้านดูสวยงามแตกต่าง เรียบง่ายแต่ดูดี และหรูหราได้",
      "สามารถเลือกสีให้ตรงตามดีไซน์ของบ้าน ที่เปลี่ยนหลังคากันสาดธรรมดาให้ดูสวยขึ้น",
    ],
  },
];

export default function ShinkoliteAdvantages() {
  return (
    <section className="w-full bg-[#EAE8E4] py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* --- Header Section --- */}
        <div className="flex items-center gap-4 mb-12">
          {/* Logo Icon placeholder - replace src if you have a specific icon file */}
          <div className="w-16 h-12 relative">
            <Image
              src="/logo-icon-navy.png" // Using one of your existing logo icons
              alt="Icon"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#314556] italic">
            ข้อดีของหลังคา Shinkolite
          </h2>
        </div>

        {/* --- Intro Text --- */}
        <div className="text-sm md:text-base text-gray-600 leading-relaxed mb-16 space-y-4 max-w-5xl">
          <p>
            ความเรียบง่ายที่แตกต่าง คือคอนเซปต์ที่ ROOVTECT
            ยึดเป็นแนวทางการออกแบบ
            ทำให้การดีไซน์หลังคาชินโคไลท์แตกต่างไม่เหมือนใคร
            มีเอกลักษณ์เฉพาะตัวโดดเด่น ออกแบบโดยสถาปนิกและวิศวกรแบบ Tailor-made
            ทำให้งานออกมาตรงตามความต้องการของคุณมากที่สุด สวยตรงใจเข้ากับตัวบ้าน
          </p>
          <p>
            เมื่อผสมผสานกับข้อดีของหลังคา Shinkolite
            ทำให้งานหลังคากันสาดออกมาแข็งแรงทนทาน ทนต่อแรงกระแทกได้เป็นอย่างดี
            มีความปลอดภัยสูง และสามารถป้องกันรังสี UV ได้กว่า 99%
            ทั้งยังสามารถเลือกสีสันต่อเติมให้บ้านของคุณดูสดใสมากยิ่งขึ้น
            คุ้มค่าราคาที่ลงทุน วางใจทุกขั้นตอนการติดตั้ง
            เก็บงานละเอียดด้วยช่างฝีมืองานเหล็กกล้าที่ชำนาญการด้านหลังคา
            Shinkolite โดยเฉพาะ
          </p>
          <p className="font-medium text-[#314556]">
            หากว่าคุณกำลังมองหาบริษัทรับทำหลังคา Shinkolite
            ที่ไว้ใจได้ในคุณภาพและความเชี่ยวชาญ ติดต่อ ROOVTECT ได้ที่เบอร์
            02-096-3464 หรือ LINE : @roovtect
          </p>
        </div>

        {/* --- Advantages Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantagesData.map((item, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full aspect-[3/4] mb-6 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  objectFit="cover"
                  className="transition-transform hover:scale-105 duration-500"
                />
              </div>
              <h3 className="text-lg font-bold text-[#314556] mb-4 italic">
                {item.title}
              </h3>
              <ul className="text-sm text-gray-600 space-y-2 list-disc pl-4">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
