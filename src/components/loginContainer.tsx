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

  const isSmallPhone = width < 375;
  const isPhone = width >= 375 && width < 744;

  const isTablet = width >= 744 && width < 1024;
  const isLargeTablet = width >= 1024;

  // padding
  const paddingTop = isPhone ? 60 : isLargeTablet ? 150 : 150;
  const paddingBottom = isPhone ? 20 : isLargeTablet ? 150 : 150;
  const paddingHorizontal = isLargeTablet ? 100 : isTablet ? 80 : 20;
  return (
    <SafeAreaView style={globalStyles.screenContainer}>
      <View
        style={[
          globalStyles.container,
          { paddingTop, paddingBottom },
          { paddingHorizontal },
        ]}
        className=" flex-1"
      >
        <View className="flex-1 w-full justify-between max-w-[820px] bg-[#FFF9F6]">
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}
