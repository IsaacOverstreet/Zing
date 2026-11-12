import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { useSearchStore } from "@/src/store/searchStore";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, useWindowDimensions } from "react-native";
import { useResponsive } from "../utils/responsive";

type SearchTriggerProps = {
  placeholder?: string;
  onpress?: () => void;
};

export default function SearchTrigger({
  placeholder = "Search events...",
  onpress,
}: SearchTriggerProps) {
  const { textSize, controlHeight } = useResponsive();
  const { width } = useWindowDimensions();

  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);

  const iconSize =
    width >= 1024 ? 22 : width >= 768 ? 20 : width >= 640 ? 18 : 16;

  const handlePress = () => {
    setSearchQuery("");
    onpress?.();
  };
  return (
    <Pressable
      onPress={handlePress}
      style={{ height: controlHeight(43) }}
      className="flex-1 flex-row items-center rounded-full border border-[#999999] bg-[#FFF9F6] shadow-black shadow-[0px_3px_0px] px-8"
    >
      <Ionicons name="search-outline" size={iconSize} color="#777" />
      <Text
        className="flex-1"
        style={{
          fontFamily: fontFamily.regular,
          fontSize: textSize(12),
          color: "#777",
        }}
      >
        {placeholder}
      </Text>
    </Pressable>
  );
}
