import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    danhSachPhongVe: null,
  },
  reducers: {
    addDanhSachPhongVe: (state, action) => {
      state.danhSachPhongVe = action.payload;
    },
  },
});

export const getApiDanhSachPhongve = maLichChieu => {
  return async dispatch => {
    try {
      let result = await api.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
      dispatch(addDanhSachPhongVe(result.data.content));
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

const { actions, reducer } = purchaseSlice;
export const { addDanhSachPhongVe } = actions;
export default reducer;
