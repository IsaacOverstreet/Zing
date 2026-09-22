import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, useWindowDimensions } from "react-native";
import { useResponsive } from "../utils/responsive";

type ButtonProps = {
  text: string;
  socialButton?: boolean;
  isApple?: boolean;
  fontSize?: number;
  className?: string;
  buttonHeight?: number;
  textClassName?: string;
  onPress?: () => void;
};

export default function Button({
  text,
  socialButton = false,
  isApple = false,
  className = "",
  fontSize = 12,
  textClassName = "",
  buttonHeight = 46,
  onPress,
}: ButtonProps) {
  const { width } = useWindowDimensions();
  const { content, controlHeight, textSize } = useResponsive();
  const iconSize =
    width >= 1024 ? 22 : width >= 768 ? 20 : width >= 640 ? 18 : 16;

  return (
    <>
      {socialButton ? (
        <Pressable
          style={{ height: controlHeight(buttonHeight) }}
          className={`flex-1 flex-row items-center justify-center gap-3 rounded-full border border-[#999999] bg-[#FFF9F6] shadow-black shadow-[0px_2px_0px] active:translate-y-1
        active:shadow-[0px_2px_0px]
        ${className}`}
        >
          {isApple ? (
            <Ionicons name="logo-apple" size={iconSize} color="#000" />
          ) : (
            <Text
              style={{
                fontFamily: fontFamily.bold,
                fontSize: textSize(fontSize),
              }}
              className=" text-[#4285F4]"
            >
              G
            </Text>
          )}

          <Text
            style={{
              fontFamily: fontFamily.medium,
              fontSize: textSize(fontSize),
            }}
            className={`${textClassName}`}
          >
            {text}
          </Text>
        </Pressable>
      ) : (
        <Pressable
          style={{ height: controlHeight(buttonHeight) }}
          onPress={onPress}
          className={`items-center border border-[#999999] shadow-black shadow-[0px_3px_0px] justify-center rounded-full active:translate-y-1
        active:shadow-[0px_2px_0px]
        ${className}`}
        >
          <Text
            style={{
              fontFamily: fontFamily.medium,
              fontSize: textSize(fontSize),
            }}
            className={`${textClassName}`}
          >
            {text}
          </Text>
        </Pressable>
      )}
    </>
  );
}
