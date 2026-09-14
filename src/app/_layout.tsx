import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";
import SplashScreen from "../components/SplashScreen";
import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    [fontFamily.regular]: require("../../assets/fonts/Lufga-Regular.otf"),
    [fontFamily.medium]: require("../../assets/fonts/Lufga-Medium.otf"),
    [fontFamily.semiBold]: require("../../assets/fonts/Lufga-SemiBold.otf"),
    [fontFamily.bold]: require("../../assets/fonts/Lufga-Bold.otf"),
  });

  if (!fontsLoaded || !isReady) {
    return <SplashScreen onFinish={() => setIsReady(true)} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index.tsx" />
    </Stack>
  );
}
