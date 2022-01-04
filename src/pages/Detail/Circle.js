import React from "react";
import { useSelector } from "react-redux";
import "./circle.css";
export default function Circle() {
  const { filmDetail } = useSelector(state => state.detail);
  const danhGia = `${filmDetail.danhGia * 10}`;
  return (
    <div>
      <h3 className="text-white text-center">Đánh giá</h3>
      <div className={`c100 p${danhGia} green`}>
        <span>{danhGia}%</span>
        <div className="slice">
          <div className="bar" />
          <div className="fill" />
        </div>
      </div>
    </div>
  );
}
