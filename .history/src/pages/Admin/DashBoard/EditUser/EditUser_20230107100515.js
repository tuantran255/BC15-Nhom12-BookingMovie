import React, { useEffect } from "react";
import * as Yup from "yup";
import { Form, Input, Select } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { postApiCapNhapThongTinNguoiDung, postApiLayThongTinNguoiDung } from "../../../../redux/slices/editUserSlice";

export default function AddUser(props) {
  const dispatch = useDispatch();
  const { message } = useSelector(state => state.register);
  const { thongTinNguoiDung } = useSelector(state => state.editUser);
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(postApiLayThongTinNguoiDung(id));
  }, []);

  const { Option } = Select;
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      taiKhoan: thongTinNguoiDung?.taiKhoan,
      matKhau: thongTinNguoiDung?.matKhau,
      email: thongTinNguoiDung?.email,
      soDT: thongTinNguoiDung?.soDT,
      hoTen: thongTinNguoiDung?.hoTen,
      loaiNguoiDung: thongTinNguoiDung?.maLoaiNguoiDung,
      maNhom: thongTinNguoiDung?.maNhom,
    },
    validationSchema: Yup.object().shape({
      taiKhoan: Yup.string().trim().required("Tài khoản không được để trống").min(6, "Tài khoản có ít nhất 6 kí tự"),
      matKhau: Yup.string().trim().required("Mật khẩu không được để trống").min(6, "Mật khẩu có ít nhất 6 kí tự"),
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
        taiKhoan: values.taiKhoan,
        email: values.email,
        hoTen: values.hoTen,
        matKhau: values.matKhau,
        soDT: values.soDT,
        maLoaiNguoiDung: values.loaiNguoiDung,
        maNhom: values.maNhom,
      };
      if (values.loaiNguoiDung === "") {
        formik.setFieldError("loaiNguoiDung", "Chọn loại người dùng");
      }
      if (values.maNhom === "") {
        formik.setFieldError("maNhom", "Chọn nhóm");
      }
      dispatch(postApiCapNhapThongTinNguoiDung(thongTinDangKy));
    },
  });
  useEffect(() => {
    if (message === "Tài khoản đã tồn tại!") {
      formik.setFieldError("taiKhoan", message);
    }
    if (message === "Email đã tồn tại!") {
      formik.setFieldError("email", message);
    }
  }, [message]);

  return (
    <div>
      <h1 className="text-center font-black text-red-600 text-3xl mb-10">Cập nhập thông tin người dùng</h1>
      <Form onSubmitCapture={formik.handleSubmit}>
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-6">
            <h1>Tài khoản</h1>
            <Input
              size="large"
              name="taiKhoan"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.taiKhoan}
            />
            {formik.errors.taiKhoan && formik.touched.taiKhoan ? (
              <div className="text-red-600">{formik.errors.taiKhoan}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Email</h1>
            <Input
              size="large"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-600">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Mật khẩu</h1>
            <Input
              size="large"
              name="matKhau"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.matKhau}
            />
            {formik.errors.matKhau && formik.touched.matKhau ? (
              <div className="text-red-600">{formik.errors.matKhau}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Họ và tên</h1>
            <Input
              size="large"
              name="hoTen"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.hoTen}
            />
            {formik.errors.hoTen && formik.touched.hoTen ? (
              <div className="text-red-600">{formik.errors.hoTen}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Số điện thoại</h1>
            <Input
              size="large"
              name="soDT"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.soDT}
            />
            {formik.errors.soDT && formik.touched.soDT ? (
              <div className="text-red-600">{formik.errors.soDT}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Loại người dùng</h1>
            <Select
              size="large"
              style={{ width: 150 }}
              onChange={value => {
                formik.setFieldValue("loaiNguoiDung", value);
              }}
              value={formik.values.loaiNguoiDung}
            >
              <Option value="QuanTri">Quản trị</Option>
              <Option value="KhachHang">Khách hàng</Option>
            </Select>
            {formik.errors.loaiNguoiDung && formik.touched.loaiNguoiDung ? (
              <div className="text-red-600">{formik.errors.loaiNguoiDung}</div>
            ) : null}
          </div>
          <div className="col-span-6">
            <h1>Nhóm</h1>
            <Select
              size="large"
              style={{ width: 150 }}
              onChange={giatri => {
                formik.setFieldValue("maNhom", giatri);
              }}
              value={formik.values.maNhom}
            >
              <Option value="GP01">GP01</Option>
              <Option value="GP02">GP02</Option>
              <Option value="GP03">GP03</Option>
              <Option value="GP04">GP04</Option>
              <Option value="GP05">GP05</Option>
              <Option value="GP06">GP06</Option>
              <Option value="GP07">GP07</Option>
              <Option value="GP08">GP08</Option>
              <Option value="GP09">GP09</Option>
              <Option value="GP10">GP10</Option>
              <Option value="GP11">GP11</Option>
              <Option value="GP12">GP12</Option>
              <Option value="GP13">GP13</Option>
              <Option value="GP14">GP14</Option>
              <Option value="GP15">GP15</Option>
              <Option value="GP16">GP16</Option>
            </Select>
            {formik.errors.maNhom && formik.touched.maNhom ? (
              <div className="text-red-600">{formik.errors.maNhom}</div>
            ) : null}
          </div>
        </div>

        <div className="mt-10  flex justify-end">
          <button
            type="submit"
            className="cursor-pointer border-2 border-red-600 text-red-600 hover:text-white hover:bg-red-600 py-1 px-3 text-xl rounded-md"
          >
            Cập nhập
          </button>
        </div>
      </Form>
    </div>
  );
}
