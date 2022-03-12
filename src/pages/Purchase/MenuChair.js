import React from "react";
import Chair from "./Chair";
import "./MenuChair.css";
import { CloseCircleOutlined, UserOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import Timer from "./Timer";

export default function MenuChair() {
  const { danhSachPhongVe } = useSelector(state => state.purchase);
  const { thongTinPhim } = danhSachPhongVe;
  return (
    <div className="w-4/5 mx-auto mb-10 ">
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          <div className="grid grid-cols-12">
            <div className="col-span-4 md:col-span-2">
              <img src={thongTinPhim?.hinhAnh} alt="" className="md:w-20" />
            </div>
            <div className="col-span-8 md:col-span-10 my-auto md:ml-10">
              <div>{thongTinPhim?.tenCumRap}</div>
              <div>
                <span>{thongTinPhim?.gioChieu}</span>
                <span> - </span>
                <span>{thongTinPhim?.tenRap}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-4 text-right my-auto">
          <div className="mt-2">
            <h3>Thời gian giữ vé</h3>
            <h1 className="text-red-600 font-black text-3xl mr-2">
              <Timer />
            </h1>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-black w-full h-3 mt-2 relative">
          <h3 className="absolute top-5 left-1/2 transform -translate-x-1/2">Màn Hình</h3>
        </div>
        <div className="menu-screen w-full"></div>
      </div>
      <div>
        <Chair />
      </div>
      <div className="text-center mt-10">
        <div className="grid grid-cols-25">
          <div className="col-span-5">
            <div className="gheDangChon relative left-1/2 transform -translate-x-1/2"></div>
            <h3 className="mt-2">Ghế đang chọn</h3>
          </div>
          <div className="col-span-5">
            <div className="gheVip relative left-1/2 transform -translate-x-1/2"></div>
            <h3 className="mt-2">Ghế Vip</h3>
          </div>
          <div className="col-span-5">
            <div className="gheThuong relative left-1/2 transform -translate-x-1/2"></div>
            <h3 className="mt-2">Ghế thường</h3>
          </div>
          <div className="col-span-5">
            <CloseCircleOutlined className="gheDaDat p-2" />
            <h3 className="mt-2">Ghế đã đặt</h3>
          </div>
          <div className="col-span-5">
            <UserOutlined className="gheNguoiDungDat p-2" />
            <h3 className="mt-2">Ghế bạn đặt</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
