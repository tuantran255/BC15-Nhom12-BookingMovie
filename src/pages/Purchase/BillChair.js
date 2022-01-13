import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
export default function BillChair() {
  const { danhSachPhongVe, gheDangChon } = useSelector(state => state.purchase);
  const { userLogin } = useSelector(state => state.login);

  let sortGheDangChon = _.sortBy(gheDangChon, "giaVe", "tenGhe");
  let tongTien = gheDangChon.reduce((previousValue, currentValue) => previousValue + currentValue.giaVe, 0);
  const danhSachGheDangChon = () => {
    return sortGheDangChon.map((ghe, index) => {
      return (
        <tr key={index}>
          <td className="border-2 border-red-600">{ghe?.tenGhe}</td>
          <td className="border-2 border-red-600">{ghe?.loaiGhe === "Vip" ? "Ghế Vip" : "Ghế Thường"}</td>
          <td className="border-2 border-red-600">{`${(ghe?.giaVe).toLocaleString("vi")} VNĐ`}</td>
        </tr>
      );
    });
  };
  return (
    <div className="w-4/5 mx-auto text-base font-black">
      <h1 className="text-lime-500 text-center text-5xl">{`${tongTien.toLocaleString("vi")} VNĐ`}</h1>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Email:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">{userLogin?.email}</h1>
        </div>
      </div>
      <hr />
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Số điện thoại:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-red-600">{userLogin?.soDT}</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Cụm rạp:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">{danhSachPhongVe.thongTinPhim?.tenCumRap}</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Địa chỉ:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">{danhSachPhongVe.thongTinPhim?.diaChi}</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Rạp:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">{danhSachPhongVe.thongTinPhim?.tenRap}</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Ngày giờ chiếu:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">
            <span>{danhSachPhongVe.thongTinPhim?.ngayChieu}</span>
            <span className="text-black">-</span>
            <span className="text-red-600">{danhSachPhongVe.thongTinPhim?.gioChieu}</span>
          </h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Tên Phim:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">{danhSachPhongVe.thongTinPhim?.tenPhim}</h1>
        </div>
      </div>
      <hr />

      <div className="mt-5">
        <h1 className="text-red-600 text-2xl text-center">Thông tin chọn ghế</h1>
        <table className="table-fixed w-full text-center ">
          <thead>
            <tr>
              <th className="border-2 border-red-600">Số ghế</th>
              <th className="border-2 border-red-600">Loại ghế</th>
              <th className="border-2 border-red-600">Giá ghế</th>
            </tr>
          </thead>
          <tbody>{danhSachGheDangChon()}</tbody>
        </table>
      </div>
      <button className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border-2 border-red-600 hover:border-transparent rounded w-full text-3xl mt-5">
        Đặt vé
      </button>
    </div>
  );
}
