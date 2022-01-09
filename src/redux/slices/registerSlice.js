import { createSlice } from "@reduxjs/toolkit";
import { api, TOKEN, USER_LOGIN } from "../../util/apiSetting";

export const registerSlice = createSlice({
  name: "register",
  initialState: {
    listUserRegister: null,
  },
  reducers: {
    addListUserRegister: (state, action) => {
      state.listUserRegister = action.payload;
    },
  },
});

export const getApiRegister = () => {
  return async dispatch => {
    try {
      let result = await api.get(`/api/QuanLyNguoiDung/LayDanhSachNguoiDung`);
      dispatch(addListUserRegister(result.data.content));
    } catch (err) {
      console.log(`err`, err.response?.data);
    }
  };
};

const { actions, reducer } = registerSlice;
export const { addListUserRegister } = actions;
export default reducer;
