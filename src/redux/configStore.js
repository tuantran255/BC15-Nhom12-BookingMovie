import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./slices/bannerSlice";
import detailSlice from "./slices/detailSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    detail: detailSlice,
  },
});
