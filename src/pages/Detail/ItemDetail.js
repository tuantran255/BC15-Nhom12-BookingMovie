import React from "react";

export default function ItemDetail(props) {
  return (
    <div>
      <img src="https://picsum.photos/300/400" alt="..." className="w-screen h-screen relative opacity-40" />
      <div className="grid grid-cols-12">
        <div className="grid grid-flow-col auto-cols-max gap-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div>
            <img src="https://picsum.photos/300/400" alt="" className="rounded-xl drop-shadow-2xl" />
          </div>
          <div>
            <img src="https://picsum.photos/300/400" alt="" />
          </div>
          <div>
            <img src="https://picsum.photos/300/400" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
