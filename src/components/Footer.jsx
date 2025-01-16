import React from "react";
import { RiArrowDownSFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#242424] text-white py-8 lg:px-32 px-4">
      <div className="container mx-auto flex lg:flex justify-between items-baseline">
        {/* Left Section */}
        <div className="">
          <h2 className="text-lg font-bold">Mirae Asset Center1</h2>
          <p className="mt-2 text-sm lg:block hidden ">
            주소: 서울특별시 중구 수하동 67 미래에셋 센터원 (서울특별시 중구
            수하로 5길 26) <br />
            대표번호: 02-6300-0100
          </p>
        </div>

        {/* Right Section */}
        <div className="flex lg:flex-row flex-col gap-4 items-baseline">
          <button className="text-sm bg-transparent  px-4 py-2 rounded hover:bg-gray-700 whitespace-nowrap">
            개인정보처리방침
          </button>
          <div className="flex flex-col gap-2">
            <button className="text-sm inline-flex items-center rounded-full border border-gray-100 px-4 py-2 hover:bg-gray-700">
              FAMILY SITE <RiArrowDownSFill />
            </button>
            <button className="text-sm rounded-sm border text-start border-gray-100 px-4 py-2 hover:bg-gray-700">
              미래에셋
            </button>
          </div>
        </div>
      </div>

      <div className="lg:mt-32 space-y-4 pt-4">
        <p className="mt-2 text-sm lg:hidden flex">
          주소: 서울특별시 중구 수하동 67 미래에셋 센터원 (서울특별시 중구
          수하로 5길 26) <br />
        </p>
        <p className="mt-2 text-sm lg:hidden flex">대표번호: 02-6300-0100</p>
        <p className=" text-xs">
          COPYRIGHT(C) 2011 MIRAE ASSET CORPORATION, CO., LTD. ALL RIGHTS
          RESERVED.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
