import About from "./_components/Home/About";
import FeaturesSection from "./_components/Home/FeaturesSection";
import GallerySection from "./_components/Home/GallerySection";
import HeroCarousel from "./_components/Home/HeroCarousel";
import WhyChooseUs from "./_components/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <About />
      <FeaturesSection />
      <WhyChooseUs />
      <GallerySection />
    </>
  );
}
