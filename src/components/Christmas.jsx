import React from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

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
            <IoIosAddCircleOutline />
          </div>

          <div className="flex flex-col pt-8">
            <img
              src="/Xmas1.png"
              alt="Event"
              className="w-full h-full object-cover rounded-md mr-4"
            />
            <div className="text-start py-4">
              <h3 className="text-lg font-semibold text-red-600">
                미래에셋센터원 크리스마스 작은 음악회
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                2024년 12월 24일 | 11:30 ~ 13:00 (화요일) <br />
                Coffees Cookie 제공 (12:00까지)
              </p>
              <p className="text-xs text-gray-500 mt-1">
                이벤트 기간: 2024.12.01 ~ 2024.12.24
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
            <IoIosAddCircleOutline />
          </div>

          <div className="space-y-4 pt-8">
            <div>
              <h3 className="text-lg font-semibold text-blue-600">
                미래에셋센터원 홈페이지 리뉴얼 안내
              </h3>
              <p className="text-sm text-gray-600 mt-2">
                미래에셋센터원의 홈페이지가 새롭게 단장되었습니다. 더 나은
                서비스 제공을 위해 변화를 확인해보세요.
              </p>
              <p className="text-xs text-gray-500 mt-1">2024.04.06</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 absolute right-4 bottom-12">
        <div className="bg-[#00427a] p-2">Ye</div>

        <div className=" p-2 border border-[#00427a] text white">hey</div>
        <div className="border border-[#00427a] p-2">yo</div>
        <div className="border border-[#00427a] p-2">hi</div>
      </div>
    </div>
  );
};

export default Christmas;
