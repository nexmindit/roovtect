"use client";

import React from "react";
import Image from "next/image";
import Navbar from "../../_components/Navbar";

interface BlogContentBlock {
  type:
    | "paragraph"
    | "heading"
    | "subheading"
    | "list"
    | "image"
    | "quote"
    | "references";
  value: string | string[];
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  fullDate: string;
  author: string;
  featuredImage: string;
  content: BlogContentBlock[];
}

const blogPosts: BlogPost[] = [
  {
    id: "fengshui-kitchen",
    title: "เปิดตำราฮวงจุ้ย ห้องครัวควรอยู่ที่ทิศไหนของบ้าน ?",
    date: "19 ก.ย.",
    fullDate: "19 กันยายน 2025",
    author: "ROOVTECT",
    featuredImage:
      "https://roovtect.com/wp-content/uploads/2025/09/attractive-asian-woman-cooking-kitchen-768x512.jpg", // Placeholder for Image 1
    content: [
      {
        type: "paragraph",
        value:
          "ห้องครัว ไม่ว่าจะจะเป็นครัวไทยหรือครัวฝรั่ง ไม่ได้เป็นเพียงพื้นที่สำหรับเตรียมอาหารเท่านั้น แต่ยังเป็นศูนย์กลางพลังงานที่ส่งผลต่อความสุขและความมั่นคงของคนในครอบครัว การจัดวางฮวงจุ้ยห้องครัวอย่างเหมาะสมสามารถช่วยเสริมโชคลาภ ดึงดูดทรัพย์ และสร้างความสมดุลในชีวิตประจำวัน ดังนั้น การเลือกตำแหน่ง การจัดวางอุปกรณ์ และการใช้สีสันให้สอดคล้องกับหลักฮวงจุ้ยจึงเป็นเรื่องสำคัญที่ไม่ควรมองข้าม",
      },
      {
        type: "heading",
        value: "ห้องครัวควรอยู่ที่ทิศไหนของบ้าน ?",
      },
      {
        type: "paragraph",
        value:
          "ก่อนจะจัดวางเตาไฟ เครื่องใช้ไฟฟ้า หรืออุปกรณ์เฟอร์นิเจอร์อื่น ๆ ตามฮวงจุ้ยห้องครัว สิ่งแรกที่เจ้าของบ้านต้องพิจารณา คือ ห้องครัวควรอยู่ที่ทิศไหนของบ้าน เพื่อเสริมความเป็นสิริมงคลและส่งผลดีต่อดวงชะตาของผู้อยู่อาศัยทุกคน อีกทั้งห้องครัวยังเปรียบเสมือนคลังสมบัติของบ้านที่ต้องถูกจัดวางในทิศทางที่ถูกตัองเพื่อกักเก็บพลังงานที่ดีไว้ด้วย",
      },
      {
        type: "paragraph",
        value:
          "สำหรับทิศที่เหมาะสมในการทำห้องครัว ได้แก่ ทิศใต้และทิศตะวันออกเฉียงใต้ เนื่องจากเป็นทิศของธาตุไฟ ซึ่งสอดคล้องกับพลังงานความร้อนจากการทำอาหาร ช่วยเสริมโชคลาภและความมั่นคงทางการเงิน รวมถึงเสริมความอบอุ่นและพลังงานชีวิตให้ครอบครัว นอกจากนี้ การวางห้องครัวไว้ทางทิศตะวันออกยังช่วยให้แสงแดดยามเช้าสาดส่องเข้ามา เป็นการเติมพลังงานบวกและฆ่าเชื้อโรคตามธรรมชาติอีกด้วย",
      },
      {
        type: "heading",
        value: "ห้องครัวไม่ควรอยู่ทิศใด ?",
      },
      {
        type: "paragraph",
        value:
          "ตามหลักฮวงจุ้ย ห้องครัวไม่ควรอยู่ที่ทิศเหนือ ทิศตะวันตก และทิศตะวันตกเฉียงเหนือ เพราะทิศเหนือเป็นทิศของธาตุน้ำ ซึ่งขัดแย้งกับธาตุไฟของห้องครัว ทำให้พลังงานไม่สมดุล ส่วนทิศตะวันตกและทิศตะวันตกเฉียงเหนือเป็นทิศของธาตุโลหะ หากวางห้องครัวไว้ตำแหน่งนี้จะส่งผลเสียต่อสุขภาพและความสัมพันธ์ในบ้าน",
      },
      {
        type: "heading",
        value: "ตำแหน่งห้องครัวที่เหมาะสม",
      },
      {
        type: "paragraph",
        value:
          "ตำแหน่งที่ดีที่สุดสำหรับห้องครัวตามหลักฮวงจุ้ย คือบริเวณด้านข้างหรือด้านหลังของบ้าน เพราะเปรียบเสมือนการเก็บซ่อนทรัพย์สินไว้ในที่ลับตา ทำให้เงินทองไหลเข้าและคงอยู่ภายในบ้าน",
      },
      {
        type: "heading",
        value: "ตำแหน่งห้องครัวที่ต้องหลีกเลี่ยง",
      },
      {
        type: "paragraph",
        value:
          "หลีกเลี่ยงการวางห้องครัวตรงกับประตูหลัก เนื่องจากเชื่อว่าจะทำให้พลังงานดีและโชคลาภไหลออกเร็วเกินไป ควรเลือกพื้นที่ที่อากาศถ่ายเทสะดวกและมีแสงสว่างจากธรรมชาติส่องถึง เพื่อให้พลังงานบวกไหลเวียนได้อย่างเต็มที่ และไม่ควรขวางทางเดินของพลังงานหลักภายในบ้าน",
      },
      {
        type: "heading",
        value: "เปิดตำราฮวงจุ้ยห้องครัว ทำตามนี้ เสริมชะตาชีวิตทั้งครอบครัว",
      },
      {
        type: "paragraph",
        value:
          "เมื่อได้ตำแหน่งที่เหมาะสมแล้ว ก็มาถึงการจัดวางองค์ประกอบต่าง ๆ ภายในห้องครัว ซึ่งองค์ประกอบทั้งหมดก็มีความสำคัญไม่แพ้กัน เพราะทุกชิ้นล้วนมีพลังงานเป็นของตัวเอง โดยฮวงจุ้ยห้องครัวที่ควรให้ความสำคัญมีดังนี้",
      },
      {
        type: "subheading",
        value: "1. ตำแหน่งวางเตาไฟ",
      },
      {
        type: "paragraph",
        value:
          "เตาไฟ คือสัญลักษณ์ของความมั่งคั่งและสุขภาพ รวมทั้งเป็นตัวแทนของธาตุไฟ หลักฮวงจุ้ยห้องครัวระบุว่าตำแหน่งเตาไฟห้ามอยู่ตรงข้าม หรือติดกับอ่างล้างจานและตู้เย็นโดยเด็ดขาด ควรมีระยะห่างที่เหมาะสมเพื่อไม่ให้ธาตุไฟและธาตุน้ำปะทะกัน นอกจากนี้ ควรวางเตาไฟชิดผนังเพื่อสร้างความมั่นคงในครอบครัว และไม่ควรวางไว้กลางห้องหรือใต้คาน เพราะจะกดทับพลังงานดีในบ้าน",
      },
      {
        type: "subheading",
        value: "2. ตำแหน่งวางตู้เย็น",
      },
      {
        type: "paragraph",
        value:
          "ตู้เย็นเป็นตัวแทนของความอุดมสมบูรณ์และความเย็น ไม่ควรวางตู้เย็นติดกับเตาไฟ ควรมีพื้นที่ห่างกันอย่างน้อย 1 เมตร และควรทำความสะอาดอยู่เสมอเพื่อคงพลังงานที่ดี ปรับสมดุลพลังงานในบ้าน และส่งเสริมความมั่นคงทางการเงิน",
      },
      {
        type: "subheading",
        value: "3. โทนสีที่เหมาะสมและโทนสีที่ควรหลีกเลี่ยง",
      },
      {
        type: "list",
        value: [
          "โทนสีที่เหมาะสม : สีที่ให้ความรู้สึกสบายตา เช่น สีขาว สีครีม สีฟ้าอ่อน หรือสีเขียวอ่อน ซึ่งเป็นสีที่ช่วยสร้างสมดุลให้แก่ธาตุไฟในห้องครัว",
          "โทนสีที่ควรหลีกเลี่ยง : สีดำหรือสีเข้มเกินไป เพราะทำให้พลังงานในบ้านติดขัดและลดความสดชื่น",
        ],
      },
      {
        type: "subheading",
        value: "4. พื้นห้องครัวและห้องรับประทานอาหารต้องอยู่ในระดับเดียวกัน",
      },
      {
        type: "paragraph",
        value:
          "การที่ห้องครัวและห้องรับประทานอาหารมีระดับพื้นที่เท่ากัน จะช่วยให้พลังงานในบ้านไหลเวียนได้อย่างราบรื่น ไม่ติดขัด และยังช่วยส่งเสริมความสัมพันธ์ที่ดีของคนในบ้านอีกด้วย",
      },
      {
        type: "subheading",
        value: "5. ใช้เฟอร์นิเจอร์โทนไม้ เสริมสมดุลพลังงานธรรมชาติ",
      },
      {
        type: "paragraph",
        value:
          "วัสดุจากธรรมชาติอย่างไม้ จะช่วยสร้างสมดุลให้แก่ธาตุไฟในห้องครัวได้อย่างดีเยี่ยม ลองเลือกใช้เคาน์เตอร์ โต๊ะ หรือชั้นวางของที่ทำจากไม้ จะช่วยให้ห้องครัวดูอบอุ่นและเป็นมงคลมากยิ่งขึ้น",
      },
      {
        type: "image",
        value:
          "https://roovtect.com/wp-content/uploads/2025/09/%E0%B8%81%E0%B8%B2%E0%B8%A3%E0%B8%95%E0%B8%B4%E0%B8%94%E0%B8%95%E0%B8%B1%E0%B9%89%E0%B8%87%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%AA%E0%B8%B2%E0%B8%94%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B9%81%E0%B8%9A%E0%B8%9A%E0%B8%96%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B9%82%E0%B8%94%E0%B8%A2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%82%E0%B8%84%E0%B8%A3%E0%B8%87%E0%B8%AA%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%87%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%87%E0%B8%81-768x512.jpg", // Placeholder for Compass Image
      },
      {
        type: "heading",
        value:
          "เคล็ดลับเสริมดวงด้วยห้องครัว เรียกเงินทอง ดึงดูดสิ่งดี ๆ เข้าบ้าน",
      },
      {
        type: "paragraph",
        value:
          "นอกจากตำแหน่งและการจัดวางเฟอร์นิเจอร์ตามหลักฮวงจุ้ยห้องครัวแล้ว การดูแลรักษาสภาพแวดล้อมภายในห้องครัวก็เป็นสิ่งสำคัญที่จะช่วยดึงดูดพลังงานบวกและโชคลาภมาสู่บ้านของคุณได้อย่างต่อเนื่อง และนี่คือ 3 เคล็ดลับเสริมดวงด้วยห้องครัวที่เจ้าของบ้านทุกคนไม่ควรมองข้าม",
      },
      {
        type: "subheading",
        value: "1. ดูแลความสะอาดและจัดห้องครัวให้เป็นระเบียบอยู่เสมอ",
      },
      {
        type: "paragraph",
        value:
          "ห้องครัวที่สะอาดสะอ้านและเป็นระเบียบจะช่วยให้พลังงานไหลเวียนได้อย่างคล่องตัว ไม่ติดขัด หากห้องครัวรกรุงรังหรือมีของที่ไม่ได้ใช้ จะเป็นการปิดกั้นโชคลาภไม่ให้เข้ามา รวมทั้งทำให้คนในบ้านสุขภาพแย่ลง",
      },
      {
        type: "subheading",
        value: "2. เปิดหน้าต่างให้แสงสาดเข้ามาในห้องครัวเป็นประจำ",
      },
      {
        type: "paragraph",
        value:
          "แสงสว่างจากธรรมชาติคือพลังงานที่ดีที่สุด ควรเปิดหน้าต่างให้แสงแดดส่องถึงห้องครัวเป็นประจำ จะช่วยไล่พลังงานลบและนำพาพลังงานบวกเข้ามาสู่พื้นที่ในบ้านได้ดี ทำให้พลังงานของธาตุไฟและธาตุน้ำสมดุลยิ่งขึ้น",
      },
      {
        type: "subheading",
        value: "3. เลือกใช้ภาชนะตามหลักฮวงจุ้ย",
      },
      {
        type: "paragraph",
        value:
          "เลือกใช้งานชามที่มีรูปทรงกลม เพราะเป็นสัญลักษณ์ของความอุดมสมบูรณ์และความเป็นปึกแผ่น และควรเป็นสีขาว หรือสีอ่อน เพื่อเสริมความราบรื่นของพลังงาน นอกจากนี้ การวางผลไม้สดสีสันสวยงาม เช่น ส้มหรือแอปเปิลไว้บนโต๊ะอาหาร ยังช่วยดึงดูดพลังงานแห่งความมั่งคั่งเข้ามาในบ้านอย่างไม่ขาดสายได้อีกทางหนึ่ง",
      },
      {
        type: "paragraph",
        value:
          "เสริมพลังฮวงจุ้ยให้ครัวของคุณ พร้อมเรียกโชคลาภและดึงดูดทรัพย์สินเงินทอง ด้วยบริการงานต่อเติมห้องครัวจาก ROOVTECT มีทีมงานมืออาชีพดูแลตั้งแต่การออกแบบไปจนถึงติดตั้งทุกขั้นตอน รับประกันคุณภาพและฟังก์ชันครบครัน จะต่อเติมครัวหลังบ้านในราคาที่เหมาะสม หรือปรับปรุงครัวเก่าให้ใช้งานได้เต็มประสิทธิภาพมากยิ่งขึ้น เราก็พร้อมให้คำแนะนำครบวงจร สอบถามรายละเอียดและขอคำปรึกษาได้ที่เบอร์ 02-096-3464 หรือ LINE: @roovtect",
      },
      {
        type: "references",
        value: [
          "จัดฮวงจุ้ยห้องครัวในปี 2568 อย่างไรดี เสริมโชค เพิ่มความมั่งคั่งอยู่แล้วปัง!. สืบค้นเมื่อวันที่ 5 กันยายน 2568 จาก https://www.ktc.co.th/article/lifestyle/home-decoration/feng-shui-kitchen",
          "ฮวงจุ้ยห้องครัวที่ดี 8 ลักษณะห้องครัวและการจัดวางเตาไฟที่ถูกต้องหลักฮวงจุ้ย. สืบค้นเมื่อวันที่ 5 กันยายน 2568 จาก https://www.ddproperty.com/คู่มือซื้อขาย/ศาสตร์แห่งฮวงจุ้ย-ลักษณะห้องครัวที่ดีสำหรับที่อยู่อาศัย-15655",
          "การวางฮวงจุ้ยห้องครัว สมดุลของธาตุไฟและธาตุน้ำ ให้อยู่เย็นเป็นสุข. สืบค้นเมื่อวันที่ 5 กันยายน 2568 จาก https://www.condonewb.com/lifestyle/1639/การวางฮวงจุ้ยห้องครัว-สมดุลของธาตุไฟและธาตุน้ำ-ให้อยู่เย็นเป็นสุข",
        ],
      },
    ],
  },
];

export default function BlogPostPage() {
  const post = blogPosts[0];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#EAE8E4] font-sans">
        <main className="max-w-4xl mx-auto px-4 md:px-8 py-16">
          {/* Header Section */}
          <div className="text-center mb-8">
            <h1 className="text-2xl md:text-3xl font-bold text-[#314556] mb-4 leading-relaxed">
              {post.title}
            </h1>
            <div className="text-xs font-bold text-gray-500 uppercase tracking-wide">
              POSTED ON {post.fullDate} BY {post.author}
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full aspect-video mb-12">
            {/* Date Badge */}
            <div className="absolute top-8 left-0 bg-white border border-[#314556] text-[#314556] w-14 h-14 flex flex-col items-center justify-center z-10">
              <span className="text-xl font-bold leading-none">
                {post.date.split(" ")[0]}
              </span>
              <span className="text-[10px] font-medium">
                {post.date.split(" ")[1]}
              </span>
            </div>

            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              objectFit="cover"
              className="bg-gray-200"
              priority
            />
          </div>

          {/* Content Section */}
          <article className="space-y-8 text-[#314556]">
            {post.content.map((block, index) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2
                      key={index}
                      className="text-xl md:text-2xl font-bold mt-8 mb-4"
                    >
                      {block.value as string}
                    </h2>
                  );
                case "subheading":
                  return (
                    <h3 key={index} className="text-lg font-bold mt-6 mb-2">
                      {block.value as string}
                    </h3>
                  );
                case "paragraph":
                  return (
                    <p
                      key={index}
                      className="text-base leading-relaxed text-gray-700"
                    >
                      {block.value as string}
                    </p>
                  );
                case "list":
                  return (
                    <ul
                      key={index}
                      className="list-disc pl-5 space-y-2 text-gray-700"
                    >
                      {(block.value as string[]).map((item, i) => (
                        <li key={i}>
                          <span className="font-bold text-[#314556]">
                            {item.split(" :")[0]}
                          </span>
                          {item.includes(" :")
                            ? ` : ${item.split(" :")[1]}`
                            : ""}
                        </li>
                      ))}
                    </ul>
                  );
                case "image":
                  return (
                    <div
                      key={index}
                      className="relative w-full aspect-video my-8"
                    >
                      <Image
                        src={block.value as string}
                        alt="Content Image"
                        fill
                        objectFit="contain"
                      />
                    </div>
                  );
                case "references":
                  return (
                    <div
                      key={index}
                      className="mt-12 pt-8 border-t border-gray-300"
                    >
                      <h4 className="font-bold mb-4">ข้อมูลอ้างอิง</h4>
                      <ol className="list-decimal pl-5 space-y-2 text-sm text-gray-600">
                        {(block.value as string[]).map((ref, i) => (
                          <li key={i} className="wrap-break-word">
                            {ref.split("http")[0]}
                            {ref.includes("http") && (
                              <a
                                href={`http${ref.split("http")[1]}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline hover:text-[#314556]"
                              >
                                http{ref.split("http")[1]}
                              </a>
                            )}
                          </li>
                        ))}
                      </ol>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </article>

          {/* Author Bio Section */}
          <div className="mt-16 flex items-center gap-6 p-8 bg-[#EAE8E4] border-t border-b border-gray-300/50">
            <div className="shrink-0 w-20 h-20 rounded-full bg-white p-1 overflow-hidden relative">
              <Image
                src="/logo-icon-navy.png"
                alt="ROOVTECT Logo"
                fill
                objectFit="contain"
                className="p-2"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold text-[#314556] uppercase mb-2">
                ROOVTECT
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                บริการต่อเติมหลังคาหน้าบ้าน รับทำหลังคาโรงรถ และรับติดตั้งกันสาด
                ราคาคุณภาพ จากบริษัท ROOVTECT
                ภายใต้การรวมตัวของกลุ่มสถาปนิกรุ่นใหม่
                ระดมความคิดเพื่อเปลี่ยนโฉมอุตสาหกรรมเหล็กกล้าให้ก้าวหน้าไปอีกขั้น
                โดยการนำความสวยงามของดีไซน์ที่ทันสมัยและมีเอกลักษณ์
                มารวมเข้ากับเทคโนโลยีที่ก้าวหน้าอย่างลงตัว
                เสริมให้การใช้งานของหลังคาหรือกันสาดมีคุณภาพมากยิ่งขึ้น
              </p>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
