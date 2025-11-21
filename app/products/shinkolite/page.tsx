import Navbar from "@/app/_components/Navbar";
import React from "react";
import ShinkoliteHero from "./_components/Hero";
import ShinkoliteAdvantages from "./_components/Advantages";
import ShinkoliteGallery from "./_components/Gallery";
import ShinkoliteFAQ from "./_components/FAQ";
import ShinkoliteContact from "./_components/Contact";
import ShinkolitePricing from "./_components/Pricing";

const Shinkolite = () => {
  return (
    <>
      <Navbar />
      <ShinkoliteHero />
      <ShinkoliteAdvantages />
      <ShinkolitePricing />
      <ShinkoliteContact />
      <ShinkoliteGallery />
      <ShinkoliteFAQ />
    </>
  );
};

export default Shinkolite;
