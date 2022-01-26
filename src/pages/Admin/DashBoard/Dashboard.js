import React, { Fragment } from "react";
import { Input, Button, Tooltip, Table } from "antd";
import { SearchOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { deletePhim } from "../../../redux/slices/filmsSlice";
import { NavLink } from "react-router-dom";
import { getAPIDanhSachNguoiDung } from "../../../redux/slices/dashboardSlice";

export default function Dashboard() {
  const dispatch = useDispatch();
  const { danhSachNguoiDung } = useSelector(state => state.dashboard);
  useEffect(() => {
    dispatch(getAPIDanhSachNguoiDung());
  }, []);

  const columns = [
    {
      title: "STT",
      dataIndex: "soThuTu",
      sorter: (a, b) => a.soThuTu - b.soThuTu,
      width: "5%",
      align: "center",
    },

    {
      title: "Họ và tên",
      dataIndex: "hoTen",
      width: "15%",
      align: "center",
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      width: "15%",
      align: "center",
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      width: "15%",
      align: "center",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
      align: "center",
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDt",
      width: "10%",
      align: "center",
    },

    {
      title: "Hành động",
      width: "20%",
      render: (text, films) => {
        let maPhim = films.maPhim;
        return (
          <Fragment>
            <NavLink key={1} to={`/admin/films/edituser/${films.maPhim}`} className="text-blue-500 text-2xl p-5">
              <EditOutlined />
            </NavLink>
            <button
              key={2}
              className="text-red-600 text-2xl p-5 hover:text-red-400"
              onClick={() => {
                if (window.confirm("Bạn có muốn xóa phim" + films.tenPhim)) {
                  dispatch(deletePhim(maPhim));
                }
              }}
            >
              <DeleteOutlined />
            </button>
          </Fragment>
        );
      },
      align: "center",
    },
  ];
  const newData = [];
  let index = 0;
  danhSachNguoiDung.map(obj => {
    index = index + 1;
    let newobj = { ...obj, soThuTu: index };
    newData.push(newobj);
  });
  const data = newData;
  return (
    <div>
      <h1 className="text-3xl font-black text-center text-red-600">Quản lý người dùng:</h1>
      <NavLink
        to="/admin/films/adduser"
        className="border-2 px-5 py-2 border-red-500 text-red-500 text-xl rounded-full hover:bg-red-500 hover:text-white"
      >
        Thêm người dùng
      </NavLink>
      <div className="my-10 flex">
        <Input placeholder="Tìm Tên Phim" size="large" bordered="true" />
        <Tooltip title="search">
          <Button icon={<SearchOutlined />} className="my-button-search-films hover:bg-red-500" type="submit" />
        </Tooltip>
      </div>
      <Table columns={columns} dataSource={data} rowKey={"soThuTu"} />
    </div>
  );
}
