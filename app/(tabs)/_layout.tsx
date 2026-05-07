import { Tabs } from "expo-router";
import React from "react";

import { HapticTab } from "@/components/haptic-tab";
import { LogoutButton } from "@/components/logoutButton";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import { useColorScheme } from "@/hooks/use-color-scheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarInactiveTintColor: Colors[colorScheme ?? "light"].tabIconDefault,
        headerShown: true,
        headerTitleAlign: "center",
        tabBarButton: HapticTab,
        tabBarStyle: {
          height: 72,
          paddingBottom: 10,
          paddingTop: 8,
        },
        headerRight: () => <LogoutButton />,
      }}
    >
      <Tabs.Screen
        name="users"
        options={{
          title: "Yönetim",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.3.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vehicle"
        options={{
          title: "Arac",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="car.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="vehicle-records"
        options={{
          title: "Servis",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="doc.text.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="customers"
        options={{
          title: "Musteri",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="person.fill" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="details/user-detail"
        options={{ href: null, headerShown: true }}
      />
      <Tabs.Screen
        name="details/vehicle-detail"
        options={{ href: null, headerShown: true }}
      />
      <Tabs.Screen
        name="details/service-detail"
        options={{ href: null, headerShown: true }}
      />
      <Tabs.Screen
        name="details/customer-admin-detail"
        options={{ href: null, headerShown: true }}
      />
      <Tabs.Screen
        name="create/new-vehicle"
        options={{ href: null, headerShown: true }}
      />
      <Tabs.Screen
        name="create/new-service"
        options={{ href: null, headerShown: true }}
      />
      <Tabs.Screen
        name="create/new-user"
        options={{ href: null, headerShown: true }}
      />
      <Tabs.Screen
        name="create/new-customer"
        options={{ href: null, headerShown: true }}
      />
    </Tabs>
  );
}
