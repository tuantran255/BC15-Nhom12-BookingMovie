import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../util/apiSetting";

export const addNewFilmsSlice = createSlice({
  name: "addNewFilms",
  initialState: {},
  reducers: {},
});

export const postApiThemHinhUploadHinh = formData => {
  return async () => {
    try {
      await api.post(`/api/QuanLyPhim/ThemPhimUploadHinh`, formData);
      alert("Phim đã được thêm thành công");
    } catch (error) {
      console.log(error.response?.data);
    }
  };
};

const { actions, reducer } = addNewFilmsSlice;
export const {} = actions;
export default reducer;
