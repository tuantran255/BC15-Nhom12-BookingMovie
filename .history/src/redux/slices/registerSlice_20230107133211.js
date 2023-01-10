import { createSlice } from "@reduxjs/toolkit";
import { api, TOKEN, USER_LOGIN } from "../../util/apiSetting";
import { history } from "../../App";
import { addUserLogin, postAPILogin } from "./loginSlice";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    message: "",
  },
  reducers: {
    addMessage: (state, action) => {
      state.message = action.payload;
    },
    addUserLogin: (state, action) => {
      state.checkUser = false;
      const thongTinDangNhap = action.payload;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      state.userLogin = action.payload;
    },
  },
});

export const postValueRegister = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      await api.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
      await dispatch(addUserLogin(thongTinDangKy));
      alert("Đăng ký tài khoản thành công");
      return history.goBack("login");
    } catch (error) {
      const errorMessage = error.response?.data.content;
      dispatch(addMessage(errorMessage));
    }
  };
};

const { actions, reducer } = registerSlice;
export const { addMessage } = actions;
export default reducer;
