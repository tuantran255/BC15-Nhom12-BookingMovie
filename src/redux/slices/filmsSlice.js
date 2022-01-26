import { createSlice } from "@reduxjs/toolkit";
import { api, GROUNDID } from "../../util/apiSetting";
import { displayLoading, hideLoading } from "./loadingSlice";

export const filmsSlice = createSlice({
  name: "films",
  initialState: {
    arrDanhSachPhim: [],
  },
  reducers: {
    getArrDanhSachPhim: (state, action) => {
      state.arrDanhSachPhim = action.payload;
    },
  },
});

export const getAPIDanhSachPhim = () => {
  return async dispatch => {
    try {
      await dispatch(displayLoading());

      let result = await api.get(`api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUNDID}`);
      await dispatch(getArrDanhSachPhim(result.data.content));
      await dispatch(hideLoading());
    } catch (err) {
      console.log(`err`, err.response?.data);
      await dispatch(hideLoading());
    }
  };
};

export const deletePhim = maPhim => {
  return async dispatch => {
    try {
      await api.delete(`api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
      alert("Xóa phim thành công");
      dispatch(getAPIDanhSachPhim());
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

const { actions, reducer } = filmsSlice;
export const { getArrDanhSachPhim } = actions;
export default reducer;
