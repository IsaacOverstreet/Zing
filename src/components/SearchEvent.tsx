import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import BackRoute from "@/src/components/BackRoute";
import SearchBar from "@/src/components/SearchBar";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useResponsive } from "../utils/responsive";
import NoResultsFound from "./NoResultsFound";

const events = [
  "Debate competition",
  "Volunteering for cause",
  "Free food events",
  "2025 modelling recruiting programme",
  "Debanter competition 2026",
];

type SearchEventProps = {
  setIsSearching: (value: boolean) => void;
};

export default function SearchEvent({ setIsSearching }: SearchEventProps) {
  const { textSize, content, controlHeight } = useResponsive();
  const [search, setSearch] = useState("");
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);

  const popularSearches = events.slice(0, 4);

  const filteredEvents = events.filter((event) =>
    event.toLowerCase().includes(search.toLowerCase().trim()),
  );

  return (
    <View className="flex-1">
      {/* Search bar */}
      <View className=" relative w-full  flex-row items-center justify-between ">
        <BackRoute onPress={() => setIsSearching(false)} />

        <SearchBar
          placeholder="Search for your event"
          setSearch={setSearch}
          className="w-[95%]"
        />
      </View>

      {/* Popular Search / Search Results */}
      <View className="mt-6 ">
        {search.trim() === "" ? (
          <>
            <Text
              className="mb-3 text-[#2D2927]"
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textSize(14),
              }}
            >
              Popular Search
            </Text>

            {popularSearches.map((event) => (
              <Pressable
                key={event}
                onPress={() => setSearch(event)}
                className="h-[46px] w-full flex-row items-center"
              >
                <View className="flex-1 flex-row items-center">
                  <Ionicons name="time-outline" size={15} color="#2D2927" />

                  <Text
                    className="ml-3 text-[#2D2927]"
                    style={{
                      fontFamily: fontFamily.regular,
                      fontSize: textSize(12),
                    }}
                  >
                    {event}
                  </Text>
                </View>

                <Ionicons name="chevron-forward" size={14} color="#2D2927" />
              </Pressable>
            ))}
          </>
        ) : filteredEvents.length > 0 ? (
          filteredEvents.map((event) => {
            const isSelected = selectedEvent === event;

            return (
              <Pressable
                key={event}
                onPress={() => setSelectedEvent(event)}
                className={`h-[50px] w-full flex-row items-center border-b ${
                  isSelected ? "border-[#765097]" : "border-[#E5E5E5]"
                }`}
              >
                <View className="flex-1 flex-row items-center">
                  <Ionicons name="search-outline" size={18} color="#2D2927" />

                  <Text
                    className="ml-3 text-[#2D2927]"
                    style={{
                      fontFamily: fontFamily.regular,
                      fontSize: textSize(12),
                    }}
                  >
                    {event}
                  </Text>
                </View>

                {isSelected && (
                  <View className="mr-2 h-[20px] w-[20px] items-center justify-center rounded-full bg-[#765097]">
                    <Ionicons name="checkmark" size={14} color="#FFF9F6" />
                  </View>
                )}
              </Pressable>
            );
          })
        ) : (
          <View className="mt-[100px]">
            <NoResultsFound />
          </View>
        )}
      </View>
    </View>
  );
}
