import React from "react";
import Hero from "../components/Hero";
import ConvenienceSection from "../components/Convenience";
// import ImageSlider from "../components/Slider";
import Slider from "../components/Slider";
import OnlyCenter from "../components/OnlyCenter";
import Christmas from "../components/Christmas";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <ConvenienceSection />
      <Slider />
      <div className="h-[30vh]" />
      <OnlyCenter />
      <Christmas />
    </div>
  );
};

export default Homepage;
