import { globalStyles } from "@/styles/global";
import { ReactNode } from "react";
import { useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type LoginContainerProps = {
  children: ReactNode;
  centered?: boolean;
};

export default function AppContainer({
  children,
  centered = false,
}: LoginContainerProps) {
  const { width } = useWindowDimensions();

  const isSmallPhone = width < 375;
  const isPhone = width >= 375 && width < 744;

  const isTablet = width >= 744 && width < 1024;
  const isLargeTablet = width >= 1024;

  // padding
  const paddingTop = isPhone ? 20 : isLargeTablet ? 150 : 150;
  const paddingBottom = isPhone ? 10 : isLargeTablet ? 150 : 150;
  const paddingHorizontal = isLargeTablet ? 100 : isTablet ? 80 : 20;
  return (
    <SafeAreaView className="" style={globalStyles.screenContainer}>
      <View
        style={[
          globalStyles.container,
          { paddingTop, paddingBottom },
          { paddingHorizontal },
        ]}
        className="relative flex-1 "
      >
        {/* content wrapper */}
        <View className="flex-1 w-full  max-w-[820px] bg-[#FFF9F6] ">
          {children}
        </View>
      </View>
    </SafeAreaView>
  );
}
