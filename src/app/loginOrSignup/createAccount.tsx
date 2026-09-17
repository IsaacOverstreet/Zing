import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import Button from "@/src/components/button";
import LoginContainer from "@/src/components/loginContainer";
import Textinput from "@/src/components/textInput";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function CreateAccount() {
  return (
    <LoginContainer>
      {/* Main Card */}
      <View
        className="
                w-full
                max-w-[820px]
                bg-[#FFF9F6]
                md:rounded-[48px] border border-blue-400
                 gap-[30px] md:gap-[px] lg:gap-[56px]
              "
      >
        {/* Title */}
        <View className="flex-row items-center gap-7 w-[292px] h-[27px]border border-red-400">
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
        <View className="mt-[px] gap-[20px] border border-red-500">
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
        <View className=" gap-[23px]">
          {/* Sign Up */}
          <Button
            text="Sign Up"
            textClassName="text-[16px] md:text-[18px] lg:text-[20px]"
          />

          {/* Divider */}
          <View className="flex-row items-center gap-2">
            <View className="h-px flex-1 bg-[#BDB9B7]" />

            <Text className="font-regular text-[14px] text-[#777]">
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
        <View className="mt-auto items-center pt-20">
          <View className="flex-row items-center gap-2">
            <Text
              style={{ fontFamily: fontFamily.semiBold }}
              className="text-[16px]        
    leading-[15.6px]
    sm:text-[18px]
    sm:leading-[18.2px]
    md:text-[20px]
    md:leading-[20.8px]"
            >
              Already have an account?
            </Text>

            <Pressable onPress={() => router.push("/login")}>
              <Text
                style={{ fontFamily: fontFamily.semiBold }}
                className="text-[16px]  text-[#765097]       
    leading-[15.6px]
    sm:text-[18px]
    sm:leading-[18.2px]
    md:text-[20px]
    md:leading-[20.8px]"
              >
                Log In
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </LoginContainer>
  );
}
