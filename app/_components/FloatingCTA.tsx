"use client";

import React from "react";
import { FaLine, FaPhone } from "react-icons/fa";

declare global {
    interface Window {
        gtag_report_conversion?: (url?: string) => boolean;
    }
}

const FloatingCTA = () => {
    const handleLineClick = () => {
        // Fire Google Ads conversion tag
        if (typeof window !== "undefined" && window.gtag_report_conversion) {
            window.gtag_report_conversion("https://lin.ee/NHJK6nl");
        }
    };

    const handlePhoneClick = () => {
        // Fire Google Ads conversion tag
        if (typeof window !== "undefined" && window.gtag_report_conversion) {
            window.gtag_report_conversion("tel:0909723010");
        }
    };

    return (
        <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
            {/* Line Button */}
            <a
                href="https://lin.ee/NHJK6nl"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLineClick}
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                style={{ backgroundColor: "#06C755" }}
                aria-label="Contact via Line"
            >
                <FaLine className="text-white text-2xl" />
            </a>

            {/* Phone Button */}
            <a
                href="tel:0909723010"
                onClick={handlePhoneClick}
                className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
                style={{ backgroundColor: "#60A5FA" }}
                aria-label="Call us"
            >
                <FaPhone className="text-white text-xl" />
            </a>
        </div>
    );
};

export default FloatingCTA;
