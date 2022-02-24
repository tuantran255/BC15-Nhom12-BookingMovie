import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./slices/bannerSlice";
import listMoviesReducer from "./slices/listMoviesSlice";
import listCinemaReducer from "./slices/listCinemaSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    listMovies: listMoviesReducer,
    listCinema: listCinemaReducer,
  },
});
