import React from "react";

const OnlyCenter = () => {
  return (
    <div className="bg-[#242424] text-white py-32">
      <div className="lg:px-32 mx-auto px-4">
        {/* Title Section */}
        <h2 className="text-3xl font-bold mb-2">ONLY CENTER 1</h2>
        <p className="text-lg">
          미래에셋센터원에서 경험하는{" "}
          <span className="text-[#f58220] font-bold">특별한 서비스</span>
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {/* First Card */}
          <div className="overflow-hidden relative pb-8">
            <img
              src="/Con1.png"
              alt="KF GALLERY"
              className="w-full h-48 object-cover"
            />
            <div className="py-4 ">
              <h3 className="text-xl font-semibold mb-2 ">KFS GALLERY</h3>
              <p className="text-sm text-gray-400">
                국내 및 국제 작가들의 브리티시 문화, 예술 프로그램을 통해 창의적
                경험을 제공하는 다양한 전시와 함께하세요.
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="overflow-hidden  relative pt-8">
            <img
              src="/Con2.png"
              alt="센터원 Wellness"
              className="w-full h-48 object-cover"
            />
            <div className="py-4 ">
              <h3 className="text-xl font-semibold mb-2 ">센터원 Wellness</h3>
              <p className="text-sm text-gray-400">
                피트니스, 요가/필라테스, GX스튜디오, 사우나, PT서비스와 더불어
                다양한 웰니스 프로그램을 경험하세요.
              </p>
            </div>
          </div>

          {/* Third Card */}
          <div className="overflow-hidden relative pt-8">
            <img
              src="/Con3.png"
              alt="SPARKPLUS"
              className="w-full h-48 object-cover"
            />
            <div className="py-4 ">
              <h3 className="text-xl font-semibold mb-2 ">SPARKPLUS</h3>
              <p className="text-sm text-gray-400">
                최적의 업무환경을 제공할 수 있는 공유오피스와 일일로 대여할 수
                있는 프리미엄 업무 오피스를 만나보세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlyCenter;
