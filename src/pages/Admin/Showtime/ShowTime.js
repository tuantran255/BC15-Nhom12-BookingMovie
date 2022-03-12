import React, { useEffect } from "react";
import {
  Form,
  Input,
  Button,
  Checkbox,
  DatePicker,
  InputNumber,
  Select,
} from "antd";
import { useState } from "react";
import { api } from "../../../util/apiSetting";
import { useFormik } from "formik";
import moment from "moment";

export default function ShowTime(props) {
  let film = {};
  if (localStorage.getItem("filmParams")) {
    film = JSON.parse(localStorage.getItem("filmParams"));
  }
  const formik = useFormik({
    initialValues: {
      maPhim: props.match.params.id,
      ngayChieuGioChieu: "",
      maRap: "",
      giaVe: 0,
    },
    onSubmit: async (values) => {
      console.log("values :>> ", values);
      try {
        const result = await api.post(`/api/QuanLyDatVe/TaoLichChieu`, values);
        alert(result.data.content);
      } catch (err) {
        console.log(`err`, err.response?.data);
      }
    },
  });
  const [state, setState] = useState({
    heThongRapChieu: [],
    cumRapChieu: [],
  });
  useEffect(async () => {
    try {
      let result = await api.get(`/api/QuanLyRap/LayThongTinHeThongRap`);
      setState({
        ...state,
        heThongRapChieu: result.data.content,
      });
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  }, []);
  const onChangeHeThongRap = async (values) => {
    console.log("maHeThongRap", values);
    try {
      let result = await api.get(
        `/api/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${values}`
      );
      setState({
        ...state,
        cumRapChieu: result.data.content,
      });
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };

  const onChangeCumRap = async (value) => {
    formik.setFieldValue("maRap", value);
  };

  const onOk = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
    console.log(moment(values).format("DD/MM/YYYY hh:mm:ss"));
  };

  const onChangeDate = (values) => {
    formik.setFieldValue(
      "ngayChieuGioChieu",
      moment(values).format("DD/MM/YYYY hh:mm:ss")
    );
  };

  const onChangeInputNumber = (values) => {
    formik.setFieldValue("giaVe", values);
  };
  return (
    <div className="container">
      <Form
        name="basic"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        initialValues={{ remember: true }}
        autoComplete="off"
        onSubmitCapture={formik.handleSubmit}
      >
        <h3 className="text-2xl">Tạo lịch chiếu - {film.tenPhim}</h3>
        <div className="grid md:grid-cols-12 grid-cols-1 gap-4 py-5">
          <div className="xl:col-span-3 md:col-span-4">
            <img
              src={film.hinhAnh}
              alt="imgMovie"
              className="md:w-full w-3/4 mx-auto"
            />
          </div>
          <div className="xl:col-span-9 md:col-span-8">
            <Form.Item label="Hệ thống rạp">
              <Select
                options={state.heThongRapChieu?.map((heThongRap, index) => ({
                  label: heThongRap.tenHeThongRap,
                  value: heThongRap.maHeThongRap,
                }))}
                onChange={onChangeHeThongRap}
                placeholder="Chọn hệ thống rạp"
              />
            </Form.Item>
            <Form.Item label="Cụm rạp">
              <Select
                options={state.cumRapChieu?.map((cumRap, index) => ({
                  label: cumRap.tenCumRap,
                  value: cumRap.maCumRap,
                }))}
                onChange={onChangeCumRap}
                placeholder="Chọn cụm rạp"
              />
            </Form.Item>
            <Form.Item label="Ngày giờ">
              <DatePicker
                format="DD/MM/YYYY hh:mm:ss"
                showTime
                onChange={onChangeDate}
                onOk={onOk}
              />
            </Form.Item>
            <Form.Item label="Giá vé">
              <InputNumber
                min={75000}
                max={150000}
                onChange={onChangeInputNumber}
              />
            </Form.Item>
            <Form.Item label="Chức năng">
              <Button htmlType="submit">Tạo lịch chiếu</Button>
            </Form.Item>
          </div>
        </div>
      </Form>
    </div>
  );
}
