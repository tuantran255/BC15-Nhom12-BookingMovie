import React, { Fragment, useState } from "react";
import { NavLink } from "react-router-dom";
import { Tabs } from "antd";
import moment from "moment";
import "./HomeMenuStyle.css";

const { TabPane } = Tabs;

export default function HomeMenu({ arrCinema }) {
  const [state, setState] = useState({ tabPosition: "left" });
  const { tabPosition } = state;
  const renderListCinema = () => {
    return arrCinema?.map((cinema, index) => {
      let { tabPosition } = state;
      return (
        <TabPane
          tab={
            <Fragment>
              <img src={cinema.logo} className="rounded-full my-4" width="56" />
              <hr />
            </Fragment>
          }
          key={index}
        >
          <Tabs tabPosition={tabPosition}>
            {cinema.lstCumRap?.map((cumRap, index) => {
              if (index < 8) {
                return (
                  <TabPane
                    tab={
                      <Fragment>
                        <div className="flex my-4">
                          <img
                            src={cumRap.hinhAnh}
                            width="50"
                            style={{ height: "50px" }}
                            className="mr-2"
                            alt={cumRap.tenCumRap}
                          />
                          <div className="text-left basis-full">
                            <p className="mb-0 text-green-500 text-sm">
                              {cumRap.tenCumRap.length > 30
                                ? cumRap.tenCumRap.substr(0, 30) + "..."
                                : cumRap.tenCumRap}
                            </p>
                            <p className="mt-0 mb-1 text-gray-600 text-xs font-thin">
                              {cumRap.diaChi.length > 30
                                ? cumRap.diaChi.substr(0, 30) + "..."
                                : cumRap.diaChi}
                            </p>
                            <p className="text-red-400 mb-0 text-xs">{`[Chi tiết]`}</p>
                          </div>
                          <hr />
                        </div>
                        {index < 7 && <hr />}
                      </Fragment>
                    }
                    key={index}
                    tabBarStyle={{ padding: 0 }}
                  >
                    <div
                      className="overflow-y-scroll"
                      style={{ height: "700px" }}
                    >
                      {cumRap.danhSachPhim?.map((movie, index) => {
                        return (
                          <Fragment key={index}>
                            <div className="my-4 px-7 flex">
                              <img
                                src={movie.hinhAnh}
                                width="80"
                                style={{ height: "120px" }}
                                alt={movie.tenPhim}
                              />
                              <div className="ml-4">
                                <p className="font-semibold text-xl">
                                  {movie.hot === true && (
                                    <span className="inline-block bg-orange-600 text-white px-2 mr-2 rounded-lg font-thin">
                                      Hot
                                    </span>
                                  )}
                                  {movie.tenPhim}
                                </p>
                                <p>{movie.diaChi}</p>
                                <div className="grid grid-cols-2 gap-5">
                                  {movie.lstLichChieuTheoPhim
                                    ?.slice(0, 4)
                                    .map((time, index) => {
                                      return (
                                        <NavLink
                                          to={`/purchase/${time.maLichChieu}`}
                                          key={index}
                                          className="text-red-400  bg-slate-50 px-3 py-2 rounded-lg border-solid border hover:text-red-500 hover:scale-105 transition-all duration-200"
                                        >
                                          <span className="text-green-600">
                                            {moment(
                                              time.ngayChieuGioChieu
                                            ).format("MMM Do")}{" "}
                                            -{" "}
                                          </span>
                                          {moment(
                                            time.ngayChieuGioChieu
                                          ).format("hh:mm A")}
                                        </NavLink>
                                      );
                                    })}
                                </div>
                              </div>
                            </div>
                            <hr style={{ width: "90%", margin: "auto" }} />
                          </Fragment>
                        );
                      })}
                    </div>
                  </TabPane>
                );
              }
            })}
          </Tabs>
        </TabPane>
      );
    });
  };
  return (
    <div id="homeCinema" className="container py-5 xl:max-w-7xl homeMenu lg:block hidden">
      <Tabs tabPosition={tabPosition}>{renderListCinema()}</Tabs>
    </div>
  );
}
