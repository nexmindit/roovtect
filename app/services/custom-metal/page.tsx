import Image from "next/image";
import Navbar from "@/app/_components/Navbar";
import ConsultationButton from "@/app/_components/ConsultationButton";
import ServiceGallery, { Project } from "@/app/_components/ServiceGallery";
import { Link } from "lucide-react";

const projects: Project[] = [
  {
    name: "Steel Signage Tower",
    category: "Commercial",
    location: "Bangkok",
    image: "/images/services/custom-metal/gallery/1.jpg",
  },
  {
    name: "Stainless Detail",
    category: "Architectural",
    location: "Samut Prakan",
    image: "/images/services/custom-metal/gallery/2.jpg",
  },
  {
    name: "Custom Structure",
    category: "Industrial",
    location: "Rayong",
    image: "/images/services/custom-metal/gallery/3.png",
  },
];

const metalServices = [
  {
    title: "Bespoke Design Execution",
    subtitle: "งานสั่งทำตามแบบ",
    description:
      "รองรับงาน Custom Made ทุกชนิด ไม่ว่าดีไซน์จะซับซ้อนเพียงใด เราทำงานร่วมกับผู้ออกแบบอย่างใกล้ชิด เพื่อให้ผลงานออกมาตรงตามแบบ 100%.",
  },
  {
    title: "Commercial Signage & Towers",
    subtitle: "โครงสร้างป้ายและทาวเวอร์",
    description:
      "บริการทำโครงป้ายร้านและ Signage Tower ขนาดใหญ่ พร้อมการคำนวณโครงสร้างที่มั่นคง ทนแรงลม ปลอดภัย และโดดเด่นทุกมุมมอง.",
  },
  {
    title: "Advanced Fabrication",
    subtitle: "งานประกอบสถาปัตยกรรม",
    description:
      "ถนัดงานเทคนิคสูง เช่น งานดัดโค้ง งานพับ และงานเชื่อมสแตนเลสเกรดพรีเมียม เก็บงานเนียนกริบ เหมาะกับงานโชว์ผิววัสดุทั้งภายในและภายนอก.",
  },
];

const aluminumHighlights = [
  {
    title: "Rust-Free Guarantee",
    description:
      "วัสดุอลูมิเนียม 100% ทนต่อความชื้นและฝน หมดกังวลเรื่องสนิม ดูแลรักษาง่ายและอายุการใช้งานยาวนาน.",
  },
  {
    title: "Seamless Powder Coat",
    description:
      "ผ่านระบบ Powder Coat มาตรฐานโรงงาน ทำให้สีติดทนนาน ผิวสัมผัสเรียบเนียนและโมเดิร์น.",
  },
  {
    title: "Versatile Application",
    description:
      "เหมาะสำหรับ Glass House, กันสาดหน้าต่าง, ระแนงตกแต่ง หรือพื้นที่ที่ต้องการความโปร่งและหรูหรา.",
  },
];

export default function CustomMetalServicePage() {
  return (
    <>
      <Navbar />
      <section className="bg-[#f7f7f8] text-[#1f1f25]">
        {/* Section 3.2 - Custom Metal & Stainless Works (Full Width) */}
        <div className="grid lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          <div className="flex flex-col justify-center p-8 md:p-16 lg:p-24 space-y-8">
            <div className="space-y-4">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#9ba2ab]">
                Custom Metal & Stainless Works
              </p>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                  Crafting Your Vision
                </h1>
                <p className="mt-3 text-lg text-[#555b63]">
                  รับงานตามแบบดีไซน์... เปลี่ยนจินตนาการให้เป็นโครงสร้างจริง
                </p>
              </div>
              <p className="text-lg leading-relaxed text-[#555b63]">
                เราไม่ได้มองงานเหล็กและสแตนเลสเป็นเพียงวัสดุก่อสร้าง
                แต่คือ &quot;งานศิลปะเชิงวิศวกรรม&quot; Power King พร้อมรับความท้าทายทุกโปรเจกต์
                ตั้งแต่งานตกแต่งไปจนถึงโครงสร้างขนาดใหญ่
                ด้วยการควบคุมคุณภาพทุกมิลลิเมตรและการเก็บงานที่ประณีตที่สุด
              </p>
            </div>

            <div className="space-y-6">
              {metalServices.map((service) => (
                <div key={service.title}>
                  <p className="text-xs uppercase tracking-[0.2em] text-[#c2a678]">
                    {service.title}
                  </p>
                  <h3 className="text-xl font-semibold mt-1">{service.subtitle}</h3>
                  <p className="mt-2 text-sm text-[#555b63]">{service.description}</p>
                </div>
              ))}
            </div>

            <ConsultationButton className="w-full sm:w-auto px-8 py-3">
              ปรึกษาประเมินราคาฟรี!!
            </ConsultationButton>

          </div>

          <div className="relative h-[400px] lg:h-full w-full overflow-hidden">
            <Image
              src="/images/services/custom-metal/1.1.png"
              alt="Steel signage tower"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f8] text-[#1f1f25] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section 3.3 - Architectural Aluminum */}
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div className="relative h-80 md:h-[420px] w-full overflow-hidden rounded-[32px] shadow-lg order-1 lg:order-none">
              <Image
                src="/images/services/custom-metal/2.png"
                alt="Aluminum glass house"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
            </div>

            <div className="space-y-6">
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#9ba2ab]">
                Flawless Modernity
              </p>
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold">
                  Architectural Aluminum
                </h2>
                <p className="mt-2 text-lg text-[#555b63]">
                  งานอลูมิเนียมเกรดสถาปัตยกรรม... เพื่อบ้านสมัยใหม่
                </p>
              </div>
              <p className="text-lg leading-relaxed text-[#555b63]">
                ยกระดับความมินิมอลไปอีกขั้นด้วยโครงสร้างอลูมิเนียมคุณภาพสูง
                น้ำหนักเบาแต่แข็งแรง ตอบโจทย์งานต่อเติมที่ต้องการความเนี้ยบของเส้นสาย
                และความสะอาดตาของหน้างาน พร้อมรองรับการติดตั้งกระจกหรือแผ่นโปร่งแสงได้ทุกรูปแบบ
              </p>

              <div className="space-y-4">
                {aluminumHighlights.map((item) => (
                  <div key={item.title}>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#c2a678]">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-[#555b63]">{item.description}</p>
                  </div>
                ))}
              </div>

              <ConsultationButton className="w-full sm:w-auto px-8 py-3">
                ปรึกษาประเมินราคาฟรี!!
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      <ServiceGallery
        title="Custom Metal Projects"
        subtitle="ผลงานเหล็กและสแตนเลส"
        projects={projects}
      />
    </>
  );
}
