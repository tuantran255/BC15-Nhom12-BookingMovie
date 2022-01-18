import { configureStore } from "@reduxjs/toolkit";
import bannerReducer from "./slices/bannerSlice";
import detailSlice from "./slices/detailSlice";
import loginSlice from "./slices/loginSlice";
import registerSlice from "./slices/registerSlice";
import purchaseSlice from "./slices/purchaseSlice";
import loadingSlice from "./slices/loadingSlice";

export const store = configureStore({
  reducer: {
    banner: bannerReducer,
    detail: detailSlice,
    login: loginSlice,
    register: registerSlice,
    purchase: purchaseSlice,
    loading: loadingSlice,
  },
});
