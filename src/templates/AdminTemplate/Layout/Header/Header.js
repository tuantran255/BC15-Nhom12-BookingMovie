import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import avatar from "../../../../assets/images/avatar.png";
import logo from "../../../../assets/images/web-logo.png";
import { TOKEN, USER_LOGIN } from "../../../../util/apiSetting";

export default function Header(props) {
  return (
    <header className="my-ant-layout-header bg-white text-coolGray-800 shadow-lg z-50 w-full opacity-95">
      <div className="flex justify-between mx-auto h-full">
      <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 justify-center"
        >
          <img src="../images/web-logo.png" alt="web-logo" width="50%" />
        </NavLink>
        <div className="items-center  hidden md:flex justify-center pr-10">
        <img
            src={avatar}
            alt="avatar"
            className="rounded-full"
            width="30px"
          />
          <button
            className="text-sm text-gray-400 font-medium hover:text-red-500 duration-300 ml-2"
            onClick={() => {
              localStorage.removeItem(USER_LOGIN);
              localStorage.removeItem(TOKEN);
              history.push("/");
              window.location.reload();
            }}
          >
            Đăng xuất
          </button>
        </div>
        <button className="p-4 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 text-coolGray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </header>
  );
}
