import { createSlice } from "@reduxjs/toolkit";
import { api, GROUPID } from "../../util/apiSetting";

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
      let result = await api.get(
        `/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`
      );
      dispatch(getArrMovie(result.data.content));
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

export const { getArrMovie } = listMoviesSlice.actions;
export const getListMovies = (state) => state.listMovies;
export default listMoviesSlice.reducer;
