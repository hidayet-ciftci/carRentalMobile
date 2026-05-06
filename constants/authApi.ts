import { store } from "@/store/store";
import axios from "axios";
import { clearToken, setToken } from "../store/authSlice";
import {
  clearTokens,
  getAccessToken,
  getRefreshToken,
  saveTokens,
} from "./storage";

const api = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL,
  timeout: 10000,
});

api.interceptors.request.use(async (config) => {
  const token = await getAccessToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalReguest = error.config;
    if (error.response?.status === 401 && !originalReguest._retry) {
      originalReguest._retry = true;
      try {
        const refreshToken = await getRefreshToken();
        const response = await axios.post("url", { refreshToken });

        const newAccessToken = response.data.accessToken;

        await saveTokens(newAccessToken, refreshToken!);
        store.dispatch(setToken(newAccessToken));

        originalReguest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalReguest);
      } catch (error) {
        await clearTokens();
        store.dispatch(clearToken());
      }
    }

    return Promise.reject(error);
  },
);

export default api;
