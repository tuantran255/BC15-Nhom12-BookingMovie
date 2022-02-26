import { createSlice } from "@reduxjs/toolkit";
import { history } from "../../App";
import { api, TOKEN, USER_LOGIN } from "../../util/apiSetting";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    userLogin: user,
    message: "",
  },
  reducers: {
    addUserLogin: (state, action) => {
      state.checkUser = false;
      const thongTinDangNhap = action.payload;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN, thongTinDangNhap.accessToken);
      state.userLogin = action.payload;
    },
    addMessage: (state, action) => {
      state.message = action.payload;
    },
  },
});

export const postAPILogin = thongTinDangNhap => {
  return async dispatch => {
    try {
      let result = await api.post(`/api/QuanLyNguoiDung/DangNhap`, thongTinDangNhap);
      await dispatch(addUserLogin(result.data.content));
      alert("Đăng nhập thành công");
      history.goBack();
    } catch (err) {
      dispatch(addMessage(""));
      const erroMessage = err.response?.data.content;
      dispatch(addMessage(erroMessage));
    }
  };
};

const { actions, reducer } = loginSlice;
export const { addUserLogin, addMessage } = actions;
export default reducer;
