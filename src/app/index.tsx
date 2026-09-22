import { Image, Pressable, Text, View } from "react-native";

import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import loginImage from "@/assets/images/loginImage.png";
import { router } from "expo-router";
import LoginContainer from "../components/loginContainer";

export default function WelcomeScreen() {
  return (
    <LoginContainer>
      {/* Main Card */}
      <View
        className="
       
                w-full
                max-w-[820px]
                bg-[#FFF9F6]
                md:rounded-[48px]
                 gap-[30px] md:gap-[40px] lg:gap-
              "
      >
        <Text
          style={{ fontFamily: fontFamily.semiBold }}
          className="
                text-center
                text-[24px]
                tracking-[-3%]
                sm:text-[26px]
                md:text-[36px]
           
              "
        >
          Welcome! Let’s get started
        </Text>

        {/* Illustration + Description */}
        <View className="gap-[24px] mt-[20px]">
          <View
            className=" 
                w-full
                overflow-hidden
               
              "
          >
            <Image
              source={loginImage}
              className="w-full rounded-b-[20px] h-[300px] sm:h-[350px] md:h-[700px] lg:h-[550px]"
              resizeMode="cover"
            />
          </View>

          <Text
            style={{ fontFamily: fontFamily.regular }}
            className="
                px-6
                text-center
                text-[16px]
                font-normal
                leading-[18.08px]
                tracking-[-2%]
                sm:px-10
                sm:text-[21px]
                sm:leading-[28px]
                md:px-12
                md:text-[27px]
                md:leading-[34px]
              "
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
            onPress={() => router.push("/loginOrSignup/createAccount")}
            className="
                   w-full
    min-h-[49px]
    py-[17px]
    items-center
    justify-center
    rounded-full
    border
    border-[#999999]
    bg-[#FFF9F6]
    shadow-black
    shadow-[0px_3px_0px]
    active:translate-y-1
    active:shadow-[0px_2px_0px]
    md:min-h-[62px]
    md:py-[20px]
    lg:min-h-[70px]
    lg:py-[22px]
                "
          >
            <Text
              style={{ fontFamily: fontFamily.regular }}
              className="
                  text-[14px]
    font-medium
    md:text-[18px]
    lg:text-[20px]
                  "
            >
              Get Started
            </Text>
          </Pressable>

          {/* LOGIN */}
          <Pressable
            // onPress={() => router.push("/login")}
            className=" w-full
                  min-h-[49px]
    py-[17px]
    items-center
    justify-center
    rounded-full
    border
    border-[#999999]
    bg-[#FFF9F6]
    shadow-black
    shadow-[0px_3px_0px]
    active:translate-y-1
    active:shadow-[0px_2px_0px]
    md:min-h-[62px]
    md:py-[20px]
    lg:min-h-[70px]
    lg:py-[22px]
                "
          >
            <Text
              style={{ fontFamily: fontFamily.regular }}
              className="
                    text-[14px]
    font-medium
    md:text-[18px]
    lg:text-[20px]
                  "
            >
              Log In
            </Text>
          </Pressable>
        </View>

        {/* Terms & Privacy */}
        <Text
          style={{ fontFamily: fontFamily.regular }}
          className="
              mt-12
              px-4
              text-center
              text-[12px]
              font-normal       
    leading-[15.6px]
    sm:text-[14px]
    sm:leading-[18.2px]
    md:text-[16px]
    md:leading-[20.8px]
            "
        >
          By continuing you agree to our Terms & Privacy Policy
        </Text>
      </View>
    </LoginContainer>
  );
}
