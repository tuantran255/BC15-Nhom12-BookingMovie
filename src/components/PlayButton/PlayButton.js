import React from "react";
import Fancybox from "../Fancybox/Fancybox";
import "./PlayButton.css";

export default function PlayButton(props) {
  return (
    <Fancybox options={{ infinite: false }}>
      <a
        href={props.linkTrailer}
        data-fancybox={props.maPhim}
        className="buttonPlay"
      ></a>
    </Fancybox>
  );
}
