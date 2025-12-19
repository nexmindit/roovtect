"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Navbar from "../Navbar";
import ConsultationButton from "../ConsultationButton";
import { Link } from "lucide-react";

interface CarouselSlide {
  id: number;
  image: string;
  mobileImage?: string;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  primaryButton?: {
    text: string;
    link?: string;
    type?: "consultation" | "link";
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/images/home1.png",
    mobileImage: "/images/home1.png", // Fallback to same image for now
    subtitle: "งานเหล็กจริงจัง หลังคาสวยงาม จบงานไวสไตล์ Power King",
    title: "บริการงานหลังคา Shinkolite และงานเหล็ก-สแตนเลสครบวงจร",
    description:
      "รับออกแบบและติดตั้ง กันสาด โครงป้าย เฟอร์นิเจอร์สไตล์ Loft พร้อมบริการรูปแบบน็อคดาวน์และสำเร็จรูป ยกไปติดตั้งได้ทันที",
    primaryButton: {
      text: "ปรึกษาประเมินราคาฟรี!!",
      link: "https://lin.ee/NHJK6nl",
    },
  },
];

const heroHighlights = [
  {
    title: "Modern",
    description: "ดีไซน์เรียบ เท่ และสอดรับกับสถาปัตยกรรมยุคใหม่",
  },
  {
    title: "Industrial",
    description: "เชี่ยวชาญงานเหล็ก-สแตนเลสและโครงสร้างเฉพาะทาง",
  },
  {
    title: "Durable",
    description: "เลือกวัสดุเกรด A พร้อมควบคุมการประกอบทุกดีเทล",
  },
  {
    title: "Power King Care",
    description: "จบงานไว เก็บงานเรียบร้อย พร้อมรับประกันหลังติดตั้ง",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    // Resume autoplay after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  const activeSlide = slides[currentSlide];

  return (
    <>
      <section className="relative aspect-[16/11] md:aspect-auto md:min-h-screen w-full overflow-visible md:overflow-hidden flex items-center justify-center">
        {/* Background Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* Desktop Image */}
              <div className="hidden md:block absolute inset-0">
                <Image
                  src={slide.image}
                  alt={slide.title || ""}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              {/* Mobile Image */}
              <div className="block md:hidden absolute inset-0">
                <Image
                  src={slide.mobileImage || slide.image}
                  alt={slide.title || ""}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f2d]/40 via-transparent to-black/60 z-10" />
        </div>

        {/* Hero Navbar Overlay */}
        <div className="absolute top-0 left-0 right-0 z-[100]">
          <Navbar theme="dark" transparent />
        </div>

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all hover:bg-white/40 border border-white/30 hidden md:block"
              aria-label="Previous slide"
            >
              <svg
                className="w-6 h-6"
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
              className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all hover:bg-white/40 border border-white/30 hidden md:block"
              aria-label="Next slide"
            >
              <svg
                className="w-6 h-6"
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

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${
                    index === currentSlide
                      ? "w-12 h-3 bg-white shadow-lg"
                      : "w-3 h-3 bg-white/50 hover:bg-white/80"
                  } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <section className="bg-[#f6f8fb] px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid items-center gap-12">
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl ring-1 ring-white text-[#1f2c38]">
            {activeSlide?.subtitle && (
              <p className="text-xs md:text-sm uppercase tracking-0 text-[#7e8ea2]">
                งานเหล็กจริงจัง หลังคาสวยงาม จบงานไวสไตล์ Power King
              </p>
            )}

            {activeSlide?.title && (
              <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                บริการงานหลังคา Shinkolite และงานเหล็ก-สแตนเลสครบวงจร
              </h1>
            )}

            {activeSlide?.description && (
              <p className="mt-6 text-lg leading-relaxed text-[#4b5a66]">
                รับออกแบบและติดตั้ง กันสาด โครงป้าย เฟอร์นิเจอร์สไตล์ Loft
                พร้อมบริการรูปแบบน็อคดาวน์และสำเร็จรูป ยกไปติดตั้งได้ทันที
              </p>
            )}

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <ConsultationButton className="px-6 py-2 text-sm">
                ปรึกษาประเมินราคาฟรี!!
              </ConsultationButton>
            </div>

            {/* Highlights */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-[#e1e7ee] bg-[#f8fafc] p-5 shadow-sm"
                >
                  <p className="text-sm font-medium text-[#1f2c38]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm text-[#6b7b8c]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
