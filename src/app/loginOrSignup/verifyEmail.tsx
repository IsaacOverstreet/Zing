import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import Button from "@/src/components/button";
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { useEffect, useRef } from "react";
import { Image, Text, useColorScheme, View } from "react-native";
import emailIcon from "../../../assets/images/emailIcon.png";
import { useResponsive } from "@/src/utils/responsive";

interface props {
  isVisible: boolean;
}
export default function BottomSheetExample({ isVisible }: props) {
  const { content, controlHeight, textSize } = useResponsive();

  const sheetRef = useRef<BottomSheet>(null);

  useEffect(() => {
    if (isVisible) {
      // Opens the sheet to the first snap point (index 0)
      sheetRef.current?.snapToIndex(0);
    } else {
      // Closes the sheet
      sheetRef.current?.close();
    }
  }, [isVisible]);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={["40%"]}
      index={-1}
      enablePanDownToClose={false}
      enableDynamicSizing={false}

      // dark overlay behind sheet
      backdropComponent={(props) => (
        <BottomSheetBackdrop
          {...props}
          disappearsOnIndex={-1}
          appearsOnIndex={0}
          opacity={0.5}
          pressBehavior="none"
        />
      )}
      backgroundStyle={{
        backgroundColor: "#FFF9F5",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      }}
      handleIndicatorStyle={{
        height: 0,
        width: 0,
      }}
    >
      <BottomSheetView style={{ flex: 1, padding: 20, alignItems: "center" }}>
        <View
          style={{ gap: content(24) }}
          className="flex justify-center items-center w-full "
        >
          <Image
            source={emailIcon}
            style={{ width: controlHeight(65), height: controlHeight(62) }}
            resizeMode="contain"
            className="w-"
          />
          <Text
            style={{ fontFamily: fontFamily.semiBold, fontSize: textSize(20) }}
          >
            Verify Your Email
          </Text>
          <Text
            style={{
              fontFamily: fontFamily.regular,
              fontSize: textSize(12),
              textAlign: "center",
            }}
          >
            We've sent a verification link to your email address. Click the link
            to confirm your account and get started.
          </Text>

          <Button
            text="Done"
            fontSize={15}
            buttonHeight={53}
            className="w-full bg-[#765097]"
            textClassName="text-[#FFF9F6]"
            onPress={() => sheetRef.current?.close()}
          />
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
}
