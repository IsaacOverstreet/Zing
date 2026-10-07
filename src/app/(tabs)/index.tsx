import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import AppContainer from "@/src/components/AppContainer";
import EventCard from "@/src/components/EventCard";
import FeaturedEvent from "@/src/components/FeaturedEvent";
import HomePageContainer from "@/src/components/HomepageContainer";
import SearchBar from "@/src/components/SearchBar";
import { useResponsive } from "@/src/utils/responsive";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from "react-native";

const categories = ["All", "Tech", "Music", "Career", "Sport"];

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

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [savedEvents, setSavedEvents] = useState<string[]>([]);

  const filteredEvents =
    selectedCategory === "All"
      ? events
      : events.filter((event) => event.category === selectedCategory);

  const toggleSaved = (eventId: string) => {
    setSavedEvents((current) =>
      current.includes(eventId)
        ? current.filter((id) => id !== eventId)
        : [...current, eventId],
    );
  };

  return (
    <HomePageContainer>
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
              <View className="mt-7 flex-row items-center w-full">
                <SearchBar className="flex-1" placeholder="search" />

                <Pressable
                  style={{
                    height: controlHeight(49),
                    width: controlHeight(49),
                  }}
                  className="ml-2 items-center justify-center border border-[#BDB9B7] shadow-black shadow-[0px_3px_0px] bg-[#FFF9F5] rounded-full active:translate-y-1 active:shadow-[0px_2px_0px]"
                >
                  <Ionicons
                    name="options-outline"
                    size={controlHeight(21)}
                    color="#2D2927"
                  />
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
                        className={`rounded-full justify-center border px-5 ${
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
      </View>
    </HomePageContainer>
  );
}

/* Featured event */

/* Regular event card */

/* Bottom navigation */

// function BottomNavigation() {
//   const { textSize } = useResponsive();

//   const items = [
//     {
//       label: "Home",
//       icon: "home",
//       active: true,
//     },
//     {
//       label: "Explore",
//       icon: "compass-outline",
//       active: false,
//     },
//     {
//       label: "Saved",
//       icon: "heart-outline",
//       active: false,
//     },
//     {
//       label: "Tickets",
//       icon: "ticket-outline",
//       active: false,
//     },
//     {
//       label: "Profile",
//       icon: "person-outline",
//       active: false,
//     },
//   ] as const;

//   return (
//     <View
//       className="mx-[-20px] flex-row border-t border-[#2D2927] bg-[#FFF9F6] px-3 pb-2 pt-3"
//       style={{
//         shadowColor: "#000",
//         shadowOffset: {
//           width: 0,
//           height: -2,
//         },
//         shadowOpacity: 0.05,
//         shadowRadius: 4,
//       }}
//     >
//       {items.map((item) => (
//         <Pressable
//           key={item.label}
//           className="flex-1 items-center justify-center"
//         >
//           <Ionicons
//             name={item.icon}
//             size={24}
//             color={item.active ? "#765097" : "#817B78"}
//           />

//           <Text
//             className="mt-1"
//             style={{
//               fontFamily: fontFamily.medium,
//               fontSize: textSize(11),
//               color: item.active ? "#765097" : "#817B78",
//             }}
//           >
//             {item.label}
//           </Text>
//         </Pressable>
//       ))}
//     </View>
//   );
// }
