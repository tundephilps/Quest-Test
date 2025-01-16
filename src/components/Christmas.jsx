import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { RiCustomerServiceLine } from "react-icons/ri";
import { HiOutlineCalendar } from "react-icons/hi";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { CgCopy } from "react-icons/cg";

const Christmas = () => {
  return (
    <div className="bg-[#eceff1] py-10 relative">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column - Current Event */}
        <div className="  p-6 rounded-lg">
          <div className="inline-flex justify-between items-center w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              지금 살펴봐야할 이벤트
            </h2>
            <IoIosAddCircleOutline className="text-2xl text-[#00427a]" />
          </div>

          <div className="flex flex-col pt-8">
            <img
              src="/Xmas1.png"
              alt="Event"
              className="w-full h-full object-cover rounded-md mr-4"
            />
            <div className="text-start py-4">
              <h3 className="text-lg font-semibold text-[#2c2c2c]">
                미래에셋센터원 크리스마스 작은 음악회
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                <ul>
                  <li>공연 주제 : 재즈 공연</li>
                  <li>
                    장소 : 1층 계단 앞(연주), 1층 크리스마스 트리 앞(다과 및
                    커피 배포)
                  </li>
                </ul>
              </p>
              <p className="text-xs text-gray-500 mt-4">
                2024.12.20(금)~2024.12.20(금)
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - News */}
        <div className="  p-6 rounded-lg">
          <div className="inline-flex justify-between items-center w-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              센터원 소식
            </h2>
            <IoIosAddCircleOutline className="text-2xl text-[#00427a]" />
          </div>

          <div className="space-y-4 pt-8">
            <div>
              <h3 className="text-lg font-semibold text-[#00427a]">
                미래에셋센터원 홈페이지 리뉴얼 안내
              </h3>
              <p className="text-sm  mt-2 text-[#00427a]">
                미래에셋센터원의 홈페이지가 새롭게 단장되었습니다. 더 나은
                서비스 제공을 위해 변화를 확인해보세요.
              </p>
              <p className="text-xs text-[#00427a] mt-4">2024.04.06</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 absolute right-4 bottom-12">
        <div className="bg-[#00427a] p-2 text-white rounded-md flex flex-col items-center gap-2">
          {" "}
          <RiCustomerServiceLine className="text-2xl" />
          <p className="text-xs">주요문의처</p>
        </div>

        <div className=" p-2 border border-[#00427a] bg-white text-[#00427a] rounded-md flex flex-col items-center gap-2">
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
