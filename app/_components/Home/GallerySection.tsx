import React from "react";
import Image from "next/image";

const galleryImages = [
  {
    id: 1,
    src: "/gallery1.png",
    alt: "Shinkolite Carport",
    title: "Shinkolite Carport",
    description: "ภาพงานโรงจอดรถ Shinkolite",
  },
  {
    id: 2,
    src: "/feature1.png",
    alt: "Custom Sign Structure",
    title: "Custom Sign Structure",
    description: "ภาพงานโครงป้ายหน้าร้าน",
  },
  {
    id: 3,
    src: "/feature2.jpg",
    alt: "Loft Furniture Set",
    title: "Loft Furniture Set",
    description: "ภาพชุดโต๊ะเก้าอี้เหล็ก",
  },
  {
    id: 4,
    src: "/process2.png",
    alt: "Knockdown Delivery",
    title: "Knockdown Delivery",
    description: "ภาพการขนย้ายงานน็อคดาวน์ไปติดตั้ง",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-[#f4f7fa] py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col gap-6  lg:items-center lg:justify-center">
          <div>
            <p className="text-xs md:text-sm font-semibold uppercase tracking-[0.3em] text-[#7e8ea2] text-center">
              PROJECT SNAPSHOTS
            </p>
            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-[#1f2c38] text-center">
              ภาพงานติดตั้งจริงที่จบคมกริบทุกดีเทล
            </h2>
          </div>
          <p className="text-base md:text-lg text-[#4b5a66] max-w-xl text-center">
            รวมผลงานจริงตั้งแต่โรงจอดรถ Shinkolite โครงป้ายหน้าร้าน <br/>
            งานเฟอร์นิเจอร์เหล็ก และโซลูชันน็อคดาวน์ที่ขนย้ายไปติดตั้งได้ทันที
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-[#e1e7ee]"
            >
              <div className="relative w-full pt-[70%]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="px-5 py-4">
                <p className="text-lg font-semibold text-[#1f2c38]">
                  {image.title}
                </p>
                <p className="text-sm text-[#6b7b8c]">{image.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
