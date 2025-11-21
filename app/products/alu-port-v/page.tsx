import React from "react";
import ProductPageTemplate, {
  ProductPageProps,
} from "../../_components/templates/ProductPageTemplate";
import Navbar from "@/app/_components/Navbar";

const pageData: ProductPageProps = {
  // --- Hero Section ---
  heroImages: [
    "/ALU PORT V/carousel.webp",
    "/ALU PORT V/carousel2.webp",
    "/ALU PORT V/carousel3.webp",
  ],
  productName: "Alu Port V",
  heroDescription:
    "สัมผัสประสบการณ์การจอดรถที่เหนือระดับ ด้วยโรงจอดรถโครงสร้างอลูมิเนียมดีไซน์เรียบง่ายที่แฝงไว้ด้วยความหรูหรา Alu Port V โดดเด่นด้วยการออกแบบของเสาอลูมิเนียมด้านข้างที่เชื่อมต่อกับหลังคาที่ถูกดีไซน์ให้มีความลาดชันต่างกันได้อย่างต่อเนื่องสวยงาม หลังคาที่ลาดชันด้านหน้ายังช่วยปกป้องรถของคุณจากแสงแดด และด้านหลังสามารถใช้เป็นทางเดินเชื่อมต่อเข้าไปยังตัวบ้านได้อย่างสะดวก",
  featuresList: [
    "ผลิตและนำเข้าจากญี่ปุ่น 100%",
    "ผลิตจาก Aluminum Anodized ไร้สนิม",
    "ติดตั้งรวดเร็วด้วยระบบ Knockdown",
    "ลดการส่งผ่านความร้อนพร้อมป้องกันรังสี UV 99%",
    "สามารถเลือกสีวัสดุและการจัดวางได้อย่างหลากหลาย",
    "การรับประกันโครงสร้างนาน 10 ปี",
  ],

  // --- Info Section ---
  infoTitle: "Alu Port V",
  infoDescription:
    "โดดเด่นด้วยการออกแบบของเสาอลูมิเนียมด้านข้างที่เชื่อมต่อกับหลังคาที่ถูกดีไซน์ให้มีความลาดชันต่างกันได้อย่างต่อเนื่องสวยงาม หลังคาที่ลาดชันด้านหน้ายังช่วยปกป้องรถของคุณจากแสงแดด และด้านหลังสามารถใช้เป็นทางเดินเชื่อมต่อเข้าไปยังตัวบ้านได้อย่างสะดวก",
  imageOneCar: "/ALU PORT V/cartype1.webp",
  imageTwoCar: "/ALU PORT V/cartype2.webp",

  // --- Features Grid (Dark Section) ---
  featuresTitle: "ROOVTECT Aluminum Car Port",
  featuresSubtitle:
    "หลังคาโรงรถโครงสร้างอลูมิเนียม ผลิตและนำเข้าจากประเทศญี่ปุ่น ติดตั้งโดยทีมงานมืออาชีพ พร้อมบริการหลังการขาย รับประกันโครงสร้างนาน 10 ปี",
  featureIcons: [
    {
      icon: "/ALU PORT 7/info1.webp", // Using ALU PORT 7 folder as requested
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
    "/ALU PORT V/carousel.webp",
    "/ALU PORT V/carousel2.webp",
    "/ALU PORT V/carousel3.webp",
    "/ALU PORT V/cartype1.webp",
    "/ALU PORT V/cartype2.webp",
  ],

  // --- Related Products (More) ---
  relatedProducts: [
    {
      name: "YKKAP (First Rouge)",
      image: "/ALU PORT 7/carousel1.webp", // Using placeholders from existing assets
      link: "#",
    },
    {
      name: "Alu Port 7",
      image: "/ALU PORT 7/carousel2.webp",
      link: "/products/aluminum-car-port/alu-port-7",
    },
    {
      name: "Alu Port Next",
      image: "/ALU PORT 7/carousel3.webp",
      link: "#",
    },
    {
      name: "Alu Port Origin",
      image: "/ALU PORT 7/carousel4.webp",
      link: "#",
    },
  ],
};

export default function AluPortVPage() {
  return (
    <>
      <Navbar />
      <ProductPageTemplate {...pageData} />
    </>
  );
}
