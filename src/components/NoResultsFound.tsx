import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import Notfound from "@/assets/images/notfound.svg";
import { Text, View } from "react-native";
import { useResponsive } from "../utils/responsive";

export default function NoResultsFound() {
  const { controlHeight, textSize } = useResponsive();
  return (
    <View className="items-center justify-center px-6 py-10">
      <Notfound width={controlHeight(70)} height={controlHeight(70)} />

      <Text
        style={{
          fontFamily: fontFamily.medium,
          fontSize: textSize(16),
          textAlign: "center",
        }}
        className="mt-5 text-[#2D2927]"
      >
        No Results Found
      </Text>

      <Text
        style={{
          fontFamily: fontFamily.regular,
          fontSize: textSize(12),
          textAlign: "center",
        }}
        className="mt-2 leading-5 text-[#77716E]"
      >
        We couldn't find anything matching that. Try different keywords, or
        explore trending topics below.
      </Text>
    </View>
  );
}
