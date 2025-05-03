import { Feather } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../../components/providers/ThemeProvider";
import { Colors } from "../../constants/Colors";

/**
 * Tabs layout for the main application navigation
 */
export default function TabLayout() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const themeColors = Colors[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: themeColors.primary,
        tabBarInactiveTintColor: themeColors.mutedForeground,
        tabBarStyle: {
          backgroundColor: themeColors.background,
          borderTopColor: themeColors.border,
        },
        headerStyle: {
          backgroundColor: themeColors.background,
        },
        headerTintColor: themeColors.foreground,
        headerShadowVisible: false,
        tabBarLabelStyle: {
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: t("common.home", "Home"),
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
          headerShown: false,
        }}
      />

      <Tabs.Screen
        name="explore"
        options={{
          title: t("common.services", "Services"),
          tabBarIcon: ({ color, size }) => (
            <Feather name="grid" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="contact"
        options={{
          title: t("common.contact", "Contact"),
          tabBarIcon: ({ color, size }) => (
            <Feather name="mail" size={size} color={color} />
          ),
          headerTitle: t("common.contact", "Contact Us"),
        }}
      />

      <Tabs.Screen
        name="account"
        options={{
          title: t("common.account", "Account"),
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
