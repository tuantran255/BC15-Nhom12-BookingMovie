import React from "react";
import "./NewsCard.css";

export default function NewCard(props) {
  return (
    <div className="flex my-5 newCard">
      <a target="_blank" href={props.link} className="bg-black">
        <img
          src={props.img}
          alt="imgNew"
          width="200px"
          style={{ height: "130px" }}
        />
      </a>
      <div className="flex flex-col flex-1 ml-4">
        <a
          target="_blank"
          href={props.link}
          className="flex-1 text-lg text-black title"
        >
          {props.title}
        </a>
        <div className="flex flex-wrap justify-between pt-2 text-xs text-coolGray-600">
          <p className="text-sm desc">{props.desc}</p>
          <span>{props.date}</span>
          <span>{props.view} Views</span>
        </div>
      </div>
    </div>
  );
}
