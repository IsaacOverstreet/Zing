import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text } from "react-native";

type ButtonProps = {
  text: string;
  socialButton?: boolean;
  isApple?: boolean;
};

export default function Button({
  text,
  socialButton = false,
  isApple = false,
}: ButtonProps) {
  return (
    <>
      {socialButton ? (
        <Pressable
          className="h-[46px] flex-1 flex-row items-center justify-center gap-4 rounded-full border border-[#999999] bg-[#FFF9F6] shadow-black shadow-[0px_2px_0px] active:translate-y-1
    active:shadow-[0px_2px_0px]"
        >
          {isApple ? (
            <Ionicons name="logo-apple" size={21} color="#000" />
          ) : (
            <Text className="font-bold text-[20px] text-[#4285F4]">G</Text>
          )}

          <Text className="font-semibold text-[16px]">Google</Text>
        </Pressable>
      ) : (
        <Pressable
          className=" h-[53px] items-center border border-[#999999] bg-[#FFF9F6] shadow-black shadow-[0px_3px_0px] justify-center rounded-full bg-[#E3E0DE] active:translate-y-1
    active:shadow-[0px_2px_0px]"
        >
          <Text className="font-semibold text-[18px]">{text}</Text>
        </Pressable>
      )}
    </>
  );
}
