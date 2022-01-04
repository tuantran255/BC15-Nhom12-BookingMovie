import React from "react";
import { Button, Divider, Tabs } from "antd";
import { useSelector } from "react-redux";
import moment from "moment";

const { TabPane } = Tabs;
export default function TabsDetail(props) {
  const { filmDetail } = useSelector(state => state.detail);
  const { heThongRapChieu } = filmDetail;

  return (
    <div>
      <Tabs tabPosition="left" type="card" defaultActiveKey="1" centered>
        {heThongRapChieu?.map((cumRap, index) => {
          console.log(cumRap);
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
                  <div className="mb-5 mr-5" key={index}>
                    <Divider orientation="left ">
                      <h1 className="text-2xl text-left">{rapChieu.tenCumRap}</h1>
                      <h3>{`Địa chỉ: ${rapChieu.diaChi}`}</h3>
                    </Divider>
                    <div className="grid grid-cols-3 gap-10">
                      {rapChieu.lichChieuPhim?.map((gioChieu, index) => {
                        return (
                          <Button danger shape="round" key={index}>
                            <span>{moment(gioChieu.ngayChieuGioChieu).format("hh:mm A")}</span>
                            <span>~</span>
                            <span>{moment(gioChieu.ngayChieuGioChieu).format("L")}</span>
                          </Button>
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
