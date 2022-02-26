import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";
import { displayLoading, hideLoading } from "./loadingSlice";

export const dashboardSlice = createSlice({
  name: "dashboard",
  initialState: {
    danhSachNguoiDung: [],
  },
  reducers: {
    getArrDanhSachNguoiDung: (state, action) => {
      state.danhSachNguoiDung = action.payload;
    },
  },
});

export const getAPIDanhSachNguoiDung = () => {
  return async dispatch => {
    try {
      await dispatch(displayLoading());

      let result = await api.get(`/api/QuanLyNguoiDung/TimKiemNguoiDung`);
      await dispatch(getArrDanhSachNguoiDung(result.data.content));
      await dispatch(hideLoading());
    } catch (err) {
      console.log(`err`, err.response?.data);
      await dispatch(hideLoading());
    }
  };
};

const { actions, reducer } = dashboardSlice;
export const { getArrDanhSachNguoiDung } = actions;
export default reducer;
