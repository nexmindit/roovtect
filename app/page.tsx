import About from "./_components/Home/About";
import ComparisonTable from "./_components/Home/ComparisonTable";
import FeaturesSection from "./_components/Home/FeaturesSection";
import HeroCarousel from "./_components/Home/HeroCarousel";
import ServiceSteps from "./_components/Home/ServiceSteps";
import SolutionSection from "./_components/Home/SolutionsSection";
import StatsCounter from "./_components/Home/StatsCounter";
import StructureDesign from "./_components/Home/StructureDesign";
import VideoSection from "./_components/Home/VideoSection";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <About />
      <StatsCounter />
      <FeaturesSection />
      <VideoSection />
      <SolutionSection />
      <ComparisonTable />
      <StructureDesign />
      <ServiceSteps />
    </>
  );
}
