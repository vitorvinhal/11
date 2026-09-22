import React from "react";
import { WebView } from "react-native-webview";
import { SafeAreaView, StatusBar, Platform } from "react-native";
import { DEVICE_BRIDGE_SOURCE } from "./src/utils/device-bridge";

// OTA: o app é uma casca WebView que aponta para a URL hospedada (Vercel).
const VERCEL_URL =
  process.env.EXPO_PUBLIC_WEB_URL ?? "https://11-five-umber.vercel.app";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#030309" }}>
      <StatusBar barStyle="light-content" />
      {Platform.OS !== "web" && (
        <WebView
          source={{ uri: VERCEL_URL }}
          style={{ flex: 1, backgroundColor: "#030309" }}
          setSupportMultipleWindows={false}
          allowsInlineMediaPlayback
          allowsBackForwardNavigationGestures
          originWhitelist={["*"]}
          injectedJavaScriptBeforeContentLoaded={DEVICE_BRIDGE_SOURCE}
        />
      )}
    </SafeAreaView>
  );
}
