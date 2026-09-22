import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import Button from "@/src/components/button";
import LoginContainer from "@/src/components/loginContainer";
import Textinput from "@/src/components/textInput";
import { useResponsive } from "@/src/utils/responsive";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import VerifyEmail from "./verifyEmail";

export default function CreateAccount() {
  const [showDrawer, setShowDrawer] = useState(false);
  const { textSize, content } = useResponsive();
  const email = "user@example.com";

  const handleSendOTP = async () => {
    setShowDrawer(true);
  };
  return (
    <>
      <LoginContainer>
        {/* Main Card */}
        <View className="flex-row items-center gap-7">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={32} color="#000" />
          </Pressable>

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
              placeholder="Password"
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
            placeholder="Password"
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
            onPress={handleSendOTP}
          />

          {/* Divider */}
          <View className="flex-row items-center gap-2">
            <View className="h-px flex-1 bg-[#BDB9B7]" />

            <Text
              style={{ fontFamily: fontFamily.regular, fontSize: textSize(14) }}
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
      <VerifyEmail isVisible={showDrawer} />
    </>
  );
}
