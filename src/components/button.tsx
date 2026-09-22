import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, useWindowDimensions } from "react-native";

type ButtonProps = {
  text: string;
  socialButton?: boolean;
  isApple?: boolean;
  className?: string;
  textClassName?: string;
  onPress?: () => void;
};

export default function Button({
  text,
  socialButton = false,
  isApple = false,
  className = "",
  textClassName = "",
  onPress,
}: ButtonProps) {
  const { width } = useWindowDimensions();
  const iconSize =
    width >= 1024 ? 22 : width >= 768 ? 20 : width >= 640 ? 18 : 16;

  return (
    <>
      {socialButton ? (
        <Pressable
          className={`h-[46px] flex-1 flex-row items-center justify-center gap-3 rounded-full border border-[#999999] bg-[#FFF9F6] shadow-black shadow-[0px_2px_0px] active:translate-y-1
        active:shadow-[0px_2px_0px]
        sm:h-[52px]
        md:h-[60px]
        lg:h-[68px]
        ${className}`}
        >
          {isApple ? (
            <Ionicons name="logo-apple" size={iconSize} color="#000" />
          ) : (
            <Text
              style={{ fontFamily: fontFamily.regular }}
              className="font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] text-[#4285F4]"
            >
              G
            </Text>
          )}

          <Text
            style={{ fontFamily: fontFamily.regular }}
            className={`font-medium ${textClassName}`}
          >
            {text}
          </Text>
        </Pressable>
      ) : (
        <Pressable
          onPress={onPress}
          className={`h-[53px] items-center border border-[#999999] shadow-black shadow-[0px_3px_0px] justify-center rounded-full bg-[#E3E0DE] active:translate-y-1
        active:shadow-[0px_2px_0px]
        sm:h-[58px]
        md:h-[64px]
        lg:h-[70px] ${className}`}
        >
          <Text
            style={{ fontFamily: fontFamily.regular }}
            className={`font-medium ${textClassName}`}
          >
            {text}
          </Text>
        </Pressable>
      )}
    </>
  );
}
