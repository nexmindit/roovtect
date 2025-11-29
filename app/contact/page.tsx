import Image from "next/image";
import Link from "next/link";
import Navbar from "../_components/Navbar";

const contactChannels = [
  {
    title: "LINE Official",
    description: "แอดไลน์ส่งรูปหน้างาน หรือสอบถามเบื้องต้น",
    button: "แอดไลน์ @PowerKing",
    link: "https://lin.ee/NHJK6nl",
    icon: (
      <svg className="h-8 w-8 text-[#06C755]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
      </svg>
    ),
    variant: "primary",
  },
  {
    title: "Call Center",
    description: "ติดต่อสอบถามด่วน ช่วงเวลา 08.00 - 18.00 น.",
    button: "โทร 02-096-3464",
    link: "tel:020963464",
    icon: (
      <svg className="h-8 w-8 text-[#1f2c38]" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    variant: "outline",
  },
  {
    title: "Project Submission",
    description: "สำหรับส่งไฟล์ CAD, PDF หรือแบบดีไซน์เพื่อประเมินราคา",
    button: "Email: contact@powerking.com",
    link: "mailto:contact@powerking.com",
    icon: (
      <svg className="h-8 w-8 text-[#1f2c38]" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 8l8.16 5.44a2 2 0 002.28 0L21 8m-16 11h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          stroke="currentColor"
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    variant: "ghost",
  },
];

const trustBadges = [
  "✅ Registered Company: จดทะเบียนนิติบุคคลถูกต้อง ออกใบกำกับภาษีได้",
  "✅ Real Workshop: มีโรงงานประกอบชิ้นงานจริง เข้าเยี่ยมชมได้ (นัดหมายล่วงหน้า)",
  "✅ Professional Team: ทีมช่างประจำ ไม่ทิ้งงาน",
];

const inquiryTopics = [
  { label: "งานหลังคา", value: "roofing" },
  { label: "งานโครงสร้าง", value: "structure" },
  { label: "เฟอร์นิเจอร์", value: "furniture" },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-[#f7f7f8] text-[#1f1f25]">
        <section className="relative py-24 px-4 sm:px-6 bg-white overflow-hidden">
          <div className="relative max-w-4xl mx-auto text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[#b0b7be]">
              Contact Power King
            </p>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">Let's Build Your Vision</h1>
            <p className="text-lg text-[#4b5a66]">
              ปรึกษาเรื่องงานโครงสร้าง หรือส่งแบบประเมินราคา... เราพร้อมดูแลคุณ
            </p>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 bg-white">
          <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
            {contactChannels.map((channel) => (
              <div key={channel.title} className="border border-[#e2e6ea] rounded-3xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  {channel.icon}
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[#8f99a2]">
                      {channel.title}
                    </p>
                    <p className="text-sm text-[#4b5a66]">{channel.description}</p>
                  </div>
                </div>
                <Link
                  href={channel.link}
                  className={`block text-center rounded-full px-4 py-2 text-sm font-semibold ${channel.variant === "primary"
                      ? "bg-[#06C755] text-white"
                      : channel.variant === "outline"
                        ? "border border-[#1f2c38] text-[#1f2c38]"
                        : "border border-[#d5d9dc] text-[#4b5a66]"
                    }`}
                >
                  {channel.button}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 bg-white rounded-[32px] p-8 shadow-sm border border-[#e4e7eb]">
              <p className="text-xs uppercase tracking-[0.3em] text-[#8f99a2]">
                Power King Office & Workshop
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold">
                เลขที่ xxx/xx ถนน... แขวง... เขต... กทม. xxxxx
              </h2>
              <div className="space-y-3 text-sm text-[#4b5a66]">
                {trustBadges.map((badge) => (
                  <p key={badge}>{badge}</p>
                ))}
              </div>
              <p className="text-sm text-[#4b5a66]">มีที่จอดรถสำหรับลูกค้าที่เข้ามาติดต่อ</p>
            </div>
            <div className="space-y-4">
              <iframe
                title="Power King Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2239!2d100.467!3d13.6587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d603531111111%3APowerKing!5e0!3m2!1sth!2sth!4v0000000000"
                width="100%"
                height="380"
                allowFullScreen
                loading="lazy"
                className="rounded-[32px] border-0 shadow"
              />
              <p className="text-sm text-[#4b5a66] text-center">
                มีที่จอดรถสำหรับลูกค้าที่เข้ามาติดต่อ
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
