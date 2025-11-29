import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/_components/Navbar";
import { ConsultationButton } from "../_components";

const filterOptions = [
  { label: "All Projects", value: "all" },
  { label: "Shinkolite Roofing", value: "shinkolite" },
  { label: "Custom Metal", value: "metal" },
  { label: "Furniture & Knockdown", value: "furniture" },
];

const projects = [
  {
    name: "Modern Carport @Bangna",
    category: "Shinkolite Roofing",
    location: "Private Residence, Bangna",
    image: "/gallery1.png",
  },
  {
    name: "Loft Walkway Canopy",
    category: "Custom Metal",
    location: "Commercial Space, Rama 9",
    image: "/feature1.png",
  },
  {
    name: "Slow Bar Loft Set",
    category: "Furniture & Knockdown",
    location: "Cafe, Ekkamai",
    image: "/gallery3.jpg",
  },
  {
    name: "Driveway in Light",
    category: "Shinkolite Roofing",
    location: "Private Residence, Rama 2",
    image: "/shinkolite/carousel2.webp",
  },
  {
    name: "Iconic Signage Tower",
    category: "Custom Metal",
    location: "Restaurant, Srinakarin",
    image: "/feature1.png",
  },
  {
    name: "Knockdown Guard House",
    category: "Furniture & Knockdown",
    location: "Modern Office, Bangkapi",
    image: "/process2.png",
  },
];

const caseStudies = [
  {
    title: "The Modern Canopy",
    project: "Renovate โรงจอดรถบ้านเดี่ยว",
    challenge: "ลูกค้าต้องการความสว่าง แต่กลัวร้อน และไม่อยากได้เสาเกะกะ",
    solution:
      "ออกแบบโครงสร้างเหล็กแบบยื่น Cantilever ใช้แผ่น Shinkolite รุ่นกันความร้อนสี Modern Grey",
    result: "พื้นที่หน้าบ้านโปร่ง โล่ง สบายตา และลดอุณหภูมิได้จริง",
    image: "/gallery1.png",
  },
  {
    title: "The Iconic Tower",
    project: "ป้ายทาวเวอร์หน้าร้านอาหาร",
    challenge: "ต้องการป้ายสูงเด่นในพื้นที่ลมแรง และต้องติดตั้งรวดเร็ว",
    solution:
      "คำนวณโครงสร้างเหล็กถัก (Truss) รับแรงลม พร้อมเตรียมชิ้นงานประกอบสำเร็จจากโรงงาน 80%",
    result: "โครงสร้างแข็งแกร่ง ติดตั้งเสร็จภายใน 2 วัน หน้างานสะอาด",
    image: "/feature1.png",
  },
  {
    title: "Industrial Loft Space",
    project: "ตกแต่งร้านกาแฟ Slow Bar",
    challenge: "ต้องการเฟอร์นิเจอร์ลอยตัวที่ทนทาน และเข้ากับผนังปูนเปลือย",
    solution:
      "ชุดโต๊ะบาร์ขาเหล็กสีดำด้าน ท็อปไม้เก่าขัดเสี้ยน พร้อมชั้นวางของเหล็กฉีก",
    result: "ได้บรรยากาศดิบเท่ แข็งแรงทนทานต่อการใช้งานหนัก",
    image: "/gallery3.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f7f7f8] text-[#1f1f25]">
        <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto text-center space-y-4">
            <p className="uppercase text-xs tracking-[0.3em] text-[#b0b7be]">
              Gallery of Strength & Design
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Our Masterpieces</h1>
            <p className="text-lg text-[#4b5a66]">
              ผลงานความภูมิใจ... ที่เราสร้างสรรค์ด้วยความใส่ใจ ตั้งแต่งานบ้านพักอาศัย
              ไปจนถึงโครงการขนาดใหญ่ สะท้อนมาตรฐานความแข็งแกร่งและดีไซน์ที่ลงตัว
            </p>
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6 bg-white">
          <div className="max-w-5xl mx-auto flex flex-wrap gap-4 justify-center">
            {filterOptions.map((filter) => (
              <button
                key={filter.value}
                className="rounded-full border border-[#d5d9dc] px-6 py-2 text-sm font-medium text-[#4b5a66] hover:border-[#c1a471] hover:text-[#c1a471]"
              >
                {filter.label}
              </button>
            ))}
          </div>
        </section>

        <section className="py-12 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <div
                key={project.name}
                className="group overflow-hidden rounded-[28px] bg-white shadow-sm"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/20" />
                </div>
                <div className="p-5 space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c1a471]">
                    {project.category}
                  </p>
                  <h3 className="text-lg font-semibold">{project.name}</h3>
                  <p className="text-sm text-[#6c7480]">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 md:py-24 px-4 sm:px-6 bg-[#f0f0f2]">
          <div className="max-w-6xl mx-auto space-y-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-center">
              Highlight Case Studies
            </h2>
            <div className="space-y-12">
              {caseStudies.map((caseStudy, index) => (
                <div
                  key={caseStudy.title}
                  className={`grid gap-8 lg:grid-cols-2 items-center ${index % 2 === 1 ? "lg:[&>img]:order-2" : ""
                    }`}
                >
                  <div className="relative h-72 md:h-80 w-full overflow-hidden rounded-[32px] shadow-lg">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                  </div>
                  <div className="space-y-3">
                    <p className="text-xs uppercase tracking-[0.3em] text-[#c1a471]">
                      {caseStudy.title}
                    </p>
                    <h3 className="text-2xl font-semibold">{caseStudy.project}</h3>
                    <div className="space-y-2 text-sm text-[#4b5a66]">
                      <p>
                        <span className="font-semibold">Challenge:</span>{" "}
                        {caseStudy.challenge}
                      </p>
                      <p>
                        <span className="font-semibold">Solution:</span>{" "}
                        {caseStudy.solution}
                      </p>
                      <p>
                        <span className="font-semibold">Result:</span>{" "}
                        {caseStudy.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 px-4 sm:px-6 bg-[#0f1f2d] text-white">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="uppercase text-xs tracking-[0.3em] text-[#f3d48c]">
              Ready to Talk?
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold">
              เห็นภาพแล้ว... อยากให้เราเริ่มงานของคุณไหม?
            </h2>
            <p className="text-lg text-white/80">
              ปรึกษาและประเมินราคาเบื้องต้นได้ฟรี เราพร้อมเปลี่ยนไอเดียของคุณให้เป็นจริง
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <ConsultationButton className="px-6 py-2 text-sm">
                ปรึกษาประเมินราคาฟรี!!
              </ConsultationButton>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
