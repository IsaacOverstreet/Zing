import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { Ionicons } from "@expo/vector-icons";
import { TextInput, View } from "react-native";
type TextinputProps = {
  placeholder: string;
  password?: boolean;
  textClassName?: string;
};

export default function Textinput({
  placeholder,
  password = false,
  textClassName = "",
}: TextinputProps) {
  return (
    <>
      {password ? (
        <View className="h-[43px] flex-row items-center rounded-full border border-[#999999] bg-[#FFF9F6] shadow-black shadow-[0px_3px_0px] px-8 ">
          <TextInput
            className={`flex-1 font-regular ${textClassName}`}
            placeholder={placeholder}
            placeholderTextColor="#777"
            style={{ fontFamily: fontFamily.regular }}
            secureTextEntry
          />

          <Ionicons name="eye-off-outline" size={24} color="#000" />
        </View>
      ) : (
        <View className="h-[43px] justify-center rounded-full px-8 border border-[#999999] bg-[#FFF9F6] shadow-black shadow-[0px_3px_0px]">
          <TextInput
            className={`font-regular ${textClassName}`}
            placeholder={placeholder}
            style={{ fontFamily: fontFamily.regular }}
            placeholderTextColor="#777"
          />
        </View>
      )}
    </>
  );
}
