import React, { useState } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import Center from "/Center.png";

const ImageCarousel = () => {
  const images = [
    { src: "/Gallery1.png", title: "Desserts" },
    { src: "/Gallery2.png", title: "Lunas" },
    { src: "/Gallery3.png", title: "Restaurant" },
    { src: "/Gallery4.png", title: "Food" },
    { src: "/Gallery5.png", title: "Special" },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start with middle image

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-[#242424] min-h-screen overflow-clip flex flex-col items-center justify-center p-4 py-32">
      <img src={Center} alt="Center Header" className="mb-8" />
      <div className="relative w-full flex flex-col items-center">
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <IoChevronBackOutline size={24} />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 p-3 rounded-full text-white hover:bg-black/70 transition-colors"
        >
          <IoChevronForwardOutline size={24} />
        </button>

        {/* Images Container */}
        <div className="flex items-center justify-center gap-6">
          {images.map((image, index) => {
            // Calculate distance from current index
            const distance = Math.abs(currentIndex - index);

            // Determine if this image is the center one
            const isCenter = index === currentIndex;

            return (
              <div
                key={index}
                className={`relative transition-all duration-300 ease-in-out ${
                  isCenter
                    ? "w-[400px] h-[550px] opacity-100 scale-100"
                    : distance === 1
                    ? "w-[300px] h-[420px] opacity-90 scale-90"
                    : "w-[300px] h-[420px] opacity-90 scale-90"
                }`}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* <p
                  className={`text-center mt-4 ${
                    isCenter ? "text-white font-bold" : "text-gray-400"
                  }`}
                >
                  {image.title}
                </p> */}
              </div>
            );
          })}
        </div>

        {/* Progress Indicators */}
        {/* <div className="flex justify-center gap-2 mt-8">
          {images.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "w-8 bg-blue-500" : "w-4 bg-gray-600"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default ImageCarousel;
