import React, { Fragment } from "react";
import ItemDetail from "./ItemDetail";
import ListDetail from "./ListDetail";
export default function Detail(props) {
  return (
    <Fragment>
      <div>
        <ItemDetail />
        <ListDetail />
      </div>
    </Fragment>
  );
}
