import React from "react";
import Image from "next/image";
import Navbar from "../_components/Navbar";

const galleryImages = [
  // Shinkolite
  "/shinkolite/gallery1.webp",
  "/shinkolite/gallery2.webp",
  "/shinkolite/gallery3.webp",
  "/shinkolite/gallery4.webp",
  "/shinkolite/gallery5.webp",
  "/shinkolite/gallery6.webp",
  "/shinkolite/gallery7.webp",
  "/shinkolite/gallery8.webp",
  "/shinkolite/gallery9.webp",
  "/shinkolite/gallery10.webp",
  "/shinkolite/carousel1.webp",
  "/shinkolite/carousel2.webp",
  "/shinkolite/carousel3.webp",
  "/shinkolite/carousel4.webp",
  "/shinkolite/carousel5.webp",
  "/shinkolite/carousel6.webp",
  "/shinkolite/carousel7.webp",
  "/shinkolite/carousel8.webp",
  "/shinkolite/advantage1.webp",
  "/shinkolite/advantage2.webp",
  "/shinkolite/advantage3.webp",
  "/shinkolite/advantage4.webp",

  // ALU PORT 7
  "/ALU PORT 7/carousel1.webp",
  "/ALU PORT 7/carousel2.webp",
  "/ALU PORT 7/carousel3.webp",
  "/ALU PORT 7/carousel4.webp",
  "/ALU PORT 7/carousel5.webp",
  "/ALU PORT 7/cartype1.webp",
  "/ALU PORT 7/cartype2.webp",

  // ALU PORT NEXT
  "/ALU PORT NEXT/carousel.webp",
  "/ALU PORT NEXT/carousel2.webp",
  "/ALU PORT NEXT/carousel3.webp",
  "/ALU PORT NEXT/carousel4.jpg",
  "/ALU PORT NEXT/carousel5.webp",
  "/ALU PORT NEXT/cartype1.jpg",
  "/ALU PORT NEXT/cartype2.jpg",

  // Alu Port Origin
  "/Alu Port Origin/carousel.webp",
  "/Alu Port Origin/carousel2.webp",
  "/Alu Port Origin/carousel3.webp",
  "/Alu Port Origin/cartype1.webp",
  "/Alu Port Origin/cartype2.webp",

  // ALU PORT V
  "/ALU PORT V/carousel.webp",
  "/ALU PORT V/carousel2.webp",
  "/ALU PORT V/carousel3.webp",
  "/ALU PORT V/cartype1.webp",
  "/ALU PORT V/cartype2.webp",

  // YKK AP
  "/YKK AP/carousel.webp",
  "/YKK AP/carousel2.webp",
  "/YKK AP/carousel3.webp",
  "/YKK AP/cartype1.webp",
  "/YKK AP/cartype2.webp",

  // Awning
  "/awning/awning1.jpg",
  "/awning/awning2.jpg",
  "/awning/awning3.jpg",
  "/awning/hero.jpg",

  // About
  "/About-01.jpg",
  "/About-02.jpg",
  "/About-03.jpg",
  "/About-04.jpg",
  "/About-05.jpg",

  // General
  "/banner_carousel1.jpg",
  "/banner_carousel2.jpg",
  "/banner_carousel3.webp",
  "/feature1.webp",
  "/feature2.webp",
  "/feature3.webp",
  "/structure_design1.webp",
  "/structure_design2.webp",
  "/structure_design3.webp",
  "/structure_design4.webp",
  "/process1.webp",
  "/process2.png",
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <section className="w-full bg-[#DBD6D1] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-8">
          {/* Logo */}
          <div className="shrink-0">
            <Image
              src="/logo-icon-navy.png"
              alt="Roovtect Logo"
              width={120}
              height={120}
              className="w-24 h-24 md:w-32 md:h-32"
            />
          </div>

          {/* Text Content */}
          <div>
            <p className="text-[#314556] text-lg md:text-xl mb-2">
              รวมภาพผลงานการออกแบบและก่อสร้างพื้นที่ต่อเติมพื้นที่บริเวณรอบบ้าน
            </p>
            <h1 className="text-[#314556] text-3xl md:text-4xl lg:text-5xl font-bold italic">
              ROOVTECT GALLERY
            </h1>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="w-full bg-[#EAE8E4] py-16 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Grid Layout - Similar to Shinkolite Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
            {galleryImages.map((src, index) => {
              // Create varied layouts like shinkolite
              let className = "";

              // Pattern for variety
              if (index % 15 === 0) className = "md:row-span-2"; // Tall
              else if (index % 7 === 0) className = "md:col-span-2"; // Wide
              else if (index % 11 === 0)
                className = "md:col-span-2 md:row-span-2"; // Large
              else if (index % 5 === 0) className = "md:col-span-1"; // Small

              return (
                <div
                  key={index}
                  className={`relative w-full h-full overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group ${className}`}
                >
                  <Image
                    src={src}
                    alt={`Roovtect Gallery ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* ROOVTECT Overlay */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#314556]">
                      ROOVTECT
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
