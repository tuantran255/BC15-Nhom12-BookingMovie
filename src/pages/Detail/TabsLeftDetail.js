import React from "react";
import { Divider, Tabs } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";
import { NavLink } from "react-router-dom";

const { TabPane } = Tabs;
export default function TabsDetail(props) {
  const { filmDetail } = useSelector(state => state.detail);
  const { heThongRapChieu } = filmDetail;

  return (
    <div>
      <Tabs tabPosition="left" type="card" defaultActiveKey="1" centered>
        {heThongRapChieu?.map((cumRap, index) => {
          return (
            <TabPane
              tab={
                <div className="flex items-center justify-center">
                  <img src={cumRap.logo} alt="" className="w-14 h-14" />
                  <h3 className="ml-2 text-sm text-black hover:text-red-400 font-medium">{cumRap.maHeThongRap}</h3>
                </div>
              }
              key={index}
            >
              {cumRap.cumRapChieu?.map((rapChieu, index) => {
                return (
                  <div className="mb-5 mr-5 w-full" key={index}>
                    <Divider orientation="left">
                      <h1 className="md:text-2xl sm:text-sm text-left">{rapChieu.tenCumRap}</h1>
                      <div>
                        <p className="md:text-xl sm:text-xs text-left break-all">{`Địa chỉ: ${rapChieu.diaChi}`}</p>
                      </div>
                    </Divider>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                      {rapChieu.lichChieuPhim.map((gioChieu, index) => {
                        return (
                          <NavLink
                            key={index}
                            to={`/purchase/${gioChieu.maLichChieu}`}
                            className="border-2 text-center rounded-2xl py-2 shadow-xl w-11/12"
                          >
                            <span className="text-green-500">
                              {moment(gioChieu.ngayChieuGioChieu).format("hh:mm A")}
                            </span>
                            <span className="text-black">~</span>
                            <span className="text-red-600">{moment(gioChieu.ngayChieuGioChieu).format("L")}</span>
                          </NavLink>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </TabPane>
          );
        })}
      </Tabs>
    </div>
  );
}
