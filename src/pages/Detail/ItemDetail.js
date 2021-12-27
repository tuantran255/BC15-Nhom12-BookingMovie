import React from "react";
import Circle from "./Circle";

export default function ItemDetail(props) {
  return (
    <div>
      <img src="https://picsum.photos/300/400" alt="..." className="w-screen h-screen relative brightness-50" />
      <div className="grid grid-cols-12">
        <div className="grid grid-cols-3  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div>
            <img src="https://picsum.photos/300/400" alt="" className="rounded-2xl drop-shadow-2xl" />
          </div>
          <div className="col-span-2">
            <div className="flex text-xl text-white top-1/2 translate-y-1/2 ml-5 mr-5">
              <div>
                <p>16.04.2021</p>
                <p className="font-bold text-3xl">Lật Mặt: 48h</p>
                <div className="flex">
                  <p>100 phút</p>
                  <p>-</p>
                  <p>0 IMDb</p>
                  <p>-</p>
                  <p>2D/Digital</p>
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
