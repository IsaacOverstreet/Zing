import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
import { useResponsive } from "../utils/responsive";
type TextinputProps = {
  placeholder: string;
  password?: boolean;
  fontSize?: number;
  inputAreaHeight?: number;
};

export default function Textinput({
  placeholder,
  password = false,
  fontSize = 12,
  inputAreaHeight = 43,
}: TextinputProps) {
  const { textSize, content, controlHeight } = useResponsive();

  return (
    <>
      {password ? (
        <View
          style={{ height: controlHeight(inputAreaHeight) }}
          className="
        flex-row items-center rounded-full border border-[#999999] bg-[#FFF9F6]
        shadow-black shadow-[0px_3px_0px] px-8"
        >
          <TextInput
            className="flex-1"
            placeholder={placeholder}
            placeholderTextColor="#777"
            style={{
              fontFamily: fontFamily.regular,
              fontSize: textSize(fontSize),
            }}
            secureTextEntry
          />

          <Ionicons name="eye-off-outline" size={16} color="#000" />
        </View>
      ) : (
        <View
          style={{ height: controlHeight(inputAreaHeight) }}
          className="
        justify-center rounded-full px-8 border border-[#999999]
        bg-[#FFF9F6] shadow-black shadow-[0px_3px_0px]"
        >
          <TextInput
            placeholder={placeholder}
            style={{
              fontFamily: fontFamily.regular,
              fontSize: textSize(fontSize),
            }}
            placeholderTextColor="#777"
          />
        </View>
      )}
    </>
  );
}
