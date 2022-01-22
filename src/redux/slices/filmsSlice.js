import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";
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

      let result = await api.get("api/QuanLyPhim/LayDanhSachPhim?maNhom=GP10");
      await dispatch(getArrDanhSachPhim(result.data.content));
      await dispatch(hideLoading());
    } catch (err) {
      console.log(`err`, err.response?.data);
      await dispatch(hideLoading());
    }
  };
};

const { actions, reducer } = filmsSlice;
export const { getArrDanhSachPhim } = actions;
export default reducer;
