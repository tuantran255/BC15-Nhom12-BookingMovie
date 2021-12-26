import React from "react";
import { Tabs } from "antd";
import ListItemTabsDetail from "./ListItemTabsDetail";
const { TabPane } = Tabs;
export default function TabsDetail(props) {
  return (
    <div>
      <Tabs tabPosition="left" type="card">
        <TabPane
          tab={
            <div className="flex items-center justify-center">
              <img src="./images/icon-partner/bhd.png" alt="" className="w-14 h-14" />
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
              <img src="./images/icon-partner/cgv.png" alt="" className="w-14 h-14" />
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
              <img src="./images/icon-partner/cinestar.png" alt="" className="w-14 h-14" />
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
              <img src="./images/icon-partner/galaxycine.png" alt="" className="w-14 h-14" />
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
              <img src="./images/icon-partner/lotte.png" alt="" className="w-14 h-14" />
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
