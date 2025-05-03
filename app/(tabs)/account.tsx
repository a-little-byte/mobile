import { Feather } from "@expo/vector-icons";
import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../components/providers/ThemeProvider";
import { Button } from "../../components/ui/Button";
import { Colors } from "../../constants/Colors";

const menuItems = [
  {
    title: "Profile Settings",
    icon: "user",
  },
  {
    title: "Security",
    icon: "shield",
  },
  {
    title: "Notifications",
    icon: "bell",
  },
  {
    title: "Subscription",
    icon: "credit-card",
  },
  {
    title: "Help & Support",
    icon: "help-circle",
  },
  {
    title: "About",
    icon: "info",
  },
];

export default function AccountScreen() {
  const { resolvedTheme } = useTheme();
  const themeColors = Colors[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: themeColors.background,
      }}
      edges={["bottom"]}
    >
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        <View style={styles.profileSection}>
          <View
            style={[styles.avatar, { backgroundColor: themeColors.primary }]}
          >
            <Text
              style={[
                styles.avatarText,
                { color: themeColors.primaryForeground },
              ]}
            >
              JD
            </Text>
          </View>
          <Text style={[styles.profileName, { color: themeColors.foreground }]}>
            John Doe
          </Text>
          <Text
            style={[
              styles.profileEmail,
              { color: themeColors.mutedForeground },
            ]}
          >
            john.doe@example.com
          </Text>
          <Button variant="outline" style={styles.editButton}>
            Edit Profile
          </Button>
        </View>

        <View style={styles.menuSection}>
          {menuItems.map((item, index) => (
            <View
              key={index}
              style={[
                styles.menuItem,
                { borderBottomColor: themeColors.border },
                index === menuItems.length - 1 && styles.lastMenuItem,
              ]}
            >
              <View style={styles.menuItemContent}>
                <Feather
                  name={item.icon as any}
                  size={20}
                  color={themeColors.foreground}
                />
                <Text
                  style={[
                    styles.menuItemText,
                    { color: themeColors.foreground },
                  ]}
                >
                  {item.title}
                </Text>
              </View>
              <Feather
                name="chevron-right"
                size={20}
                color={themeColors.mutedForeground}
              />
            </View>
          ))}
        </View>

        <Button variant="destructive" style={styles.logoutButton}>
          Log Out
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  profileSection: {
    alignItems: "center",
    marginBottom: 32,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  avatarText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  profileEmail: {
    fontSize: 14,
    marginBottom: 16,
  },
  editButton: {
    paddingHorizontal: 20,
  },
  menuSection: {
    marginBottom: 32,
    borderRadius: 12,
    overflow: "hidden",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 16,
    borderBottomWidth: 1,
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    marginLeft: 12,
  },
  logoutButton: {
    marginTop: 20,
  },
});
