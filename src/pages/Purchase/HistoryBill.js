import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { postApiLayThongTinNguoiDung } from "../../redux/slices/purchaseSlice";
import moment from "moment";
import _ from "lodash";
import BHD from "../../assets/images/icon-partner/bhd.png";
import CGV from "../../assets/images/icon-partner/cgv.png";
import GALAXY from "../../assets/images/icon-partner/galaxycine.png";
import LOTTE from "../../assets/images/icon-partner/lotte.png";
import MEGA from "../../assets/images/icon-partner/megags.png";
import CINE from "../../assets/images/icon-partner/cinestar.png";

export default function HistoryBill() {
  const dispatch = useDispatch();
  const { thongTinTaiKhoan } = useSelector(state => state.purchase);
  const { thongTinDatVe } = thongTinTaiKhoan;
  useEffect(() => {
    dispatch(postApiLayThongTinNguoiDung());
  }, []);

  const renderListThongTinDatVe = () => {
    return thongTinDatVe?.map((listVe, index) => {
      return (
        <div className="grid grid-cols-12 rounded-xl shadow-2xl drop-shadow-2xl ml-10 mb-10" key={index}>
          <div className="col-span-3 h-64 mr-5">
            <img src={thongTinDatVe[index].hinhAnh} alt="" className="w-full h-full rounded-2xl" />
          </div>
          <div className="col-span-9 h-60">
            <div className="grid grid-rows-2">
              <div className="grid grid-cols-12">
                <div className="col-span-3">
                  <img
                    src={
                      thongTinDatVe[index].danhSachGhe[0].maHeThongRap === "CGV"
                        ? CGV
                        : thongTinDatVe[index].danhSachGhe[0].maHeThongRap === "CineStar"
                        ? CINE
                        : thongTinDatVe[index].danhSachGhe[0].maHeThongRap === "Galaxy"
                        ? GALAXY
                        : thongTinDatVe[index].danhSachGhe[0].maHeThongRap === "LotteCinima"
                        ? LOTTE
                        : thongTinDatVe[index].danhSachGhe[0].maHeThongRap === "MegaGS"
                        ? MEGA
                        : BHD
                    }
                    alt=""
                    className="h-32 w-full rounded-2xl"
                  />
                </div>
                <div className="col-span-9 text-2xl ml-5 my-auto">
                  <h1>{thongTinDatVe[index].danhSachGhe[0].tenHeThongRap}</h1>
                </div>
              </div>
              <div className="text-2xl mt-5">
                <div className="">
                  <p className="mb-1">
                    <span>Ngày Đặt - </span>
                    <span className="text-red-600">{`${moment(thongTinDatVe[index].ngayDat).format("L")} - `}</span>
                    <span>{thongTinDatVe[index].danhSachGhe[0].tenCumRap}</span>
                  </p>
                  <p className="text-xl mt-2">
                    <span>Ghế: </span>
                    <span className="text-green-500">{renderListGhe(index)}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const renderListGhe = index => {
    let arrGhe = thongTinDatVe[index].danhSachGhe;
    let sortGhe = _.uniqBy(arrGhe, "tenGhe");
    sortGhe = sortGhe.sort((a, b) => (a.tenGhe * 1 > b.tenGhe * 1 ? 1 : -1));
    return sortGhe.map((ghe, index) => {
      return <span key={index}>{`[${ghe.tenGhe}] `}</span>;
    });
  };

  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-10">
        <h1 className="text-4xl font-bold title-font mb-4 text-red-500 tracking-widest">Lịch sử đặt vé của bạn</h1>
      </div>
      <div className="grid grid-cols-2 gap-4">{renderListThongTinDatVe()}</div>
    </div>
  );
}
