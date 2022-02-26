import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./slices/bannerSlice";
import detailSlice from "./slices/detailSlice";
import loginSlice from "./slices/loginSlice";
import registerSlice from "./slices/registerSlice";
import purchaseSlice from "./slices/purchaseSlice";
import loadingSlice from "./slices/loadingSlice";
import filmsSlice from "./slices/filmsSlice";
import addNewFilmsSlice from "./slices/addNewFilms";
import editFilmsSlice from "./slices/editFilmsSlice";
import dashboardSlice from "./slices/dashboardSlice";
import editUserSlice from "./slices/editUserSlice";
import listMoviesReducer from "./slices/listMoviesSlice";
import listCinemaReducer from "./slices/listCinemaSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    detail: detailSlice,
    login: loginSlice,
    register: registerSlice,
    purchase: purchaseSlice,
    loading: loadingSlice,
    films: filmsSlice,
    addFilms: addNewFilmsSlice,
    editFilms: editFilmsSlice,
    dashboard: dashboardSlice,
    editUser: editUserSlice,
    listMovies: listMoviesReducer,
    listCinema: listCinemaReducer,
  },
});
