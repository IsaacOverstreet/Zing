import { Image, Pressable, Text, View } from "react-native";

import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import loginImage from "@/assets/images/loginImage.png";
import { router } from "expo-router";
import LoginContainer from "../components/LoginContainer";
import { useResponsive } from "../utils/responsive";

export default function WelcomeScreen() {
  const { textSize, imageHeight, controlHeight } = useResponsive();

  return (
    <LoginContainer>
      {/* Main Card */}

      <Text
        style={{
          fontFamily: fontFamily.semiBold,
          fontSize: textSize(24),
          textAlign: "center",
        }}
      >
        Welcome! Let’s get started
      </Text>

      {/* Illustration + Description */}
      <View className="gap-[24px] mt-[20px] w-full">
        <View
          className=" 
                w-full
                overflow-hidden
              "
        >
          <Image
            source={loginImage}
            style={{ width: "100%", height: imageHeight(300) }}
            className="w-full rounded-b-[20px] "
            resizeMode="cover"
          />
        </View>

        <Text
          style={{
            fontFamily: fontFamily.regular,
            fontSize: textSize(16),
            textAlign: "center",
          }}
        >
          Your campus. Your community. All in one place.
        </Text>
      </View>

      {/* Buttons */}
      <View
        className="
                w-full
                gap-[15px]
              "
      >
        {/* GET STARTED */}
        <Pressable
          onPress={() => router.push("/LoginOrSignup/createAccount")}
          style={{ minHeight: controlHeight(52) }}
          className="
                   w-full
    items-center
    justify-center
    rounded-full
    border
    border-[#999999]
    bg-[#FFF9F6]
    shadow-black
    shadow-[0px_3px_0px]
    active:translate-y-1
    active:shadow-[0px_2px_0px]"
        >
          <Text
            style={{ fontFamily: fontFamily.medium, fontSize: textSize(14) }}
          >
            Get Started
          </Text>
        </Pressable>

        {/* LOGIN */}
        <Pressable
          onPress={() => router.push("/LoginOrSignup/login")}
          style={{ minHeight: controlHeight(52) }}
          className=" w-full
    items-center
    justify-center
    rounded-full
    border
    border-[#999999]
    bg-[#FFF9F6]
    shadow-black
    shadow-[0px_3px_0px]
    active:translate-y-1
    active:shadow-[0px_2px_0px]"
        >
          <Text
            style={{ fontFamily: fontFamily.medium, fontSize: textSize(14) }}
          >
            Log In
          </Text>
        </Pressable>
      </View>

      {/* Terms & Privacy */}
      <Text
        style={{ fontFamily: fontFamily.regular, fontSize: textSize(12) }}
        className="
              mt-12
              text-center md:leading-[25.8px]"
      >
        By continuing you agree to our Terms & Privacy Policy
      </Text>
    </LoginContainer>
  );
}
