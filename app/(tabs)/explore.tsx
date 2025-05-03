import { Feather } from "@expo/vector-icons";
import React from "react";
import { useTranslation } from "react-i18next";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "../../components/providers/ThemeProvider";
import { Button } from "../../components/ui/Button";
import { Colors } from "../../constants/Colors";

// Services data
const services = [
  {
    id: "soc",
    title: "Security Operations Center (SOC)",
    description:
      "Continuous monitoring and advanced threat detection to identify and respond to security incidents in real-time.",
    features: [
      "Real-time threat detection",
      "24/7 monitoring",
      "Incident response",
      "Security event analysis",
    ],
    icon: "shield",
  },
  {
    id: "edr",
    title: "Endpoint Detection & Response",
    description:
      "Protect your endpoints with continuous monitoring and real-time response to threats.",
    features: [
      "Endpoint monitoring",
      "Malware protection",
      "Automated response",
      "Behavioral analysis",
    ],
    icon: "zap",
  },
  {
    id: "xdr",
    title: "Extended Detection & Response",
    description:
      "Unify security across email, endpoints, servers, cloud workloads, and networks.",
    features: [
      "Cross-system security",
      "Integrated threat intel",
      "Advanced analytics",
      "Automated workflows",
    ],
    icon: "lock",
  },
  {
    id: "intelligence",
    title: "Threat Intelligence",
    description:
      "Stay ahead of emerging threats with actionable intelligence on vulnerabilities and attack methods.",
    features: [
      "Global threat feeds",
      "IoC collection",
      "Vulnerability tracking",
      "Custom intel reports",
    ],
    icon: "globe",
  },
  {
    id: "consulting",
    title: "Security Consulting",
    description:
      "Expert guidance on cybersecurity strategy, risk assessment, and compliance.",
    features: [
      "Risk assessment",
      "Security architecture",
      "Compliance consulting",
      "Security training",
    ],
    icon: "briefcase",
  },
  {
    id: "platform",
    title: "Security Platform",
    description:
      "Unified security management platform that brings all your security operations into one place.",
    features: [
      "Single console",
      "API integrations",
      "Customizable dashboards",
      "Automated workflows",
    ],
    icon: "layers",
  },
];

const ServiceCard = ({ service }: { service: (typeof services)[0] }) => {
  const { resolvedTheme } = useTheme();
  const themeColors = Colors[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <View style={styles.serviceCardContainer}>
      <Pressable
        style={[styles.serviceCard, { borderColor: themeColors.border }]}
      >
        <View style={styles.serviceCardHeader}>
          <View
            style={[styles.iconContainer, { borderColor: themeColors.border }]}
          >
            <Feather
              name={service.icon as any}
              size={24}
              color={themeColors.primary}
            />
          </View>
          <Text
            style={[styles.serviceTitle, { color: themeColors.foreground }]}
          >
            {service.title}
          </Text>
        </View>

        <Text
          style={[
            styles.serviceDescription,
            { color: themeColors.mutedForeground },
          ]}
        >
          {service.description}
        </Text>

        <View style={styles.featuresList}>
          {service.features.map((feature, index) => (
            <View key={index} style={styles.featureItem}>
              <Feather name="check" size={16} color={themeColors.primary} />
              <Text
                style={[styles.featureText, { color: themeColors.foreground }]}
              >
                {feature}
              </Text>
            </View>
          ))}
        </View>

        <Button style={styles.serviceButton}>Learn More</Button>
      </Pressable>
    </View>
  );
};

export default function ServicesScreen() {
  const { t } = useTranslation();
  const { resolvedTheme } = useTheme();
  const themeColors = Colors[resolvedTheme === "dark" ? "dark" : "light"];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: themeColors.background }}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.headerSection}>
          <Text style={[styles.headerTitle, { color: themeColors.foreground }]}>
            Our Services
          </Text>
          <Text
            style={[
              styles.headerSubtitle,
              { color: themeColors.mutedForeground },
            ]}
          >
            Enterprise-grade cybersecurity solutions to protect your
            organization
          </Text>
        </View>

        <View style={styles.servicesGrid}>
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </View>

        <View
          style={[styles.ctaSection, { backgroundColor: themeColors.muted }]}
        >
          <Text style={[styles.ctaTitle, { color: themeColors.foreground }]}>
            Need a custom solution?
          </Text>
          <Text
            style={[
              styles.ctaDescription,
              { color: themeColors.mutedForeground },
            ]}
          >
            Contact our team to discuss your organization's specific security
            needs
          </Text>
          <Button variant="outline" style={styles.ctaButton}>
            Contact Sales
          </Button>
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
  servicesGrid: {
    marginBottom: 32,
  },
  serviceCardContainer: {
    marginBottom: 20,
  },
  serviceCard: {
    borderWidth: 1,
    borderRadius: 16,
    padding: 20,
  },
  serviceCardHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
  },
  serviceDescription: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  featuresList: {
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  featureText: {
    fontSize: 14,
    marginLeft: 8,
  },
  serviceButton: {
    alignSelf: "flex-start",
  },
  ctaSection: {
    borderRadius: 16,
    padding: 24,
    alignItems: "center",
  },
  ctaTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    textAlign: "center",
  },
  ctaDescription: {
    fontSize: 14,
    textAlign: "center",
    marginBottom: 20,
  },
  ctaButton: {
    minWidth: 150,
  },
});
