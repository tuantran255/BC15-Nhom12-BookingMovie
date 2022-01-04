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
      <img src={filmDetail.hinhAnh} alt="..." className="w-screen h-screen relative brightness-50" />
      <div className="grid grid-cols-12">
        <div className="grid grid-cols-3  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div>
            <img src={filmDetail.hinhAnh} alt="" className="rounded-2xl drop-shadow-md h-full " />
          </div>
          <div className="col-span-2">
            <div className="flex text-xl text-white  ml-5 mr-5">
              <div>
                <p>{`Khởi Chiếu: ${moment(filmDetail.ngayKhoiChieu).format("L")}`}</p>
                <p className="font-black text-5xl text-red-500">{filmDetail.tenPhim}</p>
                <div>
                  <p>Mô tả:</p>
                  <p>{filmDetail.moTa}</p>
                </div>
                <div>
                  <Button type="primary" size="large" className="ml-5">
                    <a href={filmDetail.trailer}>Trailer</a>
                  </Button>
                  <Button type="primary" size="large" className="ml-5">
                    <Link to="datVe" spy={true} smooth={true}>
                      Đặt vé
                    </Link>
                  </Button>
                </div>
              </div>
              <Circle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
