import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";
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
  },
});

export const postValueRegister = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      await api.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
      await dispatch(addUserLogin(thongTinDangKy));
      alert("Đăng ký tài khoản thành công");
      history.push("/");
    } catch (error) {
      const errorMessage = error.response?.data.content;
      dispatch(addMessage(errorMessage));
    }
  };
};

export const postValueRegisterOfAdmin = (thongTinDangKy) => {
  return async (dispatch) => {
    try {
      await api.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
      alert("Thêm tài khoản thành công");
      history.goBack();
    } catch (error) {
      const errorMessage = error.response?.data.content;
      dispatch(addMessage(errorMessage));
    }
  };
};

const { actions, reducer } = registerSlice;
export const { addMessage } = actions;
export default reducer;
