import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getApiDanhSachPhongve } from "../../redux/slices/purchaseSlice";
import BillChair from "./BillChair";
import MenuChair from "./MenuChair";

export default function Purchase(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getApiDanhSachPhongve(id));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-12 h-screen pt-20">
        <div className="col-span-8">
          <MenuChair />
        </div>
        <div className="col-span-4 shadow-2xl">
          <BillChair />
        </div>
      </div>
    </div>
  );
}
