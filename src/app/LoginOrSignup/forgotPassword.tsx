import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";

import BackRoute from "@/src/components/BackRoute";
import BottomModal from "@/src/components/BottomModal";
import Button from "@/src/components/Button";
import LoginContainer from "@/src/components/LoginContainer";
import Textinput from "@/src/components/TextInput";
import { useResponsive } from "@/src/utils/responsive";
import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";

export default function ForgotPassword() {
  const { textSize, content } = useResponsive();
  const [showDrawer, setShowDrawer] = useState(false);
  const handleSendResetLink = async () => {
    setShowDrawer(true);
  };

  return (
    <>
      <LoginContainer>
        {/* Main Card */}
        <View style={{ gap: content(30) }}>
          <View style={{ gap: content(20) }} className="items-center">
            <View className="relative w-full flex-row items-center justify-center">
              <BackRoute />

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
        onPress={() => router.push("/LoginOrSignup/resetPassword")}
      />
    </>
  );
}
