import React from "react";
import ProductPageTemplate, {
  ProductPageProps,
} from "../../_components/templates/ProductPageTemplate";
import Navbar from "@/app/_components/Navbar";

const pageData: ProductPageProps = {
  // --- Hero Section ---
  heroImages: [
    "/Alu Port Origin/carousel.webp",
    "/Alu Port Origin/carousel2.webp",
    "/Alu Port Origin/carousel3.webp",
  ],
  productName: "Alu Port Origin",
  heroDescription:
    "ก้าวข้ามข้อจำกัดของพื้นที่ด้วยโรงจอดรถอะลูมิเนียม Alu Port Origin ที่ไดัรับการออกแบบมาเพื่อการติดตั้งโรงจอดรถขนาดเล็กได้อย่างง่ายดายในพื้นที่จำกัด ด้วยตำแหน่งของเสาอะลูมิเนียมที่มีเพียงสองเสาด้านหลัง จึงช่วยเพิ่มพื้นที่ ให้ความรู้สึกโปร่งโล่ง และยังสามารถเพิ่มพื้นที่ใช้สอยให้มากขึ้นอีกด้วย โรงจอดรถ Alu Port Origin ผลิตและนำเข้าจากญี่ปุ่น ซึ่งเป็นประเทศที่มีพื้นที่จำกัด จึงออกแบบโครงสร้างให้สามารถติดตั้งได้ในพื้นที่ขนาดเล็ก ภายในระยะเวลาอันรวดเร็ว พร้อมออกแบบให้มีความสวยงาม ทนทาน เหมาะสมกับพื้นที่โดยรอบ",
  featuresList: [
    "ผลิตและนำเข้าจากญี่ปุ่น 100%",
    "ผลิตจาก Aluminum Anodized ไร้สนิม",
    "ติดตั้งรวดเร็วด้วยระบบ Knockdown",
    "ลดการส่งผ่านความร้อน พร้อมป้องกันรังสี UV 99%",
    "สามารถเลือกสีวัสดุและการจัดวางได้อย่างหลากหลาย",
    "การรับประกันโครงสร้างนาน 10 ปี",
  ],

  // --- Info Section ---
  infoTitle: "Alu Port Origin โรงจอดรถอะลูมิเนียมแบบประหยัดพื้นที่",
  infoDescription:
    "เพิ่มพื้นที่ให้กว้างและหน้าบ้านดูโปร่ง ด้วยโรงจอดรถอะลูมิเนียม Alu Port Origin สไตล์โมเดิร์น ที่ไดัรับการออกแบบมาเพื่อพัฒนาโรงจอดรถสำหรับติดตั้งในพื้นที่จำกัดด้วยตำแหน่งของเสาอะลูมิเนียม ช่วยเพิ่มพื้นที่ทั้งด้านหน้าและด้านหลังโรงจอดรถ ให้ความรู้สึกโปร่งโล่งสบาย ไม่อึดอัด และยังสามารถเพิ่มพื้นที่ใช้สอยให้มากขึ้น โรงจอดรถอะลูมิเนียม Alu Port Origin สามารถเลือกได้ทั้งแบบจอดรถ 1 คัน หรือ 2 คัน โดยไม่กินเนื้อที่บริเวณตัวบ้าน และด้วยดีไซน์โรงจอดรถโมเดิร์นยังช่วยเสริมความสง่างามให้แก่ตัวบ้าน ไม่ทำให้ดูเทอะทะ หรือดูแปลกแยกไปจากดีไซน์บ้าน เหมาะกับผู้ที่มีพื้นที่บ้านจำกัด",
  imageOneCar: "/Alu Port Origin/cartype1.webp",
  imageTwoCar: "/Alu Port Origin/cartype2.webp",

  // --- Features Grid (Dark Section) ---
  featuresTitle: "ความโดดเด่นของ ROOVTECT Aluminum Car Port",
  featuresSubtitle:
    "หลังคาโรงจอดรถอะลูมิเนียมที่มีคุณภาพสูง ด้วยมาตรฐานการผลิตและนำเข้าจากประเทศญี่ปุ่น มีความทนทานต่อสภาพอากาศ ไม่เป็นสนิม มีอายุการใช้งานที่ยาวนาน รับประกันนานถึง 10 ปี ดีไซน์ทันสมัย เหมาะสำหรับบ้านในยุคปัจจุบัน ติดตั้งด้วยทีมงานมืออาชีพที่ผ่านการฝึกอบรมและมีประสบการณ์ในการติดตั้งโครงสร้างโรงจอดรถมาอย่างยาวนาน มั่นใจได้ในความปลอดภัย พร้อมให้คำแนะนำในทุกขั้นตอน ตั้งแต่เริ่มออกแบบไปจนถึงการติดตั้ง หากพบปัญหาใด ๆ เรายินดีแก้ไขให้โดยไม่มีค่าใช้จ่ายเพิ่มเติม",
  featureIcons: [
    {
      icon: "/ALU PORT 7/info1.webp",
      title: "DESIGN & MADE IN JAPAN",
      description: "ผลิตและนำเข้าจากประเทศญี่ปุ่น 100% คุณภาพดีและทนทาน",
    },
    {
      icon: "/ALU PORT 7/info2.webp",
      title: "KNOCKDOWN SYSTEM",
      description: "ติดตั้งรวดเร็วด้วยระบบ Knockdown",
    },
    {
      icon: "/ALU PORT 7/info3.webp",
      title: "SOLID POLYCARBONATE ROOFING",
      description: "แผ่นหลังคา Solid Polycarbonate กรองความร้อนและกัน UV 99%",
    },
    {
      icon: "/ALU PORT 7/info4.webp",
      title: "BUILT-IN RAIN GUTTER",
      description: "ระบบรางน้ำแบบ Built-in ในตัว",
    },
  ],

  // --- Gallery ---
  galleryImages: [
    "/Alu Port Origin/carousel.webp",
    "/Alu Port Origin/carousel2.webp",
    "/Alu Port Origin/carousel3.webp",
    "/Alu Port Origin/cartype1.webp",
    "/Alu Port Origin/cartype2.webp",
  ],

  // --- Related Products (More) ---
  relatedProducts: [
    {
      name: "YKKAP (First Rouge)",
      image: "/ALU PORT 7/carousel1.webp", // Placeholder
      link: "#",
    },
    {
      name: "Alu Port 7",
      image: "/ALU PORT 7/carousel2.webp",
      link: "/products/aluminum-car-port/alu-port-7",
    },
    {
      name: "Alu Port Next",
      image: "/ALU PORT 7/carousel3.webp", // Placeholder
      link: "#",
    },
    {
      name: "Alu Port V",
      image: "/ALU PORT 7/carousel4.webp",
      link: "/products/aluminum-car-port/alu-port-v",
    },
  ],
};

export default function AluPortOriginPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate {...pageData} />
    </>
  );
}
