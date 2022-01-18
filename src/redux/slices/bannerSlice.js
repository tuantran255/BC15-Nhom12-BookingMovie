import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";
import { displayLoading, hideLoading } from "./loadingSlice";

export const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    arrBanner: [],
    arrDetail: [],
  },
  reducers: {
    getArrBanner: (state, action) => {
      state.arrBanner = action.payload;
    },
    getMovieDetail: (state, action) => {
      state.arrDetail.push(action.payload);
    },
  },
});

export const getAPIBanner = () => {
  return async dispatch => {
    try {
      await dispatch(displayLoading());

      let result = await api.get("/api/QuanLyPhim/LayDanhSachBanner");
      await dispatch(getArrBanner(result.data.content));
      let arrBanner = result.data.content;
      let newArrBanner = [];
      for (let key in arrBanner) {
        let result2 = await api.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${arrBanner[key].maPhim}`);
        let trailer = result2.data.content.trailer;
        newArrBanner.push({ ...arrBanner[key], trailer });
      }
      await dispatch(getArrBanner(newArrBanner));
      await dispatch(hideLoading());
    } catch (err) {
      console.log(`err`, err.response?.data);
      await dispatch(hideLoading());
    }
  };
};

export const { getArrBanner, getMovieDetail } = bannerSlice.actions;
export const getBanner = state => state.banner;
export default bannerSlice.reducer;
