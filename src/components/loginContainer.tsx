import { globalStyles } from "@/styles/global";
import { ReactNode } from "react";
import { useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type LoginContainerProps = {
  children: ReactNode;
  centered?: boolean;
};

export default function LoginContainer({
  children,
  centered = false,
}: LoginContainerProps) {
  const { width } = useWindowDimensions();
  const isTablet = width >= 768 && width < 1024;
  const isLargeTablet = width >= 1024;
  const paddingVertical = isLargeTablet ? 150 : isTablet ? 60 : 60; // ✅ add this
  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <View style={[globalStyles.container, { paddingVertical }]}>
        {children}
      </View>
    </SafeAreaView>
  );
}
