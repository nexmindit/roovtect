import Navbar from "@/app/_components/Navbar";
import React from "react";
import AwningHero from "./_components/Hero";
import WhyRoovtect from "./_components/WhyRoovtect";
import AwningServiceSteps from "./_components/AwningServiceSteps";
import AwningMaterials from "./_components/AwningMaterials";
import AwningFAQ from "./_components/AwningFAQ";

const Awning = () => {
  return (
    <>
      <Navbar />
      <AwningHero />
      <WhyRoovtect />
      <AwningServiceSteps />
      <AwningMaterials />
      <AwningFAQ />
    </>
  );
};

export default Awning;
