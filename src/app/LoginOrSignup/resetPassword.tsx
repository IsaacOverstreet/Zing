import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";

import BackRoute from "@/src/components/BackRoute";
import Button from "@/src/components/Button";
import LoginContainer from "@/src/components/LoginContainer";
import Textinput from "@/src/components/TextInput";
import { useResponsive } from "@/src/utils/responsive";
import { router } from "expo-router";

import { Text, View } from "react-native";

export default function ResetPassword() {
  const { textSize, content, controlHeight } = useResponsive();

  return (
    <>
      <LoginContainer>
        {/* Main Card */}
        <View style={{ gap: content(30) }}>
          <View className="relative w-full  flex-row items-center gap-7 justify-center">
            <BackRoute />

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
            {/* Password */}
            <Textinput
              placeholder="Enter your new password"
              password
              fontSize={12}
              inputAreaHeight={43}
            />

            {/* Confirm Password */}
            <Textinput
              placeholder="Confirm Password"
              password
              fontSize={12}
              inputAreaHeight={43}
            />
          </View>

          {/*Reset Password */}
          <View style={{ gap: content(23) }}>
            {/* Sign Up */}
            <Button
              text="Reset Password"
              fontSize={16}
              buttonHeight={53}
              className=" bg-[#E3E0DE]"
              onPress={() => router.push("/OnboardingUsers/roleSelection")}
            />
          </View>
        </View>
      </LoginContainer>
    </>
  );
}
