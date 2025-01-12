import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import First from "/First.png";

const Slider = () => {
  return (
    <div className="relative h-full w-full flex items-center z-50 ">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover -translate-y-24 w-full  bg-no-repeat object-[200px]  h-[150vh] -z-10  "
        style={{
          backgroundImage: `url('/Slide1.jpeg')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b h-full  from-black/40 to-black/10" />

      {/* Content Container */}
      <div className="relative  flex flex-col items-start justify-between h-full my-auto pt-36  text-white  lg:px-32 px-4">
        {/* Main Title */}
        <h1 className="text-4xl md:text-6xl font-bold  ">
          <h2 className="text-6xl font-bold inline-flex items-center">
            The <img src={First} className="pb-8 h-28 pl-6" />
          </h2>
          Environment you <br /> would imagine
        </h1>

        {/* Korean Text Placeholder */}
        <div className="pt-[40vh]">
          <p className="relative text-sm md:text-base border-t max-w-2xl pt-2 opacity-80 leading-relaxed mb-8">
            서울 청계천은 자연 그대로의 휴식과 재충전 공간이며, 점심시간과
            퇴근길에 만나는 청계천의 여유로움은 CENTER1 입주자 및 이용객이 누릴
            수 있는 특권입니다. 이용자를 위한 감성적인 요소뿐만 아니라, 국내
            최고 수준의 친환경 기준을 실천하여 국내외에서 친환경 건축물로
            인증받았습니다.
            <div className="h-[1px] bg-white w-64 top-0 absolute" />
          </p>

          <div className="inline-flex items-center border p-2 rounded-md ">
            View more <MdKeyboardArrowRight className="pt-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
