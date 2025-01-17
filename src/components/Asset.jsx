import React from "react";
import First from "/One.png";

const Asset = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute w-full inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/Asset.jpeg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col items-center justify-center">
        {/* Small Logo Text */}

        {/* Main Text */}
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-wide mb-2">
            MIRAE ASSET
          </h1>
          <h2 className="text-5xl text-white font-bold tracking-widest inline-flex">
            CENTER <img src={First} className="h-10" />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Asset;
