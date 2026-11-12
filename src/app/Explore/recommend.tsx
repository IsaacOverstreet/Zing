import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, ScrollView, Text, View } from "react-native";

import { recommendedEvents } from "@/data/exploreEvent";
import EventListCard from "@/src/components/Explore/EventListCard";
import HomepageContainer from "@/src/components/HomepageContainer";

export default function Recommend() {
  return (
    <HomepageContainer>
      <View className="flex-1 px-3 pt-3">
        <View className="mb-5 flex-row items-center justify-between">
          <Pressable onPress={() => router.back()}>
            <Ionicons name="chevron-back" size={25} color="#2D2927" />
          </Pressable>

          <Text className="text-[16px] font-bold text-[#2D2927]">
            Recommend
          </Text>

          <View className="w-[25px]" />
        </View>

        <ScrollView
          className="flex-1"
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        >
          {recommendedEvents.map((event) => (
            <EventListCard key={event.id} event={event} />
          ))}
        </ScrollView>
      </View>
    </HomepageContainer>
  );
}
