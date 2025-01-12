import React from "react";

const Hero = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Background.png')" }}
    >
      {/* Navbar */}
      <header className="flex justify-between items-center px-32 py-4 text-white">
        <h1 className="text-2xl font-bold">Mirae Asset CENTER 1</h1>
        <nav className="flex space-x-6">
          <a href="#center" className="hover:underline">
            센터원
          </a>
          <a href="#guide" className="hover:underline">
            이용안내
          </a>
          <a href="#services" className="hover:underline">
            서비스소개
          </a>
          <a href="#rental" className="hover:underline">
            임대문의
          </a>
          <a href="#support" className="hover:underline">
            고객지원
          </a>
        </nav>
        <button className="text-white hover:text-gray-300">🌐</button>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-start justify-center px-32 text-start text-white mt-32">
        <h2 className="text-6xl font-bold">
          THE 1<sup>ST</sup>
          <br /> BUILDING
        </h2>
        <p className="mt-6 text-xl">최고의 공간을 경험하세요</p>
        <p className="mt-2 text-sm">
          국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다.
        </p>
      </main>

      {/* Footer or Other Content (if needed) */}
    </div>
  );
};

export default Hero;
