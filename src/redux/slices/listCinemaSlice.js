import { createSlice } from "@reduxjs/toolkit";
import { api, GROUPID } from "../../util/apiSetting";

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
      let result = await api.get(
        `/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
      );
      dispatch(getArrCinema(result.data.content));
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

export const { getArrCinema } = listCinemaSlice.actions;
export const getListCinema = (state) => state.listCinema;
export default listCinemaSlice.reducer;
