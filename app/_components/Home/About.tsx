import Link from "next/link";
import React from "react";
import ConsultationButton from "../ConsultationButton";

const About = () => {
  return (
    <div className="w-full py-24 flex flex-col justify-center items-center px-4 md:px-12 lg:px-52 bg-white text-[#3d4f5e]">
      <h1 className="text-center text-3xl font-semibold">
        "จบปัญหาผู้รับเหมา ต่อเติมหลังคาโรงรถ มั่นใจมาตรฐาน POWERKING"
      </h1>
      <p className="text-center mt-4 text-lg">
        จะต่อเติมโรงรถหรือติดกันสาด เลือกความคุ้มค่าที่วางใจได้ บริการจาก
        POWERKING ร่วมกับ ROOVTECT
        การันตีวัสดุคุณภาพสูงและการเก็บงานที่เรียบร้อยโดยช่างเฉพาะทาง
        เราดูแลคุณตั้งแต่ให้คำปรึกษาจนติดตั้งเสร็จ ไม่บานปลาย
        ได้งานคุณภาพในราคาที่คุ้มค่าที่สุด
      </p>
      <br />

      <div className="flex flex-wrap justify-center gap-4 mt-12">
        <Link href={""}>
          <img src="/LineCTA.png" alt="" className="h-14" />
        </Link>

        <Link href={""}>
          <img src="/PhoneCTA.png" alt="" className="h-14" />
        </Link>
      </div>
    </div>
  );
};

export default About;
