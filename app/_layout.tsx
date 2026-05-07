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
      router.replace("/(tabs)/users"); // token var → ana ekran
    } else {
      router.replace("/"); // token yok → login
    }
  }, [isLoggedIn, isLoading]);

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="user-login" />
      <Stack.Screen name="customer/customer-access" />
      <Stack.Screen name="customer/customer-details" />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="details/user-detail"
        options={{ headerShown: true, title: "Kullanıcı Detay" }}
      />
      <Stack.Screen
        name="details/customer-admin-detail"
        options={{ headerShown: true, title: "Müşteri Detay" }}
      />
      <Stack.Screen
        name="details/vehicle-detail"
        options={{ headerShown: true, title: "Araç Detay" }}
      />
      <Stack.Screen
        name="details/service-detail"
        options={{ headerShown: true, title: "Servis Detay" }}
      />

      <Stack.Screen
        name="create/new-vehicle"
        options={{ headerShown: true, title: "Yeni Araç" }}
      />
      <Stack.Screen
        name="create/new-service"
        options={{ headerShown: true, title: "Yeni Servis" }}
      />
      <Stack.Screen
        name="create/new-user"
        options={{ headerShown: true, title: "Yeni Kullanıcı" }}
      />
      <Stack.Screen
        name="create/new-customer"
        options={{ headerShown: true, title: "Yeni Müşteri" }}
      />

      <Stack.Screen
        name="modal"
        options={{ presentation: "modal", title: "Modal" }}
      />
    </Stack>
  );
}
