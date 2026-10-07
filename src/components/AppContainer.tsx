import { globalStyles } from "@/styles/global";
import { ReactNode } from "react";
import { ScrollView, useWindowDimensions, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type AppContainerProps = {
  children: ReactNode;
};

export default function AppContainer({ children }: AppContainerProps) {
  const { width } = useWindowDimensions();

  const isSmallPhone = width < 375;
  const isPhone = width >= 375 && width < 744;

  const isTablet = width >= 744 && width < 1024;
  const isLargeTablet = width >= 1024;

  // padding
  const paddingTop = isPhone ? 20 : isLargeTablet ? 70 : 70;
  const paddingBottom = isPhone ? 10 : isLargeTablet ? 10 : 10;
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
        <ScrollView
          contentContainerStyle={{ justifyContent: "space-between" }}
          className="relative flex-1 w-full max-w-[820px] bg-[#FFF9F6]"
        >
          {children}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
