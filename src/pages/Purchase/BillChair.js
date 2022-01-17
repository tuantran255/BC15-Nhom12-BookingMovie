import React, { useState } from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { postApiDatVe } from "../../redux/slices/purchaseSlice";
import { Modal } from "antd";
import { useHistory } from "react-router-dom";

export default function BillChair() {
  const history = useHistory();
  const dispatch = useDispatch();
  const { danhSachPhongVe, gheDangChon } = useSelector(state => state.purchase);
  const { userLogin } = useSelector(state => state.login);

  let sortGheDangChon = _.sortBy(gheDangChon, "giaVe", "tenGhe");
  let tongTien = gheDangChon.reduce((previousValue, currentValue) => previousValue + currentValue.giaVe, 0);
  let isDatVe = true;
  if (gheDangChon[0]?.tenGhe) {
    isDatVe = false;
  }
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

  const danhSachVeChon = {
    maLichChieu: danhSachPhongVe.thongTinPhim?.maLichChieu,
    danhSachVe: gheDangChon,
  };

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
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
      <button
        disabled={isDatVe}
        className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border-2 border-red-600 hover:border-transparent rounded w-full text-3xl mt-5"
        onClick={showModal}
      >
        Đặt vé
      </button>
      <>
        <Modal visible={isModalVisible} centered={true} footer={null} closable={false}>
          <div className="bg-white py-2 rounded-2xl text-center">
            <h1 className="text-xl mb-4 font-bold text-red-600">Thông Tin Thanh Toán</h1>
            <table className="table-fixed w-full text-center mb-2">
              <thead>
                <tr>
                  <th className="border-2 border-red-600">Số ghế</th>
                  <th className="border-2 border-red-600">Loại ghế</th>
                  <th className="border-2 border-red-600">Giá ghế</th>
                </tr>
              </thead>
              <tbody>{danhSachGheDangChon()}</tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td className="border-2 border-red-600">Thanh toán</td>
                  <td className="border-2 border-red-600">{`${tongTien.toLocaleString("vi")} VNĐ`}</td>
                </tr>
              </tfoot>
            </table>
            <button className="bg-indigo-500 px-4 py-2 rounded-md text-md text-white m-5" onClick={handleCancel}>
              Hủy
            </button>
            <button
              className="bg-red-500 px-3 py-2 ml-2 rounded-md text-md text-white font-semibold"
              onClick={() => {
                dispatch(postApiDatVe(danhSachVeChon));
                history.push("/historybill");
              }}
            >
              Thanh Toán
            </button>
          </div>
        </Modal>
      </>
    </div>
  );
}
