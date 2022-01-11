import React from "react";

export default function BillChair() {
  return (
    <div className="w-4/5 mx-auto text-base font-black">
      <h1 className="text-lime-500 text-center text-6xl">0 VNĐ</h1>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Email:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">suhuynhpr@gmail.com</h1>
        </div>
      </div>
      <hr />
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Số điện thoại:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-red-600">11111111</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Cụm rạp:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">BHD Star Cineplex - Vincom Lê Văn Việt</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Địa chỉ:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">L4-Vincom Plaza, 50 Lê Văn Việt, Q.9</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Rạp:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">Rạp 10</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Ngày giờ chiếu:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">
            <span>01/01/2019</span>
            <span>-</span>
            <span className="text-red-600">10:00</span>
          </h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Tên Phim:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">Siêu Thú Cuồng Nộ</h1>
        </div>
      </div>
      <hr />
      <div className="grid grid-cols-12 my-5">
        <div className="col-span-4">
          <h1>Chọn:</h1>
        </div>
        <div className="col-span-8">
          <h1 className="text-right text-lime-500">
            <span>Ghế 150</span>
            <span>-</span>
            <span className="text-red-600">75000VNĐ</span>
          </h1>
        </div>
      </div>

      <button className="bg-transparent hover:bg-red-600 text-red-600 font-semibold hover:text-white py-2 px-4 border-2 border-red-600 hover:border-transparent rounded w-full text-3xl mt-5">
        Đặt vé
      </button>
    </div>
  );
}
