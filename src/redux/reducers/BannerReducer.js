import { GET_BANNER_MOVIE } from "../types/BannerType";

const stateDefault = [];

export const BannerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_BANNER_MOVIE:
      state = action.data;
      return [...state];
    default:
      return [...state];
  }
};
