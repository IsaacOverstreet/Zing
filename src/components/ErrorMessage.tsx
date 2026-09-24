import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import Close from "@/assets/images/close.svg";

import { Pressable, Text, View } from "react-native";
import { useResponsive } from "../utils/responsive";

export default function ErrorMessage() {
  const { textSize, content, controlHeight } = useResponsive();

  return (
    <View
      style={{
        height: controlHeight(62),
        paddingHorizontal: content(13),
        gap: content(10),
      }}
      className="absolute w-full flex-row items-center rounded-[100px] border border-[#810505] bg-[#E3362933]"
    >
      <Pressable>
        <Close width={controlHeight(24)} height={controlHeight(24)} />
      </Pressable>
      <Text
        className="flex-1 text-[#810505]"
        style={{
          fontFamily: fontFamily.regular,
          fontSize: textSize(14),
        }}
      >
        The information provided is incorrect. Try again
      </Text>
    </View>
  );
}
