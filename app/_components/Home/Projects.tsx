"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProjectFeature {
  title: string;
  features: React.ReactNode[];
  images: string[];
  href: string;
}

const garageProjects: ProjectFeature[] = [
  {
    title: "ROOVTECT x Shinkolite",
    features: [
      "ต่อเติมหลังคาด้วยวัสดุแผ่นมุงโปร่งแสง",
      "วัสดุอะคริลิกชินโคไลท์นวัตกรรมใหม่",
      "เทคโนโลยี Heat Cut ลดการส่งผ่านความร้อน 58%",
      "ป้องกันรังสี UV 99%",
      "ตัวแผ่นหนากว่า 6 มิลลิเมตร แข็งแรงทนทาน",
    ],
    images: [
      "https://placehold.co/800x450/cccccc/314556?text=Image+1",
      "https://placehold.co/800x450/cccccc/314556?text=Image+2",
      "https://placehold.co/800x450/cccccc/314556?text=Image+3",
    ],
    href: "/shinkolite",
  },
  {
    title: "Solid Sheet",
    features: [
      "ต่อเติมหลังคาด้วยวัสดุแผ่นมุงหลังคาโปร่งแสง",
      "วัสดุโพลีตัน หรือ Solid Polycarbonate",
      "คุณสมบัติป้องกันความร้อน และรังสี UV 99%",
      "ตัวแผ่นหนา 3 มิลลิเมตร น้ำหนักเบา เหนียว แข็งแรง",
      "รับประกันตัวแผ่นนาน 10 ปี",
    ],
    images: [
      "https://placehold.co/800x450/cccccc/314556?text=Image+1",
      "https://placehold.co/800x450/cccccc/314556?text=Image+2",
      "https://placehold.co/800x450/cccccc/314556?text=Image+3",
    ],
    href: "/solid-sheet",
  },
  {
    title: "Smart Vinyl",
    features: [
      "ต่อเติมหลังคาด้วยวัสดุแผ่นมุงหลังคาสมาร์ตไวนิล",
      "พื้นผิวใต้ท้องเรียบสวยงาม ยืดหยุ่นคงทน",
      "คุณสมบัติช่วยดูดซับเสียงกระทบของน้ำฝนบนหลังคา",
    ],
    images: [
      "https://placehold.co/800x450/cccccc/314556?text=Image+1",
      "https://placehold.co/800x450/cccccc/314556?text=Image+2",
      "https://placehold.co/800x450/cccccc/314556?text=Image+3",
    ],
    href: "/smart-vinyl",
  },
  {
    title: "Shade Series",
    features: [
      "เพิ่มความสวยงามด้วยระแนงอะลูมิเนียม และระแนงเหล็กเคลือบลายไม้",
      "วัสดุเสริมน้ำหนักเบา สำหรับตกแต่งใต้หลังคา",
      "คุณสมบัติช่วยลดการส่งผ่านความร้อนให้ดียิ่งขึ้น",
    ],
    images: [
      "https://placehold.co/800x450/cccccc/314556?text=Image+1",
      "https://placehold.co/800x450/cccccc/314556?text=Image+2",
      "https://placehold.co/800x450/cccccc/314556?text=Image+3",
    ],
    href: "/shade-series",
  },
  {
    title: "Aluminum Car Port",
    features: [
      "ต่อเติมหลังคาโรงรถคุณภาพสูง ราคาคุณภาพ",
      "โครงสร้างหลังคาวัสดุอลูมิเนียม นำเข้าจากญี่ปุ่น",
      "เลือกใช้วัสดุที่เข้ากันได้กับบ้านหลากหลายสไตล์",
      "ดีไซน์ด้วยความพิถีพิถัน เป็นหนึ่งเดียวกับบ้านของคุณได้อย่างลงตัว",
    ],
    images: [
      "https://placehold.co/800x450/cccccc/314556?text=Image+1",
      "https://placehold.co/800x450/cccccc/314556?text=Image+2",
      "https://placehold.co/800x450/cccccc/314556?text=Image+3",
    ],
    href: "/aluminum-car-port",
  },
  {
    title: "ROOVTECT Terrace",
    features: [
      "ROOVTECT ระแนงไม้เทียม รุ่นไม้ตัน",
      "สวยงามเสมือนไม้จริง",
      "คุณสมบัติกันปลวก กันเชื้อรา ช่วยยืดอายุการใช้งาน",
      "ติดตั้งโครงสร้างด้วยเหล็กกล่องชุบ Galvanized กันสนิม",
      "กระบวนการลงเสาเข็มเหล็ก (KEMREX)",
      "ลดการทรุดตัวของพื้นระแนงไม้เดิม",
    ],
    images: [
      "https://placehold.co/800x450/cccccc/314556?text=Image+1",
      "https://placehold.co/800x450/cccccc/314556?text=Image+2",
      "https://placehold.co/800x450/cccccc/314556?text=Image+3",
    ],
    href: "/terrace",
  },
];

const facadeProjects: ProjectFeature[] = [
  {
    title: "LINK Facade",
    features: [
      "ปรับเปลี่ยนภาพลักษณ์ของบ้านและอาคาร",
      "ใช้วัสดุ Facade ตกแต่งอาคารจาก Shinkolite",
      "เน้นความโปร่งโล่ง แต่ยังคงความเป็นส่วนตัวให้แก่ผู้พักอาศัย",
      "ได้รับการออกแบบอย่างพิถีพิถัน โดย Jun Sekino จาก Junsekino Architect and Design",
    ],
    images: [
      "https://placehold.co/800x450/cccccc/314556?text=Image+1",
      "https://placehold.co/800x450/cccccc/314556?text=Image+2",
      "https://placehold.co/800x450/cccccc/314556?text=Image+3",
    ],
    href: "/link-facade",
  },
  {
    title: "Fin & Shade",
    features: [
      "มิติใหม่ของวัสดุระแนงบังสายตา ด้วยระแนงอะคริลิก",
      "จาก Shinkolite มาพร้อมคุณสมบัติการลดทอนความร้อน",
      "ได้สูงสุด 8 องศา พร้อมป้องกัน UV 99%",
      "เพิ่มความโดดเด่น ในทุกมุมมองของที่อยู่อาศัย",
    ],
    images: [
      "https://placehold.co/800x450/cccccc/314556?text=Image+1",
      "https://placehold.co/800x450/cccccc/314556?text=Image+2",
      "https://placehold.co/800x450/cccccc/314556?text=Image+3",
    ],
    href: "/fin-shade",
  },
  {
    title: "Aron",
    features: [
      "นวัตกรรมระแนงเหล็กลายไม้ สำหรับตกแต่ง",
      "มาพร้อมกับคุณภาพความคงทน อายุการใช้งานยาวนาน",
      "ด้วยเทคโนโลยีการเคลือบสีทนความร้อนสูง",
      "ทำให้สีสวยงามและติดทนนานยิ่งขึ้น",
      "เพิ่มความรู้สึกอบอุ่นเหมือนได้อยู่ใกล้ชิดธรรมชาติ",
    ],
    images: [
      "https://placehold.co/800x450/cccccc/314556?text=Image+1",
      "https://placehold.co/800x450/cccccc/314556?text=Image+2",
      "https://placehold.co/800x450/cccccc/314556?text=Image+3",
    ],
    href: "/aron",
  },
];

const ProjectItem: React.FC<ProjectFeature> = ({
  title,
  features,
  images,
  href,
}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="w-full">
        <div className="relative w-full aspect-video overflow-hidden">
          <Image
            src={images[currentIndex]}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="transition-opacity duration-300"
          />
        </div>
        <div className="flex justify-center items-center gap-2 pt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-white" : "bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="text-gray-200">
        <h3 className="text-3xl font-semibold text-white mb-6 italic">
          {title}
        </h3>
        <ul className="space-y-3 list-disc list-inside mb-8">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
        <Link
          href={href}
          className="inline-block text-gray-200 border border-gray-400 rounded-full py-2 px-6 transition-colors hover:bg-white hover:text-[#314556]"
        >
          View More &rsaquo;
        </Link>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <section className="w-full bg-[#314556] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white mb-16 pl-4 border-l-4 border-white">
          Garage & Canopy
        </h2>

        <div className="space-y-16">
          {garageProjects.map((project, index) => (
            <React.Fragment key={project.title}>
              <ProjectItem {...project} />
              {index < garageProjects.length - 1 && (
                <hr className="border-gray-600" />
              )}
            </React.Fragment>
          ))}
        </div>

        <h2 className="text-5xl md:text-6xl font-bold text-white my-16 pl-4 border-l-4 border-white">
          Facade
        </h2>

        <div className="space-y-16">
          {facadeProjects.map((project, index) => (
            <React.Fragment key={project.title}>
              <ProjectItem {...project} />
              {index < facadeProjects.length - 1 && (
                <hr className="border-gray-600" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
