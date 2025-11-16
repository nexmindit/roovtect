import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="w-full py-24 flex flex-col justify-center items-center px-4 md:px-12 lg:px-52 bg-white text-[#3d4f5e]">
      <h1 className="text-center text-3xl font-semibold">
        ROOVTECT รับต่อเติมหลังคาโรงรถ หลังคาบ้าน กันสาด ราคาคุ้มค่า
      </h1>
      <p className="text-center mt-4 text-lg">
        บริการต่อเติมหลังคาหน้าบ้าน รับทำหลังคาโรงรถ และรับติดตั้งกันสาด
        ราคาคุ้มค่า จาก ROOVTECT มั่นใจได้ในมาตรฐาน
        ออกแบบและกำกับดูแลโดยกลุ่มสถาปนิกรุ่นใหม่ ดีไซน์สวยงาม
        เข้ากับไลฟ์สไตล์และตัวบ้าน
        พร้อมให้คำปรึกษาตั้งแต่ขั้นตอนแรกถึงขั้นตอนสุดท้าย
        จนได้ชิ้นงานที่ตรงใจคุณ การันตีได้งานตรงตามดีไซน์ และใช้วัสดุคุณภาพสูง
        เก็บงานเรียบร้อยโดยช่างที่มีความเชี่ยวชาญเฉพาะทาง
        บริการด้วยความเป็นมืออาชีพทุกขั้นตอน จนได้งานที่ออกมาดีที่สุดเพื่อคุณ
      </p>
      <br />
      <br />
      <p className="text-center mt-4 text-lg">
        ROOVTECT เราคือทีมสถาปนิกรุ่นใหม่
        ที่ระดมความคิดเพื่อเปลี่ยนโฉมอุตสาหกรรมเหล็กกล้าให้ก้าวหน้าไปอีกขั้น
        โดยการนำความสวยงามของดีไซน์ที่ทันสมัยและมีเอกลักษณ์
        มารวมเข้ากับเทคโนโลยีที่ก้าวหน้าอย่างลงตัว
        เสริมให้การใช้งานของหลังคาหรือกันสาดมีคุณภาพมากยิ่งขึ้น
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-12">
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
    </div>
  );
};

export default About;
