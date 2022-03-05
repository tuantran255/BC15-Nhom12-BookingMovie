import { createSlice } from "@reduxjs/toolkit";
import { api, GROUPID } from "../../util/apiSetting";
import { displayLoading, hideLoading } from "./loadingSlice";

export const listCinemaSlice = createSlice({
  name: "listCinema",
  initialState: {
    arrCinema: [],
  },
  reducers: {
    getArrCinema: (state, action) => {
      state.arrCinema = action.payload;
    },
  },
});

export const getAPIListCinema = () => {
  return async (dispatch) => {
    try {
      await dispatch(displayLoading());
      let result = await api.get(
        `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
      );
      await dispatch(getArrCinema(result.data.content));
      await dispatch(hideLoading());
    } catch (err) {
      console.log(`err`, err.response?.data);
      await dispatch(hideLoading());
    }
  };
};

export const { getArrCinema } = listCinemaSlice.actions;
export const getListCinema = (state) => state.listCinema;
export default listCinemaSlice.reducer;
