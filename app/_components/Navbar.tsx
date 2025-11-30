"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";
import ConsultationButton from "./ConsultationButton";

interface NavbarProps {
  theme?: "light" | "dark";
  transparent?: boolean;
}

export default function Navbar({ theme = "light", transparent = false }: NavbarProps) {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Determine styles based on theme
  const isDarkTheme = theme === "dark";

  // Text colors
  const textColorClass = isDarkTheme ? "text-white hover:text-gray-200" : "text-[#314556] hover:text-[#1e2a35]";
  const mobileMenuIconColor = isDarkTheme ? "text-white" : "text-[#314556]";

  // Background
  // If transparent is true, use transparent bg.
  // If not transparent:
  //   - Dark theme: bg-white/10 backdrop-blur-sm
  //   - Light theme: sticky top-0 bg-[#DBD6D1]

  let navClasses = "z-50";
  if (isDarkTheme) {
    navClasses += " absolute top-0 left-0 right-0";
    navClasses += transparent ? " bg-transparent" : " bg-white/10 backdrop-blur-sm";
  } else {
    navClasses += " sticky top-0 bg-[#DBD6D1]";
  }

  return (
    <nav className={navClasses}>
      <div className="px-10 py-3 md:py-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/images/logo_navbar.png"
                alt="Roovtect Logo"
                width={150}
                height={75}
                className="h-20 w-auto"
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`${textColorClass} font-medium transition-colors`}
            >
              Home
            </Link>

            {/* Products & Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className={`${textColorClass} font-medium transition-colors flex items-center`}>
                Products & Services
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${isProductsOpen ? "rotate-180" : ""
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
              href="/portfolio"
              className={`${textColorClass} font-medium transition-colors`}
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              className={`${textColorClass} font-medium transition-colors`}
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className={`${textColorClass} font-medium transition-colors`}
            >
              Contact
            </Link>

          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`${mobileMenuIconColor} hover:text-gray-200 focus:outline-none`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#314556] px-4 pt-2 pb-4 space-y-1">
          <Link
            href="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3d5668]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <div className="space-y-1 pl-4">
            <div className="px-3 py-2 text-base font-medium text-gray-300">
              Products & Services
            </div>
            <Link
              href="/services/shinkolite"
              className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#3d5668]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Shinkolite Roofing & Canopy
            </Link>
            <Link
              href="/services/custom-metal"
              className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#3d5668]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Custom Metal & Stainless Works
            </Link>
            <Link
              href="/services/furniture"
              className="block px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-[#3d5668]"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Furniture & Knockdown Units
            </Link>
          </div>
          <Link
            href="/portfolio"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3d5668]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Portfolio
          </Link>
          <Link
            href="/about"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3d5668]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="/contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-[#3d5668]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
