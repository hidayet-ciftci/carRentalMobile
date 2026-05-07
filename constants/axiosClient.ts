import { store } from "@/store/store";
import axios from "axios";
import { clearToken, setToken } from "../store/authSlice";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  saveTokens,
} from "./storage";

const axiosClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
});

axiosClient.interceptors.request.use(async (config) => {
  const token = await getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = await getRefreshToken();
        const response = await axios.post(
          `${process.env.EXPO_PUBLIC_API_URL}/api/Auth/refresh`,
          { refreshToken },
        );
        const newAccessToken = response.data.data.accessToken;

        await saveTokens(newAccessToken, refreshToken!);
        store.dispatch(setToken(newAccessToken));

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosClient(originalRequest);
      } catch (error) {
        await clearTokens();
        store.dispatch(clearToken());
      }
    }

    return Promise.reject(error);
  },
);

export default axiosClient;
