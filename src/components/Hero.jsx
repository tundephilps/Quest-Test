import React, { useState } from "react";
import { MdClose, MdOutlineMenu } from "react-icons/md";
import { CiGlobe } from "react-icons/ci";
import First from "/First.png";

const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: "#center", text: "센터원" },
    { href: "#guide", text: "이용안내" },
    { href: "#services", text: "서비스소개" },
    { href: "#rental", text: "임대문의" },
    { href: "#support", text: "고객지원" },
  ];
  return (
    <div
      className="min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/Background.png')" }}
    >
      {/* Navbar */}
      <header className="flex justify-between items-center lg:px-32 px-4 py-4 text-white">
        <h1 className="text-2xl font-bold">Mirae Asset CENTER 1</h1>
        <nav className="lg:flex space-x-6  hidden">
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
        <button className="text-white hover:text-gray-300 lg:block hidden">
          <CiGlobe className="text-2xl" />
        </button>

        <button
          className="text-white hover:text-gray-300 lg:hidden block"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}
        </button>

        {/* Mobile Navigation Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 lg:hidden transition-opacity duration-300 ${
            isOpen ? "opacity-100 z-40" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Navigation Menu */}
        <nav
          className={`fixed top-0 right-0 h-full w-64 bg-gray-900 lg:hidden transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-16 px-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white py-3 border-b border-gray-700 hover:text-gray-300 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.text}
              </a>
            ))}
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex flex-col items-start justify-center lg:px-32 mt-[12vh] px-4 text-start text-white h-full">
        <h2 className="text-[15vh] font-bold leading-none inline-flex">
          THE <img src={First} className="h-16 mt-4 ml-6 " />
        </h2>
        <p className="text-[15vh] font-bold ">BUILDING</p>
        <p className="mt-6 text-xl font-bold">최고의 공간을 경험하세요</p>
        <p className="mt-2 text-sm">
          국내를 넘어 세계의 무대를 준비하는 여러분들과 함께 합니다.
        </p>
      </main>

      {/* Footer or Other Content (if needed) */}
    </div>
  );
};

export default Hero;
