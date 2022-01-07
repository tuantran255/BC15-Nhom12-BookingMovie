import { createSlice } from "@reduxjs/toolkit";
import { api, TOKEN, USER_LOGIN } from "../../util/apiSetting";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userLogin: user,
  },
  reducers: {
    getUser: (state, action) => {
      const thongTinDangNhap = action.payload;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      state.userLogin = action.payload;
    },
  },
});

export const getAPILogin = thongTinDangNhap => {
  return async dispatch => {
    try {
      let result = await api.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
      dispatch(getUser(result.data.content));
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

const { actions, reducer } = loginSlice;
export const { getUser } = actions;
export default reducer;
