import { createSlice } from "@reduxjs/toolkit";
import { history } from "../../App";
import { api, TOKEN, USER_LOGIN } from "../../util/apiSetting";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userLogin: user,
    listUser: null,
  },
  reducers: {
    addUserLogin: (state, action) => {
      state.checkUser = false;
      const thongTinDangNhap = action.payload;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      state.userLogin = action.payload;
    },
    addListUser: (state, action) => {
      state.listUser = action.payload;
    },
  },
});

export const postAPILogin = thongTinDangNhap => {
  return async dispatch => {
    try {
      let result = await api.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
      await dispatch(addUserLogin(result.data.content));
      history.goBack();
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

export const getListUser = () => {
  return async dispatch => {
    try {
      let result = await api.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung`);
      await dispatch(addListUser(result.data.content));
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

const { actions, reducer } = loginSlice;
export const { addUserLogin, addListUser } = actions;
export default reducer;
