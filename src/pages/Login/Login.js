import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import show from "../../assets/images/show.png";
import hide from "../../assets/images/hide.png";
import logoAvatar from "../../assets/images/user-regular.svg";
import Form from "antd/lib/form/Form";
export default function Login() {
  let [showPass, setShowPass] = useState(false);
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-3/5 rounded-xl">
        <div className="mx-10 ">
          <div className="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <img className="mx-auto h-12 " src={logoAvatar} alt="Workflow" style={{ color: "white" }} />
                <h2 className="mt-3 text-center text-2xl font-extrabold text-gray-900">Đăng Nhập</h2>
              </div>
              <Form className="mt-2 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label className="sr-only">Tài Khoản</label>
                    <input
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Tài Khoản"
                    />
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Mật Khẩu</label>
                    <div className="relative">
                      <input
                        type={showPass ? "type" : "password"}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="Mật Khẩu"
                      />
                      <button
                        className="absolute top-1/2  transform  -translate-y-1/2 right-2"
                        onClick={() => {
                          setShowPass(!showPass);
                        }}
                      >
                        {
                          <img
                            src={showPass ? show : hide}
                            alt=""
                            className="w-8 h-8 rounded-full px-2 py-2 hover:bg-gray-400"
                          />
                        }
                      </button>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      className="h-4 w-4 text-red-600 focus:ring-red-600 border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                      Lưu tài khoản
                    </label>
                  </div>

                  <div className="text-sm">
                    <NavLink to="/register" className="font-medium text-red-600 hover:text-gray-900">
                      Đăng kí tài khoản?
                    </NavLink>
                  </div>
                </div>

                <div>
                  <button className=" relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    Đăng nhập
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
