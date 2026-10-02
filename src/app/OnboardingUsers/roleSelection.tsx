import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import RoleImage from "@/assets/images/roleImage.png";
import AppContainer from "@/src/components/AppContainer";
import { useResponsive } from "@/src/utils/responsive";
import { router } from "expo-router";
import { Image, Text, View } from "react-native";
import Button from "../../components/Button";

export default function RoleSelection() {
  const { textSize, imageHeight, controlHeight, content } = useResponsive();

  return (
    <AppContainer>
      {/* Main Card */}
      <View style={{ gap: content(60), paddingTop: 20 }}>
        <Text
          style={{
            fontFamily: fontFamily.semiBold,
            fontSize: textSize(24),
            textAlign: "left",
          }}
        >
          Just a sec......!
        </Text>

        {/* Illustration + Description */}
        <View className="gap-[24px] mt-[20px]">
          <View
            className=" 
                w-full
                overflow-hidden"
          >
            <Image
              source={RoleImage}
              style={{ width: "100%", height: imageHeight(300) }}
              className=" rounded-b-[20px] "
              resizeMode="cover"
            />
          </View>
        </View>

        {/* Buttons */}
        <View
          className="
                w-full
                gap-[15px] 
              "
        >
          <Text
            style={{
              fontFamily: fontFamily.medium,
              fontSize: textSize(16),
              textAlign: "left",
            }}
          >
            Are you an attendee or an organizer?
          </Text>

          {/* Attendee */}
          <Button
            onPress={() => {
              router.push("/OnboardingUsers/nearbySchools");
            }}
            className=" bg-[#FFF9F5] "
            text="Attendee"
            fontSize={14}
            buttonHeight={52}
          />

          {/* Organizer */}
          <Button
            className=" bg-[#FFF9F5] "
            text="Organizer"
            fontSize={14}
            buttonHeight={52}
          />
        </View>
      </View>
    </AppContainer>
  );
}
