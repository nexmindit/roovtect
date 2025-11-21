import React from "react";
import ProductPageTemplate, {
  ProductPageProps,
} from "../../_components/templates/ProductPageTemplate";
import Navbar from "@/app/_components/Navbar";

const pageData: ProductPageProps = {
  // --- Hero Section ---
  heroImages: [
    "/YKK AP/carousel.webp",
    "/YKK AP/carousel2.webp",
    "/YKK AP/carousel3.webp",
  ],
  productName: "ROOVTECT Aluminum Car Port โรงจอดรถขนาดเล็ก จาก YKK AP",
  heroDescription:
    "เติมเต็มความสมบูรณ์แบบให้แก่บ้านของคุณ ด้วยโรงจอดรถอะลูมิเนียม จาก YKK AP (First Rouge) ดีไซน์เรียบง่าย กลมกลืนกับบ้านทุกสไตล์ ติดตั้งได้ในพื้นที่ขนาดเล็ก ออกแบบให้มีเสาน้อย จึงทำให้ดูโปร่ง และมีพื้นที่กว้างขวาง ไม่อึดอัด ด้วยการคำนึงถึงคุณภาพของวัสดุหลังคาโรงจอดรถขนาดเล็ก และโครงสร้างอะลูมิเนียมเป็นหลัก เพื่อให้มีความทนทาน แข็งแรง ใช้งานได้ยาวนาน การออกแบบที่สามารถรองรับได้ทุกพื้นที่ จนไปถึงการใช้งานที่ตอบโจทย์ทุกความต้องการ",
  featuresList: [
    "ผลิตและนำเข้าจากญี่ปุ่น 100%",
    "ผลิตจาก Aluminum Anodized ไร้สนิม",
    "ติดตั้งรวดเร็วด้วยระบบ Knockdown",
    "ลดการส่งผ่านความร้อน พร้อมป้องกันรังสี UV 99%",
    "สามารถเลือกสีวัสดุและการจัดวางได้อย่างหลากหลาย",
    "การรับประกันโครงสร้างนาน 10 ปี",
  ],

  // --- Info Section ---
  infoTitle: "YKK AP (First Rouge) ดีไซน์ทันสมัย นำเข้าจากญี่ปุ่น",
  infoDescription:
    "ตอบโจทย์ความต้องการของผู้ที่ต้องการโรงจอดรถขนาดเล็ก ที่มีความสวยงาม แข็งแรง และทนทาน สามารถใช้งานได้อย่างยาวนาน ไม่เป็นสนิม ติดตั้งได้ง่าย ด้วยการใช้โครงสร้างแบบ Knockdown โรงจอดรถขนาดเล็กจาก YKK AP เหมาะสำหรับการใช้งานในพื้นที่ขนาดเล็ก สามารถจอดรถยนต์ได้ 1 คัน ช่วยปกป้องรถยนต์แสนรักจากแสงแดดและสายฝนได้อย่างมีประสิทธิภาพ ไม่ทำให้สีซีดจางเร็ว",
  imageOneCar: "/YKK AP/cartype1.webp",
  imageTwoCar: "/YKK AP/cartype2.webp", // Using the second image for the 2nd slot as requested, even though it's only 1 car type logic

  // --- Features Grid (Dark Section) ---
  featuresTitle:
    "ความโดดเด่นของ ROOVTECT Aluminum Car Port โรงจอดรถอะลูมิเนียมขนาดเล็ก",
  featuresSubtitle:
    "โรงจอดรถขนาดเล็กโครงสร้างอะลูมิเนียม เป็นโครงสร้างที่เหมาะสำหรับบ้านพักอาศัยหรืออาคารสำนักงานที่มีพื้นที่ค่อนข้างจำกัด หรือต้องการสร้างโรงจอดรถสำหรับรถยนต์ 1 คัน ใช้พื้นที่สำหรับโครงสร้างน้อย ติดตั้งเสาเพียงแค่ 2 เสาด้านข้าง จึงไม่ทำให้ดูทึบ หรืออึดอัด โครงสร้างและวัสดุทั้งหมดผลิตและนำเข้าจากประเทศญี่ปุ่น ใช้เทคโนโลยีและนวัตกรรมระดับสูงในการผลิต จึงมีความแข็งแรง ต้านทานต่อสภาพอากาศได้ดีเยี่ยม ไม่เป็นสนิม ที่สำคัญคือ น้ำหนักเบา ช่วยกรองความร้อนและรังสียูวีได้ มั่นใจได้ถึงมาตรฐานความปลอดภัย เพราะติดตั้งโดยเจ้าหน้าที่ของ ROOVTECT ที่มีความเชี่ยวชาญเรื่องการติดตั้งโรงจอดรถอะลูมิเนียมโดยเฉพาะ รับประกันโครงสร้างยาวนาน 10 ปี หากสนใจสามารถขอคำแนะนำเพิ่มเติมจากเจ้าหน้าที่ได้เลย ปกป้องรถยนต์คันโปรด ด้วยโรงจอดรถขนาดเล็กโครงสร้างอะลูมิเนียมจาก ROOVTECT ดีไซน์สวยงาม ประหยัดพื้นที่ ใช้งานได้อย่างยาวนาน ไม่มีปัญหาจุกจิกกวนใจ",
  featureIcons: [
    {
      icon: "/ALU PORT 7/info1.webp",
      title: "DESIGN & MADE IN JAPAN",
      description: "ผลิตและนำเข้าจากประเทศญี่ปุ่น 100%",
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
    "/YKK AP/carousel.webp",
    "/YKK AP/carousel2.webp",
    "/YKK AP/carousel3.webp",
    "/YKK AP/cartype1.webp",
    "/YKK AP/cartype2.webp",
  ],

  // --- Related Products (More) ---
  relatedProducts: [
    {
      name: "Alu Port 7",
      image: "/ALU PORT 7/carousel1.webp",
      link: "/products/aluminum-car-port/alu-port-7",
    },
    {
      name: "Alu Port Next",
      image: "/ALU PORT 7/carousel2.webp",
      link: "/products/aluminum-car-port/alu-port-next",
    },
    {
      name: "Alu Port Origin",
      image: "/ALU PORT 7/carousel3.webp",
      link: "/products/aluminum-car-port/alu-port-origin",
    },
    {
      name: "Alu Port V",
      image: "/ALU PORT 7/carousel4.webp",
      link: "/products/aluminum-car-port/alu-port-v",
    },
  ],
};

export default function YKKAPPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate {...pageData} />
    </>
  );
}
