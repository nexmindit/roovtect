"use client";

import React from "react";
import CountUp from "react-countup";

const statsData = [
  {
    id: 1,
    value: 100,
    label: "ทีมงานมืออาชีพ",
  },
  {
    id: 2,
    value: 2300,
    label: "ลูกค้าที่ไว้วางใจ",
  },
  {
    id: 3,
    value: 3400,
    label: "โครงการทั่วประเทศ",
  },
];

export default function StatsCounter() {
  return (
    <div className="bg-[#314556] py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-around items-center gap-12 md:gap-8">
        {statsData.map((stat) => (
          <div key={stat.id} className="flex flex-col items-center text-center">
            <span className="text-4xl lg:text-5xl font-bold text-white">
              <CountUp
                end={stat.value}
                duration={1.5}
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </span>
            <p className="mt-2 text-lg text-gray-200">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
