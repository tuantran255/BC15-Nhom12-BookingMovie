import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { CloseCircleOutlined } from "@ant-design/icons";
import { addGheDangChon } from "../../redux/slices/purchaseSlice";
import "./MenuChair.css";

export default function Chair() {
  const dispatch = useDispatch();
  const { danhSachPhongVe, gheDangChon } = useSelector(state => state.purchase);
  const { danhSachGhe } = danhSachPhongVe;
  return (
    <div className="text-center mt-10 ">
      <div className="grid grid-cols-16 gap-4 justify-items-center">
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
          return (
            <button
              className={`col-span-1 ${cssGhe} ${cssGheDangDat}`}
              key={index}
              disabled={disable}
              onClick={() => {
                dispatch(addGheDangChon(listGhe));
              }}
            >
              {!disable ? listGhe?.tenGhe : <CloseCircleOutlined />}
            </button>
          );
        })}
      </div>
    </div>
  );
}
