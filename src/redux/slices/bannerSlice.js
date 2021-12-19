import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";

export const bannerSlice = createSlice({
  name: "banner",
  initialState: {
    arrBanner: [],
  },
  reducers: {
    getArrBanner: (state, action) => {
      state.arrBanner = action.payload;
    },
  },
});

export const getAPIBanner = () => {
  return async (dispatch) => {
    try {
      let result = await api.get("/api/QuanLyPhim/LayDanhSachBanner");
      dispatch(getArrBanner(result.data.content));
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

export const { getArrBanner } = bannerSlice.actions;
export const getBanner = (state) => state.banner;
export default bannerSlice.reducer;
