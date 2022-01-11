import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";

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
      let result = await api.get(`/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
      //lấy được dữ liệu từ api đưa lên redux
      dispatch(addMovieDetail(result.data.content));
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

const { actions, reducer } = detailSlice;
export const { addMovieDetail } = actions;
export default reducer;
