import React from "react";
import { Tabs } from "antd";
import ListItemTabsDetail from "./ListItemTabsDetail";
import bhd from "../../assets/images/icon-partner/bhd.png";
import cgv from "../../assets/images/icon-partner/cgv.png";
import cinestar from "../../assets/images/icon-partner/cinestar.png";
import galaxycine from "../../assets/images/icon-partner/galaxycine.png";
import lotte from "../../assets/images/icon-partner/lotte.png";

const { TabPane } = Tabs;
export default function TabsDetail(props) {
  return (
    <div>
      <Tabs tabPosition="left" type="card">
        <TabPane
          tab={
            <div className="flex items-center justify-center">
              <img src={bhd} alt="" className="w-14 h-14" />
              <h3 className="ml-2 text-sm text-black hover:text-red-500 font-medium">BHD Star Cineplex</h3>
            </div>
          }
          key="1"
        >
          <ListItemTabsDetail />
        </TabPane>
        <TabPane
          tab={
            <div className="flex items-center justify-center">
              <img src={cgv} alt="" className="w-14 h-14" />
              <h3 className="ml-2 text-sm text-black hover:text-red-500 font-medium">BHD Star Cineplex</h3>
            </div>
          }
          key="2"
        >
          <ListItemTabsDetail />
        </TabPane>
        <TabPane
          tab={
            <div className="flex items-center justify-center">
              <img src={cinestar} alt="" className="w-14 h-14" />
              <h3 className="ml-2 text-sm text-black hover:text-red-500 font-medium">BHD Star Cineplex</h3>
            </div>
          }
          key="3"
        >
          <ListItemTabsDetail />
        </TabPane>
        <TabPane
          tab={
            <div className="flex items-center justify-center">
              <img src={galaxycine} alt="" className="w-14 h-14" />
              <h3 className="ml-2 text-sm text-black hover:text-red-500 font-medium">BHD Star Cineplex</h3>
            </div>
          }
          key="4"
        >
          <ListItemTabsDetail />
        </TabPane>
        <TabPane
          tab={
            <div className="flex items-center justify-center">
              <img src={lotte} alt="" className="w-14 h-14" />
              <h3 className="ml-2 text-sm text-black hover:text-red-500 font-medium">BHD Star Cineplex</h3>
            </div>
          }
          key="4"
        >
          <ListItemTabsDetail />
        </TabPane>
      </Tabs>
    </div>
  );
}
