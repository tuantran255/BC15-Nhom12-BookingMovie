import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";

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
  return async (dispatch) => {
    try {
      let result = await api.get("/api/QuanLyPhim/LayDanhSachBanner");
      dispatch(getArrBanner(result.data.content));
      let arrBanner = result.data.content;
      let newArrBanner = [];
      for (let key in arrBanner) {
        let result2 = await api.get(
          `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${arrBanner[key].maPhim}`
        );
        let trailer = result2.data.content.trailer;
        newArrBanner.push({ ...arrBanner[key], trailer });
      }
      dispatch(getArrBanner(newArrBanner));
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

export const { getArrBanner, getMovieDetail } = bannerSlice.actions;
export const getBanner = (state) => state.banner;
export default bannerSlice.reducer;
