import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, useWindowDimensions } from "react-native";

type ButtonProps = {
  text: string;
  socialButton?: boolean;
  isApple?: boolean;
  className?: string;
  textClassName?: string;
};

export default function Button({
  text,
  socialButton = false,
  isApple = false,
  className = "",
  textClassName = "",
}: ButtonProps) {
  const { width } = useWindowDimensions();
  const iconSize =
    width >= 1024 ? 22 : width >= 768 ? 20 : width >= 640 ? 18 : 16;

  return (
    <>
      {socialButton ? (
        <Pressable
          className={`h-[46px] flex-1 flex-row items-center justify-center gap-3 rounded-full border border-[#999999] bg-[#FFF9F6] shadow-black shadow-[0px_2px_0px] active:translate-y-1
    active:shadow-[0px_2px_0px] ${className}`}
        >
          {isApple ? (
            <Ionicons name="logo-apple" size={iconSize} color="#000" />
          ) : (
            <Text
              style={{ fontFamily: fontFamily.regular }}
              className={`font-bold text-${iconSize} text-[#4285F4] `}
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
          className=" h-[53px] items-center border border-[#999999] shadow-black shadow-[0px_3px_0px] justify-center rounded-full bg-[#E3E0DE] active:translate-y-1
    active:shadow-[0px_2px_0px]"
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
