import React, { useEffect } from "react";
import { NavLink, Redirect } from "react-router-dom";
import show from "../../assets/images/show.png";
import hide from "../../assets/images/hide.png";
import logoAvatar from "../../assets/images/user-regular.svg";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { postValueRegister } from "../../redux/slices/registerSlice";
import { USER_LOGIN } from "../../util/apiSetting";
export default function Register() {
  const dispatch = useDispatch();

  const { message } = useSelector(state => state.register);

  let [showPass, setShowPass] = useState(false);
  let [showRePass, setShowRePass] = useState(false);
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      nhapLaiMatKhau: "",
      email: "",
      soDT: "",
      hoTen: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().trim().required("Tài khoản không được để trống").min(6, "Tài khoản có ít nhất 6 kí tự"),
      matKhau: Yup.string().trim().required("Mật khẩu không được để trống").min(6, "Mật khẩu có ít nhất 6 kí tự"),
      nhapLaiMatKhau: Yup.string()
        .oneOf([Yup.ref("matKhau")], "Mật khẩu nhập lại không đúng")
        .required("Mật khẩu không được để trống"),
      email: Yup.string().required("Email không được để trống").email("Email nhập chưa đúng"),
      soDT: Yup.string()
        .required("Số điện thoại không được để trống")
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          "Số điện thoại phải là số"
        )
        .min(9, "Số điện thoại phải có ít nhất 9 số")
        .max(10, "Số điện thoại không quá 10 số"),
      hoTen: Yup.string()
        .required("Họ tên không được để trống")
        .trim()
        .matches(
          /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\W|_]+$/,
          "Họ và tên đang nhập không đúng"
        )
        .min(6, "Họ và tên có ít nhất 6 kí tự"),
    }),
    onSubmit: values => {
      let thongTinDangKy = {
        email: values.email,
        hoTen: values.hoTen,
        matKhau: values.matKhau,
        soDT: values.soDT,
        taiKhoan: values.taiKhoan,
      };
      dispatch(postValueRegister(thongTinDangKy));
      // switch (message) {
      //   case "Email đã tồn tại!":
      //     formik.setFieldError("email", message);
      //   case "Tài khoản đã tồn tại!":
      //     formik.setFieldError("taiKhoan", message);
      //   default:
      //     break;
      // }
    },
  });

  useEffect(() => {
    if (message === "Tài khoản đã tồn tại!") {
      formik.setFieldError("taiKhoan", message);
    }
    if (message === "Email đã tồn tại!") {
      formik.setFieldError("email", message);
    }
  }, [formik, message]);

  if (localStorage.getItem(USER_LOGIN)) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-96 h-auto rounded-xl">
        <div className="mx-10">
          <div className="min-h-full flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
              <div>
                <img className="mx-auto h-12 " src={logoAvatar} alt="Workflow" style={{ color: "white" }} />
                <h2 className="mt-3 text-center text-2xl font-extrabold text-gray-900">Đăng Kí</h2>
              </div>
              <form onSubmit={formik.handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <input
                      name="taiKhoan"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Tài khoản"
                    />
                    {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
                      <div className="text-red-600">{formik.errors.taiKhoan}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Mật khẩu</label>
                    <div className="relative">
                      <input
                        name="matKhau"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type={showPass ? "type" : "password"}
                        className="appearance-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="Mật khẩu"
                      />
                      <button
                        type="button"
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
                    {formik.errors.matKhau && formik.touched.matKhau ? (
                      <div className="text-red-600">{formik.errors.matKhau}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Nhập lại mật khẩu</label>
                    <div className="relative">
                      <input
                        name="nhapLaiMatKhau"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type={showRePass ? "type" : "password"}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                        placeholder="Nhập lại mật khẩu"
                      />
                      <button
                        type="button"
                        className="absolute top-1/2  transform  -translate-y-1/2 right-2"
                        onClick={() => {
                          setShowRePass(!showRePass);
                        }}
                      >
                        {
                          <img
                            src={showRePass ? show : hide}
                            alt=""
                            className="w-8 h-8 rounded-full px-2 py-2 hover:bg-gray-400"
                          />
                        }
                      </button>
                    </div>
                    {formik.errors.nhapLaiMatKhau && formik.touched.nhapLaiMatKhau ? (
                      <div className="text-red-600">{formik.errors.nhapLaiMatKhau}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Họ và Tên</label>
                    <input
                      name="hoTen"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Họ và tên"
                    />
                  </div>
                  {formik.errors.hoTen && formik.touched.hoTen ? (
                    <div className="text-red-600">{formik.errors.hoTen}</div>
                  ) : null}
                  <br />
                  <div>
                    <label className="sr-only mt-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Email"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="text-red-600">{formik.errors.email}</div>
                    ) : null}
                  </div>
                  <br />
                  <div>
                    <label className="sr-only mt-5">Số điện thoại di động</label>
                    <input
                      name="soDT"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="appearance-none  relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm"
                      placeholder="Số điện thoại di động"
                    />
                    {formik.errors.soDT && formik.touched.soDT ? (
                      <div className="text-red-600">{formik.errors.soDT}</div>
                    ) : null}
                  </div>
                </div>

                <div className="flex items-center justify-center mt-3">
                  <div className="text-sm">
                    <NavLink to="/login" className="font-medium text-red-600 hover:text-gray-900 ">
                      Bạn có tài khoản rồi? Đăng nhập
                    </NavLink>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={!formik.isValid}
                    className=" relative w-full flex justify-center py-2 px-4 border border-transparent text-xl font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600 mt-3 cursor-pointer"
                  >
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
