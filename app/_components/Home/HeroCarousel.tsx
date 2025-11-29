"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../Navbar";
import ConsultationButton from "../ConsultationButton";

interface CarouselSlide {
  id: number;
  image: string;
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

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/images/home1.png",
    subtitle: "งานเหล็กจริงจัง หลังคาสวยงาม จบงานไวสไตล์ Power King",
    title: "บริการงานหลังคา Shinkolite และงานเหล็ก-สแตนเลสครบวงจร",
    description:
      "รับออกแบบและติดตั้ง กันสาด โครงป้าย เฟอร์นิเจอร์สไตล์ Loft พร้อมบริการรูปแบบน็อคดาวน์และสำเร็จรูป ยกไปติดตั้งได้ทันที",
    primaryButton: {
      text: "ปรึกษาและประเมินราคาฟรี",
      type: "consultation",
    },
    secondaryButton: {
      text: "ชมผลงานจริง",
      link: "/gallery",
    },
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
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Background Images */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              <Image
                src={slide.image}
                alt={slide.title || ""}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f2d]/25 via-transparent to-white/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />
        </div>

        {/* Hero Navbar Overlay */}
        <Navbar theme="dark" transparent />

        {/* Spacer just to keep the banner tall while showing only the image */}
        <span className="block min-h-[85vh]" aria-hidden />

        {/* Navigation Arrows */}
        {slides.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 backdrop-blur-sm text-[#1f2c38] p-3 rounded-full transition-all hover:bg-white/70"
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
              className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/30 backdrop-blur-sm text-[#1f2c38] p-3 rounded-full transition-all hover:bg-white/70"
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
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all ${index === currentSlide
                    ? "w-12 h-3 bg-white"
                    : "w-3 h-3 bg-white/50 hover:bg-white/75"
                    } rounded-full`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </section>

      <section className="bg-[#f6f8fb] px-4 sm:px-6 py-16 md:py-20">
        <div className="max-w-6xl mx-auto grid items-center gap-12 lg:gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-white rounded-[32px] p-8 md:p-10 shadow-xl ring-1 ring-white text-[#1f2c38]">
            {activeSlide?.subtitle && (
              <p className="text-xs md:text-sm uppercase tracking-0 text-[#7e8ea2]">
                งานเหล็กจริงจัง หลังคาสวยงาม จบงานไวสไตล์ Power King
              </p>
            )}

            {activeSlide?.title && (
              <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight">
                บริการงานหลังคา Shinkolite <br/>และงานเหล็ก-สแตนเลสครบวงจร
              </h1>
            )}

            {activeSlide?.description && (
              <p className="mt-6 text-lg leading-relaxed text-[#4b5a66]">
                รับออกแบบและติดตั้ง กันสาด โครงป้าย เฟอร์นิเจอร์สไตล์ Loft พร้อมบริการรูปแบบน็อคดาวน์และสำเร็จรูป ยกไปติดตั้งได้ทันที
              </p>
            )}

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              {activeSlide?.primaryButton &&
                (activeSlide.primaryButton.type === "consultation" ? (
                  <ConsultationButton className="flex items-center justify-center gap-2 text-base px-8 py-3 rounded-full shadow-lg">
                    {activeSlide.primaryButton.text}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="size-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </ConsultationButton>
                ) : (
                  <Link
                    href={activeSlide.primaryButton.link || "#"}
                    className="cursor-pointer bg-[#314556] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1e2a35] transition-all"
                  >
                    {activeSlide.primaryButton.text}
                  </Link>
                ))}
              {activeSlide?.secondaryButton && (
                <Link
                  href={activeSlide.secondaryButton.link}
                  className="cursor-pointer flex items-center justify-center gap-2 rounded-full border border-[#314556]/30 bg-white px-8 py-3 font-medium text-[#1f2c38] shadow-sm transition-all hover:border-[#314556] hover:shadow-lg"
                >
                  {activeSlide.secondaryButton.text}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              )}
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

          {/* Image Card */}
          <div className="relative">
            <div className="absolute -top-10 -left-6 hidden lg:flex flex-col gap-1 rounded-3xl bg-white px-6 py-4 text-sm font-semibold text-[#1f2c38] shadow-xl z-20">
              <span>Metal Roof &</span>
              <span>Shinkolite Expert</span>
            </div>
            <div className="rounded-[40px] border border-white bg-white p-6 shadow-2xl">
              <div className="mt-6 grid grid-cols-2 gap-4 text-[#1f2c38]">
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#7e8ea2]">
                    Solution
                  </p>
                  <p className="text-lg font-semibold">Shinkolite Roof</p>
                  <p className="text-sm text-[#6b7b8c]">
                    หลังคาอะคริลิคโปร่งแสงให้แสงธรรมชาติ
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wide text-[#7e8ea2]">
                    Structure
                  </p>
                  <p className="text-lg font-semibold">Metal & Aluminium</p>
                  <p className="text-sm text-[#6b7b8c]">
                    โครงสร้างแข็งแรงรับประกันความทนทาน
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
