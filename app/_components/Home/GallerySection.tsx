import React from "react";
import Image from "next/image";

const galleryImages = [
  { id: 1, src: "/gallery1.png", alt: "Installation Photo 1" },
  { id: 2, src: "/gallery2.jpg", alt: "Installation Photo 2" },
  { id: 3, src: "/gallery3.jpg", alt: "Installation Photo 3" },
  { id: 4, src: "/gallery1.png", alt: "Installation Photo 4" },
  { id: 5, src: "/gallery2.jpg", alt: "Installation Photo 5" },
  { id: 6, src: "/gallery3.jpg", alt: "Installation Photo 6" },
  { id: 7, src: "/gallery1.png", alt: "Installation Photo 7" },
  { id: 8, src: "/gallery2.jpg", alt: "Installation Photo 8" },
  { id: 9, src: "/gallery3.jpg", alt: "Installation Photo 9" },
];

export default function GallerySection() {
  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-semibold text-[#314556] text-center mb-8 md:mb-12">
          ภาพงานติดตั้งจริง
        </h2>

        {/* 3x3 Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image) => (
            <div key={image.id} className="w-full aspect-[4/3] overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Image - Full Width */}
      <div className="w-screen relative left-[50%] right-[50%] -mx-[50vw] mt-12 md:mt-16">
        <Image
          src="/faq.png"
          alt="FAQ"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
