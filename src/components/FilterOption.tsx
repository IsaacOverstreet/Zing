import { Pressable, Text, View } from "react-native";
import { useResponsive } from "../utils/responsive";
import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";

export default function FilterOption({
  label,
  selected,
  onPress,
  fontValue,
  controlHeight,
}: {
  label: string;
  selected: boolean;
  onPress: () => void;
  fontValue: number;
  controlHeight: (base: number) => number;
}) {
  const { textSize } = useResponsive();
  return (
    <Pressable
      onPress={onPress}
      className="flex-row items-center justify-between"
    >
      <Text
        className="text-[#000000]"
        style={{
          fontSize: textSize(fontValue),
          fontFamily: fontFamily.regular,
        }}
      >
        {label}
      </Text>

      <View
        style={{
          width: controlHeight(16),
          height: controlHeight(16),
        }}
        className={`items-center justify-center rounded-full border border-[#777777] ${
          selected ? "bg-[#ffffff]" : "bg-[#ffffff]"
        }`}
      >
        {selected && (
          <View
            style={{
              width: controlHeight(8),
              height: controlHeight(8),
            }}
            className="rounded-full bg-[#000000]"
          />
        )}
      </View>
    </Pressable>
  );
}
