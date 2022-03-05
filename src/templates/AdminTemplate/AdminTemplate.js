import { Fragment } from "react";
import { Link, NavLink, Redirect } from "react-router-dom";
import { Route } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  LaptopOutlined,
} from "@ant-design/icons";
import { USER_LOGIN } from "../../util/apiSetting";
import "./AdminTemplate.css";
import { useState } from "react";
import LayoutHearder from "../AdminTemplate/Layout/Header/Header";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
export const AdminTemplate = props => {
  const history = useHistory();
  let { Component, path } = props;
  const { Header, Content, Footer, Sider } = Layout;
  const { SubMenu } = Menu;
  const [collapsed, setCollapsed] = useState(true);
  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };
  const { userLogin } = useSelector(state => state.login);
  if (!localStorage.getItem(USER_LOGIN)) {
    alert("Bạn chưa đãng nhập tài khoản. Vui lòng đăng nhập");
    return <Redirect to="/login" />;
  }
  if (userLogin.maLoaiNguoiDung !== "QuanTri") {
    alert("Tài khoản của bạn không có quyền truy cập vào trang này");
    return <Redirect to="/" />;
  }

  return (
    <Route
      exact
      path={path}
      render={propsRoute => {
        return (
          <Fragment>
            <Layout style={{ minHeight: "100vh" }}>
              <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
                <div className="mx-auto  font-black text-xl m-6 text-center">
                  <NavLink to="/admin" className="text-white">
                    Quản trị
                  </NavLink>
                </div>
                <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                  <SubMenu key="sub10" icon={<LaptopOutlined />} title="User">
                    <Menu.Item
                      key="1"
                      icon={<UserOutlined />}
                      onClick={() => {
                        history.push("/admin");
                      }}
                    >
                      Quản lý tài khoản
                    </Menu.Item>
                    <Menu.Item
                      key="2"
                      icon={<UserOutlined />}
                      onClick={() => {
                        history.push("/admin/dashboard/adduser");
                      }}
                    >
                      Thêm tài khoản
                    </Menu.Item>
                  </SubMenu>
                  <SubMenu key="sub20" icon={<LaptopOutlined />} title="Phim">
                    <Menu.Item
                      key="3"
                      icon={<FileOutlined />}
                      onClick={() => {
                        history.push("/admin/films");
                      }}
                    >
                      Quản lý phim
                    </Menu.Item>
                    <Menu.Item
                      key="4"
                      icon={<FileOutlined />}
                      onClick={() => {
                        history.push("/admin/films/addnewfilms");
                      }}
                    >
                      Thêm Phim
                    </Menu.Item>
                  </SubMenu>
                </Menu>
              </Sider>
              <Layout className="site-layout">
                <Header className="site-layout-background my-ant-layout-header" style={{ padding: 0 }}>
                  <LayoutHearder />
                </Header>
                <Content style={{ margin: "0 16px" }}>
                  <Breadcrumb style={{ margin: "16px 0" }}></Breadcrumb>
                  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>Ant Design ©2018 Created by Ant UED</Footer>
              </Layout>
            </Layout>
          </Fragment>
        );
      }}
    />
  );
};
