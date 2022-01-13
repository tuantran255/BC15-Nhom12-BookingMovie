import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";
import { history } from "../../App";
import { Redirect } from "react-router-dom";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    listUserRegister: null,
  },
  reducers: {
    addListUserRegister: (state, action) => {
      state.listUserRegister = action.payload;
    },
  },
});

export const getApiRegister = () => {
  return async dispatch => {
    try {
      let result = await api.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung`);
      dispatch(addListUserRegister(result.data.content));
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

export const postValueRegister = thongTinDangKy => {
  return async () => {
    try {
      await api.post(`/api/QuanLyNguoiDung/DangKy`, thongTinDangKy);
      return history.goBack("login");
    } catch (error) {
      console.log(`err`, error.response?.data);
    }
  };
};

const { actions, reducer } = registerSlice;
export const { addListUserRegister } = actions;
export default reducer;
