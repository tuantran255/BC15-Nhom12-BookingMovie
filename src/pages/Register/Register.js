import React from "react";

import logoAvatar from "../../assets/images/user-regular.svg";
export default function Register() {
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-3/5 rounded-xl">
        <div className="mx-10">
          <div className="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <img className="mx-auto h-12 " src={logoAvatar} alt="Workflow" style={{ color: "white" }} />
                <h2 className="mt-3 text-center text-2xl font-extrabold text-gray-900">Đăng Kí</h2>
              </div>
              <form className="mt-2 space-y-6">
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label className="sr-only">Tài khoản</label>
                    <input
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Tài Khoản"
                    />
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Mật khẩu</label>
                    <input
                      type="password"
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Mật Khẩu"
                    />
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Nhập lại mật khẩu</label>
                    <input
                      type="password"
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Nhập lại Mật Khẩu"
                    />
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Họ và Tên</label>
                    <input
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Họ và Tên"
                    />
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Email</label>
                    <input
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="text-sm">
                    <a href="/login" className="font-medium text-red-600 hover:text-gray-900">
                      Bạn có tài khoản rồi? Đăng nhập
                    </a>
                  </div>
                </div>

                <div>
                  <button className=" relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    Đăng kí
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
