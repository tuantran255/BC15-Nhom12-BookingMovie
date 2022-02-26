import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";

export const editFilmsSlice = createSlice({
  name: "editFimls",
  initialState: {
    thongTinPhim: {},
  },
  reducers: {
    addThongTinPhim: (state, action) => {
      state.thongTinPhim = action.payload;
    },
  },
});

export const getApiThongTinPhim = maPhim => {
  return async dispatch => {
    try {
      let result = await api.get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`);
      if (result.status === 200) {
        dispatch(addThongTinPhim(result.data.content));
      }
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

export const postApiCapNhatPhimUpload = formData => {
  return async () => {
    try {
      await api.post(`/api/QuanLyPhim/CapNhatPhimUpload`, formData);
      alert("Phim đã được cập nhập thành công");
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

const { actions, reducer } = editFilmsSlice;
export const { addThongTinPhim } = actions;
export default reducer;
