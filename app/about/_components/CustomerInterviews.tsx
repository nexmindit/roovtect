"use client";

import React, { useState } from "react";

const videoSlides = [
  "https://www.youtube.com/embed/bUObQLLDjso?si=wzMZGXhQCiHEMxiY",
  "https://www.youtube.com/embed/-7w5O-Tc8es?si=6dTd3oFOrB-ZG-zW",
  "https://www.youtube.com/embed/jPOgQsaPzfY?si=UJmYBgtTzwKOwFov",
];

export default function CustomerInterviews() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="w-full bg-white py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#314556] text-center mb-10">
          ทำความรู้จักเรามากขึ้นผ่านบทสัมภาษณ์จากลูกค้าผู้ใช้บริการ ROOVTECT
        </h2>

        <div className="relative w-full">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl bg-black">
            <iframe
              key={currentIndex}
              className="absolute top-0 left-0 w-full h-full"
              src={videoSlides[currentIndex]}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>

          <div className="flex justify-center items-center gap-3 mt-8">
            {videoSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index
                    ? "bg-[#314556] w-4 h-4"
                    : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
                }`}
                aria-label={`Go to video ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
