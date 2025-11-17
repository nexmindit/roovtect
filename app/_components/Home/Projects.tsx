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
      "https://roovtect.com/wp-content/uploads/2024/12/20-06-12-21-18-23-691_deco-1.jpg",
      "https://roovtect.com/wp-content/uploads/2024/12/DSC09096-1-1536x864.jpg",
      "https://roovtect.com/wp-content/uploads/2024/12/20-09-25-19-26-01-114_deco-1536x863.jpg",
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
      "https://roovtect.com/wp-content/uploads/2024/12/solid4-1536x1026.jpg",
      "https://roovtect.com/wp-content/uploads/2024/12/solid3-1536x1026.jpg",
      "https://roovtect.com/wp-content/uploads/2024/12/solid2-1536x1026.jpg",
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
      "https://roovtect.com/wp-content/uploads/2023/07/03-solution-03-vinyl-1.webp",
      "https://roovtect.com/wp-content/uploads/2023/07/03-solution-03-vinyl-2.webp",
      "https://roovtect.com/wp-content/uploads/2023/07/03-solution-03-vinyl-3.webp",
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
      "https://roovtect.com/wp-content/uploads/2023/07/03-solution-04-shadeseriesl-1.webp",
      "https://roovtect.com/wp-content/uploads/2023/07/03-solution-04-shadeseriesl-2.webp",
      "https://roovtect.com/wp-content/uploads/2023/07/03-solution-04-shadeseriesl-.3.webp",
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
      "https://roovtect.com/wp-content/uploads/2024/05/Solution-Car-Port-1_result-1024x549.webp",
      "https://roovtect.com/wp-content/uploads/2024/05/Solution-Car-Port-2_result-1536x824.webp",
      "https://roovtect.com/wp-content/uploads/2024/05/Solution-Car-Port-3_result-1536x824.webp",
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
      "https://roovtect.com/wp-content/uploads/2023/07/03-solution-05-terrace-01.webp",
      "https://roovtect.com/wp-content/uploads/2023/07/03-solution-05-terrace-02.webp",
      "https://roovtect.com/wp-content/uploads/2023/07/03-solution-05-terrace-03.webp",
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
      "https://roovtect.com/wp-content/uploads/2023/07/home-ROOVTECT-Solution-01-1536x824.webp",
      "https://roovtect.com/wp-content/uploads/2023/07/home-ROOVTECT-Solution-02-1536x824.webp",
      "https://roovtect.com/wp-content/uploads/2023/07/home-ROOVTECT-Solution-03-1536x824.webp",
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
      "https://roovtect.com/wp-content/uploads/2024/05/Solution-FinShade-1_result-1536x824.webp",
      "https://roovtect.com/wp-content/uploads/2024/05/Solution-FinShade-2_result-1536x824.webp",
      "https://roovtect.com/wp-content/uploads/2024/05/Solution-FinShade-3_result-1536x824.webp",
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
      "https://roovtect.com/wp-content/uploads/2024/05/Solution-Aron-1_result-1536x824.webp",
      "https://roovtect.com/wp-content/uploads/2024/05/Solution-Aron-2_result-1536x824.webp",
      "https://roovtect.com/wp-content/uploads/2024/05/Solution-Aron-3_result-1536x824.webp",
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
  const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);
  const totalImages = images.length;

  React.useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalImages);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalImages]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalImages);
    pauseAutoPlay();
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalImages) % totalImages);
    pauseAutoPlay();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">
      <div className="w-full">
        <div className="relative w-full aspect-[16/9] overflow-hidden">
          {images.map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={title}
              fill
              objectFit="cover"
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              priority={index === 0}
            />
          ))}

          <button
            onClick={goToPrev}
            className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all"
            aria-label="Previous slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-black/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all"
            aria-label="Next slide"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <div className="absolute bottom-4 left-4 flex gap-2 z-30">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 border border-white ${
                  currentIndex === index
                    ? "bg-white"
                    : "bg-gray-500 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
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
