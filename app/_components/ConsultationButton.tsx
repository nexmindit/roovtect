"use client";

import { useState } from "react";
import ConsultationModal from "./ConsultationModal";

interface ConsultationButtonProps {
  className?: string;
  variant?: "primary" | "secondary" | "white";
  children?: React.ReactNode;
}

export default function ConsultationButton({
  className = "",
  variant = "primary",
  children,
}: ConsultationButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const variantStyles = {
    primary: "bg-[#314556] text-white hover:bg-[#1e2a35]",
    secondary:
      "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white",
    white: "bg-white text-[#3d4f5e] hover:bg-gray-100",
  };

  return (
    <>
      <button
        onClick={() => setIsModalOpen(true)}
        className={`${variantStyles[variant]} cursor-pointer px-6 py-2.5 rounded-full font-medium transition-colors ${className}`}
      >
        {children || "ปรึกษาฟรี"}
      </button>

      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
