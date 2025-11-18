import React from "react";

export default function ExecutiveInterview() {
  return (
    <section className="w-full bg-[#EAE8E4] py-16 md:py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-[#314556] text-center mb-10">
          ทำความรู้จัก ROOVTECT ผ่านบทสัมภาษณ์ผู้บริหาร
        </h2>

        <div className="relative w-full aspect-video overflow-hidden shadow-xl">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/9Yp6S1vJTIc?si=_hwcgheEqvEO6s3N"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
