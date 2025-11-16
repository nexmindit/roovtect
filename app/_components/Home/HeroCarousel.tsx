"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import HeroNavbar from "./HeroNavbar";

interface CarouselSlide {
  id: number;
  image: string;
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  primaryButton?: {
    text: string;
    link: string;
  };
  secondaryButton?: {
    text: string;
    link: string;
  };
}

const slides: CarouselSlide[] = [
  {
    id: 1,
    image: "/banner_carousel1.jpg",
    title: "UNIQUE ROOF SOLUTION",
    description: "หลังคาโรงรถ | พื้นระแนงไม้เทียม ติดตั้งระบบ KNOCKDOWN",
    primaryButton: {
      text: "ปรึกษาฟรี",
      link: "/products",
    },
  },
  {
    id: 2,
    image: "/banner_carousel2.jpg",

    secondaryButton: {
      text: "Google Maps",
      link: "/gallery",
    },
  },
  {
    id: 3,
    image: "/banner_carousel3.webp",

    primaryButton: {
      text: "Call",
      link: "/gallery",
    },
    secondaryButton: {
      text: "Line",
      link: "/consultation",
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

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Navbar Overlay */}
      <HeroNavbar transparent />

      {/* Carousel Slides */}
      <div className="relative h-full w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image}
              alt={slide.title || ""}
              fill
              className="object-cover"
              priority={index === 0}
            />

            {/* Content Overlay */}
            <div className="absolute inset-0 z-20 flex items-end pb-24 justify-center">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                {/* Subtitle */}
                {slide.subtitle && (
                  <p className="text-lg md:text-xl mb-4 font-light tracking-wide uppercase">
                    {slide.subtitle}
                  </p>
                )}

                {/* Title */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                  {slide.title}
                </h1>

                {/* Description */}
                <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                  {slide.description}
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  {slide.primaryButton && (
                    <Link
                      href={slide.primaryButton.link}
                      className="bg-[#314556] flex items-center gap-2 text-white px-8 py-3 rounded-full hover:bg-[#1e2a35] font-medium transition-all transform hover:scale-105 shadow-lg"
                    >
                      {slide.primaryButton.text}
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
                    </Link>
                  )}
                  {slide.secondaryButton && (
                    <Link
                      href={slide.secondaryButton.link}
                      className="bg-white flex items-center gap-2 text-[#314556] px-8 py-3 rounded-full hover:bg-white/90 font-medium transition-all transform hover:scale-105 border-2 border-white"
                    >
                      {slide.secondaryButton.text}
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
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all"
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
        className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-3 rounded-full transition-all"
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
            className={`transition-all ${
              index === currentSlide
                ? "w-12 h-3 bg-white"
                : "w-3 h-3 bg-white/50 hover:bg-white/75"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
