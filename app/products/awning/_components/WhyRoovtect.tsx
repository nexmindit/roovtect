import React from "react";
import Image from "next/image";

export default function WhyRoovtect() {
  return (
    <section className="w-full bg-[#EAE8E4] py-16 md:pb-24 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        <div className="shrink-0 w-24 md:w-32 pt-2">
          <Image
            src="/logo-icon-navy.png"
            alt="ROOVTECT Icon"
            width={128}
            height={128}
            className="object-contain w-full h-auto"
          />
        </div>

        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold text-[#314556] mb-8 italic leading-tight">
            มองหาบริษัทรับทำกันสาดบ้าน ทำไมต้องใช้ <br />
            บริการ ROOVTECT ?
          </h2>

          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-10">
            ROOVTECT คือผู้นำด้านการติดตั้งกันสาดครบวงจร
            เรามีโรงงานที่ได้มาตรฐาน
            สามารถออกแบบชิ้นส่วนได้ตามความต้องการของลูกค้า โครงสร้างแข็งแรง
            ดีไซน์ทันสมัย สามารถเลือกสีและรูปแบบได้ตามที่ต้องการ
            โดยมีจุดเด่นที่เหนือกว่าบริการต่อเติมกันสาดเจ้าอื่นในท้องตลาดดังนี้
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-[#314556] mb-3">
                ผลิตที่โรงงาน ด้วยวัสดุคุณภาพสูง ติดตั้งด้วยระบบ Knockdown
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                ROOVTECT มีโรงงานผลิตและประกอบโครงสร้าง
                ช่วยให้สามารถควบคุมคุณภาพของงานได้อย่างเต็มที่
                โดยเลือกใช้วัสดุที่มีคุณภาพสูงและทนทาน เหล็กทุกชิ้นได้มาตรฐาน
                JIS หรือ Japanese Industrial Standard
                สามารถปรับเปลี่ยนดีไซน์ได้ตามต้องการ นอกจากนี้
                ยังใช้วิธีนำชิ้นส่วนจากโรงงานไปประกอบที่หน้างาน
                จึงลดขั้นตอนการดำเนินงาน
                ช่วยให้ติดตั้งกันสาดได้เร็วกว่าร้านทำกันสาดทั่วไป
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#314556] mb-3">
                ดูแลโดยสถาปนิกและวิศวกรมืออาชีพ
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                เรามีทีมสถาปนิกและวิศวกรมืออาชีพคอยดูแลทุกขั้นตอน
                ตั้งแต่การให้คำปรึกษา ออกแบบ
                ไปจนถึงการติดตั้งหน้างานโดยช่างติดตั้งกันสาดประสบการณ์สูง
                จึงมั่นใจได้ว่า กันสาดของเราจะมีความแข็งแรง ทนทาน
                ใช้งานได้อย่างปลอดภัยแน่นอน
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#314556] mb-3">
                ดีไซน์สวยงาม ทันสมัย
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                ROOVTECT มีวัสดุสำหรับต่อเติมกันสาดให้เลือกหลากหลาย ทั้ง
                Shinkolite โพลีตัน และไวนิล
                สามารถดีไซน์ให้เข้ากับแบบบ้านได้อย่างลงตัว
                โครงสร้างกันสาดมีการทำสี 3 ขั้นตอน โดยเทคนิคการทำสีแบบพ่นทราย
                ทำให้ได้ผิวสัมผัสที่สวยงามและดูพรีเมียม
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#314556] mb-3">
                รับประกันและดูแลหลังการขาย
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                มีการรับประกันการติดตั้งกันสาดที่ได้มาตรฐาน รับประกันโครงสร้าง 5
                ปี และรับประกันส่วนควบของกันสาด 5 ปี
                (ครอบคลุมปัญหารั่วซึมและสีสนิมของโครงสร้าง)
                และยังมีการรับประกันวัสดุหลังคาโดยผู้ผลิตนานถึง 10 ปี
                และยังมีทีมบริการหลังการขายที่พร้อมดูแลทุกรายละเอียดในการติดตั้ง
                หากมีข้อสงสัยใด ๆ สามารถสอบถามและปรึกษาได้ตลอดช่วงเวลาทำการ
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
