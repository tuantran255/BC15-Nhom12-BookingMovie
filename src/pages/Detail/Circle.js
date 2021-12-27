import React from "react";
import "./circle.css";
export default function Circle() {
  return (
    <div>
      <div className="c100 p25 green">
        <span>25%</span>
        <div className="slice">
          <div className="bar" />
          <div className="fill" />
        </div>
      </div>
    </div>
  );
}
