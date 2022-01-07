import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./slices/bannerSlice";
import detailSlice from "./slices/detailSlice";
import  loginSlice  from "./slices/loginSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    detail: detailSlice,
    login: loginSlice,
  },
});
