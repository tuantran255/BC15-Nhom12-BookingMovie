import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    danhSachPhongVe: {},
    gheDangChon: [],
  },
  reducers: {
    addDanhSachPhongVe: (state, action) => {
      state.danhSachPhongVe = action.payload;
    },
    addGheDangChon: (state, action) => {
      let index = state.gheDangChon.findIndex(ghe => ghe.tenGhe === action.payload.tenGhe);
      if (index !== -1) {
        state.gheDangChon.splice(index, 1);
      } else {
        state.gheDangChon.push(action.payload);
      }
    },
  },
});

export const getApiDanhSachPhongve = maLichChieu => {
  return async dispatch => {
    try {
      let result = await api.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
      if (result.status === 200) {
        dispatch(addDanhSachPhongVe(result.data.content));
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

const { actions, reducer } = purchaseSlice;
export const { addDanhSachPhongVe, addGheDangChon } = actions;
export default reducer;
