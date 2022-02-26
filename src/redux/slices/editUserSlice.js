import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";
import { displayLoading, hideLoading } from "./loadingSlice";

export const editUserSlice = createSlice({
  name: "editFimls",
  initialState: {
    thongTinNguoiDung: {},
  },
  reducers: {
    addThongTinNguoiDung: (state, action) => {
      state.thongTinNguoiDung = action.payload;
    },
  },
});

export const postApiLayThongTinNguoiDung = taiKhoan => {
  return async dispatch => {
    try {
      await dispatch(displayLoading());
      let result = await api.post(`/api/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${taiKhoan}`);
      dispatch(addThongTinNguoiDung(result.data.content));
      await dispatch(hideLoading());
    } catch (error) {
      console.log(error.response?.data);
      await dispatch(hideLoading());
    }
  };
};

export const postApiCapNhapThongTinNguoiDung = thongTinNguoiDung => {
  return async () => {
    try {
      await api.post(`/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung`, thongTinNguoiDung);
      alert("Người dùng đã được cập nhập");
      window.location.reload();
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

const { actions, reducer } = editUserSlice;
export const { addThongTinNguoiDung } = actions;
export default reducer;
