import Image from "next/image";
import Link from "next/link";
import Navbar from "@/app/_components/Navbar";
import ConsultationButton from "@/app/_components/ConsultationButton";

const furnitureHighlights = [
  {
    title: "Loft & Industrial Furniture",
    description:
      "รับผลิตม้านั่ง โต๊ะ เก้าอี้ ตามแบบดีไซน์ เน้นสไตล์ Loft และ Industrial ที่โชว์เนื้อแท้วัสดุ",
  },
  {
    title: "Material Mix",
    description:
      "ผสานโครงเหล็กกับงานไม้หรือวัสดุอื่น ๆ ได้อย่างลงตัว แข็งแรงและอบอุ่น เหมาะกับคาเฟ่ สำนักงาน หรือมุมโปรดในบ้าน",
  },
];

const knockdownHighlights = [
  {
    title: "Ready-to-Use",
    description:
      "งานประกอบโครงสร้างสำเร็จรูปจากโรงงาน ควบคุมคุณภาพได้ 100% ก่อนยกไปติดตั้งหน้างาน",
  },
  {
    title: "Zero Disturbance",
    description:
      '“ลดฝุ่น ลดเสียง ลดเวลา” หน้างานสะอาด จบงานไว พร้อมใช้งานทันทีไม่รบกวนเพื่อนบ้าน',
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
    <circle cx="12" cy="12" r="9" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M8.5 12.5 11 14.5 15.5 9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function FurnitureServicePage() {
  return (
    <>
      <Navbar />
      <section className="bg-[#f7f7f8] text-[#1f1f25] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid gap-10 lg:gap-16 md:grid-cols-[1.05fr_0.95fr] items-center">
          <div className="relative h-[360px] md:h-[500px] w-full overflow-hidden rounded-[40px] shadow-xl">
            <Image
              src="/feature2.jpg"
              alt="Industrial furniture showcase"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>

          <div className="space-y-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#8f99a2]">
              Furniture & Knockdown Units
            </p>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                Industrial Charm & Rapid Solutions
              </h1>
              <p className="mt-3 text-xl text-[#4b5a66]">
                งานเหล็กผสมผสานดีไซน์... สู่เฟอร์นิเจอร์และการติดตั้งที่รวดเร็ว
              </p>
            </div>
            <p className="text-lg leading-relaxed text-[#4b5a66]">
              Power King เปลี่ยนงานเหล็กที่แข็งกระด้างให้กลายเป็นงานดีไซน์ที่มีชีวิตชีวา
              เราใส่ใจตั้งแต่การออกแบบเฟอร์นิเจอร์ลอยตัว ไปจนถึงงานโครงสร้างสำเร็จรูป
              (Knockdown) ที่ผลิตเสร็จจากโรงงาน เพื่อให้ตอบโจทย์ความสวยงาม ความรวดเร็ว
              และหน้างานที่สะอาดเรียบร้อย
            </p>
            <div className="space-y-4">
              {furnitureHighlights.map((item) => (
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
              <Link
                href="/gallery"
                className="rounded-full border border-[#c1a471] px-6 py-2 text-sm font-semibold text-[#c1a471] hover:bg-[#c1a471] hover:text-white transition-colors"
              >
                ดูผลงานเฟอร์นิเจอร์
              </Link>
              <ConsultationButton className="px-6 py-2 text-sm">
                ปรึกษาประเมินราคา
              </ConsultationButton>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white text-[#1f1f25] py-16 md:py-24 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[0.9fr_1.1fr] items-stretch">
          <div className="space-y-6">
            <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-[#8f99a2]">
              Smart Knockdown Solutions
            </p>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold">
                สะอาด จบไว พร้อมใช้
              </h2>
              <p className="mt-2 text-xl text-[#4b5a66]">
                งานสำเร็จรูปที่ควบคุมคุณภาพได้ตั้งแต่โรงงาน
              </p>
            </div>
            <p className="text-lg leading-relaxed text-[#4b5a66]">
              งาน Knockdown ของ Power King ถูกออกแบบให้ประกอบเสร็จจากโรงงาน
              ก่อนยกไปติดตั้งหน้างานจริง จึงรักษามาตรฐานการผลิตได้ครบถ้วน
              หน้างานสะอาดและปิดงานได้รวดเร็ว
            </p>
            <div className="space-y-4">
              {knockdownHighlights.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <SmallIcon />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-[#4b5a66]">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <ConsultationButton className="px-6 py-2 text-sm">
              ปรึกษาการติดตั้ง
            </ConsultationButton>
          </div>

          <div className="grid gap-4">
            <div className="relative h-72 md:h-80 w-full overflow-hidden rounded-[32px] shadow-lg">
              <Image
                src="/gallery3.jpg"
                alt="Industrial furniture interior"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="relative h-72 md:h-80 w-full overflow-hidden rounded-[32px] shadow-lg">
              <Image
                src="/process2.png"
                alt="Knockdown installation process"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
