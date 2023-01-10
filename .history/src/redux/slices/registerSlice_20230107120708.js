import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";
import { history } from "../../App";

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

export const postValueRegister = thongTinDangKy => {
  return async dispatch => {
    try {
      await api.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
      alert("Đăng ký tài khoản thành công");
      return history.goBack("login");
    } catch (error) {
      dispatch(addMessage(""));
      let errorMessage = error.response?.data.content;
      dispatch(addMessage(errorMessage));
    }
  };
};

const { actions, reducer } = registerSlice;
export const { addMessage } = actions;
export default reducer;
