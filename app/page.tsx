import About from "./_components/Home/About";
import HeroCarousel from "./_components/Home/HeroCarousel";
import StatsCounter from "./_components/Home/StatsCounter";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <About />
      <StatsCounter />
    </>
  );
}
