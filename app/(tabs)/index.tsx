import { Feather } from "@expo/vector-icons";
import { router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useTranslation } from "react-i18next";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../components/providers/ThemeProvider";
import { Button } from "../../components/ui/Button";
import Typewriter from "../../components/ui/Typewriter";
import { Colors } from "../../constants/Colors";

// Use Feather icons instead of @tabler/icons-react
const features = [
  {
    name: "soc",
    icon: "shield",
  },
  {
    name: "edr",
    icon: "zap",
  },
  {
    name: "xdr",
    icon: "lock",
  },
  {
    name: "global",
    icon: "globe",
  },
] as const;

const companies = [
  "Google",
  "Microsoft",
  "Amazon",
  "Netflix",
  "YouTube",
  "Instagram",
  "Uber",
  "Spotify",
] as const;

const GridItem = ({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) => {
  const { resolvedTheme } = useTheme();
  const themeColors = Colors[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <View style={styles.gridItem}>
      <View style={[styles.gridItemInner, { borderColor: themeColors.border }]}>
        <View
          style={[styles.iconContainer, { borderColor: themeColors.border }]}
        >
          <Feather name={icon as any} size={24} color={themeColors.primary} />
        </View>
        <View style={styles.gridItemContent}>
          <Text
            style={[styles.gridItemTitle, { color: themeColors.foreground }]}
          >
            {title}
          </Text>
          <Text
            style={[
              styles.gridItemDescription,
              { color: themeColors.mutedForeground },
            ]}
          >
            {description}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function HomeScreen() {
  const { t } = useTranslation("translation");
  const { resolvedTheme } = useTheme();
  const themeColors = Colors[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
      <StatusBar style={resolvedTheme === "dark" ? "light" : "dark"} />
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Hero Section */}
        <View style={styles.heroSection}>
          <Text style={[styles.heroTitle, { color: themeColors.foreground }]}>
            {t("translation:home.hero.title")}{" "}
          </Text>
          <Typewriter
            text={t("translation:home.hero.typings", {
              returnObjects: true,
            }).map((item: string) => item.toLowerCase())}
            waitTime={1500}
            cursorChar="_"
            style={styles.typingText}
          />
          <Text
            style={[
              styles.heroDescription,
              { color: themeColors.mutedForeground },
            ]}
          >
            {t("translation:home.hero.description")}
          </Text>
          <View style={styles.buttonContainer}>
            <Button
              size="lg"
              onPress={() => router.navigate("/(tabs)/explore")}
            >
              {t("translation:home.hero.exploreServices")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              onPress={() => router.navigate("/(tabs)/explore")}
            >
              {t("translation:home.hero.contactSales")}
            </Button>
          </View>
        </View>

        {/* Companies Section */}
        <View style={styles.companiesSection}>
          <Text
            style={[
              styles.companiesTitle,
              { color: themeColors.mutedForeground },
            ]}
          >
            {t("translation:home.companies.title")}
          </Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.companiesScroll}
            contentContainerStyle={styles.companiesScrollContent}
          >
            {companies.map((company, index) => (
              <View key={index} style={styles.companyLogo}>
                <Image
                  source={{
                    uri: `https://cdn.magicui.design/companies/${company}.svg`,
                  }}
                  style={[
                    styles.logo,
                    resolvedTheme === "dark" && styles.logoDark,
                  ]}
                  resizeMode="contain"
                />
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Features Section */}
        <View style={styles.featuresSection}>
          {features.map((feature) => (
            <GridItem
              key={feature.name}
              icon={feature.icon}
              title={t(`translation:home.features.${feature.name}.title`)}
              description={t(
                `translation:home.features.${feature.name}.description`,
              )}
            />
          ))}
        </View>

        {/* CTA Section */}
        <View
          style={[styles.ctaSection, { backgroundColor: themeColors.primary }]}
        >
          <Text
            style={[styles.ctaTitle, { color: themeColors.primaryForeground }]}
          >
            {t("translation:home.cta.title")}
          </Text>
          <Text
            style={[
              styles.ctaDescription,
              { color: themeColors.primaryForeground },
            ]}
          >
            {t("translation:home.cta.description")}
          </Text>
          <View style={styles.ctaButtonContainer}>
            <Button
              variant="secondary"
              size="lg"
              onPress={() => router.navigate("/(tabs)/explore")}
            >
              {t("translation:home.cta.button")}
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
    paddingBottom: 40,
  },
  heroSection: {
    alignItems: "center",
    padding: 20,
    paddingTop: 40,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  typingText: {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
  },
  heroDescription: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 16,
    marginHorizontal: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 24,
    gap: 12,
  },
  companiesSection: {
    padding: 20,
    marginTop: 20,
  },
  companiesTitle: {
    fontSize: 12,
    fontWeight: "600",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: 16,
  },
  companiesScroll: {
    marginHorizontal: -20,
  },
  companiesScrollContent: {
    paddingHorizontal: 20,
  },
  companyLogo: {
    width: 100,
    height: 40,
    marginRight: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 30,
  },
  logoDark: {
    tintColor: "white",
  },
  featuresSection: {
    padding: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    marginBottom: 16,
  },
  gridItemInner: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 16,
    height: 180,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 8,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItemContent: {
    marginTop: 16,
    flex: 1,
    justifyContent: "flex-end",
  },
  gridItemTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  gridItemDescription: {
    fontSize: 14,
  },
  ctaSection: {
    margin: 20,
    borderRadius: 24,
    padding: 24,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 12,
  },
  ctaDescription: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 24,
  },
  ctaButtonContainer: {
    alignItems: "center",
  },
});
