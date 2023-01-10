import axios from "axios";
export const GROUPID = "GP10"

export const DOMAIN = "https://movienew.cybersoft.edu.vn";

export const KEY_TOKEN_CYBERSOFT = "TokenCybersoft";

export const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyOCIsIkhldEhhblN0cmluZyI6IjI1LzAyLzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY3NzI4MzIwMDAwMCIsIm5iZiI6MTY0Nzk2ODQwMCwiZXhwIjoxNjc3NDMwODAwfQ.wEdmkKpVZbDB4s4L_cmLwJ1O8le8Cc-VMgLZCI-HvLA";

//Cấu hình interceptor cho axios (Tất cả request gọi = axios đều được cấu hình) (1 dự án làm 1 duy nhất)
export const api = axios.create({
  baseURL: DOMAIN,
  timeout: 30000, //tgian chờ
});

api.interceptors.request.use(
  config => {
    config.headers = {
      ...config.headers,
      [KEY_TOKEN_CYBERSOFT]: TOKEN_CYBERSOFT, //Qui định của cybersoft tất cả mọi request
      Authorization: "Bearer " + localStorage.getItem("accessToken"), //Token mà người dùng đăng nhập (401 token ko hợp lệ, 403 ko đủ quyền truy cập)
    };
    return config;
  },
  errors => {
    return Promise.reject(errors);
  }
);

export const USER_LOGIN = "USER_LOGIN";
export const TOKEN = "accessToken";
export const GROUNDID = "GP01";
