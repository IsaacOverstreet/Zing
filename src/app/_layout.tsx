import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import SplashScreenAnimation from "../components/SplashScreenAnimation";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    [fontFamily.regular]: require("../../assets/fonts/Lufga-Regular.otf"),
    [fontFamily.medium]: require("../../assets/fonts/Lufga-Medium.otf"),
    [fontFamily.semiBold]: require("../../assets/fonts/Lufga-SemiBold.otf"),
    [fontFamily.bold]: require("../../assets/fonts/Lufga-Bold.otf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded || !isReady) {
    return <SplashScreenAnimation onFinish={() => setIsReady(true)} />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index.tsx" />
    </Stack>
  );
}
