import React from "react";
import Info from "./Info";
import HeroImage from "./HeroImage";

function HeroSection() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <Info />
      <HeroImage/>
    </section>
  );
}

export default HeroSection;
