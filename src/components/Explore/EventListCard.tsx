import { View, Text, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { ExploreEvent } from "@/data/exploreEvents";

type Props = {
  event: ExploreEvent;
};

export default function EventListCard({ event }: Props) {
  return (
    <Pressable className="mb-4">
      <View className="overflow-hidden rounded-[15px]">
        <View className="relative">
          <Image
            source={{ uri: event.image }}
            className="h-[185px] w-full"
            resizeMode="cover"
          />

          <Pressable
            onPress={() => {}}
            className="absolute left-3 top-3 h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
          >
            <Ionicons name="heart-outline" size={17} color="#765097" />
          </Pressable>

          <Pressable
            onPress={() => {}}
            className="absolute right-3 top-3 h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
          >
            <Ionicons name="share-social-outline" size={16} color="#2D2927" />
          </Pressable>
        </View>

        <View className="pt-2">
          <View className="flex-row items-start justify-between gap-2">
            <View className="flex-1">
              <Text className="text-[13px] font-bold text-[#2D2927]">
                {event.title}
              </Text>
            </View>

            <Text className="text-[11px] font-bold text-[#765097]">
              {event.price}
            </Text>
          </View>

          <Text className="mt-1 text-[10px] text-[#625B58]">
            {event.date} | {event.time} | {event.location}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
