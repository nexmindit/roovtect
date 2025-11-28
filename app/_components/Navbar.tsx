"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import ConsultationButton from "./ConsultationButton";

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  const clearCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    clearCloseTimeout();
    setIsProductsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setIsProductsOpen(false);
    }, 200);
  };

  return (
    <nav className="bg-[#DBD6D1] sticky top-0 z-50">
      <div className="px-10 py-3">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/images/logo_navbar.png"
                alt="POWER KING Logo"
                width={75}
                height={30}
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#314556] hover:text-[#1e2a35] font-medium transition-colors"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-[#314556] hover:text-[#1e2a35] font-medium transition-colors flex items-center">
                Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isProductsOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-[#314556] rounded-md shadow-lg py-2 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/services/shinkolite"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors"
                  >
                    Shinkolite Roofing & Canopy
                  </Link>
                  <Link
                    href="/services/custom-metal"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors"
                  >
                    Custom Metal & Stainless Works
                  </Link>
                  <Link
                    href="/services/furniture"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors"
                  >
                    Furniture & Knockdown Units
                  </Link>
                </div>
              )}
            </div>

            <Link
              href="/gallery"
              className="text-[#314556] hover:text-[#1e2a35] font-medium transition-colors"
            >
              Gallery
            </Link>

            <Link
              href="/portfolio"
              className="text-[#314556] hover:text-[#1e2a35] font-medium transition-colors"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className="text-[#314556] hover:text-[#1e2a35] font-medium transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="bg-[#314556] text-white px-4 py-1.5 rounded-full font-medium transition-colors hover:bg-[#1e2a35]"
            >
              Contact
            </Link>

            {/* CTA Button */}
            <ConsultationButton variant="primary" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-[#314556] hover:text-[#1e2a35] focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
