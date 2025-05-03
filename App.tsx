import { ExpoRoot } from "expo-router";
import React from "react";
import "./lib/i18n";

export default function App() {
  return <ExpoRoot context={require.context("./app")} />;
}
