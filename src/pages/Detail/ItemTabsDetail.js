import React from "react";
import { Divider, Button } from "antd";
export default function ItemTabsDetail() {
  return (
    <div>
      <Divider orientation="left">
        <h1 className="text-2xl">BHD Star Cineplex - 3/2</h1>
      </Divider>
      <div className="grid grid-cols-3 gap-10">
        <Button danger>
          <span>01-01-2021</span>
          <span>~</span>
          <span>10:00H</span>
        </Button>
        <Button danger>
          <span>01-01-2021</span>
          <span>~</span>
          <span>10:00H</span>
        </Button>
        <Button danger>
          <span>01-01-2021</span>
          <span>~</span>
          <span>10:00H</span>
        </Button>
        <Button danger>
          <span>01-01-2021</span>
          <span>~</span>
          <span>10:00H</span>
        </Button>
        <Button danger>
          <span>01-01-2021</span>
          <span>~</span>
          <span>10:00H</span>
        </Button>
      </div>
    </div>
  );
}
