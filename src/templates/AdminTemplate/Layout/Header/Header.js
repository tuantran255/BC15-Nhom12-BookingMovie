import React from "react";
import { NavLink } from "react-router-dom";
import { history } from "../../../../App";
import avatar from "../../../../assets/images/avatar.png";
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
        <div className="items-center flex justify-center pr-10">
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
      </div>
    </header>
  );
}
