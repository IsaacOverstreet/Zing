import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import BackRoute from "@/src/components/BackRoute";
import Button from "@/src/components/Button";
import LoginContainer from "@/src/components/LoginContainer";
import Textinput from "@/src/components/TextInput";
import { useResponsive } from "@/src/utils/responsive";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function Login() {
  const { textSize, content, controlHeight } = useResponsive();

  return (
    <>
      <LoginContainer>
        {/* Main Card */}
        <View style={{ gap: content(30) }}>
          <View style={{ gap: content(20) }} className="items-center ">
            <View className="relative w-full flex-row items-center justify-center">
              <BackRoute />

              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: textSize(24),
                  textAlign: "center",
                }}
              >
                Welcome Back
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
              Log into your existing account to continue your matchmaking
              journey.
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

            {/* Remember me section */}
            <View className="w-full flex-row items-center justify-between">
              <Pressable className="flex-row items-center gap-[10px]">
                <View
                  style={{
                    height: controlHeight(16),
                    width: controlHeight(16),
                  }}
                  className=" border rounded-full border-[#999999] p-1"
                />

                <Text
                  style={{
                    fontFamily: fontFamily.regular,
                    fontSize: textSize(12),
                  }}
                >
                  Remember me
                </Text>
              </Pressable>

              {/* forgot password */}
              <Pressable
                onPress={() => router.push("/LoginOrSignup/forgotPassword")}
              >
                <Text
                  style={{
                    fontFamily: fontFamily.semiBold,
                    fontSize: textSize(12),
                    color: "#E590B4",
                  }}
                >
                  Forgot Password?
                </Text>
              </Pressable>
            </View>
          </View>

          {/*Signup + Social Login */}
          <View style={{ gap: content(23) }}>
            {/* Sign Up */}
            <Button
              text="Log In"
              fontSize={16}
              buttonHeight={53}
              className=" bg-[#E3E0DE] "
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
        <View className="items-center">
          <View className="flex-row items-center gap-2">
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textSize(16),
              }}
            >
              Don’t have an account?
            </Text>

            <Pressable>
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: textSize(16),
                }}
                className="text-[#765097]"
              >
                Sign Up
              </Text>
            </Pressable>
          </View>
        </View>
      </LoginContainer>
    </>
  );
}
