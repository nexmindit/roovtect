import React from "react";
import Image from "next/image";

const materials = [
  {
    title: "กันสาดหลังคา Shinkolite",
    description:
      "หลังคา Shinkolite เป็นวัสดุอะคริลิกโปร่งแสงที่ช่วยให้แสงธรรมชาติส่องเข้ามาในบ้านได้ดี ทำให้บ้านดูสดใสและไม่ทึบ นอกจากนี้ยังทนทานต่อสภาพอากาศทุกประเภท ป้องกันรังสี ยูวีได้อย่างมีประสิทธิภาพ และมีน้ำหนักเบาทำให้การติดตั้งสะดวกและง่าย",
    price: "ราคาเริ่มต้น : 5,900 บาท/ตารางเมตร",
    image: "/awning/awning1.jpg",
  },
  {
    title: "กันสาดหลังคาโพลีตัน",
    description:
      "หลังคาโพลีตันหรือโพลีคาร์บอเนตแบบตัน มีความแข็งแรงและทนทานต่อแรงกระแทก เหมาะกับการใช้งานทั้งภายในและภายนอกบ้าน สามารถป้องกันความร้อนและช่วยให้พื้นที่เย็นสบาย นอกจากนี้ยังติดตั้งง่ายและสะดวก โดยยังคงให้แสงธรรมชาติส่องเข้ามาในบ้านได้",
    price: "ราคาเริ่มต้น : 4,900 บาท/ตารางเมตร",
    image: "/awning/awning2.jpg",
  },
  {
    title: "กันสาดหลังคาไวนิล",
    description:
      "หลังคาสมาร์ตไวนิล มีจุดเด่นที่ความทนทานและแข็งแรง เหมาะกับการใช้งานหนัก เป็นวัสดุที่ทึบแสง จึงสามารถป้องกันความร้อน รังสียูวี และดูดซับเสียงได้ดี อีกทั้งยังดูแลรักษาง่าย ทำความสะอาดสะดวก และปรับเปลี่ยนดีไซน์ได้ตามใจเจ้าของบ้าน",
    price: "ราคาเริ่มต้น : 3,700 บาท/ตารางเมตร",
    image: "/awning/awning3.jpg",
  },
];

export default function AwningMaterials() {
  return (
    <section className="w-full bg-[#EAE8E4] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* --- Main Title --- */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#314556] mb-4 italic">
            ประเภทวัสดุต่อเติมกันสาดของ ROOVTECT และราคาเบื้องต้น
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            ROOVTECT ได้ดำเนินการติดตั้งกันสาดหน้าบ้านและพื้นที่อื่น ๆ
            ให้แก่ลูกค้า โดยมีการออกแบบอย่างพิถีพิถัน และมีสไตล์
            เหมาะกับความต้องการที่แตกต่างกันออกไป
          </p>
        </div>

        {/* --- Materials Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {materials.map((item, index) => (
            <div key={index} className="flex flex-col">
              {/* Text Content (Top) */}
              <div className="text-center mb-6 px-2">
                <h3 className="text-xl font-bold text-[#314556] mb-3 italic">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 min-h-[100px]">
                  {item.description}
                </p>
                <p className="text-[#314556] font-medium text-sm">
                  {item.price}
                </p>
              </div>

              {/* Image (Bottom) */}
              <div className="relative w-full aspect-4/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>

        {/* --- Installation Examples Header --- */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-[#314556] mb-4">
            ตัวอย่างผลงานการติดตั้งกันสาดของ ROOVTECT
          </h2>
          <p className="text-gray-600 text-sm md:text-base max-w-3xl mx-auto">
            ROOVTECT
            ได้รับความไว้วางใจให้ดำเนินการติดตั้งกันสาดหน้าบ้านและพื้นที่อื่น ๆ
            ให้แก่ลูกค้าจำนวนมาก โดยมีการออกแบบอย่างพิถีพิถัน และมีสไตล์
            เหมาะกับความต้องการที่แตกต่างกันออกไป
          </p>
        </div>

        {/* --- Installation Examples Text Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-gray-300 pt-10">
          <div>
            <h4 className="text-lg font-bold text-[#314556] mb-2">
              กันสาดหลังคา Shinkolite
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              Shinkolite แผ่นอะคริลิกใสคุณภาพสูง แข็งแรง ทนทาน
              ดูทันสมัยและสวยงาม
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#314556] mb-2">
              กันสาดหลังคาโพลีตัน
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              แผ่นโพลีคาร์บอเนตแบบตัน มีความโปร่งแสง ทนทาน และราคาไม่แพง
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold text-[#314556] mb-2">
              กันสาดหลังคาไวนิล
            </h4>
            <p className="text-sm text-gray-600 leading-relaxed">
              แผ่นไวนิลมีความทึบแสง กันความร้อนได้ดี และสามารถดูดซับเสียงฝนได้
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
