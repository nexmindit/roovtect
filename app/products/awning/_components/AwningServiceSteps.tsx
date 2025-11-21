import React from "react";

export default function AwningServiceSteps() {
  return (
    <section className="w-full bg-[#fff] py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#314556] mb-4 italic">
            ขั้นตอนการใช้บริการรับติดตั้งกันสาดจาก ROOVTECT
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            ROOVTECT มุ่งมั่นที่จะมอบบริการทำกันสาดที่ดีที่สุดให้แก่ลูกค้า
            โดยมีขั้นตอนการให้บริการดังต่อไปนี้
          </p>
          <div className="w-24 h-px bg-[#314556] mx-auto mt-6"></div>
        </div>

        {/* Steps Content */}
        <div className="space-y-10 text-[#314556]">
          {/* Step 1 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">
              1. ติดต่อ ROOVTECT เพื่อนัดหมายการให้บริการ
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-600 leading-relaxed">
              <li>โทรศัพท์ : 02-096-3464</li>
              <li>E-Mail: contact@roovtect.com</li>
              <li>Facebook: roovtect</li>
              <li>LINE OA: @roovtect</li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">2. วัดพื้นที่และออกแบบ</h3>
            <p className="text-gray-600 leading-relaxed">
              ทีมงานของ ROOVTECT
              จะให้คำปรึกษาและแนะนำเกี่ยวกับแบบกันสาดที่เหมาะสมกับบ้านและการใช้งาน
              จากนั้นจะเข้าวัดพื้นที่หน้างานเพื่อทำการออกแบบและทำใบเสนอราคาให้แก่ลูกค้า
            </p>
          </div>

          {/* Step 3 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">3. ผลิตชิ้นงานที่โรงงาน</h3>
            <p className="text-gray-600 leading-relaxed">
              เมื่อลูกค้าเลือกแบบแล้ว
              เราจะดำเนินการผลิตชิ้นงานสำหรับติดตั้งกันสาดที่โรงงาน
              โดยโครงสร้างหลังคาทุกชิ้นได้รับการออกแบบโดยสถาปนิกและวิศวกรมืออาชีพ
              ผ่านกระบวนการตัดเชื่อม และงานสีระบบอุตสาหกรรมแบบที่ดีไซน์เอาไว้
            </p>
          </div>

          {/* Step 4 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">4. ติดตั้งกันสาด</h3>
            <p className="text-gray-600 leading-relaxed">
              ช่างติดตั้งกันสาดเข้าติดตั้งกันสาดที่หน้างาน โดยใช้ระบบ Knockdown
              ซึ่งช่วยประหยัดเวลาในการติดตั้ง
              แต่ยังคงคุณภาพและความแข็งแรงในการใช้งาน
              พร้อมมิติที่สวยงามและเนี้ยบกว่าของโครงสร้าง
            </p>
          </div>

          {/* Step 5 */}
          <div className="space-y-3">
            <h3 className="text-xl font-bold">5. ลูกค้าตรวจรับงาน</h3>
            <p className="text-gray-600 leading-relaxed">
              หลังจากติดตั้งและตรวจรับงานเรียบร้อยแล้ว
              ลูกค้าจะได้การรับประกันโครงสร้างและวัสดุโดยอัตโนมัติ
              แบ่งเป็นรับประกันโครงสร้าง 5 ปี รับประกันปัญหารั่วซึมและสนิม 5 ปี
              และรับประกันวัสดุหลังคาโดยผู้ผลิต 10 ปี
              จึงมั่นใจได้ว่าจะไม่มีปัญหารั่วซึม
              และสีลอกร่อนหรือเป็นสนิมของโครงสร้างหลังคากันสาดแน่นอน
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
