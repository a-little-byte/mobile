import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { Colors } from "../../constants/Colors";
import { useTheme } from "../providers/ThemeProvider";

export type ButtonVariant =
  | "default"
  | "secondary"
  | "destructive"
  | "outline"
  | "ghost"
  | "link";
export type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  isLoading?: boolean;
  asChild?: boolean;
  disabled?: boolean;
}

export const Button = ({
  variant = "default",
  size = "default",
  children,
  isLoading = false,
  style,
  disabled = false,
  ...props
}: ButtonProps) => {
  const { resolvedTheme } = useTheme();
  const themeColors = Colors[resolvedTheme === "dark" ? "dark" : "light"];

  // Get button styles based on variant and size
  const getVariantStyle = (): ViewStyle => {
    switch (variant) {
      case "default":
        return {
          backgroundColor: themeColors.primary,
          borderColor: themeColors.primary,
          borderWidth: 1,
        };
      case "secondary":
        return {
          backgroundColor: themeColors.secondary,
          borderColor: themeColors.secondary,
          borderWidth: 1,
        };
      case "destructive":
        return {
          backgroundColor: themeColors.destructive,
          borderColor: themeColors.destructive,
          borderWidth: 1,
        };
      case "outline":
        return {
          backgroundColor: "transparent",
          borderColor: themeColors.border,
          borderWidth: 1,
        };
      case "ghost":
        return {
          backgroundColor: "transparent",
          borderWidth: 0,
        };
      case "link":
        return {
          backgroundColor: "transparent",
          borderWidth: 0,
        };
      default:
        return {
          backgroundColor: themeColors.primary,
          borderColor: themeColors.primary,
          borderWidth: 1,
        };
    }
  };

  const getSizeStyle = (): ViewStyle => {
    switch (size) {
      case "sm":
        return {
          paddingVertical: 8,
          paddingHorizontal: 12,
          borderRadius: 8,
        };
      case "lg":
        return {
          paddingVertical: 16,
          paddingHorizontal: 24,
          borderRadius: 12,
        };
      case "icon":
        return {
          width: 40,
          height: 40,
          alignItems: "center" as const,
          justifyContent: "center" as const,
          borderRadius: 8,
          paddingHorizontal: 0,
          paddingVertical: 0,
        };
      default:
        return {
          paddingVertical: 12,
          paddingHorizontal: 18,
          borderRadius: 10,
        };
    }
  };

  const getTextColor = () => {
    switch (variant) {
      case "default":
        return themeColors.primaryForeground;
      case "secondary":
        return themeColors.secondaryForeground;
      case "destructive":
        return themeColors.destructiveForeground;
      case "outline":
        return themeColors.foreground;
      case "ghost":
        return themeColors.foreground;
      case "link":
        return themeColors.primary;
      default:
        return themeColors.primaryForeground;
    }
  };

  const getTextSize = () => {
    switch (size) {
      case "sm":
        return { fontSize: 14 };
      case "lg":
        return { fontSize: 18 };
      case "icon":
        return { fontSize: 16 };
      default:
        return { fontSize: 16 };
    }
  };

  const disabledStyle = disabled || isLoading ? { opacity: 0.5 } : {};

  return (
    <TouchableOpacity
      style={[
        styles.button,
        getVariantStyle(),
        getSizeStyle(),
        disabledStyle,
        style,
      ]}
      disabled={disabled || isLoading}
      activeOpacity={0.8}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={getTextColor()} />
      ) : typeof children === "string" ? (
        <Text style={[styles.text, getTextSize(), { color: getTextColor() }]}>
          {children}
        </Text>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
  },
  text: {
    fontWeight: "500",
    textAlign: "center",
  },
});
