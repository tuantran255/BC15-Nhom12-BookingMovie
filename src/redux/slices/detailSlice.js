import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";
import { displayLoading, hideLoading } from "./loadingSlice";

export const detailSlice = createSlice({
  name: "detail",
  initialState: {
    filmDetail: {},
  },
  reducers: {
    addMovieDetail: (state, action) => {
      state.filmDetail = action.payload;
    },
  },
});

export const getAPIDetail = maPhim => {
  return async dispatch => {
    try {
      await dispatch(displayLoading());
      let result = await api.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
      //lấy được dữ liệu từ api đưa lên redux
      await dispatch(addMovieDetail(result.data.content));
      await dispatch(hideLoading());
    } catch (err) {
      console.log(`err`, err.response?.data);
      await dispatch(hideLoading());
    }
  };
};

const { actions, reducer } = detailSlice;
export const { addMovieDetail } = actions;
export default reducer;
