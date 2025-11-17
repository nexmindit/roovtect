"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface Article {
  date: string;
  imageSrc: string;
  title: string;
  href: string;
}

const articleData: Article[] = [
  {
    date: "19 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/attractive-asian-woman-cooking-kitchen-768x512.jpg",
    title: "เปิดตำราฮวงจุ้ย ห้องครัวควรอยู่ที่ไหนของบ้าน?",
    href: "/article/fengshui-kitchen",
  },
  {
    date: "19 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/gray-cat-lounging-stretching-on-window-768x512.jpg",
    title: "5 เคล็ดลับการออกแบบห้องสัตว์เลี้ยงในบ้าน สร้างความสุขร่วมกัน",
    href: "/article/pet-room-design",
  },
  {
    date: "18 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%87%E0%B8%81-768x512.jpg",
    title: "3 วิธีแบ่งรูปแบบกันสาดบ้าน สร้างบ้านสวย ใช้งานคุ้ม",
    href: "/article/canopy-types",
  },
  {
    date: "18 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/modern-interior-kitchen-luxury-private-house-768x512.jpg",
    title: "เคล็ดลับการออกแบบห้องครัวให้ใช้ได้นาน ไม่ต้องซ่อมบ่อย",
    href: "/article/durable-kitchen-tips",
  },
  {
    date: "17 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/gray-cat-lounging-stretching-on-window-768x512.jpg",
    title: "เทคนิคการเลือกใช้วัสดุหลังคาที่เหมาะสมกับภูมิอากาศ",
    href: "/article/new-article-5",
  },
  {
    date: "17 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%87%E0%B8%81-768x512.jpg",
    title: "การคำนวณงบประมาณทำโรงรถ: สิ่งที่ต้องรู้ก่อนเริ่มงาน",
    href: "/article/new-article-6",
  },
];

const ArticleCard: React.FC<Article> = ({ date, imageSrc, title, href }) => (
  <div className="flex flex-col items-center text-center flex-shrink-0 w-full">
    <Link href={href} className="block w-full overflow-hidden">
      <div className="relative w-full aspect-[3/2] overflow-hidden">
        <div className="absolute top-3 left-3 bg-[#314556] text-white text-sm font-semibold px-2 py-1 rounded-full z-10">
          {date}
        </div>
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-300"
        />
      </div>
    </Link>

    <div className="h-14 mt-3 flex items-start justify-center">
      <Link
        href={href}
        className="text-lg tracking-wide font-medium text-[#314556] transition-colors duration-300 leading-normal hover:text-black whitespace-normal"
      >
        {title}
      </Link>
    </div>
  </div>
);

export default function ArticleSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const slidesPerPage = 4;
  const totalPages = Math.ceil(articleData.length / slidesPerPage);

  const scrollToPage = (pageIndex: number) => {
    if (scrollRef.current) {
      const clientWidth = scrollRef.current.clientWidth;
      const newScrollLeft = pageIndex * clientWidth;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
      setCurrentSlide(pageIndex);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % totalPages;
      scrollToPage(nextSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, totalPages]);

  return (
    <section className="w-full bg-[#EAE8E4] py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-[#314556] text-left mb-6">
          บทความเกี่ยวกับการต่อเติมหลังคา และ ต่อเติมบ้าน
        </h2>

        <div className="w-full border-t-3 border-gray-400 mb-12" />

        <div className="w-full overflow-hidden relative">
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll snap-x snap-mandatory pb-4 mb-8 custom-scrollbar"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {articleData.map((article) => (
              <div
                key={article.title}
                className="snap-start flex-shrink-0 lg:w-1/4 md:w-1/3 sm:w-1/2 w-full pr-8"
              >
                <ArticleCard {...article} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center gap-2 mb-12">
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToPage(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                currentSlide === index ? "bg-black" : "bg-gray-500"
              }`}
            />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/articles"
            className="inline-flex items-center text-white bg-[#314556] px-8 py-3 rounded-full font-medium transition-colors hover:bg-[#1e2a35]"
          >
            บทความทั้งหมด &rsaquo;
          </Link>
        </div>
      </div>
    </section>
  );
}
