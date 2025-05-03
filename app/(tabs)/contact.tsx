import React from "react";
import { useTranslation } from "react-i18next";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../components/providers/ThemeProvider";
import { Button } from "../../components/ui/Button";
import { Colors } from "../../constants/Colors";

export default function ContactScreen() {
  const { t } = useTranslation();
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
        <View style={styles.headerSection}>
          <Text style={[styles.headerTitle, { color: themeColors.foreground }]}>
            Contact Us
          </Text>
          <Text
            style={[
              styles.headerSubtitle,
              { color: themeColors.mutedForeground },
            ]}
          >
            Get in touch with our team for any inquiries or support
          </Text>
        </View>

        <View style={styles.contactOptions}>
          <View
            style={[styles.contactCard, { borderColor: themeColors.border }]}
          >
            <Text
              style={[styles.contactTitle, { color: themeColors.foreground }]}
            >
              Sales Inquiries
            </Text>
            <Text
              style={[
                styles.contactDescription,
                { color: themeColors.mutedForeground },
              ]}
            >
              For pricing, custom solutions, and enterprise plans
            </Text>
            <Button variant="outline" style={styles.contactButton}>
              Contact Sales
            </Button>
          </View>

          <View
            style={[styles.contactCard, { borderColor: themeColors.border }]}
          >
            <Text
              style={[styles.contactTitle, { color: themeColors.foreground }]}
            >
              Technical Support
            </Text>
            <Text
              style={[
                styles.contactDescription,
                { color: themeColors.mutedForeground },
              ]}
            >
              For help with our products, technical issues, or troubleshooting
            </Text>
            <Button variant="outline" style={styles.contactButton}>
              Get Support
            </Button>
          </View>

          <View
            style={[styles.contactCard, { borderColor: themeColors.border }]}
          >
            <Text
              style={[styles.contactTitle, { color: themeColors.foreground }]}
            >
              Partnerships
            </Text>
            <Text
              style={[
                styles.contactDescription,
                { color: themeColors.mutedForeground },
              ]}
            >
              For alliance opportunities, integrations, and collaborative
              ventures
            </Text>
            <Button variant="outline" style={styles.contactButton}>
              Explore Partnerships
            </Button>
          </View>
        </View>
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
  headerSection: {
    marginBottom: 24,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  contactOptions: {
    gap: 20,
  },
  contactCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },
  contactTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 8,
  },
  contactDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  contactButton: {
    alignSelf: "flex-start",
  },
});
