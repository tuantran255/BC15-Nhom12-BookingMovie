import React, { Fragment, useState } from "react";
import { Form, Input, Radio, DatePicker, InputNumber, Switch } from "antd";
import { useFormik } from "formik";
import moment from "moment";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { GROUNDID } from "../../../../util/apiSetting";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { getApiThongTinPhim, postApiCapNhatPhimUpload } from "../../../../redux/slices/editFilmsSlice";

export default function AddNewFilms(props) {
  const dispatch = useDispatch();
  const { thongTinPhim } = useSelector(state => state.editFilms);
  const [componentSize, setComponentSize] = useState("default");
  const [fileImg, setFileImg] = useState("");
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getApiThongTinPhim(id));
  }, []);

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      tenPhim: thongTinPhim?.tenPhim,
      trailer: thongTinPhim?.trailer,
      moTa: thongTinPhim?.moTa,
      ngayKhoiChieu: thongTinPhim?.ngayKhoiChieu,
      dangChieu: thongTinPhim?.dangChieu,
      sapChieu: thongTinPhim?.sapChieu,
      hot: thongTinPhim?.hot,
      danhGia: thongTinPhim?.danhGia,
      hinhAnh: null,
      maNhom: GROUNDID,
    },
    validationSchema: Yup.object().shape({
      tenPhim: Yup.string().required("Tên phim không được để trống"),
      trailer: Yup.string().required("Trailer không được để trống"),
      moTa: Yup.string().required("Mô tả không được để trống"),
      ngayKhoiChieu: Yup.string().required("Ngày khởi chiếu không được để trống"),
      danhGia: Yup.string().required("Đánh giá không được để trống"),
    }),
    onSubmit: values => {
      console.log("values", values);
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          if (values.hinhAnh !== null) {
            formData.append("File", values.hinhAnh, values.hinhAnh.name);
          }
        }
      }
      // Kiểm tra values formData
      // for (var pair of formData.entries()) {
      //   console.log(pair[0] + ", " + pair[1]);
      // }
      dispatch(postApiCapNhatPhimUpload(formData));
    },
  });

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChangeDataPicker = value => {
    formik.setFieldValue("ngayKhoiChieu", value);
  };

  const handleChangeSwitch = name => {
    return value => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeInputNumber = name => {
    return value => {
      formik.setFieldValue(name, value);
    };
  };

  const handleChangeFile = e => {
    let file = e.target.files[0];
    console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = e => {
      setFileImg(e.target.result);
    };
    formik.setFieldValue("hinhAnh", file);
  };

  return (
    <Fragment>
      <Form
        onSubmitCapture={formik.handleSubmit}
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <h3 className="text-3xl text-red-600 font-black text-center">Chỉnh sửa phim </h3>
        <Form.Item label="Form Size" name="size">
          <Radio.Group>
            <Radio.Button value="small">Small</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="large">Large</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Tên phim">
          <Input
            name="tenPhim"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.tenPhim}
          />
          {formik.errors.tenPhim && formik.touched.tenPhim ? (
            <div className="text-red-600">{formik.errors.tenPhim}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Trailer">
          <Input
            name="trailer"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.trailer}
          />
          {formik.errors.trailer && formik.touched.trailer ? (
            <div className="text-red-600">{formik.errors.trailer}</div>
          ) : null}
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.moTa} />
          {formik.errors.moTa && formik.touched.moTa ? <div className="text-red-600">{formik.errors.moTa}</div> : null}
        </Form.Item>
        <Form.Item label="Ngày khởi chiếu">
          <DatePicker
            name="ngayKhoiChieu"
            onChange={handleChangeDataPicker}
            format="DD/MM/YYYY"
            value={moment(formik.values.ngayKhoiChieu)}
          />
        </Form.Item>
        <Form.Item label="Đang chiếu">
          <Switch onChange={handleChangeSwitch("dangChieu")} checked={formik.values.dangChieu} />
        </Form.Item>
        <Form.Item label="Sắp chiếu">
          <Switch onChange={handleChangeSwitch("sapChieu")} checked={formik.values.sapChieu} />
        </Form.Item>
        <Form.Item label="Hot">
          <Switch onChange={handleChangeSwitch("hot")} checked={formik.values.hot} />
        </Form.Item>

        <Form.Item label="Số sao">
          <InputNumber min={1} max={10} onChange={handleChangeInputNumber("danhGia")} value={formik.values.danhGia} />
        </Form.Item>

        <Form.Item label="Hình ảnh">
          <input type="file" accept="image/png, image/jpeg,image/gif,image/png" onChange={handleChangeFile} />
          <br />
          <img src={fileImg === "" ? thongTinPhim.hinhAnh : fileImg} alt="" className="w-40 h-60" />
        </Form.Item>
        <Form.Item label="Tác vụ">
          <button
            type="submit"
            className="hover:bg-red-600 hover:text-white text-red-600 p-2 border-2 border-red-600 rounded-md"
          >
            Cập nhập
          </button>
        </Form.Item>
      </Form>
    </Fragment>
  );
}
