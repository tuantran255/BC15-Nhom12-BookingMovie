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
      <div className="grid grid-cols-12 pt-20">
        <div className="lg:col-span-8 col-span-12 md:mb-10 sm:mb-140">
          <MenuChair />
        </div>
        <div className="lg:col-span-4 col-span-12 shadow-2xl">
          <BillChair />
        </div>
      </div>
    </div>
  );
}
