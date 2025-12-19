import Image from "next/image";
import Link from "next/link";
import ConsultationButton from "@/app/_components/ConsultationButton";
import Navbar from "@/app/_components/Navbar";
import ServiceGallery, { Project } from "@/app/_components/ServiceGallery";

const projects: Project[] = [
  {
    name: "Modern Canopy",
    category: "Residential",
    location: "Bangkok",
    image: "/images/services/shinkolite/gallery/1.jpg",
  },
  {
    name: "Glass House Extension",
    category: "Residential",
    location: "Nonthaburi",
    image: "/images/services/shinkolite/gallery/2.jpg",
  },
  {
    name: "Commercial Walkway",
    category: "Commercial",
    location: "Pattaya",
    image: "/images/services/shinkolite/gallery/3.jpg",
  },
];

const highlights = [
  {
    title: "Elevate Your Space",
    description:
      "เปลี่ยนพื้นที่รอบบ้านให้ดูดีมีระดับ บรรยากาศโปร่งโล่งไม่อึดอัด",
  },
  {
    title: "Superior Material",
    description:
      "แผ่นอะคริลิกเกรดพรีเมียม ใสเหมือนกระจกแต่เหนียวแน่นและปลอดภัย",
  },
  {
    title: "Heat & UV Block",
    description: "กรองแสงและกันความร้อนได้เยี่ยม บ้านจึงเย็นสบายแม้อยู่กลางแดด",
  },
  {
    title: "Versatile Use",
    description:
      "ดีไซน์ลงตัวกับทุกพื้นที่ เช่น โรงจอดรถ ลานซักล้าง หรือเฉลียงหน้าบ้าน",
  },
];

const metalHighlights = [
  {
    title: "Heavy Duty",
    description:
      "รองรับงานโครงสร้างขนาดใหญ่ที่ต้องการความแข็งแรงและการรับน้ำหนักสูง",
  },
  {
    title: "Precision Welding",
    description:
      "งานเชื่อมมาตรฐานสูง รอยต่อแนบสนิท แข็งแรง ทนทาน แม้ใช้งานกลางแจ้ง",
  },
  {
    title: "Custom Design",
    description:
      "ขึ้นรูปได้ตามจินตนาการ ทั้งเหล็กทำสีและสแตนเลสเกรด 304 ที่ไม่เป็นสนิม",
  },
];

const aluminumHighlights = [
  {
    title: "100% Rust-Free",
    description:
      "ใช้อลูมิเนียมเกรดสถาปัตย์ หมดห่วงเรื่องสนิม ดูแลรักษาง่าย อายุการใช้งานยาวนาน",
  },
  {
    title: "Seamless Finish",
    description:
      "ผ่านระบบ Powder Coat ให้ผิวสัมผัสเรียบเนียน สีสวยสม่ำเสมอทุกชิ้นงาน",
  },
  {
    title: "Modern Aesthetics",
    description:
      "น้ำหนักเบาแต่แข็งแรง ให้ลุคมินิมอลสำหรับบ้านยุคใหม่และเรือนกระจก",
  },
];

const SmallIcon = () => (
  <svg
    className="h-5 w-5 flex-shrink-0 text-[#c1a471]"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    viewBox="0 0 24 24"
  >
    <circle
      cx="12"
      cy="12"
      r="9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 12.5 11 14.5 15.5 9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function ShinkoliteServicePage() {
  return (
    <>
      <Navbar />

      <section className="bg-[#f5f6f8] text-[#1f2c38]">
        <div className="w-full grid md:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          <div className="order-2 md:order-2 flex flex-col justify-center p-8 md:p-16 lg:p-24 space-y-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#8f99a2]">
              Shinkolite Roofing & Canopy
            </p>
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                Elegant Protection
              </h1>
              <p className="mt-3 text-lg text-[#4b5a66]">
                สวยงาม... แต่ปกป้องดีเยี่ยม
              </p>
            </div>
            <p className="text-lg leading-relaxed text-[#4b5a66]">
              Shinkolite Roofing & Canopy
              คือคำตอบสำหรับพื้นที่ที่ต้องการความโปร่ง หรู
              และกันความร้อนในเวลาเดียวกัน เราคัดสรรแผ่นอะคริลิกเกรดพรีเมียม
              ผสานกับโครงสร้างสีดำสนิทหรือสีโมเดิร์นตามสไตล์บ้าน
              เพื่อให้ทุกองศาดูพรีเมียมและปลอดภัย
            </p>

            <div className="grid gap-5">
              {highlights.map((item) => (
                <div key={item.title}>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c1a471]">
                    {item.title}
                  </p>
                  <p className="mt-1.5 text-base text-[#4b5a66]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <ConsultationButton className="mt-6 w-full sm:w-auto px-8 py-3">
              ปรึกษาประเมินราคาฟรี!!
            </ConsultationButton>
          </div>

          <div className="relative order-1 md:order-1 aspect-[16/11] md:aspect-auto md:h-full w-full overflow-hidden bg-black/5">
            <Image
              src="/images/services/shinkolite/1.png"
              alt="Shinkolite modern carport"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-white text-[#1f2c38] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid gap-10 lg:gap-16 md:grid-cols-[1fr_1.1fr] items-center">
          <div className="space-y-6 order-2 md:order-none">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#8f99a2]">
              Custom Metal Structures
            </p>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Solid Foundation
              </h2>
              <p className="mt-3 text-lg text-[#4b5a66]">
                รากฐานที่มั่นคงสำหรับทุกงานโครงสร้าง
              </p>
            </div>
            <p className="text-lg leading-relaxed text-[#4b5a66]">
              เหมาะสำหรับงานโครงสร้างหลักที่ต้องการความแข็งแรงสูง
              ไม่ว่าจะเป็นลานอเนกประสงค์ โครงกันสาดระแนง หรือโครงการเชิงพาณิชย์
              เรามีทีมงานที่เชี่ยวชาญงานเหล็กและสแตนเลสทั้งด้านวิศวกรรมและงานศิลป์
            </p>
            <div className="space-y-4">
              {metalHighlights.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <SmallIcon />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-[#4b5a66]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <ConsultationButton className="px-6 py-2 text-sm">
                ปรึกษาประเมินราคาฟรี!!
              </ConsultationButton>
            </div>
          </div>

          <div className="relative h-[360px] md:h-[480px] w-full overflow-hidden rounded-[40px] shadow-xl">
            <Image
              src="/images/services/shinkolite/2.1.png"
              alt="Custom metal structure"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f8] text-[#1f2c38] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid gap-10 lg:gap-16 md:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="relative h-[360px] md:h-[480px] w-full overflow-hidden rounded-[40px] shadow-xl">
            <Image
              src="/images/services/shinkolite/3.png"
              alt="Architectural aluminum gazebo"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
          </div>

          <div className="space-y-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#8f99a2]">
              Architectural Aluminum
            </p>
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold">
                Flawless Modernity
              </h2>
              <p className="mt-3 text-lg text-[#4b5a66]">
                งานอลูมิเนียมเกรดสถาปัตยกรรมไร้สนิม
              </p>
            </div>
            <p className="text-lg leading-relaxed text-[#4b5a66]">
              โครงสร้างอลูมิเนียมช่วยยกระดับความมินิมอลด้วยเส้นสายที่คมชัด
              น้ำหนักเบา และปลอดสนิม เหมาะกับ Glass House ศาลาพักผ่อน
              หรือกันสาดทรงโมเดิร์น
            </p>
            <div className="space-y-4">
              {aluminumHighlights.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <SmallIcon />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-[#4b5a66]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <ConsultationButton className="px-6 py-2 text-sm">
                ปรึกษาประเมินราคาฟรี!!
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      <ServiceGallery
        title="Shinkolite Projects"
        subtitle="ผลงาน Shinkolite ของเรา"
        projects={projects}
      />
    </>
  );
}
