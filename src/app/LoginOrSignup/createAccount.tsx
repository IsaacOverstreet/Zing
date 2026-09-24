import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import BackRoute from "@/src/components/BackRoute";
import Button from "@/src/components/Button";
import LoginContainer from "@/src/components/LoginContainer";
import Textinput from "@/src/components/TextInput";
import { useResponsive } from "@/src/utils/responsive";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import BottomModal from "../../components/BottomModal";

export default function CreateAccount() {
  const [showDrawer, setShowDrawer] = useState(false);
  const { textSize, content, controlHeight } = useResponsive();

  const handleVerifyAcc = async () => {
    setShowDrawer(true);
  };
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
              Create Your Account
            </Text>
          </View>

          {/* Form input*/}
          <View style={{ gap: content(20) }}>
            {/* Name */}
            <Textinput
              placeholder="Full name"
              fontSize={12}
              inputAreaHeight={43}
            />
            {/* Email */}
            <Textinput
              placeholder="Email address"
              fontSize={12}
              inputAreaHeight={43}
            />

            {/* Password */}
            <View className="gap-2">
              <Textinput
                placeholder="Create Password"
                password
                fontSize={12}
                inputAreaHeight={43}
              />

              {/* Password strength */}
              {/* <View className="gap-1">
              <View className="flex-row gap-2">
                <View className="h-[6px] flex-1 rounded-full bg-[#F9B900]" />
                <View className="h-[6px] flex-1 rounded-full bg-[#F9B900]" />
                <View className="h-[6px] flex-1 rounded-full bg-[#C7C7C7]" />
                <View className="h-[6px] flex-1 rounded-full bg-[#C7C7C7]" />
              </View>

              <Text className="self-end font-regular text-[12px] text-[#777]">
                Weak
              </Text>
            </View> */}
            </View>

            {/* Confirm Password */}

            <Textinput
              placeholder="Confirm Password"
              password
              fontSize={12}
              inputAreaHeight={43}
            />
          </View>

          {/*Signup + Social Login */}
          <View style={{ gap: content(23) }}>
            {/* Sign Up */}
            <Button
              text="Sign Up"
              fontSize={16}
              buttonHeight={53}
              className=" bg-[#E3E0DE] "
              onPress={handleVerifyAcc}
            />

            {/* Divider */}
            <View className="flex-row items-center gap-2">
              <View className="h-px flex-1 bg-[#BDB9B7]" />

              <Text
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: textSize(14),
                }}
                className="text-[#777]"
              >
                Or continue with
              </Text>

              <View className="h-px flex-1 bg-[#BDB9B7]" />
            </View>

            {/* Social buttons */}
            <View className="flex-row gap-3">
              <Button
                text="Google"
                socialButton
                fontSize={12}
                buttonHeight={46}
              />
              <Button
                text="Apple"
                socialButton
                isApple
                fontSize={12}
                buttonHeight={46}
              />
            </View>
          </View>
        </View>

        {/* Bottom Login */}
        <View className=" mt-[100px]  items-center ">
          <View className="flex-row items-center gap-2">
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textSize(16),
              }}
            >
              Already have an account?
            </Text>

            <Pressable>
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: textSize(16),
                }}
                className="text-[#765097]"
              >
                Log In
              </Text>
            </Pressable>
          </View>
        </View>
      </LoginContainer>
      <BottomModal
        isVisible={showDrawer}
        title="Verify Your Email"
        description="We've sent a verification link to your email address. Click the link to confirm your account and get started."
      />
    </>
  );
}
