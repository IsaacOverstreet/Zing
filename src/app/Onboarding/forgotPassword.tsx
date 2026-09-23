import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import Back from "@/assets/images/backButton.svg";
import BottomModal from "@/src/components/bottomModal";
import Button from "@/src/components/button";
import LoginContainer from "@/src/components/loginContainer";
import Textinput from "@/src/components/textInput";
import { useResponsive } from "@/src/utils/responsive";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

export default function ForgotPassword() {
  const { textSize, imageHeight, content, controlHeight } = useResponsive();
  const [showDrawer, setShowDrawer] = useState(false);
  const handleSendResetLink = async () => {
    setShowDrawer(true);
  };

  return (
    <>
      <LoginContainer>
        {/* Main Card */}
        <View style={{ gap: content(30) }}>
          <View className="items-center gap-7">
            <View className="relative w-full flex-row items-center justify-center">
              <Pressable
                onPress={() => router.back()}
                className="absolute left-0"
              >
                <Back
                  style={{
                    width: controlHeight(11),
                    height: controlHeight(23),
                  }}
                />
              </Pressable>

              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: textSize(24),
                  textAlign: "center",
                }}
              >
                Forgot Password
              </Text>
            </View>

            <Text
              style={{
                fontFamily: fontFamily.regular,
                fontSize: textSize(12),
                textAlign: "center",
              }}
              className="px-[10px]"
            >
              Enter your email address to receive a reset password link.
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
          </View>

          {/* reset password */}
          <View style={{ gap: content(23) }}>
            <Button
              text="Reset Password"
              fontSize={16}
              buttonHeight={53}
              className=" bg-[#E3E0DE]"
              onPress={handleSendResetLink}
            />
          </View>
        </View>
      </LoginContainer>
      <BottomModal
        isVisible={showDrawer}
        title="Check Your Email"
        description="Check your email for a password reset link. If you don’t see it, click “Reset Password” to resend."
        onPress={() => router.push("/Onboarding/resetPassword")}
      />
    </>
  );
}
