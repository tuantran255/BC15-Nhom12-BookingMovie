import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CloseCircleOutlined, UserOutlined } from "@ant-design/icons";
import { addGheDangChon } from "../../redux/slices/purchaseSlice";
import "./MenuChair.css";

export default function Chair() {
  const dispatch = useDispatch();
  const { userLogin } = useSelector(state => state.login);

  const { danhSachPhongVe, gheDangChon } = useSelector(state => state.purchase);
  const { danhSachGhe } = danhSachPhongVe;

  return (
    <div className="text-center mt-10 ">
      <div className="grid grid-cols-8 md:grid-cols-16 gap-4 justify-items-center">
        {danhSachGhe?.map((listGhe, index) => {
          let cssGhe = "gheThuong";
          let disable = false;
          if (listGhe.taiKhoanNguoiDat) {
            cssGhe = "gheDaDat";
            disable = true;
          }
          let cssGheDangDat = "";
          let indexGhe = gheDangChon.findIndex(ghe => ghe.tenGhe === listGhe.tenGhe);
          if (indexGhe !== -1) {
            cssGheDangDat = "gheDangChon";
          }
          if (listGhe.loaiGhe === "Vip" && !listGhe.taiKhoanNguoiDat) {
            cssGhe = "gheVip";
          }
          let cssGheNguoiDungDat = "";
          if (userLogin.taiKhoan === listGhe.taiKhoanNguoiDat) {
            cssGheNguoiDungDat = "gheNguoiDungDat";
          }
          return (
            <button
              className={`col-span-1 ${cssGhe} ${cssGheDangDat} ${cssGheNguoiDungDat}`}
              key={index}
              disabled={disable}
              onClick={() => {
                dispatch(addGheDangChon(listGhe));
              }}
            >
              {!disable ? listGhe?.tenGhe : cssGheNguoiDungDat !== "" ? <UserOutlined /> : <CloseCircleOutlined />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
