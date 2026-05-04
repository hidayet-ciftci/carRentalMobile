import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/use-color-scheme";

export const unstable_settings = {
  anchor: "index",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="(customer)/customer-access" />
        <Stack.Screen name="(customer)/customer-details" />
        <Stack.Screen name="user-login" />
        <Stack.Screen name="(details)/vehicle-detail" />
        <Stack.Screen name="(details)/service-detail" />
        <Stack.Screen name="(details)/user-detail" />
        <Stack.Screen name="(details)/customer-admin-detail" />
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
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
