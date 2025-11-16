"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  return (
    <nav className="bg-[#DBD6D1] sticky top-0 z-50">
      <div className="px-10 py-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0">
            <Link href="/">
              <Image
                src="/roovtect_logo.png"
                alt="Roovtect Logo"
                width={75}
                height={30}
                className="h-10 w-auto"
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

            {/* Products & Services Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-[#314556] hover:text-[#1e2a35] font-medium transition-colors flex items-center">
                Products & Services
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
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  <Link
                    href="/products/shinkolite"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors"
                  >
                    SHINKOLITE
                  </Link>
                  <Link
                    href="/products/awning"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors"
                  >
                    AWNING
                  </Link>

                  {/* Sub-category */}
                  <div className="px-4 py-2 text-white font-semibold text-sm border-t border-[#3d5668] mt-2">
                    ALUMINIUM CAR PORT
                  </div>
                  <Link
                    href="/products/alu-port-7"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors pl-8"
                  >
                    ALU PORT 7
                  </Link>
                  <Link
                    href="/products/alu-port-v"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors pl-8"
                  >
                    ALU PORT V
                  </Link>
                  <Link
                    href="/products/alu-port-origin"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors pl-8"
                  >
                    ALU PORT ORIGIN
                  </Link>
                  <Link
                    href="/products/aluport-next"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors pl-8"
                  >
                    ALUPORT NEXT
                  </Link>
                  <Link
                    href="/products/ykk-ap"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors pl-8"
                  >
                    YKK AP
                  </Link>
                  <Link
                    href="/products/alu-canopy"
                    className="block px-4 py-2 text-white hover:bg-[#3d5668] transition-colors pl-8"
                  >
                    ALU CANOPY
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
              href="/smartquote"
              className="text-[#314556] hover:text-[#1e2a35] font-medium transition-colors"
            >
              SmartQuote
            </Link>

            <Link
              href="/blog"
              className="text-[#314556] hover:text-[#1e2a35] font-medium transition-colors"
            >
              Blog
            </Link>

            <Link
              href="/about"
              className="text-[#314556] hover:text-[#1e2a35] font-medium transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/contact"
              className="text-[#314556] hover:text-[#1e2a35] font-medium transition-colors"
            >
              Contact
            </Link>

            {/* CTA Button */}
            <Link
              href="/consultation"
              className="bg-[#314556] text-white px-6 py-2.5 rounded-full hover:bg-[#1e2a35] font-medium transition-colors"
            >
              ปรึกษาฟรี
            </Link>
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
