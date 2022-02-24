import React, { useEffect } from "react";
import * as Yup from "yup";
import { Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { postValueRegister } from "../../../../redux/slices/registerSlice";

export default function AddUser() {
  const dispatch = useDispatch();
  const { message } = useSelector(state => state.register);

  const { Option } = Select;
  const formik = useFormik({
    initialValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      hoTen: "",
      loaiNguoiDung: "",
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().trim().required("Tài khoản không được để trống").min(6, "Tài khoản có ít nhất 6 kí tự"),
      matKhau: Yup.string().trim().required("Mật khẩu không được để trống").min(6, "Mật khẩu có ít nhất 6 kí tự"),
      email: Yup.string().required("Email không được để trống").email("Email nhập chưa đúng"),
      soDt: Yup.string()
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
      console.log(values);
      let thongTinDangKy = {
        email: values.email,
        hoTen: values.hoTen,
        matKhau: values.matKhau,
        soDT: values.soDt,
        taiKhoan: values.taiKhoan,
        loaiNguoiDung: values.loaiNguoiDung,
      };
      if (values.loaiNguoiDung === "") {
        formik.setFieldError("loaiNguoiDung", "Chọn loại người dùng");
      }
      dispatch(postValueRegister(thongTinDangKy));
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

  return (
    <div>
      <h1 className="text-center font-black text-red-600 text-3xl mb-10">Thêm người dùng</h1>
      <Form onSubmitCapture={formik.handleSubmit}>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-6">
            <h1>Tài khoản</h1>
            <Input size="large" name="taiKhoan" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
              <div className="text-red-600">{formik.errors.taiKhoan}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Email</h1>
            <Input size="large" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Mật khẩu</h1>
            <Input size="large" name="matKhau" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.matKhau && formik.touched.matKhau ? (
              <div className="text-red-600">{formik.errors.matKhau}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Họ và tên</h1>
            <Input size="large" name="hoTen" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.hoTen && formik.touched.hoTen ? (
              <div className="text-red-600">{formik.errors.hoTen}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Số điện thoại</h1>
            <Input size="large" name="soDt" onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.errors.soDt && formik.touched.soDt ? (
              <div className="text-red-600">{formik.errors.soDt}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Loại người dùng</h1>
            <Select
              labelInValue
              size="large"
              style={{ width: 120 }}
              onChange={giatri => {
                formik.setFieldValue("loaiNguoiDung", giatri.value);
              }}
            >
              <Option value="quanTri">Quản trị</Option>
              <Option value="khachHang">Khách hàng</Option>
            </Select>
            {formik.errors.loaiNguoiDung && formik.touched.loaiNguoiDung ? (
              <div className="text-red-600">{formik.errors.loaiNguoiDung}</div>
            ) : null}
          </div>
        </div>

        <div className="mt-10  flex justify-end">
          <button
            type="submit"
            className="cursor-pointer border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600 py-1 px-3 text-xl rounded-md"
          >
            Thêm
          </button>
        </div>
      </Form>
    </div>
  );
}
