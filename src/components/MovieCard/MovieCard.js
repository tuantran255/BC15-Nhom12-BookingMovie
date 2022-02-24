import React from "react";
import { NavLink } from "react-router-dom";
import Fancybox from "../Fancybox/Fancybox";
import "./MovieCard.css";

export default function MovieCard(props) {
  return (
    <div className="cardMovie">
      <div className="image">
        <img src={props.img} className="w-full h-full" />
      </div>
      <div className="details">
        <div className="center">
          <h1>{props.nameMovie}</h1>
          <p>
            {props.des.length > 80
              ? props.des.substr(0, 80) + "..."
              : props.des}
          </p>
          <ul>
            <li>
              <NavLink to={`/detail/${props.movieID}`}>Mua vé</NavLink>
            </li>
            <li>
              <Fancybox options={{ infinite: false }}>
                <a href={props.trailer} data-fancybox={props.movieID}>
                  Trailer
                </a>
              </Fancybox>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
