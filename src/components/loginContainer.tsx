import { globalStyles } from "@/styles/global";
import { ReactNode } from "react";
import { useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useResponsive } from "../utils/responsive";

type LoginContainerProps = {
  children: ReactNode;
  centered?: boolean;
};

export default function LoginContainer({
  children,
  centered = false,
}: LoginContainerProps) {
  const { width } = useWindowDimensions();
  const { content } = useResponsive();
  const isTablet = width >= 768 && width < 1024;
  const isLargeTablet = width >= 1024;
  const paddingVertical = isLargeTablet ? 150 : isTablet ? 60 : 60;
  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <View style={[globalStyles.container, { paddingVertical }]}>
        <View
          style={{ gap: content(30) }}
          className="w-full
                max-w-[820px]
                bg-[#FFF9F6]"
        >
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}
