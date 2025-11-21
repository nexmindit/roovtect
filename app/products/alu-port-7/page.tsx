import React from "react";
import ProductPageTemplate, {
  ProductPageProps,
} from "../../_components/templates/ProductPageTemplate";
import Navbar from "@/app/_components/Navbar";
// Make sure the import path above matches where you saved the template

const pageData: ProductPageProps = {
  // --- Hero Section ---
  heroImages: [
    "/ALU PORT 7/carousel1.webp",
    "/ALU PORT 7/carousel2.webp",
    "/ALU PORT 7/carousel3.webp",
    "/ALU PORT 7/carousel4.webp",
    "/ALU PORT 7/carousel5.webp",
  ],
  productName: "Alu Port 7",
  heroDescription:
    "ยกระดับพื้นที้ส่วนตัวให้เป็นมากกว่าแค่ที่จอดรถธรรมดา ด้วยโรงจอดรถโครงสร้างอลูมิเนียมคุณภาพสูง Alu Port 7 ที่ออกแบบมาอย่างพิถีพิถัน มอบประสบการณ์เหนือระดับสำหรับคุณและยานพาหนะด้วยดีไซน์ที่ทันสมัย การเลือกใช้วัสดุเสาอลูมิเนียมที่เข้ากันได้กับบ้านหลากหลายสไตล์ผสมผสานความงามและคุณภาพของโครงสร้างอลูมิเนียมที่เข้ากันอย่างลงตัว",
  featuresList: [
    "ผลิตและนำเข้าจากญี่ปุ่น 100%",
    "ผลิตจาก Aluminum Anodized ไร้สนิม",
    "ติดตั้งรวดเร็วด้วยระบบ Knockdown",
    "ลดการส่งผ่านความร้อนพร้อมป้องกันรังสี UV 99%",
    "สามารถเลือกสีวัสดุและการจัดวางได้อย่างหลากหลาย",
    "การรับประกันโครงสร้างนาน 10 ปี",
  ],

  // --- Info Section ---
  infoTitle: "Alu Port 7",
  infoDescription:
    "ยกระดับพื้นที่ส่วนตัวให้เป็นมากกว่าแค่ที่จอดรถธรรมดา ด้วยโรงจอดรถโครงสร้างอลูมิเนียมคุณภาพสูง Alu Port 7 ที่ออกแบบมาอย่างพิถีพิถัน มอบประสบการณ์เหนือระดับสำหรับคุณและยานพาหนะด้วยดีไซน์ที่ทันสมัย การเลือกใช้วัสดุเสาอลูมิเนียมที่เข้ากันได้กับบ้านหลากหลายสไตล์ ผสมผสานความงามและคุณภาพของโครงสร้างอลูมิเนียมที่เข้ากันอย่างลงตัว",
  imageOneCar: "/ALU PORT 7/cartype1.webp",
  imageTwoCar: "/ALU PORT 7/cartype2.webp",

  // --- Features Grid (Dark Section) ---
  featuresTitle: "ROOVTECT Aluminum Car Port",
  featuresSubtitle:
    "หลังคาโรงรถโครงสร้างอลูมิเนียม ผลิตและนำเข้าจากประเทศญี่ปุ่น ติดตั้งโดยทีมงานมืออาชีพ พร้อมบริการหลังการขาย รับประกันโครงสร้างนาน 10 ปี",
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
    "/ALU PORT 7/carousel1.webp",
    "/ALU PORT 7/carousel2.webp",
    "/ALU PORT 7/carousel3.webp",
    "/ALU PORT 7/carousel4.webp",
    "/ALU PORT 7/carousel5.webp",
  ],

  // --- Related Products (More) ---
  // Using carousel images as placeholders since specific related product images weren't provided
  relatedProducts: [
    {
      name: "YKKAP (First Rouge)",
      image: "/ALU PORT 7/carousel1.webp",
      link: "#",
    },
    {
      name: "Alu Port Next",
      image: "/ALU PORT 7/carousel2.webp",
      link: "#",
    },
    {
      name: "Alu Port Origin",
      image: "/ALU PORT 7/carousel3.webp",
      link: "#",
    },
    {
      name: "Alu Port V",
      image: "/ALU PORT 7/carousel4.webp",
      link: "#",
    },
  ],
};

export default function AluPort7Page() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate {...pageData} />
    </>
  );
}
