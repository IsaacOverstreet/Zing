import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import Button from "@/src/components/button";
import LoginContainer from "@/src/components/loginContainer";
import Textinput from "@/src/components/textInput";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import VerifyEmail from "./verifyEmail";

export default function CreateAccount() {
  const [showDrawer, setShowDrawer] = useState(false);
  const email = "user@example.com";

  const handleSendOTP = async () => {
    setShowDrawer(true);
  };
  return (
    <>
      <LoginContainer>
        {/* Main Card */}
        <View
          className="
                w-full
                max-w-[820px]
                 gap-[30px]  md:gap-[40px] lg:gap-[50px]2e "
        >
          {/* Title */}
          <View className="flex-row items-center gap-7 ">
            <Pressable onPress={() => router.back()}>
              <Ionicons name="chevron-back" size={32} color="#000" />
            </Pressable>

            <Text
              style={{ fontFamily: fontFamily.semiBold }}
              className="
                            text-center
                            text-[24px]
                            tracking-[-3%]
                            sm:text-[28px]
                            md:text-[36px]
                       
                          "
            >
              Create Your Account
            </Text>
          </View>

          {/* Form input*/}
          <View className=" gap-[20px] md:gap-[25px]">
            {/* Name */}
            <Textinput
              placeholder="Full name"
              textClassName="text-[12px] md:text-[16px] lg:text-[18px]"
            />
            {/* Email */}
            <Textinput
              placeholder="Email address"
              textClassName="text-[12px] md:text-[16px] lg:text-[18px]"
            />

            {/* Password */}
            <View className="gap-2">
              <Textinput
                placeholder="Password"
                password
                textClassName="text-[12px] md:text-[16px] lg:text-[18px]"
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
              textClassName="text-[12px] md:text-[16px] lg:text-[18px]"
            />
          </View>

          {/*Signup + Social Login */}
          <View className=" gap-[23px] md:gap-[33px]">
            {/* Sign Up */}
            <Button
              text="Sign Up"
              textClassName="text-[16px] md:text-[18px] lg:text-[20px]"
              onPress={handleSendOTP}
            />

            {/* Divider */}
            <View className="flex-row items-center gap-2">
              <View className="h-px flex-1 bg-[#BDB9B7]" />

              <Text
                style={{ fontFamily: fontFamily.regular }}
                className=" text-[14px] text-[#777]"
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
                textClassName="text-[12px] md:text-[16px] lg:text-[18px]"
              />
              <Button
                text="Apple"
                socialButton
                isApple

                textClassName="text-[12px] md:text-[16px] lg:text-[18px]"
              />
            </View>
          </View>

          {/* Bottom Login */}
          <View className=" mt-[100px]  items-center ">
            <View className="flex-row items-center gap-2">
              <Text
                style={{ fontFamily: fontFamily.semiBold }}
                className="text-[16px] leading-[15.6px] sm:text-[18px] sm:leading-[18.2px] md:text-[20px] md:leading-[20.8px]"
              >
                Already have an account?
              </Text>

              <Pressable>
                <Text
                  style={{ fontFamily: fontFamily.semiBold }}
                  className="text-[16px] leading-[15.6px] text-[#765097] sm:text-[17px] sm:leading-[16.6px] md:text-[18px] md:leading-[18.2px] lg:text-[20px] lg:leading-[20.8px]"
                >
                  Log In
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </LoginContainer>
      <VerifyEmail isVisible={showDrawer} />
    </>
  );
}
