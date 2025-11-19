"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../_components/Navbar";

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
    href: "/blog/fengshui-kitchen",
  },
  {
    date: "19 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/gray-cat-lounging-stretching-on-window-768x512.jpg",
    title: "5 เคล็ดลับการออกแบบห้องสัตว์เลี้ยงในบ้าน สร้างความสุขร่วมกัน",
    href: "/blog/pet-room-design",
  },
  {
    date: "18 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%87%E0%B8%81-768x512.jpg",
    title: "3 วิธีแบ่งรูปแบบกันสาดบ้าน สร้างบ้านสวย ใช้งานคุ้ม",
    href: "/blog/canopy-types",
  },
  {
    date: "18 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/modern-interior-kitchen-luxury-private-house-768x512.jpg",
    title: "เคล็ดลับการออกแบบห้องครัวให้ใช้ได้นาน ไม่ต้องซ่อมบ่อย",
    href: "/blog/durable-kitchen-tips",
  },
  {
    date: "17 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/gray-cat-lounging-stretching-on-window-768x512.jpg",
    title: "เทคนิคการเลือกใช้วัสดุหลังคาที่เหมาะสมกับภูมิอากาศ",
    href: "/blog/new-article-5",
  },
  {
    date: "17 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%87%E0%B8%81-768x512.jpg",
    title: "การคำนวณงบประมาณทำโรงรถ: สิ่งที่ต้องรู้ก่อนเริ่มงาน",
    href: "/blog/new-article-6",
  },
  // Duplicated Data for Pagination
  {
    date: "16 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/attractive-asian-woman-cooking-kitchen-768x512.jpg",
    title: "ไอเดียแต่งบ้านสไตล์มินิมอลด้วยโครงสร้างเหล็ก",
    href: "/blog/minimal-structure",
  },
  {
    date: "16 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/gray-cat-lounging-stretching-on-window-768x512.jpg",
    title: "การดูแลรักษาหลังคาไวนิลให้สวยงามยาวนาน",
    href: "/blog/vinyl-maintenance",
  },
  {
    date: "15 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%87%E0%B8%81-768x512.jpg",
    title: "เปรียบเทียบวัสดุหลังคา: Shinkolite vs Solid Sheet",
    href: "/blog/material-comparison",
  },
  {
    date: "15 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/modern-interior-kitchen-luxury-private-house-768x512.jpg",
    title: "ต่อเติมครัวไทยหลังบ้านอย่างไรไม่ให้ทรุด",
    href: "/blog/thai-kitchen-extension",
  },
  {
    date: "14 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/gray-cat-lounging-stretching-on-window-768x512.jpg",
    title: "ประโยชน์ของระแนงบังตา: ความสวยงามและความเป็นส่วนตัว",
    href: "/blog/facade-benefits",
  },
  {
    date: "14 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%87%E0%B8%81-768x512.jpg",
    title: "ทำไมต้องลงเสาเข็ม? ความสำคัญของรากฐานที่มั่นคง",
    href: "/blog/piling-importance",
  },
  {
    date: "13 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/attractive-asian-woman-cooking-kitchen-768x512.jpg",
    title: "เปลี่ยนโรงรถเก่าให้เป็นพื้นที่อเนกประสงค์",
    href: "/blog/garage-renovation",
  },
  {
    date: "13 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/gray-cat-lounging-stretching-on-window-768x512.jpg",
    title: "เทรนด์การแต่งบ้านปี 2026: ยั่งยืนและทันสมัย",
    href: "/blog/home-trends-2026",
  },
  {
    date: "12 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%87%E0%B8%81-768x512.jpg",
    title: "ระบบ Knockdown คืออะไร? ทำไมถึงดีกว่างานก่อสร้างทั่วไป",
    href: "/blog/what-is-knockdown",
  },
  {
    date: "12 ก.ย.",
    imageSrc:
      "https://roovtect.com/wp-content/uploads/2025/09/modern-interior-kitchen-luxury-private-house-768x512.jpg",
    title: "การเลือกผู้รับเหมา: สิ่งที่ต้องเช็คก่อนตัดสินใจจ้าง",
    href: "/blog/choosing-contractor",
  },
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredArticles = articleData.filter((article) =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredArticles.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentArticles = filteredArticles.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Helper to generate page numbers (basic implementation for small total pages)
  const getPageNumbers = () => {
    const pages = [];
    // Always show first page
    pages.push(1);

    if (currentPage > 3) {
      pages.push("...");
    }

    for (
      let i = Math.max(2, currentPage - 1);
      i <= Math.min(totalPages - 1, currentPage + 1);
      i++
    ) {
      pages.push(i);
    }

    if (currentPage < totalPages - 2) {
      pages.push("...");
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    // Fallback for simple logic if total pages are small (e.g. <= 5) to just show all
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    return pages;
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#EAE8E4] py-16 px-4 md:px-8 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <h1 className="text-2xl font-bold text-[#314556]">
              เกร็ดความรู้และไอเดียเกี่ยวกับการต่อเติมหลังคา
              ต่อเติมและตกแต่งบ้าน
            </h1>
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1); // Reset to page 1 on search
                }}
                className="w-full bg-white border border-gray-300 rounded-full py-3 pl-4 pr-10 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-gray-400 placeholder-gray-500"
              />
              <svg
                className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentArticles.map((article, index) => (
              <div key={index} className="flex flex-col bg-[#DBD6D1]">
                <div className="relative w-full aspect-3/2 mb-4">
                  <Image
                    src={article.imageSrc}
                    alt={article.title}
                    fill
                    objectFit="cover"
                    className="bg-gray-200"
                  />
                </div>
                <div className="flex flex-col items-start p-5">
                  <h3 className="text-lg font-bold text-[#314556] mb-1 leading-snug">
                    {article.title}
                  </h3>
                  <span className="text-xs text-gray-500 mb-3">
                    กันยายน {article.date.split(" ")[0]}, 2025
                  </span>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                    ห้องครัว ไม่ว่าจะเป็นครัวไทยหรือครัวฝรั่ง
                    ไม่ได้เป็นเพียงพื้นที่ สำหรับเตรียมอาหารเท่านั้น แต่ยังเป็น
                    [...]
                  </p>
                  <Link
                    href={article.href}
                    className="border bg-white border-[#314556] text-[#314556] px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-[#314556] hover:text-white transition-colors"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              ไม่พบผลลัพธ์การค้นหา
            </div>
          )}

          {/* Pagination */}
          {filteredArticles.length > 0 && (
            <div className="flex justify-center items-center gap-3 mt-16">
              {getPageNumbers().map((page, index) => (
                <React.Fragment key={index}>
                  {page === "..." ? (
                    <span className="text-[#314556]">...</span>
                  ) : (
                    <button
                      onClick={() => handlePageChange(page as number)}
                      className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border text-xs transition-colors ${
                        currentPage === page
                          ? "bg-[#314556] text-white border-[#314556]"
                          : "border-[#314556] text-[#314556] hover:bg-gray-100"
                      }`}
                    >
                      {page}
                    </button>
                  )}
                </React.Fragment>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded-full border border-[#314556] text-[#314556] text-xs hover:bg-gray-100 transition-colors ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <svg
                  className="w-3 h-3"
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
            </div>
          )}
        </div>
      </div>
    </>
  );
}
