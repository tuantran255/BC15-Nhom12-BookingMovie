import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";
import { displayLoading, hideLoading } from "./loadingSlice";

export const purchaseSlice = createSlice({
  name: "purchase",
  initialState: {
    danhSachPhongVe: {},
    gheDangChon: [],
    thongTinTaiKhoan: {},
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
    addThongTinTaiKhoan: (state, action) => {
      state.thongTinTaiKhoan = action.payload;
    },
  },
});

export const getApiDanhSachPhongve = maLichChieu => {
  return async dispatch => {
    try {
      await dispatch(displayLoading());
      let result = await api.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
      if (result.status === 200) {
        dispatch(addDanhSachPhongVe(result.data.content));
      }
      await dispatch(hideLoading());
    } catch (error) {
      console.log(error.response?.data);
      await dispatch(hideLoading());
    }
  };
};

export const postApiDatVe = danhSachVe => {
  return async () => {
    try {
      await api.post(`/api/QuanLyDatVe/DatVe`, danhSachVe);
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const postApiLayThongTinNguoiDung = () => {
  return async dispatch => {
    try {
      await dispatch(displayLoading());
      let result = await api.post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`);
      if (result.status === 200) {
        dispatch(addThongTinTaiKhoan(result.data.content));
      }
      await dispatch(hideLoading());
    } catch (error) {
      console.log(error.response?.data);
      await dispatch(hideLoading());
    }
  };
};

const { actions, reducer } = purchaseSlice;
export const { addDanhSachPhongVe, addGheDangChon, addThongTinTaiKhoan } = actions;
export default reducer;
