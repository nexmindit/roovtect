import React from "react";

const reasons = [
  {
    title: "Materials",
    description: "เลือกใช้วัสดุเกรด A ทั้งแผ่น Shinkolite แท้ และเหล็กเต็มเส้น",
    detail: "วัสดุแท้ มาตรฐานโรงงาน ไม่บิดงอและทน UV",
  },
  {
    title: "Craftsmanship",
    description: "งานประกอบเนี้ยบ รอยเชื่อมสวย เก็บงานสีเรียบร้อย",
    detail: "ทีมช่างควบคุมคุณภาพทุกขั้นตอน ตั้งแต่ประกอบจนถึงติดตั้ง",
  },
  {
    title: "Flexibility",
    description:
      "เลือกรูปแบบการติดตั้งได้ ทั้งแบบเชื่อมหน้างาน หรือแบบน็อคดาวน์",
    detail: "ตอบโจทย์ทั้งบ้านพักอาศัย โครงการ และงานที่ต้องการความรวดเร็ว",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#0f1f2d] text-white py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-4">
          <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#f3d48c]">
            WHY CHOOSE US
          </p>
          <h2 className="text-2xl md:text-3xl font-semibold">
            จุดเด่นของ Power King
          </h2>
          <p className="text-base md:text-lg text-white/80 max-w-3xl">
            เพราะเราเข้าใจตั้งแต่วัสดุ การออกแบบ ไปจนถึงการติดตั้งจริง
            จึงสามารถส่งมอบงานที่แข็งแรง เรียบร้อย และจบงานไวในสไตล์ Power King
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[#f3d48c]">
                {reason.title}
              </p>
              <h3 className="mt-3 text-2xl font-semibold">{reason.description}</h3>
              <p className="mt-4 text-sm text-white/80">{reason.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
