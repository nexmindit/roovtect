import React from "react";
import Navbar from "../_components/Navbar";
import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  const LocationSvg = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
      />
    </svg>
  );

  const PhoneSvg = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );

  const EmailSvg = () => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );

  const FacebookSvg = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z" />
    </svg>
  );

  const LineSvg = () => (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
    </svg>
  );

  const IconWrapper = ({ children }: { children: React.ReactNode }) => (
    <div className="flex-shrink-0 w-9 h-9 bg-[#314556] rounded-full flex items-center justify-center text-white">
      {children}
    </div>
  );

  const contactInfo = [
    {
      icon: (
        <IconWrapper>
          <LocationSvg />
        </IconWrapper>
      ),
      text: "488/22 หมู่ 1 ถนนปู่เจ้าสมิงพราย ต.สำโรงใต้ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10130",
      href: "https://maps.google.com/?q=488/22 หมู่ 1 ถนนปู่เจ้าสมิงพราย ต.สำโรงใต้ อ.เมืองสมุทรปราการ จ.สมุทรปราการ 10130",
    },
    {
      icon: (
        <IconWrapper>
          <PhoneSvg />
        </IconWrapper>
      ),
      text: "02-096-3464",
      href: "tel:020963464",
    },
    {
      icon: (
        <IconWrapper>
          <EmailSvg />
        </IconWrapper>
      ),
      text: "contact@roovtect.com",
      href: "mailto:contact@roovtect.com",
    },
    {
      icon: (
        <IconWrapper>
          <FacebookSvg />
        </IconWrapper>
      ),
      text: "roovtect",
      href: "https://facebook.com/roovtect",
    },
    {
      icon: (
        <IconWrapper>
          <LineSvg />
        </IconWrapper>
      ),
      text: "@roovtect",
      href: "https://line.me/ti/p/~@roovtect",
    },
  ];
  return (
    <>
      <Navbar />
      <footer className="w-full bg-[#F3F4F6] py-16 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-2xl font-semibold text-[#314556] mb-16 text-center">
            ช่องทางการติดต่อ ROOVTECT สำหรับบริการต่อเติมโรงรถ กันสาด และ Facade
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center">
            <div className="flex justify-center items-center">
              <Image
                src="/logo-full.png"
                alt="Roovtect Inventive Prefab Logo"
                width={450}
                height={96}
                className="object-contain"
              />
            </div>

            <div className="w-full">
              <div className="space-y-7">
                {contactInfo.map((item) => (
                  <a
                    key={item.text}
                    href={item.href || "#"}
                    target={item.href ? "_blank" : undefined}
                    rel={item.href ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4 group cursor-pointer"
                  >
                    {item.icon}
                    <span className="text-lg md:text-xl text-gray-700 group-hover:text-black transition-colors duration-300">
                      {item.text}
                    </span>
                  </a>
                ))}
              </div>

              <div className="mt-10">
                <Link
                  href="/consultation"
                  className="inline-flex items-center text-white bg-[#314556] px-8 py-3 rounded-full font-medium transition-colors hover:bg-[#1e2a35]"
                >
                  ปรึกษาฟรี ›
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Contact;
