import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import First from "/First.png";

const Slider = () => {
  const slides = [
    {
      image: "/Slide1.jpeg",
      title: (
        <h2 className="lg:text-6xl text-1xl font-bold inline-flex items-center">
          The <img src={First} className="lg:pb-5 pb-2 lg:h-24 h-12 pl-6" />{" "}
          Environment you
        </h2>
      ),
      subtitle: " would imagine",
      description:
        "서울 청계천은 자연 그대로의 휴식과 재충전 공간이며, 점심시간과 퇴근길에 만나는 청계천의 여유로움은 CENTER1 입주자 및 이용객이 누릴 수 있는 특권입니다. 이용자를 위한 감성적인 요소뿐만 아니라, 국내 최고 수준의 친환경 기준을 실천하여 국내외에서 친환경 건축물로 인증받았습니다.",
    },
    {
      image: "/Slide2.jpeg",
      title: (
        <h2 className="lg:text-6xl text-1xl font-bold inline-flex items-center">
          The <img src={First} className="lg:pb-5 pb-2 lg:h-24 h-12 pl-6" />
          Building you
        </h2>
      ),
      subtitle: " would prefer",
      description:
        "Center1은 약 170,000m²의 건축 연면적으로 서울 도심 최대 규모의 빌딩입니다. 안정적 구조, 효율적 공간설계, 친환경 건축, 반영구적 자재, 최첨단 기술을 바탕으로 시간이 지나도 그 가치가 높아질 것입니다   또한 편리한 접근성, 빌딩 앞 공원, 개방된 아트리움 공간 등을 통해 대중과 소통하는 새로운 시대 가치를 담고 있습니다. ",
    },
    {
      image: "/Slide3.jpeg",
      title: (
        <h2 className="lg:text-6xl text-1xl font-bold inline-flex items-center">
          The <img src={First} className="lg:pb-5 pb-2 lg:h-24 h-12 pl-6" />
          Impression you
        </h2>
      ),
      subtitle: "would have",
      description:
        "Center1의 건축 모티브는 음과 양 (Yin & Yang)입니다. 하나의 매스에서 분리된 두 동은 음각과 양각 형태로 마주 보고 있습니다.   외부 마감재는 자연과 조화를 이루며 주변 건물들과 차별화된 자재를 사용하였고,  알루미늄 환기창은 외기를 도입하면서도 개폐 시 외관 변화가 없도록 세심하게 설계되었습니다..",
    },
    {
      image: "/Slide5.jpeg",
      title: (
        <h2 className="lg:text-6xl text-1xl font-bold inline-flex items-center ">
          The <img src={First} className="lg:pb-5 pb-2 lg:h-24 h-12 pl-6" />
          Service you would
        </h2>
      ),
      subtitle: "experience",
      description:
        "Center1은 입주사들을 위한 철저한 보안 관리와 사고 예방을 위한 통합 시스템을 도입하여,  보안과 경비 현황을 한 곳에서 효과적으로 관리합니다. 아트리움 2층 로비에서는 방문객 출입을 관리하며, 최첨단 보안 시설을 통해 임차인들에게 높은 수준의 보안 서비스를 제공합니다.   또한, 입주사를 위한 차별화된 서비스를 제공하며, 입주사와 외부 이용객 모두가 이용할 수 있는 다양한 편의 시설을 갖추고 있습니다.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const handlePrev = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="relative h-full w-full overflow-hidden">
      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 z-50 text-white/70 hover:text-white transition-colors"
      >
        <MdKeyboardArrowLeft size={40} />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 z-50 text-white/70 hover:text-white transition-colors"
      >
        <MdKeyboardArrowRight size={40} />
      </button>

      {/* Slides */}
      <div className="relative h-full w-full flex items-center">
        {/* Background Image */}
        <div
          className={`absolute inset-0 bg-cover w-full bg-no-repeat h-full transition-opacity duration-500 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
          style={{
            backgroundImage: `url('${slides[currentIndex].image}')`,
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b h-full from-black/40 to-black/10" />

        {/* Content Container */}
        <div className="relative flex flex-col items-start justify-between h-full my-auto py-36 text-white lg:px-32 px-4">
          {/* Main Title */}
          <div
            className={`transition-all duration-500 ${
              isTransitioning
                ? "opacity-0 translate-x-4"
                : "opacity-100 translate-x-0"
            }`}
          >
            <h1 className="text-4xl lg:text-6xl font-bold">
              {slides[currentIndex].title}
              <br className="hidden lg:block" />
              {slides[currentIndex].subtitle}
            </h1>
          </div>

          {/* Description */}
          <div
            className={`pt-[34vh] transition-all duration-500 delay-100 ${
              isTransitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <p className="relative text-xs border-t max-w-2xl pt-2 opacity-80 leading-relaxed mb-8">
              {slides[currentIndex].description}
              <div className="h-[1px] bg-white w-64 top-0 absolute" />
            </p>

            <div className="inline-flex items-center border p-2 rounded-md cursor-pointer hover:bg-white/10 transition-colors">
              View more <MdKeyboardArrowRight className="pt-1" />
            </div>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1 rounded transition-all duration-300 cursor-pointer ${
                index === currentIndex ? "w-8 bg-white" : "w-4 bg-white/40"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slider;
