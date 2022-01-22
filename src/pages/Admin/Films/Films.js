import React, { Fragment } from "react";
import { Input, Button, Tooltip, Table } from "antd";
import { SearchOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import "./Films.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getAPIDanhSachPhim } from "../../../redux/slices/filmsSlice";
import { NavLink } from "react-router-dom";
export default function Films() {
  const dispatch = useDispatch();
  const { arrDanhSachPhim } = useSelector(state => state.films);

  useEffect(() => {
    dispatch(getAPIDanhSachPhim());
  }, []);

  const columns = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",
      sorter: (a, b) => a.maPhim - b.maPhim,
      width: "10%",
      align: "center",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text, films) => {
        return (
          <Fragment>
            <img
              src={films.hinhAnh}
              alt={films.tenPhim}
              width={100}
              height={100}
              onError={e => {
                e.target.onError = null;
                e.target.src = `https//picsum.photos/id/${films.maPhim}/100/100`;
              }}
            />
          </Fragment>
        );
      },
      width: "10%",
      align: "center",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      width: "15%",
      align: "center",
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      width: "45%",
      align: "center",
      render: (text, films) => {
        return <Fragment>{films.moTa.length > 100 ? films.moTa.substr(0, 100) + "..." : films.moTa}</Fragment>;
      },
    },
    {
      title: "Hành động",
      width: "20%",
      render: (text, films) => {
        return (
          <Fragment>
            <NavLink to="/" className="text-blue-500 text-2xl p-5">
              <EditOutlined />
            </NavLink>
            <NavLink to="/" className="text-red-500 text-2xl p-5">
              <DeleteOutlined />
            </NavLink>
          </Fragment>
        );
      },
      align: "center",
    },
  ];

  const data = arrDanhSachPhim;

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <div>
      <h1 className="text-2xl font-black text-center">Quản lý phim:</h1>
      <NavLink
        to="/admin/films/addnewfilms"
        className="border-2 px-5 py-2 border-red-500 text-red-500 text-xl rounded-full hover:bg-red-500 hover:text-white"
      >
        Thêm Phim
      </NavLink>
      <div className="my-10 flex">
        <Input placeholder="Tìm Tên Phim" size="large" bordered="true" />
        <Tooltip title="search">
          <Button icon={<SearchOutlined />} className="my-button-search-films hover:bg-red-500" type="submit" />
        </Tooltip>
      </div>
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
}
