import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { useState } from "react";
import { StatusBar } from "react-native";
import SplashScreenAnimation from "../components/SplashScreenAnimation";

import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

  const [fontsLoaded] = useFonts({
    [fontFamily.regular]: require("../../assets/fonts/Lufga-Regular.otf"),
    [fontFamily.medium]: require("../../assets/fonts/Lufga-Medium.otf"),
    [fontFamily.semiBold]: require("../../assets/fonts/Lufga-SemiBold.otf"),
    [fontFamily.bold]: require("../../assets/fonts/Lufga-Bold.otf"),
  });

  // useEffect(() => {
  //   if (fontsLoaded) {
  //     SplashScreen.hideAsync();
  //   }
  // }, [fontsLoaded]);

  // if (!fontsLoaded || !isReady) {
  //   return <SplashScreenAnimation onFinish={() => setIsReady(true)} />;
  // }

  if (!fontsLoaded) {
    return <SplashScreenAnimation onFinish={() => setIsReady(true)} />;
  }

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" backgroundColor="#FFF9F5" />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
