import React from "react";
import { View, Text, Image, Pressable, StatusBar } from "react-native";
import { router } from "expo-router";

export default function WelcomeScreen() {
  return (
    <View className="flex-1 bg-[#F6F3F1]">
      <StatusBar barStyle="dark-content" backgroundColor="#F6F3F1" />

      <View className="flex-1 items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16">
        {/* Main Card */}
        <View
          className="
            w-full
            max-w-[720px]
            rounded-[42px]
            bg-[#FFF9F6]
            px-5
            py-7

            sm:px-8

            md:rounded-[48px]
            md:px-12
            md:py-10
          "
        >
          {/* Blue Border */}
          <View
            className="
              w-full
              overflow-hidden
              border-2
              border-[#1595E5]
            "
          >
            {/* Title */}
            <Text
              className="
                px-3
                pt-2
                text-center
                text-[28px]
                font-extrabold
                leading-[34px]
                tracking-[-1px]
                text-black

                sm:text-[32px]
                sm:leading-[38px]

                md:text-[38px]
                md:leading-[44px]
              "
            >
              Welcome! Let’s get started
            </Text>

            {/* Illustration */}
            <View
              className="
                mt-[70px]
                w-full
                overflow-hidden

                sm:mt-[80px]

                md:mt-[90px]
              "
            >
              <Image
                source={require("../assets/illustration.png")}
                resizeMode="cover"
                className="aspect-[0.98] w-full"
              />
            </View>

            {/* Description */}
            <Text
              className="
                mt-8
                px-6
                text-center
                text-[19px]
                font-medium
                leading-[25px]
                text-black

                sm:text-[21px]
                sm:leading-[28px]

                md:px-12
                md:text-[27px]
                md:leading-[34px]
              "
            >
              Your campus. Your community. All in one place.
            </Text>

            {/* Buttons */}
            <View
              className="
                mt-[65px]
                w-full
                gap-6
                pb-2

                md:mt-[70px]
              "
            >
              {/* GET STARTED */}
              <Pressable
                // onPress={() => router.push("/signup")}
                className="
                  min-h-[74px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#999999]
                  bg-[#FFF9F6]

                  shadow-black
                  shadow-[0px_7px_0px]

                  active:translate-y-1
                  active:shadow-[0px_2px_0px]

                  md:min-h-[82px]
                "
              >
                <Text
                  className="
                    text-[20px]
                    font-bold
                    text-black
                    md:text-[24px]
                  "
                >
                  Get Started
                </Text>
              </Pressable>

              {/* LOGIN */}
              <Pressable
                // onPress={() => router.push("/login")}
                className="
                  min-h-[74px]
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#999999]
                  bg-[#FFF9F6]

                  shadow-black
                  shadow-[0px_7px_0px]

                  active:translate-y-1
                  active:shadow-[0px_2px_0px]

                  md:min-h-[82px]
                "
              >
                <Text
                  className="
                    text-[20px]
                    font-bold
                    text-black
                    md:text-[24px]
                  "
                >
                  Log In
                </Text>
              </Pressable>
            </View>
          </View>

          {/* Terms & Privacy */}
          <Text
            className="
              mt-12
              px-4
              text-center
              text-[13px]
              font-medium
              leading-[20px]
              text-black

              sm:text-[14px]

              md:text-[17px]
              md:leading-[24px]
            "
          >
            By continuing you agree to our Terms & Privacy Policy
          </Text>
        </View>
      </View>
    </View>
  );
}
