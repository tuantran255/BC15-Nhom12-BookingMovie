import React from "react";
import avatar from "../../../../assets/images/avatar.png";

export default function Header(props) {
  return (
    <header className="h-15 bg-white text-coolGray-800 shadow-lg fixed z-50 w-full opacity-95">
      <div className="flex justify-between mx-auto">
        <a href="#" aria-label="Back to homepage" className="flex items-center p-2 justify-center">
          <img src="../images/web-logo.png" alt="web-logo" width="50%" />
        </a>
        <ul className="items-stretch mb-0 hidden space-x-3 lg:flex">
          <li className="flex">
            <a
              href="#"
              className="flex items-center mx-2 border-b-2 border-transparent text-sm text-black hover:text-red-500 font-medium"
            >
              Lịch chiếu
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center mx-2 border-b-2 border-transparent text-sm text-black hover:text-red-500 font-medium"
            >
              Cụm rạp
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center mx-2 border-b-2 border-transparent text-sm text-black hover:text-red-500 font-medium"
            >
              Tin tức
            </a>
          </li>
          <li className="flex">
            <a
              href="#"
              className="flex items-center mx-2 border-b-2 border-transparent text-sm text-black hover:text-red-500 font-medium"
            >
              Ứng dụng
            </a>
          </li>
        </ul>
        <div className="items-center  hidden md:flex justify-center pr-10">
          <a href="#" className="flex justify-center items-center px-2 py-3 ">
            <img src={avatar} alt="avatar" className="rounded-full" width="30px" />
            <span className="text-sm border-r-2 text-gray-400 font-medium p-2">Đăng nhập</span>
            <span className="text-sm text-gray-400 font-medium p-2">Đăng ký</span>
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
