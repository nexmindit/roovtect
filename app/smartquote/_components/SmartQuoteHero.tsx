import React from "react";
import Image from "next/image";

export default function SmartQuoteHero() {
  return (
    <section className="w-full bg-[#EAE8E4] min-h-[85vh] relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto w-full px-6 md:px-8 grid grid-cols-1 md:grid-cols-2 h-full">
        <div className="flex flex-col justify-center relative z-10 pt-12 md:pt-0">
          <div className="flex items-start gap-6 md:gap-8 pl-4 md:pl-0">
            <div className="relative w-6 h-[280px] md:h-[350px] mt-2 flex-shrink-0">
              <Image
                src="https://smartquote.roovtect.com/png/pricing%20page/main/01%20arrow.png"
                alt="Arrow Down"
                fill
                objectFit="contain"
                className="object-top"
              />
            </div>

            <div className="flex flex-col">
              <h2 className="text-4xl md:text-5xl lg:text-[56px] text-[#314556] italic leading-tight font-normal">
                Explore
              </h2>
              <h2 className="text-4xl md:text-5xl lg:text-[56px] text-[#314556] italic leading-tight font-normal mb-6">
                your unique
              </h2>

              <h1 className="text-5xl md:text-6xl lg:text-[72px] font-bold text-[#0A1E2F] tracking-[0.2em] leading-none mb-8 uppercase">
                ROOVTECT
              </h1>

              <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 font-medium leading-relaxed">
                ออกแบบหลังคาโรงรถ <br />
                หรือกันสาดได้ด้วยตัวคุณเอง
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] md:h-auto w-full flex items-end justify-end md:absolute md:bottom-0 md:right-0 md:w-1/2 md:top-0">
          <div className="relative w-full h-full md:h-[90%]">
            <Image
              src="https://smartquote.roovtect.com/png/pricing%20page/home-00.png"
              alt="Roovtect Smart Quote House"
              fill
              objectFit="contain"
              objectPosition="bottom right"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
