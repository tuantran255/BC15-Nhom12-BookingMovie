import React from "react";
import avatar from "../../../../assets/images/avatar.png";
import logo from "../../../../assets/images/web-logo.png";

export default function Header(props) {
  return (
    <header className="my-ant-layout-header bg-white text-coolGray-800 shadow-lg z-50 w-full opacity-95">
      <div className="flex justify-between mx-auto h-full">
        <a href="#" aria-label="Back to homepage" className="flex items-center p-2 justify-center">
          <img src={logo} alt="web-logo" width="50%" />
        </a>
        <div className="items-center  hidden md:flex justify-center pr-10">
          <a href="#" className="flex justify-center items-center px-2 py-3 ">
            <img src={avatar} alt="avatar" className="rounded-full" width="30px" />
            <span className="text-sm text-gray-400 font-medium p-2">Đăng Xuất</span>
          </a>
        </div>
        <button className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
