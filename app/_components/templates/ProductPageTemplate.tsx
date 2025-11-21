"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ConsultationButton from "../ConsultationButton"; // Ensure this path is correct for your project

// --- Types for Props ---
export interface FeatureIcon {
  icon: React.ReactNode; // Or an image URL string
  title: string;
  description: string;
}

export interface RelatedProduct {
  image: string;
  name: string;
  link: string;
}

export interface ProductPageProps {
  // Hero Section Data (Changed to accept array for carousel)
  heroImages: string[];
  productName: string;
  heroDescription: string;
  featuresList: string[];

  // Info Section Data (1 Car / 2 Car)
  infoTitle: string;
  infoDescription: string;
  imageOneCar: string;
  imageTwoCar: string;

  // Features Grid Data (Dark Section)
  featuresTitle: string;
  featuresSubtitle: string;
  featureIcons: FeatureIcon[];

  // Gallery Data
  galleryImages: string[];

  // Related Products Data
  relatedProducts: RelatedProduct[];
}

export default function ProductPageTemplate({
  heroImages, // Now an array
  productName,
  heroDescription,
  featuresList,
  infoTitle,
  infoDescription,
  imageOneCar,
  imageTwoCar,
  featuresTitle,
  featuresSubtitle,
  featureIcons,
  galleryImages,
  relatedProducts,
}: ProductPageProps) {
  // --- Carousel Logic ---
  const [currentSlide, setCurrentSlide] = useState(0);
  // Only auto-play if we have more than 1 image
  const [isAutoPlaying, setIsAutoPlaying] = useState(heroImages.length > 1);

  useEffect(() => {
    if (!isAutoPlaying || heroImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, heroImages.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 7000);
  };

  return (
    <div className="w-full bg-[#EAE8E4] font-sans">
      {/* --- 1. Hero Section (Carousel) --- */}
      <section className="w-full bg-[#EAE8E4]">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[87vh]">
          {/* Left: Carousel Image */}
          <div className="relative h-[50vh] lg:h-auto w-full overflow-hidden group">
            {heroImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <Image
                  src={src}
                  alt={`${productName} slide ${index + 1}`}
                  fill
                  objectFit="cover"
                  className="object-center"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Navigation Arrows (Only show if > 1 image) */}
            {heroImages.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  className="cursor-pointer absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
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
                  className="cursor-pointer absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white p-2 rounded-full transition-all opacity-0 group-hover:opacity-100"
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

                {/* Dots */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`transition-all rounded-full shadow-sm ${
                        index === currentSlide
                          ? "w-8 h-2 bg-white"
                          : "w-2 h-2 bg-white/60 hover:bg-white"
                      }`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center px-8 py-16 lg:px-20 lg:py-0 bg-[#EAE8E4]">
            <div className="flex items-center gap-4 mb-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-[#314556] italic">
                {productName}
              </h1>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm lg:text-base">
              {heroDescription}
            </p>

            <div className="mb-10">
              <h3 className="text-lg font-bold text-[#314556] mb-4">
                คุณสมบัติ
              </h3>
              <ul className="space-y-2">
                {featuresList.map((feature, index) => (
                  <li
                    key={index}
                    className="text-sm text-[#314556] flex items-start"
                  >
                    <span className="mr-2">•</span> {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4">
              <ConsultationButton variant="primary" />
              <Link
                href="/contact"
                className="bg-[#314556] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1e2a35] transition-colors text-sm"
              >
                Contact us ›
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- 2. Features Grid (Dark Section - Updated Color) --- */}
      <section className="w-full bg-[#1c1d1e] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-normal mb-4">
            {featuresTitle}
          </h2>
          <p className="text-gray-300 text-sm lg:text-base mb-16 max-w-3xl mx-auto">
            {featuresSubtitle}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {featureIcons.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-6 text-[#314556] p-4">
                  {typeof item.icon !== "string" ? (
                    item.icon
                  ) : (
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.icon as string}
                        alt={item.title}
                        fill
                        objectFit="contain"
                        className="w-24 h-24"
                      />
                    </div>
                  )}
                </div>
                <h4 className="font-bold uppercase text-sm lg:text-base mb-2 tracking-wider">
                  {item.title}
                </h4>
                <p className="text-gray-400 text-xs lg:text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#EAE8E4] py-16 lg:py-24 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl text-[#314556] mb-6 font-extrabold">
            {infoTitle}
          </h2>
          <p className="max-w-4xl mx-auto text-gray-600 text-sm lg:text-base leading-relaxed mb-16">
            {infoDescription}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* 1 Car Type */}
            <div className="flex flex-col items-center">
              <div className="w-full border-b border-gray-400 mb-8 pb-2 text-left">
                <span className="text-lg font-bold text-[#314556]">
                  1 Car Type
                </span>
              </div>
              {/* Fixed aspect ratio container to cover full width */}
              <div className="relative w-full aspect-[4/3] bg-white">
                <Image
                  src={imageOneCar}
                  alt="1 Car Type"
                  fill
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                โรงจอดรถโครงสร้างอลูมิเนียม แบบ 1 คัน
              </p>
            </div>

            {/* 2 Car Type */}
            <div className="flex flex-col items-center">
              <div className="w-full border-b border-gray-400 mb-8 pb-2 text-left">
                <span className="text-lg font-bold text-[#314556]">
                  2 Car Type
                </span>
              </div>
              {/* Fixed aspect ratio container to cover full width */}
              <div className="relative w-full aspect-[4/3] bg-white">
                <Image
                  src={imageTwoCar}
                  alt="2 Car Type"
                  fill
                  objectFit="cover"
                  className="w-full h-full"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500">
                โรงจอดรถโครงสร้างอลูมิเนียม แบบ 2 คัน
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- 4. Gallery Section (Updated Background Color) --- */}
      <section className="w-full bg-[#1c1d1e] px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center mb-8">
            <h3 className="text-white text-xl mr-4">Gallery</h3>
            <div className="grow h-px bg-white/30"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-auto md:h-[500px] lg:h-[600px]">
            {/* Left Column */}
            <div className="flex flex-col gap-4 h-full">
              <div className="relative flex-1 w-full min-h-[200px]">
                <Image
                  src={galleryImages[0]}
                  alt="Gallery 1"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="relative flex-1 w-full min-h-[200px]">
                <Image
                  src={galleryImages[1]}
                  alt="Gallery 2"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>

            {/* Middle Column */}
            <div className="relative w-full h-[400px] md:h-full">
              <Image
                src={galleryImages[2]}
                alt="Gallery Main"
                fill
                objectFit="cover"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 h-full">
              <div className="relative flex-1 w-full min-h-[200px]">
                <Image
                  src={galleryImages[3]}
                  alt="Gallery 3"
                  fill
                  objectFit="cover"
                />
              </div>
              <div className="relative flex-1 w-full min-h-[200px]">
                <Image
                  src={galleryImages[4] || galleryImages[0]}
                  alt="Gallery 4"
                  fill
                  objectFit="cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- 5. CTA & More Section (Updated Background Color for More) --- */}
      <section className="w-full bg-white pt-20 pb-0 px-0">
        <div className="max-w-7xl mx-auto px-4">
          {/* Call to Action */}
          <div className="text-center mb-20">
            <h2 className="text-2xl lg:text-3xl font-normal text-[#314556] mb-8">
              Let’s design your dream aluminum car port
            </h2>
            <div className="flex justify-center gap-6">
              <Link
                href="#"
                className="bg-[#EAE8E4] text-[#314556] px-8 py-3 rounded-full font-medium italic flex items-center gap-2 hover:bg-gray-200 transition"
              >
                LINE <span className="not-italic text-lg">&rarr;</span>
              </Link>
              <Link
                href="#"
                className="bg-[#222] text-white px-8 py-3 rounded-full font-medium italic flex items-center gap-2 hover:bg-black transition"
              >
                Call <span className="not-italic text-lg">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>

        {/* More Products Grid - Full Width Background #1c1d1e */}
        <div className="w-full bg-[#1c1d1e] py-12 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/5 pt-4">
                <span className="text-gray-400 italic text-lg">MORE</span>
              </div>

              <div className="md:w-4/5 grid grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.map((product, index) => (
                  <Link href={product.link} key={index} className="group">
                    <div className="relative w-full aspect-square overflow-hidden mb-3">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        objectFit="cover"
                        className="transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-white text-xs text-right w-full">
                      {product.name}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
