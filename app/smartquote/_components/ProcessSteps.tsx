import React from "react";
import Image from "next/image";

export default function ProcessSteps() {
  return (
    <section className="w-full bg-[#EAE8E4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-center pl-4 md:pl-8">
            <div className="flex items-baseline gap-4 mb-6">
              <span className="text-4xl font-medium text-[#314556]">01</span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#314556] leading-tight">
                Unique Design by our <br /> Architect and Engineer
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
              <p>
                เราให้ความสำคัญมากกว่าแค่ <br />
                การทำหลังคาโรงรถหรือกันสาด
              </p>
              <p className="font-semibold text-[#314556] pt-2">
                แต่มันคือ.. <br />
                ดีไซน์ที่ต้องอยู่คู่กับบ้านตลอดไป
              </p>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/process1.webp"
              alt="Unique Design"
              fill
              objectFit="cover"
              className="shadow-md"
            />
          </div>
        </div>
      </div>

      <div className="w-full py-16 md:py-0">
        <div className="grid grid-cols-1 md:grid-cols-2 items-stretch">
          <div className="relative h-[400px] md:h-auto w-full min-h-[450px]">
            <Image
              src="/process2.png"
              alt="Quality that lasts"
              fill
              objectFit="cover"
            />
          </div>

          <div className="bg-[#314556] p-10 md:p-16 flex flex-col justify-center relative">
            <div className="absolute top-0 md:top-1/2 left-10 md:-left-8 -translate-y-1/2 w-16 h-16 bg-[#EAE8E4] rounded-full flex items-center justify-center z-10 shadow-lg">
              <span className="text-xl font-bold text-[#314556]">02</span>
            </div>

            <div className="md:pl-8 pt-10 md:pt-0">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Quality that lasts
              </h2>
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  เพราะหลังคาโรงจอดรถที่เราทำ <br />
                  จะต้องอยู่กับบ้านของลูกค้า
                </p>
                <p className="text-white font-semibold text-xl">
                  วัสดุที่เราเลือกใช้ <br />
                  คือ...สิ่งที่สำคัญที่สุด
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative flex items-center">
                  <div className="w-16 h-16 rounded-full border border-[#314556] flex items-center justify-center text-xl font-bold text-[#314556] bg-transparent z-10">
                    03
                  </div>
                  <div className="h-[1px] w-12 bg-[#314556] -ml-1"></div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#314556]">
                  Prefabricated <br /> System Building
                </h2>
              </div>

              <div className="pl-4 space-y-6 text-gray-600 text-lg">
                <p>
                  กระบวนการตัดและเชื่อมประกอบโครงสร้าง <br />
                  จากโรงงานระบบ CO2
                </p>
                <p>
                  ช่วยควบคุมคุณภาพ <br />
                  เพื่อให้ได้งานเชื่อมได้ดีกว่า
                </p>
              </div>
            </div>

            <div className="hidden md:flex flex-col items-center justify-end pb-2">
              <div className="w-[1px] h-32 bg-[#314556]"></div>
              <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[8px] border-t-[#314556]"></div>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-sm">
            <Image
              src="/process3.gif"
              alt="Prefabricated System"
              fill
              objectFit="cover"
              unoptimized
            />
            <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm font-light drop-shadow-md z-10">
              ชิ้นงานตัด และ เชื่อม แบบ TAILOR-MADE จากโรงงาน
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-sm order-2 md:order-1">
            <Image
              src="/process4.gif"
              alt="Industrial Color Quality"
              fill
              objectFit="cover"
              unoptimized
            />
            <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm font-light drop-shadow-md z-10">
              งานสีระบบอุตสาหกรรม สีรองพื้นพิเศษ WASH PRIMER
            </div>
          </div>

          <div className="pl-4 md:pl-12 order-1 md:order-2">
            <span className="text-4xl font-medium text-[#314556] block mb-4">
              04
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#314556] mb-8">
              Industrial Color Quality
            </h2>
            <div className="space-y-6 text-gray-600 text-lg">
              <p>
                กระบวนการพ่นสีจากโรงงาน <br />
                ด้วยอะคริลิคผสมเม็ดทรายได้มาตรฐาน
              </p>
              <p>
                อายุการใช้งานยาวนาน และ <br />
                ให้ความสวยงามเมื่อสะท้อนแสงแดด
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-end md:items-start pr-4 md:pr-0 text-right md:text-left">
            <div className="w-16 h-16 rounded-full bg-[#314556] flex items-center justify-center text-xl font-bold text-white mb-6">
              05
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#314556] mb-6">
              Transport with Care
            </h2>
            <div className="space-y-2 text-lg text-[#314556] font-medium">
              <p>ชิ้นงานผ่านกระบวน QC และ</p>
              <p>Wrap Protection ก่อนขนย้าย</p>
              <p>เข้าดำเนินการติดตั้ง</p>
            </div>
          </div>

          <div className="relative h-[300px] md:h-[350px] w-full overflow-hidden rounded-sm">
            <Image
              src="/process5.gif"
              alt="Transport with Care"
              fill
              objectFit="cover"
              unoptimized
            />
            <div className="absolute bottom-4 left-4 text-white text-xs md:text-sm font-light drop-shadow-md z-10">
              สีพ่น FINISHING แบบ TEXTURE ผิวทราย มาตรฐานอุตสาหกรรม
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[450px] w-full overflow-hidden rounded-sm order-2 md:order-1">
            <Image
              src="/process6.gif"
              alt="Knockdown Installation"
              fill
              objectFit="cover"
              unoptimized
            />
            <div className="absolute bottom-4 left-4 text-white text-sm font-bold drop-shadow-md z-10 uppercase tracking-wider">
              ระยะเวลาการติดตั้งด้วยระบบ KNOCKDOWN SYSTEM
            </div>
          </div>

          <div className="pl-4 md:pl-12 order-1 md:order-2">
            <span className="text-4xl font-medium text-[#314556] block mb-6">
              06
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#314556] mb-8">
              Knockdown <br /> Installation
            </h2>

            <div className="space-y-8">
              <div>
                <h4 className="text-xl font-bold text-[#314556] mb-2">
                  ติดตั้งแบบ Knockdown
                </h4>
                <p className="text-gray-600 text-lg">
                  ช่วยลดระยะเวลาการติดตั้ง
                </p>
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#314556] mb-2">
                  กระบวนการติดตั้งแบบ Joint system
                </h4>
                <p className="text-gray-600 text-lg">
                  ไม่ต้องใช้การเชื่อมร้อนหน้างาน
                </p>
              </div>
            </div>

            <div className="mt-16 pt-10 border-t border-gray-400 w-full text-center">
              <span className="uppercase text-3xl md:text-4xl font-normal text-[#314556] tracking-[0.3em]">
                inventive <br />
                <span className="block mt-2">prefab</span>
              </span>
            </div>

            <div className="mt-10 border-b border-gray-400 w-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
