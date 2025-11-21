import React from "react";
import Image from "next/image";

const galleryImages = [
  { src: "/shinkolite/gallery1.webp", className: "md:row-span-2" }, // Tall Left
  { src: "/shinkolite/gallery2.webp", className: "md:col-span-2" }, // Wide Top
  { src: "/shinkolite/gallery3.webp", className: "md:col-span-1" }, // Right Top
  { src: "/shinkolite/gallery4.webp", className: "md:col-span-1" }, // Small
  { src: "/shinkolite/gallery5.webp", className: "md:col-span-2" }, // Wide
  { src: "/shinkolite/gallery6.webp", className: "md:col-span-2" }, // Wide
  { src: "/shinkolite/gallery7.webp", className: "md:col-span-2 " }, // Wide
  { src: "/shinkolite/gallery8.webp", className: "md:col-span-1" }, // Small
  { src: "/shinkolite/gallery10.webp", className: "md:col-span-2" }, // Wide
  {
    src: "/shinkolite/gallery9.webp",
    className: "md:col-span-1 md:row-span-1",
  }, // Tall Right
];

export default function ShinkoliteGallery() {
  return (
    <section className="w-full bg-[#EAE8E4] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]">
          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`relative w-full h-full overflow-hidden rounded-sm shadow-sm hover:shadow-md transition-shadow duration-300 group ${
                item.className || ""
              }`}
            >
              <Image
                src={item.src}
                alt={`Shinkolite Gallery ${index + 1}`}
                fill
                objectFit="cover"
                className="transition-transform duration-700 group-hover:scale-105"
              />
              {/* ROOVTECT Overlay (Optional, based on image style) */}
              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-[#314556]">
                  ROOVTECT
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
