import { router } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

import ExploreSection from "@/src/components/Explore/ExploreSection";
import HomePageContainer from "@/src/components/HomepageContainer";
import SearchTriggerAndFilter from "@/src/components/SearchTriggerAndFilter";

import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { recommendedEvents, trendingEvents } from "@/data/exploreEvent";
import FilterPanel from "@/src/components/FilterPanel";
import { useSearchStore } from "@/src/store/searchStore";
import { useResponsive } from "@/src/utils/responsive";

const filters = ["All", "Near Me", "This Weekend", "Free"];

export default function Explore() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [showFilters, setShowFilters] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("Any date");
  const [freeOnly, setFreeOnly] = useState(false);
  const { content, textSize, controlHeight } = useResponsive();

  const isFilterActive =
    selectedCategory !== null || selectedDate !== "Any date" || freeOnly;

  const filterEvents = (events: typeof recommendedEvents) => {
    return events.filter((event) => {
      const matchesSearch = event.title
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesQuickFilter =
        activeFilter === "All" ||
        (activeFilter === "Free" && event.price === "Free");

      const matchesCategory =
        !selectedCategory || event.category === selectedCategory;

      const matchesFree = !freeOnly || event.price === "Free";

      return (
        matchesSearch && matchesQuickFilter && matchesCategory && matchesFree
      );
    });
  };

  const handleResetFilters = () => {
    setSelectedCategory(null);
    setSelectedDate("Any date");
    setFreeOnly(false);
  };

  const openSearchScreen = useSearchStore((state) => state.openSearchScreen);

  return (
    <HomePageContainer>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: content(20) }}
      >
        <View className="border border-solid " style={{ gap: content(30) }}>
          <Text
            className=" text-center "
            style={{
              fontSize: textSize(24),
              fontFamily: fontFamily.semiBold,
            }}
          >
            Explore
          </Text>

          {/* Search */}
          <SearchTriggerAndFilter
            onpress={() => openSearchScreen("events")}
            showFilterPanel={() => setShowFilters(true)}
            isFilterPanleActive={isFilterActive}
          />

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}

            contentContainerStyle={{ gap: 5 }}
          >
            {filters.map((filter) => {
              const selected = activeFilter === filter;

              return (
                <Pressable
                  key={filter}
                  onPress={() => setActiveFilter(filter)}
                  className={`rounded-full border  ${
                    selected
                      ? "border-[#765097] bg-[#765097]"
                      : "border-[#000000] bg-transparent"
                  }`}
                  style={{
                    paddingHorizontal: 16,
                    paddingVertical: 9,
                  }}
                >
                  <Text
                    className={`${selected ? " text-white" : "text-[#2D2927]"}`}
                    style={{
                      fontSize: textSize(12),
                      fontFamily: fontFamily.regular,
                    }}
                  >
                    {filter}
                  </Text>
                </Pressable>
              );
            })}
          </ScrollView>

          <ExploreSection
            title="Recommended for you"
            events={filterEvents(recommendedEvents)}
            onViewAll={() => router.push("/Explore/recommend")}
          />

          <ExploreSection
            title="Trending across schools"
            events={filterEvents(trendingEvents)}
            onViewAll={() => router.push("/Explore/trending")}
          />
        </View>
      </ScrollView>

      {showFilters && (
        <FilterPanel
          selectedCategory={selectedCategory}
          selectedDate={selectedDate}
          freeOnly={freeOnly}
          onCategoryChange={setSelectedCategory}
          onDateChange={setSelectedDate}
          onFeeChange={setFreeOnly}
          onReset={handleResetFilters}
          onApply={() => setShowFilters(false)}
          onClose={() => setShowFilters(false)}
        />
      )}
    </HomePageContainer>
  );
}
