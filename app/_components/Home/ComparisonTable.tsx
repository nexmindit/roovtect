import React from "react";

// Data for the table rows
const tableData = [
  {
    material: "Shinkolite",
    properties:
      "อะคริลิคโปร่งแสง สวยงาม เหมือนกระจก แต่น้ำหนักเบากว่า ช่วยป้องกันความร้อน 58% ป้องกัน UV 99%",
    suitableFor:
      "ผู้ที่ต้องการความสวยงาม และต้องการให้แสงสว่างส่องถึงพื้นที่ด้านล่าง",
    price: "เริ่มต้น 6,200 บาท",
    note: "(รุ่น Shade)",
  },
  {
    material: "Solid Sheet",
    properties:
      "โพลีคาร์บอเนตแบบทึบ โปร่งแสง แข็งแรง น้ำหนักเบา ช่วยกรองแสงแดดและ UV 99%",
    suitableFor: "ผู้ที่ต้องการดีไซน์โปร่งแสง สวยงาม ทนทาน และแข็งแรง",
    price: "เริ่มต้น 5,200 บาท",
    note: null,
  },
  {
    material: "Smart Vinyl",
    properties:
      "ทึบแสง ท้องแผ่นเรียบ สวยงาม ช่วยดูดซับเสียงฝน ลดความร้อนได้ดีที่สุด และป้องกัน UV",
    suitableFor:
      "ผู้ที่ต้องการความสวยงาม ป้องกันความร้อนและแสงแดดและลดเสียงจากภายนอก",
    price: "เริ่มต้น 3,900 บาท",
    note: null,
  },
];

export default function ComparisonTable() {
  return (
    <section className="w-full bg-[#EAE8E4] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-[#314556] text-center mb-12">
          เปรียบเทียบวัสดุหลังคาโรงจอดรถและกันสาดแบบ Knockdown จาก ROOVTECT
        </h2>

        <div className="hidden md:block w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-5xl">
            <thead>
              <tr className="border-b border-gray-400">
                <th className="py-4 px-3 font-semibold text-gray-700 w-1/6">
                  วัสดุ
                </th>
                <th className="py-4 px-3 font-semibold text-gray-700 w-2/6">
                  คุณสมบัติเด่น
                </th>
                <th className="py-4 px-3 font-semibold text-gray-700 w-2/6">
                  เหมาะสำหรับ
                </th>
                <th className="py-4 px-3 font-semibold text-gray-700 w-1/6">
                  ราคาเริ่มต้น / ตร.ม.
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr
                  key={item.material}
                  className={
                    index < tableData.length - 1
                      ? "border-b border-gray-300"
                      : ""
                  }
                >
                  <td className="py-6 px-3 text-lg font-bold text-[#314556] align-top">
                    {item.material}
                  </td>
                  <td className="py-6 px-3 text-gray-600 align-top">
                    {item.properties}
                  </td>
                  <td className="py-6 px-3 text-gray-600 align-top">
                    {item.suitableFor}
                  </td>
                  <td className="py-6 px-3 text-gray-800 align-top">
                    {item.price}
                    {item.note && (
                      <span className="block text-sm text-gray-500">
                        {item.note}
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="md:hidden space-y-6">
          {tableData.map((item) => (
            <div
              key={item.material}
              className="bg-white rounded-lg shadow-md p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start pb-4 border-b border-gray-200 mb-4">
                <h3 className="text-2xl font-bold text-[#314556]">
                  {item.material}
                </h3>
                <div className="text-right text-gray-800 whitespace-nowrap pl-4">
                  {item.price}
                  {item.note && (
                    <span className="block text-sm text-gray-500">
                      {item.note}
                    </span>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-700 mb-1">
                  คุณสมบัติเด่น
                </h4>
                <p className="text-gray-600">{item.properties}</p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-1">
                  เหมาะสำหรับ
                </h4>
                <p className="text-gray-600">{item.suitableFor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
