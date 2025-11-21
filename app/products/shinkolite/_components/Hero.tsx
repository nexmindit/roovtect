"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const heroData = {
  images: [
    "/shinkolite/carousel1.webp",
    "/shinkolite/carousel2.webp",
    "/shinkolite/carousel3.webp",
    "/shinkolite/carousel4.webp",
    "/shinkolite/carousel5.webp",
    "/shinkolite/carousel6.webp",
    "/shinkolite/carousel7.webp",
    "/shinkolite/carousel8.webp",
  ],
  title: "ROOVTECT รับติดตั้งหลังคา Shinkolite รับประกันสูงสุด 10 ปี",
  subtitle: "ROOVTECT x Shinkolite หลังคาโปร่งแสงอะคริลิกคุณภาพสูง",
  description:
    "ROOVTECT รับติดตั้งหลังคาชินโคไลท์ (Shinkolite) สำหรับกันสาด โรงจอดรถ และพื้นที่อื่นๆ โดยใช้โครงสร้างผลิตกึ่งสำเร็จจากโรงงานติดตั้งแบบ Knockdown ดำเนินการติดตั้งโดยทีมงานที่ผ่านการอบรมจากบริษัทโดยตรง เพื่อการขึ้นงานโครงเหล็กหลังคาโปร่งแสงอะคริลิกชินโคไลท์ที่สวยงามตรงตามความต้องการของคุณ",
  subDescription:
    "เพราะบ้านไม่ได้เป็นเพียงแค่ที่อยู่อาศัย แต่ยังบ่งบอกรสนิยมอันเป็นเอกลักษณ์ของเจ้าของบ้าน การเลือกวัสดุที่ต่อเติมจึงต้องคัดสรรอย่างดี ตอบโจทย์ทั้งในแง่ความสวยงาม และการใช้งาน โดยแผ่นมุงหลังคาด้วย Shinkolite มีคุณสมบัติที่สำคัญดังนี้",
  features: [
    "วัสดุมีความโปร่งแสง",
    "ความหนาทั้ง 4, 6 และ 10 มิลลิเมตร",
    "รับแรงกระแทกได้ดีกว่ากระจก 2.5 เท่า",
    "เทคโนโลยีรุ่น Heat Cut ที่มีคุณสมบัติกันความร้อน",
    "สามารถลดการส่งผ่านความร้อนได้สูงสุด 58%",
    "ป้องกันรังสี UV 99%",
    "การรับประกันตัวแผ่นนานถึง 10 ปี",
    "สินค้าจากบริษัทในเครือ SCG Chemical",
  ],
  roofColors: [
    { name: "Brown", color: "#C1A68D" },
    { name: "Grey", color: "#6E7072" },
    { name: "Green", color: "#8DA196" },
    { name: "Blue", color: "#8FAAB9" },
  ],
  structureColors: [
    { name: "Black", color: "#000000" },
    { name: "Dark Brown", color: "#423226" },
    { name: "Dark Grey", color: "#4F4F4F" },
    { name: "White", color: "#FFFFFF" },
  ],
};

export default function ShinkoliteHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Carousel Logic
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroData.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroData.images.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroData.images.length) % heroData.images.length
    );
    setIsAutoPlaying(false);
  };

  return (
    <section className="w-full bg-[#EAE8E4]">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        {/* --- Left Column: Image Carousel --- */}
        <div className="relative h-[50vh] lg:h-[89vh] w-full overflow-hidden group">
          {/* Images */}
          {heroData.images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Shinkolite Slide ${index + 1}`}
                fill
                objectFit="cover"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white p-2 transition-colors"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white/70 hover:text-white p-2 transition-colors"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroData.images.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentSlide(index);
                  setIsAutoPlaying(false);
                }}
                className={`rounded-full transition-all shadow-sm border border-white/50 ${
                  index === currentSlide
                    ? "w-3 h-3 bg-white"
                    : "w-2 h-2 bg-white/40 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </div>

        {/* --- Right Column: Content --- */}
        <div className="flex flex-col justify-center p-8 lg:p-16 bg-[#EAE8E4] text-[#314556]">
          {/* Headings */}
          <h2 className="text-xl md:text-2xl font-bold mb-4 lg:pr-20">
            {heroData.title}
          </h2>
          <h3 className="text-lg font-bold mb-4">{heroData.subtitle}</h3>

          {/* Descriptions */}
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {heroData.description}
          </p>

          <h4 className="font-bold mb-2">คุณสมบัติของหลังคาชินโคไลท์</h4>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            {heroData.subDescription}
          </p>

          {/* Features List */}
          <ul className="text-sm text-gray-700 space-y-1 mb-10 list-none">
            {heroData.features.map((feature, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>

          {/* Color Pickers Grid */}
          <div className="grid grid-cols-2 gap-8 mb-12">
            {/* Roof Colors */}
            <div>
              <h5 className="text-sm font-bold mb-3 text-gray-600">
                เฉดสีวัสดุหลังคา
              </h5>
              <div className="flex gap-3">
                {heroData.roofColors.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full shadow-sm border border-gray-300"
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                  ></div>
                ))}
              </div>
            </div>

            {/* Structure Colors */}
            <div>
              <h5 className="text-sm font-bold mb-3 text-gray-600">
                เฉดสีโครงสร้างเหล็ก
              </h5>
              <div className="flex gap-3">
                {heroData.structureColors.map((color, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full shadow-sm border border-gray-300"
                    style={{ backgroundColor: color.color }}
                    title={color.name}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
