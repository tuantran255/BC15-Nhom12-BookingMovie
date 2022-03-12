import { Button } from "antd";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-scroll";
import Circle from "./Circle";

export default function ItemDetail(props) {
  const { filmDetail } = useSelector(state => state.detail);
  return (
    <div>
      <img src={filmDetail.hinhAnh} alt="..." className="w-screen h-screen min-h-[900px] relative brightness-30" />
      <div className="grid grid-cols-12 ">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full md:w-11/12 lg:w-1/2 lg:h-2/4 md:h-1/3">
          <div className="md:col-span-1 col-span-2 mt-0 sm:mt-6">
            <img
              src={filmDetail.hinhAnh}
              alt=""
              className="rounded-2xl drop-shadow-md md:h-full md:w-full h-80 mb-5 relative left-1/2 transform -translate-x-1/2"
            />
          </div>
          <div className="md:col-span-1 sm:col-span-6 ">
            <div className="text-xl text-white  ml-5 mr-5 lg:col-span-1">
              <div>
                <p>{`Khởi Chiếu: ${moment(filmDetail.ngayKhoiChieu).format("L")}`}</p>
                <p className="font-black sm:text-xl md:text-3xl text-red-500">{filmDetail.tenPhim}</p>
                <div>
                  <p>Mô tả:</p>
                  <p className="text-sm md:text-2xl ">
                    {filmDetail.moTa?.length > 150 ? filmDetail.moTa.substr(0, 150) + "..." : filmDetail.moTa}
                  </p>
                </div>
                <div className="flex">
                  <Button type="primary" size="large" className="ml-5">
                    <a href={filmDetail.trailer} target="_blank" rel="noreferrer">
                      Trailer
                    </a>
                  </Button>
                  <Button type="primary" size="large" className="ml-5">
                    <Link to="datVe" spy={true} smooth={true}>
                      Đặt vé
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          <Circle />
        </div>
      </div>
    </div>
  );
}
