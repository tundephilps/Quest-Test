import React from "react";
import Hero from "../components/Hero";
import ConvenienceSection from "../components/Convenience";
// import ImageSlider from "../components/Slider";
import Slider from "../components/Slider";
import OnlyCenter from "../components/OnlyCenter";
import Christmas from "../components/Christmas";
import Gallery from "../components/Gallery";
import Asset from "../components/Asset";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <div>
      <Hero />
      <ConvenienceSection />
      <Slider />
      <div className="h-[30vh]" />
      <OnlyCenter />
      <Christmas />
      <Gallery />
      <Asset />
      <Footer />
    </div>
  );
};

export default Homepage;
