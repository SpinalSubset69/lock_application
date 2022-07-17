import { axiosInstance } from "./axios";

export const FETCH_LOGIN = (data) => axiosInstance.post("/auth/login", data);
