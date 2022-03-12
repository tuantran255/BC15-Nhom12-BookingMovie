import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import _ from "lodash";
import avatar from "../../assets/images/avatar.png";
import { TOKEN, USER_LOGIN } from "../../util/apiSetting";
import { history } from "../../App";
import { Drawer, Button } from "antd";

export default function Header(props) {
  const { userLogin } = useSelector((state) => state.login);
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const renderLogin = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <div className="items-center hidden lg:flex justify-center pr-10">
          <NavLink
            to={"/login"}
            className="flex justify-center items-center px-2 py-3 "
          >
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full"
              width="30px"
            />
            <span className="text-sm border-r-2 text-gray-400 font-medium p-2 hover:text-red-500 duration-300">
              Đăng nhập
            </span>
          </NavLink>
          <NavLink to={"/register"}>
            <span className="text-sm text-gray-400 font-medium p-2 hover:text-red-500 duration-300">
              Đăng ký
            </span>
          </NavLink>
        </div>
      );
    }

    return (
      <div className="items-center hidden lg:flex justify-center pr-10">
        <NavLink
          to={"/profile"}
          className="flex justify-center items-center px-2 py-3 "
        >
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full"
            width="30px"
          />
          <span className="text-sm border-r-2 text-gray-400 font-medium p-2 hover:text-red-500 duration-300">
            Xin chào {_.upperCase(userLogin.taiKhoan)}
          </span>
        </NavLink>
        <div>
          {userLogin.maLoaiNguoiDung === "QuanTri" && (
            <button
              className="text-sm text-gray-400 font-medium border-r-2 pr-2 mr-2 hover:text-red-500 duration-300"
              onClick={() => {
                history.push("/admin");
              }}
            >
              Quản lý
            </button>
          )}
          <button
            className="text-sm text-gray-400 font-medium hover:text-red-500 duration-300"
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
    );
  };

  const renderLoginMobile = () => {
    if (_.isEmpty(userLogin)) {
      return (
        <div className="pr-10 flex justify-start items-center border-b-2">
          <NavLink
            to={"/login"}
            className="flex justify-center items-center px-2 py-3"
            onClick={onClose}
          >
            <img
              src={avatar}
              alt="avatar"
              className="rounded-full"
              width="40px"
            />
            <span className="text-base text-gray-400 font-medium p-2 hover:text-red-500 duration-300 border-r-2">
              Đăng nhập
            </span>
          </NavLink>
          <NavLink to={"/register"} onClick={onClose}>
            <span className="text-base text-gray-400 font-medium p-2 hover:text-red-500 duration-300">
              Đăng ký
            </span>
          </NavLink>
        </div>
      );
    }

    return (
      <div className="items-center border-b-2">
        <NavLink to={"/profile"} className="flex items-center px-2 py-3 ">
          <img
            src={avatar}
            alt="avatar"
            className="rounded-full"
            width="40px"
          />
          <span className="text-base text-gray-400 font-medium p-2 hover:text-red-500 duration-300">
            Xin chào {_.upperCase(userLogin.taiKhoan)}
          </span>
        </NavLink>
        <div className="flex justify-between p-2">
          {userLogin.maLoaiNguoiDung === "QuanTri" && (
            <button
              className="text-base text-gray-400 font-medium pr-2 mr-2 hover:text-red-500 duration-300"
              onClick={() => {
                history.push("/admin");
              }}
            >
              Quản lý
            </button>
          )}
          <button
            className="text-base text-gray-400 font-medium hover:text-red-500 duration-300"
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
    );
  };

  return (
    <header className="h-15 bg-white text-coolGray-800 shadow-lg fixed z-50 w-full opacity-95">
      <div className="flex justify-between mx-auto">
        <NavLink
          to="/"
          aria-label="Back to homepage"
          className="flex items-center p-2 justify-center"
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img src="../images/web-logo.png" alt="web-logo" width="50%" />
        </NavLink>
        {props.isHomePage === true && (
          <ul className="items-stretch mb-0 hidden space-x-3 lg:flex">
            <li className="flex">
              <button
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("homeMovie")?.offsetTop - 66,
                    behavior: "smooth",
                  });
                }}
                className="flex items-center mx-2 border-b-2 border-transparent text-sm text-black hover:text-red-500 font-medium"
              >
                Lịch chiếu
              </button>
            </li>
            <li className="flex">
              <button
                className="flex items-center mx-2 border-b-2 border-transparent text-sm text-black hover:text-red-500 font-medium"
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("homeCinema")?.offsetTop - 66,
                    behavior: "smooth",
                  });
                }}
              >
                Cụm rạp
              </button>
            </li>
            <li className="flex">
              <button
                className="flex items-center mx-2 border-b-2 border-transparent text-sm text-black hover:text-red-500 font-medium"
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("homeNews")?.offsetTop - 66,
                    behavior: "smooth",
                  });
                }}
              >
                Tin tức
              </button>
            </li>
            <li className="flex">
              <button
                className="flex items-center mx-2 border-b-2 border-transparent text-sm text-black hover:text-red-500 font-medium"
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("homeApp")?.offsetTop - 66,
                    behavior: "smooth",
                  });
                }}
              >
                Ứng dụng
              </button>
            </li>
          </ul>
        )}

        {renderLogin()}

        <button onClick={showDrawer} className="p-4 lg:hidden text-orange-600">
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
        <Drawer
          title="Menu"
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          {renderLoginMobile()}
          {props.isHomePage === true && (
            <ul className="mt-5">
              <li>
                <button
                  className="mx-2 text-base text-black hover:text-red-500 font-medium py-2 block"
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("homeMovie")?.offsetTop - 66,
                      behavior: "smooth",
                    });
                  }}
                >
                  Lịch chiếu
                </button>
              </li>
              <li>
                <button
                  className="mx-2 text-base text-black hover:text-red-500 font-medium py-2 block"
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("homeNews")?.offsetTop - 66,
                      behavior: "smooth",
                    });
                  }}
                >
                  Tin tức
                </button>
              </li>
              <li>
                <button
                  className="mx-2 text-base text-black hover:text-red-500 font-medium py-2 block"
                  onClick={() => {
                    window.scrollTo({
                      top: document.getElementById("homeApp")?.offsetTop - 66,
                      behavior: "smooth",
                    });
                  }}
                >
                  Ứng dụng
                </button>
              </li>
            </ul>
          )}
        </Drawer>
      </div>
    </header>
  );
}
