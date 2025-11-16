import React from "react";
import Image from "next/image";
import Link from "next/link";

const designData = [
  {
    imageSrc: "/structure_design1.webp",
    title: "Cantilever Design",
    subtitle: "กันสาดแบบไร้เสา",
    features: [
      <>ออกแบบและดำเนินการต่อเติมกันสาดหน้าบ้านให้เป็นกันสาดไร้เสา</>,
      <>
        <strong>ติดตั้งระบบเท้าแขนเพลท</strong> หรือ
        <strong>ระบบเพลาตันดึงบน</strong>{" "}
        ที่ช่วยซัปพอร์ตกันสาดด้วยการรับน้ำหนักของโครงสร้างที่ติดตั้งเข้ากับบริเวณคานโครงสร้างเหล็ก
      </>,
      <>
        <strong>ประเมิน วิเคราะห์ และออกแบบ</strong>โดยทีมงานวิศวกรมืออาชีพ
      </>,
      <>
        <strong>โครงสร้างหลังคากันสาด</strong>
        ถุกผลิตมาในรูปแบบกึ่งสำเร็จทั้งชิ้นงาน ติดตั้งระบบ{" "}
        <strong>Knockdown</strong>
      </>,
    ],
  },
  {
    imageSrc: "/structure_design2.webp",
    title: "Signature Column",
    subtitle: "หลังคาระบบตั้งเสา",
    features: [
      <>
        <strong>การผลิตที่แม่นยำ</strong>{" "}
        ใช้เครื่องจักรอุตสาหกรรมปั๊มพับขึ้นรูปเหล็กกล้า
        ทำให้งานสวยงามและโครงสร้างมั่นคง
      </>,
      <>
        <strong>โครงสร้างแข็งแกร่ง</strong> เสริมโครงสร้างเหล็กภายใน
        รองรับน้ำหนักกันสาดและหลังคาได้อย่างแข็งแรง
      </>,
      <>
        <strong>ใช้งานได้อย่างยืดหยุ่น</strong>{" "}
        เหมาะสำหรับทั้งทำหลังคาหน้าบ้านและพื้นที่นั่งเล่น
        รวมถึงกันสาดโปร่งแสงข้างบ้าน เพื่อการออกแบบที่ลงตัว
      </>,
      <>
        โครงสร้างระบบ <strong>Flexible Joint</strong>{" "}
        ช่วยลดปัญหาการทรุดตัวของหลังคาโรงรถเสาเข็ม
      </>,
    ],
  },
  {
    imageSrc: "/structure_design3.webp",
    title: "Modern Wide Span",
    subtitle: "โครงสร้างระบบหน้ากว้างสูงสุด 12 เมตร",
    features: [
      <>
        <strong>ดีไซน์เสาและคานพิเศษ</strong>
        ช่วยรับน้ำหนักหลังคาและกันสาดได้มั่นคง
      </>,
      <>
        <strong>ขยายระยะห่างเสาได้ถึง 12 เมตร</strong> รองรับหลังคาโรงรถจอดได้
        4-5 คันโดยไม่มีเสากลาง
      </>,
      <>
        ใช้วิธี <strong>ROOVTECT Signature</strong>{" "}
        ปั๊มพับเหล็กด้วยเครื่องจักรอุตสาหกรรมมาตรฐานสูง
      </>,
      <>
        <strong>การันตีความแข็งแรง มั่นคง</strong>{" "}
        ด้วยนวัตกรรมสำคัญสำหรับงานต่อเติมหลังคาโรงจอดรถและกันสาด
      </>,
    ],
  },
  {
    imageSrc: "/structure_design4.webp",
    title: "Classical Contemporary",
    subtitle: "หลังคาโรงรถแบบคลาสสิก",
    features: [
      <>
        <strong>ต่อเติมหลังคาโรงรถและกันสาด</strong>
        ด้วยดีไซน์เฉพาะตัวสไตล์คลาสสิกร่วมสมัย
      </>,
      <>
        ผลิตชิ้นส่วนเหล็กแบบ <strong>Prefabricated</strong>{" "}
        ประณีตในทุกรายละเอียด
      </>,
      <>
        <strong>รองรับหลังคาทึบแสงและโปร่งแสง</strong>{" "}
        พร้อมระบบซ่อนงานระบายน้ำอย่างสวยงาม แยบยล
      </>,
    ],
  },
];

export default function StructureDesign() {
  return (
    <section className="w-full bg-[#EAE8E4] py-12 px-4 lg:px-12">
      <div className="mx-auto">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
          <div className="mb-4">
            <Image
              src="/logo-icon-navy.png"
              alt="Roovtect Logo"
              width={80}
              height={50}
              className="object-contain"
            />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#314556] mb-6">
            ROOVTECT STRUCTURE DESIGN
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            ROOVTECT ไม่เพียงเป็นบริษัทรับต่อเติมหลังคาหน้าบ้าน รับทำหลังคาโรงรถ
            และต่อเติมกันสาดกันแดดกันฝน
            แต่เรายังใส่ใจในงานออกแบบที่เป็นเอกลักษณ์
            กลมกลืนกับบ้านและอาคารที่คุณภูมิใจ
            ภายใต้การดูแลของสถาปนิกและวิศวกรมืออาชีพ โดยใช้หลักการออกแบบ
            Tailor-made
            เน้นการดีไซน์งานเหล็กกล้าให้ทันสมัยและเข้ากับบ้านคุณอย่างลงตัว
            พร้อมรังสรรค์หลังคาและกันสาดโรงรถ
            ด้วยการสร้างงานเหล็กเส้นให้สวยงามอย่างที่คุณจะต้องประทับใจ
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-12 mb-16">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#00B900] text-white px-6 py-2.5 rounded-full hover:bg-[#009e00] font-bold transition-colors shadow-md"
          >
            <svg
              className="w-7 h-7 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            <span className="text-xl">LINE</span>
          </Link>

          <Link
            href="tel:020963464"
            className="flex items-center gap-2 bg-[#314556] text-white px-6 py-2.5 rounded-full hover:bg-[#1e2a35] font-medium transition-colors shadow-md"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <span className="text-lg">02-096-3464</span>
          </Link>

          <Link
            href="/consultation"
            className="bg-[#314556] text-white px-6 py-2.5 rounded-full hover:bg-[#1e2a35] font-medium transition-colors shadow-md"
          >
            ปรึกษาฟรี
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {designData.map((item) => (
            <div key={item.title} className="flex flex-col">
              <div className="w-full h-[450px] relative overflow-hidden mb-4">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              <h3 className="text-2xl font-bold text-[#314556]">
                {item.title}
              </h3>
              <h4 className="text-xl font-semibold text-gray-700 mb-3">
                {item.subtitle}
              </h4>
              <ul className="space-y-2 text-gray-600 list-disc list-inside">
                {item.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
