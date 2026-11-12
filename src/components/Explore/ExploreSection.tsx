import { View, Text, Pressable } from "react-native";
import EventCard from "./EventCard";
import type { ExploreEvent } from "@/data/exploreEvent";

type Props = {
  title: string;
  events: ExploreEvent[];
  onViewAll: () => void;
};

export default function ExploreSection({ title, events, onViewAll }: Props) {
  return (
    <View>
      <View className="mb-3 flex-row items-center justify-between">
        <Text className="text-[13px] font-bold text-[#2D2927]">{title}</Text>

        <Pressable onPress={onViewAll}>
          <Text className="text-[10px] font-semibold text-[#765097]">
            View All
          </Text>
        </Pressable>
      </View>

      <View className="flex-row gap-2">
        {events.slice(0, 2).map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </View>

      {events.length > 2 && (
        <View className="mt-3 flex-row gap-2">
          {events.slice(2, 4).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </View>
      )}
    </View>
  );
}
