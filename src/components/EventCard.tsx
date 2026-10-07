import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, Text, View } from "react-native";
import { useResponsive } from "../utils/responsive";

type Event = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  category: string;
  image: string;
  featured?: boolean;
};

export default function EventCard({
  event,
  saved,
  onSave,
}: {
  event: Event;
  saved: boolean;
  onSave: () => void;
}) {
  const { textSize, controlHeight, imageHeight } = useResponsive();

  return (
    <View className="mb-6">
      <View className="relative overflow-hidden rounded-[25px]">
        <View className="absolute inset-0 rounded-[25px] bg-black" />

        <View className="relative translate-x-[3px] -translate-y-[3px] overflow-hidden rounded-[25px]">
          <Image
            source={{ uri: event.image }}
            style={{ height: imageHeight(200) }}
            className="w-full"
            resizeMode="cover"
          />

          <Pressable
            onPress={onSave}
            style={{ height: controlHeight(44), width: controlHeight(44) }}
            className="absolute left-4 top-4 h-[44px] w-[44px] items-center justify-center rounded-full bg-[#FFF9F6]"
          >
            <Ionicons
              name={saved ? "heart" : "heart-outline"}
              size={controlHeight(16)}
              color={saved ? "#765097" : "#2D2927"}
            />
          </Pressable>

          <Pressable
            style={{ height: controlHeight(44), width: controlHeight(44) }}
            className="absolute right-4 top-4 h-[44px] w-[44px] items-center justify-center rounded-full bg-[#FFF9F6]"
          >
            <Ionicons
              name="share-outline"
              size={controlHeight(16)}
              color="#2D2927"
            />
          </Pressable>
        </View>
      </View>

      <View className="mt-3 flex-row items-center justify-between">
        <Text
          style={{
            fontFamily: fontFamily.regular,
            fontSize: textSize(12),
          }}
        >
          {event.date} | {event.time} | {event.location}
        </Text>

        <Text
          style={{
            fontFamily: fontFamily.medium,
            fontSize: textSize(16),
            color: "#765097",
          }}
        >
          {event.price}
        </Text>
      </View>

      <Text
        className="mt-2"
        style={{
          fontFamily: fontFamily.medium,
          fontSize: textSize(16),
        }}
      >
        {event.title}
      </Text>
    </View>
  );
}
