import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiCustomerServiceLine } from "react-icons/ri";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { CgCopy } from "react-icons/cg";
import { LuDot } from "react-icons/lu";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Christmas = () => {
  const events = [
    {
      image: "/Xmas1.png",
      title: "미래에셋센터원 크리스마스 작은 음악회",
      details: [
        "공연 주제 : 재즈 공연",
        "장소 : 1층 계단 앞(연주), 1층 크리스마스 트리 앞(다과 및 커피 배포)",
      ],
      date: "2024.12.20(금)~2024.12.20(금)",
    },
    {
      image: "/Xmas2.png",
      title: "가정의 달 EVENT",
      details: [
        "판매상품: 와인 및 꽃박스",
        "토브의 카네이션은 행사 기간 동안 50개 판매 (한정판매)",
      ],
      date: "2024.05.07(화)~2024.05.08(목)",
    },
  ];

  const news = [
    {
      title: "미래에셋센터원 홈페이지 리뉴얼 안내",
      content:
        "미래에셋센터원의 홈페이지가 새롭게 단장되었습니다. 더 나은 서비스 제공을 위해 변화를 확인해보세요.",
      date: "2024.04.06",
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % events.length);
  };

  const prevEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + events.length) % events.length);
  };

  return (
    <div className="bg-[#eceff1] py-32 relative">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Current Event */}
        <div className="p-6 rounded-lg">
          <div className="inline-flex justify-between items-center w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              지금 살펴봐야할 이벤트
            </h2>
            <div className="flex items-center gap-2">
              <IoIosAddCircleOutline className="text-2xl text-[#00427a]" />
            </div>
          </div>

          <div className="flex flex-col pt-8">
            <div className="relative overflow-hidden">
              <img
                src={events[currentEventIndex].image}
                alt="Event"
                className="w-full h-full object-cover rounded-md mr-4 transition-opacity duration-300"
              />
              <div className="absolute flex flex-row items-center justify-between z-50 bottom-[46%] px-3 w-full">
                <button
                  onClick={prevEvent}
                  className="p-1 hover:bg-gray-200 rounded-full"
                >
                  <MdKeyboardArrowLeft className="text-2xl text-[#00427a]" />
                </button>
                <button
                  onClick={nextEvent}
                  className="p-1 hover:bg-gray-200 rounded-full"
                >
                  <MdKeyboardArrowRight className="text-2xl text-[#00427a]" />
                </button>
              </div>
            </div>
            <div className="text-start py-4">
              <h3 className="text-lg font-semibold text-[#2c2c2c]">
                {events[currentEventIndex].title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                <ul>
                  {events[currentEventIndex].details.map((detail, index) => (
                    <li key={index} className="inline-flex">
                      <LuDot />
                      {detail}
                    </li>
                  ))}
                </ul>
              </p>
              <p className="text-xs text-gray-500 mt-4">
                {events[currentEventIndex].date}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - News */}
        <div className="p-6 rounded-lg">
          <div className="inline-flex justify-between items-center w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              센터원 소식
            </h2>
            <div className="flex items-center gap-2">
              <IoIosAddCircleOutline className="text-2xl text-[#00427a]" />
            </div>
          </div>

          <div className="space-y-4 pt-8 text-[#2c2c2c] lg:text-[#00427a]">
            <div className="transition-all duration-300">
              <h3 className="text-lg font-semibold">
                {news[currentNewsIndex].title}
              </h3>
              <p className="text-sm mt-2 lg:text-[#00427a] text-[#979797]">
                {news[currentNewsIndex].content}
              </p>
              <p className="text-xs lg:text-[#00427a] text-[#979797] mt-4">
                {news[currentNewsIndex].date}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Side Menu */}
      <div className="flex flex-col gap-4 absolute right-4 bottom-12">
        <div className="lg:bg-[#00427a] bg-white border border-[#00427a] p-2 lg:text-white text-[#00427a] rounded-md flex flex-col items-center gap-2">
          <RiCustomerServiceLine className="text-2xl" />
          <p className="text-xs">주요문의처</p>
        </div>
        <div className="p-2 border border-[#00427a] bg-white text-[#00427a] rounded-md flex flex-col items-center gap-2">
          <CgCopy className="text-2xl" />
          <p className="text-xs">임대문의</p>
        </div>
        <div className="border border-[#00427a] p-2 bg-white text-[#00427a] rounded-md flex flex-col items-center gap-2">
          <HiOutlineCalendar className="text-2xl" />
          <p className="text-xs">방문예약</p>
        </div>
        <div className="border border-[#00427a] p-2 bg-white text-[#00427a] rounded-md flex flex-col items-center gap-2">
          <IoArrowUpCircleOutline className="text-2xl" />
          <p className="text-xs">TOP</p>
        </div>
      </div>
    </div>
  );
};

export default Christmas;
