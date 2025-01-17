import React from "react";
import One from "/One.png";

const OnlyCenter = () => {
  return (
    <div className="bg-[#242424] text-white py-32">
      <div className="lg:px-32 mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-3xl font-bold mb-2 inline-flex">
          ONLY CENTER <img src={One} className="h-6" />
        </h2>
        <p className="text-lg pb-12">
          미래에셋센터원에서 경험하는{" "}
          <span className="text-[#f58220] font-bold">특별한 혜택</span>
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* First Card */}
          <div className="overflow-hidden relative pb-8">
            <img
              src="/Center1.png"
              alt="KF GALLERY"
              className="w-full h-48 object-cover"
            />
            <div className="py-4 ">
              <h3 className="text-xl font-semibold mb-2 ">프라임 서비스</h3>
              <p className="text-sm text-[#bbbbbb]">
                임산부 휴게실/수유실 운영, 세차 서비스, 우편 배달 서비스 등
                입주사 임직원을 위한 차별화된 서비스를 제공합니다.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="overflow-hidden  relative pt-8">
            <img
              src="/Center2.png"
              alt="센터원 Wellness"
              className="w-full h-48 object-cover"
            />
            <div className="py-4 ">
              <h3 className="text-xl font-semibold mb-2 ">
                E-pit 전기차 충전소
              </h3>
              <p className="text-sm text-[#bbbbbb]">
                미래에셋센터원 주차장에는 전기차 이용자들을 위해 일반 충전소
                외에도 E-pit 전기차 충전소가 마련되어 있습니다.
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="overflow-hidden relative pt-8">
            <img
              src="/Center3.png"
              alt="SPARKPLUS"
              className="w-full h-48 object-cover"
            />
            <div className="py-4 ">
              <h3 className="text-xl font-semibold mb-2 ">주차요금 할인</h3>
              <p className="text-sm text-[#bbbbbb]">
                오피스,에비뉴 방문시 주차할인 혜택을 드리며 주말에는 최대
                8천원으로 부담없이 미래에셋센터원을 즐길 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyCenter;
