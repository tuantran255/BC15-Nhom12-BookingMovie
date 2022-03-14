import React, { useEffect } from "react";
import backGround from "../../assets/images/backgroundlogin.jpg";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postApiLayThongTinNguoiDung } from "../../redux/slices/purchaseSlice";
import BHD from "../../assets/images/icon-partner/bhd.png";
import CGV from "../../assets/images/icon-partner/cgv.png";
import GALAXY from "../../assets/images/icon-partner/galaxycine.png";
import LOTTE from "../../assets/images/icon-partner/lotte.png";
import MEGA from "../../assets/images/icon-partner/megags.png";
import CINE from "../../assets/images/icon-partner/cinestar.png";
import moment from "moment";
import _ from "lodash";

export default function Profile() {
  const user = JSON.parse(localStorage.getItem("USER_LOGIN"));
  const dispatch = useDispatch();
  const { thongTinTaiKhoan } = useSelector((state) => state.purchase);
  const { thongTinDatVe } = thongTinTaiKhoan;
  useEffect(() => {
    dispatch(postApiLayThongTinNguoiDung());
  }, []);
  const renderListThongTinDatVe = () => {
    return thongTinDatVe?.map((listVe, index) => {
      return (
        <div
          className="grid grid-cols-12 rounded-xl shadow-2xl drop-shadow-2xl md:mb-10 mb-5"
          key={index}
        >
          <div className="col-span-5 lg:col-span-3 sm:h-72 h-56 mr-5">
            <img
              src={thongTinDatVe[index].hinhAnh}
              alt=""
              className="w-full h-full rounded-2xl"
            />
          </div>
          <div className="col-span-7 lg:col-span-9 h-52">
            <div className="flex items-center">
              <img
                src={
                  thongTinDatVe[index].danhSachGhe[0].maHeThongRap === "CGV"
                    ? CGV
                    : thongTinDatVe[index].danhSachGhe[0].maHeThongRap ===
                      "CineStar"
                    ? CINE
                    : thongTinDatVe[index].danhSachGhe[0].maHeThongRap ===
                      "Galaxy"
                    ? GALAXY
                    : thongTinDatVe[index].danhSachGhe[0].maHeThongRap ===
                      "LotteCinima"
                    ? LOTTE
                    : thongTinDatVe[index].danhSachGhe[0].maHeThongRap ===
                      "MegaGS"
                    ? MEGA
                    : BHD
                }
                alt="..."
                className="h-16 md:h-25 rounded-2xl"
              />
              <div className="col-span-7 lg:col-span-9 text-sm md:text-xl lg:text-2xl ml-2 my-auto ">
                <h1 className="text-green-400">
                  {thongTinDatVe[index].danhSachGhe[0].tenHeThongRap}
                </h1>
              </div>
            </div>
            <div className="text-base sm:text-xl md:text-2xl md:mt-0 lg:mt-5 md:row-span-2 lg:row-span-1">
              <div>
                <p className="mb-1 mt-2">
                  <span>Ngày Đặt - </span>
                  <span className="text-red-600">{`${moment(
                    thongTinDatVe[index].ngayDat
                  ).format("L")} - `}</span>
                  <span>{thongTinDatVe[index].danhSachGhe[0].tenCumRap}</span>
                </p>
                <p className="text-base sm:text-xl md:text-2xl mt-2">
                  <span>Ghế: </span>
                  <span className="text-green-500">{renderListGhe(index)}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderListGhe = (index) => {
    let arrGhe = thongTinDatVe[index].danhSachGhe;
    let sortGhe = _.uniqBy(arrGhe, "tenGhe");
    sortGhe = sortGhe.sort((a, b) => (a.tenGhe * 1 > b.tenGhe * 1 ? 1 : -1));
    return sortGhe.map((ghe, index) => {
      return <span key={index}>{`[${ghe.tenGhe}] `}</span>;
    });
  };

  return (
    <div
      style={{
        background: `url(${backGround}) center / cover`,
        padding: "70px 32px",
      }}
    >
      <div className="bg-white container xl:max-w-6xl my-10 py-5">
        <h1 className="text-center font-black text-red-600 text-3xl mb-10  pt-10">
          Thông tin chi tiết
        </h1>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 10 }}
          initialValues={{ remember: true }}
          size="large"
        >
          <Form.Item label="Họ và tên">
            <Input disabled placeholder={user.hoTen} />
          </Form.Item>
          <Form.Item label="Tên tài khoản">
            <Input disabled placeholder={user.taiKhoan} />
          </Form.Item>
          <Form.Item label="Địa chỉ email">
            <Input
              disabled
              placeholder={
                user.email &&
                user.email.substring(0, 2) +
                  "*****" +
                  user.email.substring(user.email.indexOf("@"))
              }
            />
          </Form.Item>
          <Form.Item label="Số điện thoại">
            <Input
              disabled
              placeholder={user.soDT && user.soDT.substr(0, 5) + "*****"}
            />
          </Form.Item>
        </Form>
      </div>
      <div className="bg-white container xl:max-w-6xl my-10 py-5">
        <h1 className="text-center font-black text-red-600 text-3xl mb-10  pt-10">
          Lịch sử đặt vé
        </h1>
        {renderListThongTinDatVe()}
      </div>
    </div>
  );
}
