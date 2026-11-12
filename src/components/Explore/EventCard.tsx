import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { ExploreEvent } from "@/data/exploreEvents";

type Props = {
  event: ExploreEvent;
  onPress?: () => void;
};

export default function EventCard({ event, onPress }: Props) {
  return (
    <Pressable onPress={onPress} className="flex-1">
      <View className="overflow-hidden rounded-[12px]">
        <View className="relative">
          <Image
            source={{ uri: event.image }}
            className="w-full h-[105px]"
            resizeMode="cover"
          />

          <Pressable
            onPress={() => {}}
            className="absolute right-2 top-2 h-[25px] w-[25px] items-center justify-center rounded-full bg-white"
          >
            <Ionicons name="heart-outline" size={15} color="#765097" />
          </Pressable>
        </View>

        <View className="pt-1.5">
          <Text
            numberOfLines={1}
            className="text-[11px] font-bold text-[#2D2927]"
          >
            {event.title}
          </Text>

          <Text className="mt-1 text-[8px] text-[#5D5755]">
            {event.date} | {event.time} | {event.location}
          </Text>

          <Text className="mt-1 text-[9px] font-bold text-[#765097]">
            {event.price}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
