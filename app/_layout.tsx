import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { router, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { Provider, useDispatch, useSelector } from "react-redux";

import { getAccessToken } from "@/constants/storage";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { setLoading, setToken } from "@/store/authSlice";
import { AppDispatch, RootState, store } from "@/store/store";
import { useEffect } from "react";
import Toast from "react-native-toast-message";

export const unstable_settings = {
  anchor: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <AppContent />
        <StatusBar style="auto" />
        <Toast />
      </ThemeProvider>
    </Provider>
  );
}

function AppContent() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoggedIn = useSelector((s: RootState) => !!s.auth.accessToken);
  const isLoading = useSelector((s: RootState) => s.auth.isLoading);

  // ADIM 1: uygulama açılınca bir kere çalışır
  useEffect(() => {
    const checkToken = async () => {
      const token = await getAccessToken(); // storage.ts'e soruyor

      if (token) {
        dispatch(setToken(token)); // token var → Redux'a yaz
      } else {
        dispatch(setLoading(false)); // token yok → kontrol bitti
      }
    };
    checkToken();
  }, []);

  // ADIM 2: isLoggedIn veya isLoading değişince çalışır
  useEffect(() => {
    if (isLoading) return; // kontrol henüz bitmedi, bekle

    if (isLoggedIn) {
      router.replace("/(tabs)"); // token var → ana ekran
    } else {
      router.replace("/user-login"); // token yok → login
    }
  }, [isLoggedIn, isLoading]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(customer)/customer-access" />
      <Stack.Screen name="(customer)/customer-details" />
      <Stack.Screen name="user-login" />
      <Stack.Screen name="(details)/user-detail" />
      <Stack.Screen name="(details)/customer-admin-detail" />
      <Stack.Screen name="(details)/vehicle-detail" />
      <Stack.Screen name="(details)/service-detail" />
      <Stack.Screen name="(create)/new-vehicle" />
      <Stack.Screen name="(create)/new-service" />
      <Stack.Screen name="(create)/new-user" />
      <Stack.Screen name="(create)/new-customer" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      />
    </Stack>
  );
}
