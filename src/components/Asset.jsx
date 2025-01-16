import React from "react";

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
          <h2 className="text-3xl md:text-5xl text-white font-bold tracking-widest">
            CENTER <span className="text-white">1</span>
          </h2>
        </div>

        {/* Korean Text */}
        <div className="absolute top-8 right-8 text-blue-600 text-xl font-medium">
          미래에셋
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="flex justify-center space-x-8 mb-8">
            <div className="w-24 h-16 bg-pink-400/20 rounded-lg" />
            <div className="w-24 h-16 bg-blue-400/20 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Asset;
