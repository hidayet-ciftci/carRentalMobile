import { clearTokens, saveTokens } from "@/constants/storage";
import { useDispatch, useSelector } from "react-redux";
import api from "../constants/authApi";
import { clearToken, setToken } from "../store/authSlice";
import type { AppDispatch, RootState } from "../store/store";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const accessToken = useSelector((s: RootState) => s.auth.accessToken);
  const isLoading = useSelector((s: RootState) => s.auth.isLoading);
  const isLoggedIn = !!accessToken; // !!string ?

  const login = async (email: string, password: string) => {
    const res = await api.post("loginURL", { email, password });

    const { accessToken, refreshToken } = res.data;

    await saveTokens(accessToken, refreshToken);

    dispatch(setToken(accessToken));
  };

  const logOut = async () => {
    await clearTokens();
    dispatch(clearToken());
  };

  return { isLoggedIn, isLoading, login, logOut };
};
