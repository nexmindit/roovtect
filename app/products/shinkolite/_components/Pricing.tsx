import React from "react";

const pricingData = [
  { model: "Prime", thickness: "10 มม.", price: "9,200-9,800 บาท" },
  { model: "Heat Cut", thickness: "6 มม.", price: "7,200-7,800 บาท" },
  { model: "Superior", thickness: "6 มม.", price: "6,900-7,200 บาท" },
  { model: "Nature", thickness: "6 มม.", price: "6,900-7,200 บาท" },
  { model: "Shade", thickness: "4 มม.", price: "6,200-6,800 บาท" },
];

export default function ShinkolitePricing() {
  return (
    <section className="w-full bg-[#EAE8E4] py-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#314556] text-center mb-12">
          ค่าบริการรับต่อเติมหลังคา Shinkolite แต่ละแบบราคาเท่าไร ?
        </h2>

        {/* --- Desktop Table View (Hidden on mobile) --- */}
        <div className="hidden md:block w-full overflow-hidden">
          <table className="w-full text-center border-collapse">
            <thead>
              <tr className="border-b border-white">
                <th className="py-6 font-semibold text-[#314556] w-1/4 text-lg">
                  รุ่น
                </th>
                <th className="py-6 font-semibold text-[#314556] w-1/4 text-lg">
                  ความหนา
                </th>
                <th className="py-6 font-semibold text-[#314556] w-1/2 text-lg">
                  ราคา / ตร.ม. <br />
                  <span className="text-sm font-normal opacity-80">
                    (พร้อมโครงระบบ Knockdown)
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="text-[#314556]">
              {pricingData.map((item, index) => (
                <tr key={index} className="border-b border-white last:border-0">
                  <td className="py-6 font-bold text-xl">{item.model}</td>
                  <td className="py-6 text-lg">{item.thickness}</td>
                  <td className="py-6 text-lg font-medium">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* --- Mobile Card View (Hidden on desktop) --- */}
        <div className="md:hidden space-y-4">
          <div className="text-sm text-gray-500 mb-6 text-center">
            * ราคา / ตร.ม. (พร้อมโครงระบบ Knockdown)
          </div>
          {pricingData.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center"
            >
              <h3 className="text-xl font-bold text-[#314556] mb-2">
                {item.model}
              </h3>
              <div className="inline-block bg-[#EAE8E4] text-[#314556] px-4 py-1 rounded-full text-sm mb-4">
                หนา {item.thickness}
              </div>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-500 text-sm mb-1">ราคาเริ่มต้น</p>
                <p className="text-xl font-bold text-[#314556]">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
