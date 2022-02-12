import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAPIDetail } from "../../redux/slices/detailSlice";
import ItemDetail from "./ItemDetail";
import ListDetail from "./ListDetail";
export default function Detail(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(getAPIDetail(id));
  }, []);

  return (
    <Fragment>
      <div>
        <ItemDetail />
        <ListDetail />
      </div>
    </Fragment>
  );
}
