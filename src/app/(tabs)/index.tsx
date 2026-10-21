import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import FilterHorzontalBlack from "@/assets/images/filter-horizontal-black.svg";
import FilterHorzontalWhite from "@/assets/images/filter-horizontal-white.svg";
import EventCard from "@/src/components/EventCard";
import FeaturedEvent from "@/src/components/FeaturedEvent";
import FilterPanel from "@/src/components/FilterPanel";
import HomePageContainer from "@/src/components/HomepageContainer";
import SearchBar from "@/src/components/SearchBar";
import SearchEvent from "@/src/components/SearchEvent";
import { useResponsive } from "@/src/utils/responsive";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  ScrollView,
  Share,
  Text,
  View,
} from "react-native";

const categories = [
  "All",
  "Tech",
  "Music",
  "Career",
  "Sport",
  "Ai",
  "Arts",
  "Health",
];

const events = [
  {
    id: "1",
    title: "UI Tech Fest 2025",
    date: "May 20, 2025",
    time: "10:00 AM",
    location: "Trenchard Hall",
    price: "₦4000",
    category: "Tech",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80",
    featured: true,
  },
  {
    id: "2",
    title: "Campus Music Night",
    date: "May 24, 2025",
    time: "6:00 PM",
    location: "Amphitheatre",
    price: "₦2500",
    category: "Music",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "3",
    title: "Career Connect 2025",
    date: "May 28, 2025",
    time: "11:00 AM",
    location: "University Auditorium",
    price: "Free",
    category: "Career",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "4",
    title: "Inter-Faculty Sports Day",
    date: "June 2, 2025",
    time: "9:00 AM",
    location: "Sports Complex",
    price: "₦1000",
    category: "Sport",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function Home() {
  const { textSize, content, controlHeight } = useResponsive();

  // const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedEvents, setSavedEvents] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState<boolean>(false);

  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");

  const [selectedDate, setSelectedDate] = useState("Any date");

  const [freeOnly, setFreeOnly] = useState(false);

  const [showSearch, setShowSearch] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const isFilterActive =
    (selectedCategory !== "ALL" && selectedCategory !== "All") ||
    selectedDate !== "Any date" ||
    freeOnly;

  const toggleSaved = (eventId: string) => {
    setSavedEvents((current) =>
      current.includes(eventId)
        ? current.filter((id) => id !== eventId)
        : [...current, eventId],
    );
  };

  const handleShare = async (event: (typeof events)[number]) => {
    await Share.share({
      message: `Check out ${event.title}!\nDate: ${event.date}\nLocation: ${event.location}`,
    });
  };

  return (
    <HomePageContainer>
      {isSearching ? (
        <SearchEvent setIsSearching={setIsSearching} />
      ) : (
        <View className="flex-1 ">
          {/* Main content */}
          <FlatList
            data={filteredEvents}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: content(20),
            }}
            ListHeaderComponent={
              <View>
                {/* University */}
                <View
                  style={{
                    height: controlHeight(22),
                    paddingHorizontal: controlHeight(10),
                  }}
                  className="self-start justify-center rounded-full bg-[#F2B94B]"
                >
                  <Text
                    style={{
                      fontFamily: fontFamily.medium,
                      fontSize: textSize(8),
                    }}
                  >
                    FEDERAL UNIVERSITY OF AGRICULTURE, ABEOKUTA
                  </Text>
                </View>

                {/* Greeting */}
                <Text
                  className="mt-7"
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: textSize(16),
                    lineHeight: textSize(25),
                  }}
                >
                  Hey, Dolapo! Tell us what you want to do today
                </Text>

                {/* Search */}
                <View className="mt-7 w-full flex-row items-center">
                  <SearchBar
                    setIsSearching={() => setIsSearching(true)}
                    className="flex-1"
                    placeholder="search"
                    searchIconColor="#000000"
                    placeholderTextColor="#000000"
                  />

                  <Pressable
                    onPress={() => setShowFilters(true)}
                    style={{
                      height: controlHeight(49),
                      width: controlHeight(49),
                    }}
                    className={`ml-2 items-center justify-center rounded-full border shadow-black shadow-[0px_3px_0px] ${
                      isFilterActive
                        ? "border-[#765097] bg-[#765097]"
                        : "border-[#BDB9B7] bg-[#FFF9F5]"
                    }`}
                  >
                    {isFilterActive ? (
                      <FilterHorzontalWhite
                        width={controlHeight(21)}
                        height={controlHeight(21)}
                      />
                    ) : (
                      <FilterHorzontalBlack
                        width={controlHeight(21)}
                        height={controlHeight(21)}
                      />
                    )}
                  </Pressable>
                </View>

                {/* Featured */}
                <Text
                  className="mt-8"
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: textSize(16),
                  }}
                >
                  Featured
                </Text>

                <FeaturedEvent
                  event={events[0]}
                  saved={savedEvents.includes(events[0].id)}
                  onSave={() => toggleSaved(events[0].id)}
                  handleShare={handleShare}
                />

                {/* Categories */}
                <Text
                  className="mt-7"
                  style={{
                    fontFamily: fontFamily.medium,
                    fontSize: textSize(16),
                  }}
                >
                  Categories
                </Text>

                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  className="mt-4"
                >
                  <View className="flex-row gap-2">
                    {categories.map((category) => {
                      const selected = selectedCategory === category;

                      return (
                        <Pressable
                          key={category}
                          onPress={() => setSelectedCategory(category)}
                          style={{ height: controlHeight(29) }}
                          className={`rounded-full justify-center border  px-5 ${
                            selected
                              ? "border-[#765097] bg-[#765097]"
                              : "border-[#2D2927] bg-transparent"
                          }`}
                        >
                          <Text
                            style={{
                              fontFamily: fontFamily.regular,
                              fontSize: textSize(12),
                              color: selected ? "#FFF9F6" : "#2D2927",
                            }}
                          >
                            {category}
                          </Text>
                        </Pressable>
                      );
                    })}
                  </View>
                </ScrollView>

                <View className="h-7" />
              </View>
            }

            renderItem={({ item }) => (
              <EventCard
                event={item}
                saved={savedEvents.includes(item.id)}
                onSave={() => toggleSaved(item.id)}
                handleShare={handleShare}
              />
            )}
            ListEmptyComponent={
              <View className="items-center py-10">
                <Text
                  style={{
                    fontFamily: fontFamily.regular,
                    fontSize: textSize(14),
                  }}
                >
                  No events found
                </Text>
              </View>
            }
          />

          {/* Filter overlay */}
          {showFilters && (
            <FilterPanel
              selectedCategory={selectedCategory}
              selectedDate={selectedDate}
              freeOnly={freeOnly}
              onCategoryChange={setSelectedCategory}
              onDateChange={setSelectedDate}
              onFeeChange={setFreeOnly}
              onReset={() => {
                setSelectedCategory("ALL");
                setSelectedDate("Any date");
                setFreeOnly(false);
              }}
              onApply={() => setShowFilters(false)}
              onClose={() => setShowFilters(false)}
            />
          )}
        </View>
      )}
    </HomePageContainer>
  );
}
