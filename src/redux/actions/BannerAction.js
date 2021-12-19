import axios from "axios";
import { GET_BANNER_MOVIE } from "../types/BannerType";

export const getAPIBanner = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: `https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachBanner`,
        method: "GET",
        headers: {
          TokenCybersoft:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNSIsIkhldEhhblN0cmluZyI6IjIwLzA2LzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY1NTY4MzIwMDAwMCIsIm5iZiI6MTYyNjI4MjAwMCwiZXhwIjoxNjU1ODMwODAwfQ.p47FFJpArherjwlM71xTzdulAQIW37pR6fRGD3t3Ji0",
        },
      });
      dispatch({
        type: GET_BANNER_MOVIE,
        data: result.data.content,
      });
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};
