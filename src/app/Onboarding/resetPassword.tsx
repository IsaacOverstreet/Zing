import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import Back from "@/assets/images/backButton.svg";
import Button from "@/src/components/button";
import LoginContainer from "@/src/components/loginContainer";
import Textinput from "@/src/components/textInput";
import { useResponsive } from "@/src/utils/responsive";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function ResetPassword() {
  const { textSize, content, controlHeight } = useResponsive();

  return (
    <>
      <LoginContainer>
        {/* Main Card */}
        <View style={{ gap: content(30) }}>
          <View className="flex-row items-center gap-7">
            <Pressable onPress={() => router.back()}>
              <Back
                style={{ width: controlHeight(11), height: controlHeight(23) }}
              />
            </Pressable>

            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textSize(24),
                textAlign: "center",
              }}
            >
              Reset Password
            </Text>
          </View>

          {/* Form input*/}
          <View style={{ gap: content(20) }}>
            {/* Email */}
            <Textinput
              placeholder="Email address"
              fontSize={12}
              inputAreaHeight={43}
            />

            {/* Password */}
            <View className="gap-2">
              <Textinput
                placeholder="Password"
                password
                fontSize={12}
                inputAreaHeight={43}
              />
            </View>
          </View>

          {/*Reset Password */}
          <View style={{ gap: content(23) }}>
            {/* Sign Up */}
            <Button
              text="Reset Password"
              fontSize={16}
              buttonHeight={53}
              className=" bg-[#E3E0DE] "
            />
          </View>
        </View>
      </LoginContainer>
    </>
  );
}
