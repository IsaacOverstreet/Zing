import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import AppContainer from "@/src/components/AppContainer";
import { useResponsive } from "@/src/utils/responsive";
import { useState } from "react";
import { Pressable, Switch, Text, View } from "react-native";

export default function EventReminder() {
  const [eventReminders, setEventReminders] = useState(true);
  const [eventUpdates, setEventUpdates] = useState(true);
  const { textSize, controlHeight, content } = useResponsive();

  const handlePrevious = () => {
    // previous screen
  };

  const handleNext = () => {
    return;

    // next screen
  };
  return (
    <AppContainer>
      <View style={{ gap: content(60) }} className="w-full flex-1">
        {/* Progress indicator */}
        <View className="w-full flex-row gap-2">
          <View className="h-[4px] flex-1 rounded-full bg-[#D985A8]" />
          <View className="h-[4px] flex-1 rounded-full bg-[#D985A8]" />
          <View className="h-[4px] flex-1 rounded-full bg-[#E5E1DE]" />
        </View>

        {/* Heading and description */}
        <View>
          <Text
            style={{
              fontFamily: fontFamily.semiBold,
              fontSize: textSize(24),
            }}
          >
            Stay in the loop
          </Text>

          <Text
            className="mt-5"
            style={{
              fontFamily: fontFamily.regular,
              fontSize: textSize(12),
            }}
          >
            Choose what you want to hear about, we'll never spam you.
          </Text>
        </View>

        {/* Notification preferences */}
        <View>
          {/* Event reminders */}
          <View className="flex-row items-center justify-between">
            <View className="mr-4 flex-1">
              <Text
                style={{
                  fontFamily: fontFamily.medium,
                  fontSize: textSize(12),
                }}
              >
                Event reminders
              </Text>

              <Text
                className="mt-2"
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: textSize(10),
                }}
              >
                Get notified before events you've saved start.
              </Text>
            </View>

            <Switch
              value={eventReminders}
              onValueChange={setEventReminders}
              trackColor={{
                false: "#D9D4D1",
                true: "#765097",
              }}
              thumbColor="#FFF9F5"
            />
          </View>
          <View className="my-3 h-[1px] w-full bg-[#D9D4D1]" />

          {/* Event updates */}
          <View className="flex-row items-center justify-between">
            <View className="mr-4 flex-1">
              <Text
                style={{
                  fontFamily: fontFamily.medium,
                  fontSize: textSize(12),
                }}
              >
                Event updates
              </Text>

              <Text
                className="mt-2"
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: textSize(10),
                }}
              >
                Know when event details change, time, venue, or capacity.
              </Text>
            </View>

            <Switch
              value={eventUpdates}
              onValueChange={setEventUpdates}
              trackColor={{
                false: "#D9D4D1",
                true: "#765097",
              }}
              thumbColor="#FFF9F5"
            />
          </View>
          <View className="my-3 h-[1px] w-full bg-[#D9D4D1]" />
        </View>

        <View className="mt-auto flex-row gap-4 pb-4">
          <Pressable
            style={{
              height: content(43),
            }}
            className="h-[48px] flex-1 items-center justify-center rounded-full border  border-[#999999] shadow-black shadow-[0px_3px_0px] bg-[#FFF9F5]"
          >
            <Text
              style={{
                fontFamily: fontFamily.medium,
                fontSize: textSize(16),
              }}
            >
              Previous
            </Text>
          </Pressable>

          <Pressable
            style={{
              height: content(43),
            }}
            onPress={handleNext}
            className="flex-1 items-center justify-center rounded-full border  border-[#999999] shadow-black shadow-[0px_3px_0px] bg-[#765097]"
          >
            <Text
              style={{
                fontFamily: fontFamily.medium,
                fontSize: textSize(16),
                color: "#FFF9F5",
              }}
            >
              Continue
            </Text>
          </Pressable>
        </View>
      </View>
    </AppContainer>
  );
}
