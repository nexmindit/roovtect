import React from "react";
import AboutSection from "./_components/AboutSection";
import Navbar from "../_components/Navbar";
import Quote from "./_components/Quote";
import ExecutiveInterview from "./_components/ExecutiveInterview";
import CoreValues from "./_components/CoreValues";
import CustomerInterviews from "./_components/CustomerInterviews";

const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <AboutSection />
      <Quote />
      <ExecutiveInterview />
      <CoreValues />
      <CustomerInterviews />
    </div>
  );
};

export default AboutUs;
