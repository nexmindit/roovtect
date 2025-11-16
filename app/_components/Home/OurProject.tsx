import Link from "next/link";

export default function OurProject() {
  return (
    <section className="w-full bg-[#F3F4F6] py-16 md:py-24 px-4">
      <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#314556] mb-8">
          OUR PROJECT
        </h2>

        <p className="text-gray-600 text-lg leading-relaxed mb-6">
          ROOVTECT ให้บริการต่อเติมหลังคาโรงจอดรถและกันสาด ในราคาคุณภาพ
          ภายใต้ประสบการณ์อันยาวนาน ที่ได้รับการยอมรับจากลูกค้ามากมาย
          ถึงการสร้างสรรค์งานเหล็กกล้าที่มีดีไซน์ทันสมัย มั่นคง
          และมีความเป็นเอกลักษณ์
          เปิดโอกาสให้คุณได้มีส่วนร่วมในการดีไซน์ออกแบบหลังคาโรงรถ
          เพื่อให้ได้งานออกแบบที่ถูกใจเจ้าของบ้านมากที่สุด ทุกดีไซน์ออกแบบด้วย
          ROOVTECT Signature การออกแบบและผลิตรูปแบบเฉพาะของ ROOVTECT เท่านั้น
        </p>

        <p className="text-gray-600 text-lg leading-relaxed mb-12">
          การันตีบริการติดตั้งหลังคาโรงรถ และกันสาดในราคาที่คุ้มค่าเหนือใคร
          พร้อมบริการอย่างจริงใจจากสถาปนิกและวิศวกรุ่นใหม่
          ที่พร้อมรับความต้องการของคุณอย่างมืออาชีพ
          รับประกันปัญหารั่วซึมและสีซีดของโครงสร้างหลังคานานถึง 5 ปี
          รับประกันสีหลังคานานถึง 10 ปี มีบริการเก็บงานก่อนส่งมอบเพื่อให้คุณ
          ติดต่อสอบถามเพื่อรับคำแนะนำและปรึกษาเพิ่มเติมได้ที่ โทร. 02-096-3464
          หรือ LINE : @roovtect
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="https://line.me/ti/p/~@roovtect"
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
    </section>
  );
}
