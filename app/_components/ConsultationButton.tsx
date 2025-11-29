"use client";

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

  const variantStyles = {
    primary: "bg-[#314556] text-white hover:bg-[#1e2a35]",
    secondary:
      "bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border-2 border-white",
    white: "bg-white text-[#3d4f5e] hover:bg-gray-100",
  };

  return (
    <>
      <a
        href="https://lin.ee/NHJK6nl"
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer bg-[#314556] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1e2a35] transition-all text-center"
      >
        {children}
      </a>
    </>
  );
}
