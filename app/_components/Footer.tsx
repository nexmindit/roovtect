import Link from "next/link";
import Image from "next/image";
import ConsultationButton from "./ConsultationButton";

export default function Footer() {
  return (
    <footer className="bg-[#314556] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center -ml-4 mb-4">
              <Image
                src="/roovtect_logo.png"
                alt="Roovtect Logo"
                width={120}
                height={48}
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <h2 className="text-xl font-semibold mb-3">
              ROOVTECT by SASICHAVIKITCO.,LTD.
            </h2>
            <p className="text-gray-300 leading-relaxed">
              488/22 หมู่ 1 ถนนบึงตาฉิง พราย ต.สีโรงได อ.เมืองอุบลประการ <br />
              จ.อุบลประการ 10130
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Call us</h3>
            <p className="text-gray-300 mb-6">02-096-3464</p>

            <h3 className="text-lg font-semibold mb-4">Email us</h3>
            <a
              href="mailto:contact@roovtect.com"
              className="text-gray-300 hover:text-white transition-colors"
            >
              contact@roovtect.com
            </a>
          </div>

          {/* Contact & Actions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact us</h3>
            <div className="flex gap-4 mb-6">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6 text-[#3d4f5e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* LINE */}
              <a
                href="https://line.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="LINE"
              >
                <svg
                  className="w-6 h-6 text-[#3d4f5e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
                </svg>
              </a>

              {/* Phone */}
              <a
                href="tel:020963464"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Phone"
              >
                <svg
                  className="w-6 h-6 text-[#3d4f5e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@roovtect.com"
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-200 transition-colors"
                aria-label="Email"
              >
                <svg
                  className="w-6 h-6 text-[#3d4f5e]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/quote"
                className="px-6 py-2.5 bg-white text-[#3d4f5e] rounded-full font-medium hover:bg-gray-100 transition-colors text-center"
              >
                Get Quote
              </Link>
              <ConsultationButton variant="white" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[#4d5f6e] bg-[#253644]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-300 text-sm">
            ROOVTECT © by Sasichavikit Co., Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
