"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    details: "",
  });

  const [countryCode, setCountryCode] = useState("+66");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { ...formData, countryCode });
    // Close modal after submission
    onClose();
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop with blur */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#E5E1DC] rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="cursor-pointer absolute top-4 right-4 text-[#314556] hover:text-[#1e2a35] transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Header */}
          <h2 className="text-[#314556] text-2xl md:text-3xl font-bold text-center mb-4">
            บริการงานต่อเติมฟรี
          </h2>

          {/* Description */}
          <p className="text-[#314556] text-sm md:text-base text-center leading-relaxed mb-8">
            เพียงกรอกข้อมูล แล้วเราจะติดต่อหาท่านเพื่อให้คำปรึกษาเกี่ยวกับงาน
            ต่อเติมหลังคา งานพื้นที่รองบ้าน พยากตกแนตตั้ง หรือ สิ่งชื่อวัสดุ
            ให้กับ คุณ พร้อมประเมินราคาแบบออนไลน์ ไม่มีค่าใช้จ่าย
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="ชื่อ - สกุล"
              required
              className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white text-[#314556] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#314556] focus:border-transparent"
            />

            {/* Phone Input with Country Code */}
            <div className="flex gap-2">
              <div className="relative w-28">
                <select
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                  className="w-full px-3 py-3 rounded-full border border-gray-300 bg-white text-[#314556] focus:outline-none focus:ring-2 focus:ring-[#314556] focus:border-transparent appearance-none"
                >
                  <option value="+66">🇹🇭 +66</option>
                  <option value="+1">🇺🇸 +1</option>
                  <option value="+44">🇬🇧 +44</option>
                  <option value="+91">🇮🇳 +91</option>
                  <option value="+86">🇨🇳 +86</option>
                </select>
              </div>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="เบอร์โทร"
                required
                className="flex-1 px-5 py-3 rounded-full border border-gray-300 bg-white text-[#314556] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#314556] focus:border-transparent"
              />
            </div>

            {/* Email Input */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white text-[#314556] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#314556] focus:border-transparent"
            />

            {/* Service Dropdown */}
            <div className="relative">
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-5 py-3 rounded-full border border-gray-300 bg-white text-[#314556] focus:outline-none focus:ring-2 focus:ring-[#314556] focus:border-transparent appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  สินค้าและบริการที่สนใจ
                </option>
                <option value="ต่อเติมหลังคาโรงรถหรือกันสาด">
                  ต่อเติมหลังคาโรงรถหรือกันสาด
                </option>
                <option value="สิ่งชื่อวัสดุ">สิ่งชื่อวัสดุ</option>
                <option value="ต่อเติมพื้นรองบ้าน">ต่อเติมพื้นรองบ้าน</option>
                <option value="งานออกแบบและติดตั้ง Facade">
                  งานออกแบบและติดตั้ง Facade
                </option>
                <option value="โรงรถโครงสร้างอลูมิเนียม">
                  โรงรถโครงสร้างอลูมิเนียม
                </option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-5 flex items-center">
                <svg
                  className="h-5 w-5 text-[#314556]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Details Textarea */}
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="ที่ตั้งหน้างาน"
              rows={3}
              className="w-full px-5 py-3 rounded-3xl border border-gray-300 bg-white text-[#314556] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#314556] focus:border-transparent resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              className="cursor-pointer w-full bg-[#314556] text-white py-3 rounded-full font-medium hover:bg-[#1e2a35] transition-colors shadow-lg"
            >
              ส่งข้อมูลเพื่อรับคำปรึกษา
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
