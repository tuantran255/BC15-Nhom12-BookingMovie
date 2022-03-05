import { createSlice } from "@reduxjs/toolkit";
import { api, GROUPID } from "../../util/apiSetting";
import { displayLoading, hideLoading } from "./loadingSlice";

export const listMoviesSlice = createSlice({
  name: "listMovies",
  initialState: {
    arrMovies: [],
    upcomingMovies: [],
    playingMovies: [],
  },
  reducers: {
    getArrMovie: (state, action) => {
      state.arrMovies = action.payload;
      state.upcomingMovies = action.payload.filter(
        (movie) => movie.sapChieu === true
      );
      state.playingMovies = action.payload.filter(
        (movie) => movie.sapChieu === false
      );
    },
  },
});

export const getAPIListMovies = () => {
  return async (dispatch) => {
    try {
      await dispatch(displayLoading());
      let result = await api.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`
      );
      dispatch(getArrMovie(result.data.content));
      await dispatch(hideLoading());
    } catch (err) {
      console.log(`err`, err.response?.data);
      await dispatch(hideLoading());
    }
  };
};

export const { getArrMovie } = listMoviesSlice.actions;
export const getListMovies = (state) => state.listMovies;
export default listMoviesSlice.reducer;
