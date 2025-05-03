import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English translations
const enTranslations = {
  home: {
    hero: {
      title: "Securing your digital environment with",
      typings: ["AI", "Automation", "XDR", "Analytics"],
      description:
        "Enterprise-grade cybersecurity solutions for your business. Protect your data, networks, and systems from evolving threats.",
      exploreServices: "Explore Services",
      contactSales: "Contact Sales",
    },
    companies: {
      title: "TRUSTED BY LEADING COMPANIES WORLDWIDE",
    },
    features: {
      soc: {
        title: "Security Operations Center",
        description:
          "24/7 monitoring and advanced threat detection to identify and respond to security incidents in real-time.",
      },
      edr: {
        title: "Endpoint Detection and Response",
        description:
          "Real-time endpoint protection that continuously monitors and responds to cyber threats.",
      },
      xdr: {
        title: "Extended Detection and Response",
        description:
          "Unified security approach that collects and correlates data across email, endpoints, servers, cloud workloads, and networks.",
      },
      global: {
        title: "Global Threat Intelligence",
        description:
          "Up-to-date insights on emerging threats, vulnerabilities, and attack methods from around the world.",
      },
    },
    cta: {
      title: "Ready to secure your enterprise?",
      description:
        "Get in touch with our security experts and start protecting your digital assets today.",
      button: "Get Started",
    },
  },
};

// French translations
const frTranslations = {
  home: {
    hero: {
      title: "Sécuriser votre environnement numérique avec",
      typings: ["IA", "Automatisation", "XDR", "Analytique"],
      description:
        "Solutions de cybersécurité de niveau entreprise pour votre activité. Protégez vos données, réseaux et systèmes contre les menaces en évolution.",
      exploreServices: "Explorer les Services",
      contactSales: "Contacter les Ventes",
    },
    companies: {
      title: "UTILISÉ PAR DES ENTREPRISES LEADERS DANS LE MONDE ENTIER",
    },
    features: {
      soc: {
        title: "Centre d'Opérations de Sécurité",
        description:
          "Surveillance 24/7 et détection avancée des menaces pour identifier et répondre aux incidents de sécurité en temps réel.",
      },
      edr: {
        title: "Détection et Réponse aux Endpoints",
        description:
          "Protection des endpoints en temps réel qui surveille en continu et réagit aux cybermenaces.",
      },
      xdr: {
        title: "Détection et Réponse Étendue",
        description:
          "Approche de sécurité unifiée qui collecte et corrèle les données à travers les emails, endpoints, serveurs, charges de travail cloud et réseaux.",
      },
      global: {
        title: "Renseignement sur les Menaces Mondiales",
        description:
          "Informations à jour sur les menaces émergentes, vulnérabilités et méthodes d'attaque du monde entier.",
      },
    },
    cta: {
      title: "Prêt à sécuriser votre entreprise?",
      description:
        "Contactez nos experts en sécurité et commencez à protéger vos actifs numériques dès aujourd'hui.",
      button: "Commencer",
    },
  },
};

// Get device locale
const deviceLanguage = Localization.getLocales()[0].languageCode;
const supportedLocales = ["en", "fr"];
const locale = supportedLocales.includes(deviceLanguage)
  ? deviceLanguage
  : "en";

// Configure i18next
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    fr: { translation: frTranslations },
  },
  lng: locale,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
export const locales = supportedLocales;
export type SupportedLocale = "en" | "fr";
