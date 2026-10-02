import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import AppContainer from "@/src/components/AppContainer";
import SearchBar from "@/src/components/searchBar";
import { useResponsive } from "@/src/utils/responsive";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import SearchSchool from "./searchSchool";

const schools = [
  {
    name: "University of Ibadan",
    location: "Ibadan, Oyo State",
    logo: require("@/assets/images/ui.png"),
  },
  {
    name: "Obafemi Awolowo University",
    location: "Ile-Ife, Osun State",
    logo: require("@/assets/images/oau.png"),
  },
  {
    name: "Lagos State University",
    location: "Ojo, Lagos State",
    logo: require("@/assets/images/lasu.png"),
  },
  {
    name: "University of Lagos",
    location: "Akoka, Lagos State",
    logo: require("@/assets/images/unilag.png"),
  },
];

export default function NearBySchools() {
  const { textSize, controlHeight, content } = useResponsive();

  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  return (
    <AppContainer>
      {isSearching ? (
        <SearchSchool setIsSearching={setIsSearching} />
      ) : (
        <View style={{ gap: content(60) }}>
          {/* Progress */}
          <View className="w-full flex-row gap-2">
            <View className="h-[4px] flex-1 rounded-full bg-[#D985A8]" />
            <View className="h-[4px] flex-1 rounded-full bg-[#E5E1DE]" />
            <View className="h-[4px] flex-1 rounded-full bg-[#E5E1DE]" />
          </View>

          <View style={{ gap: content(28) }}>
            {/* Heading */}
            <View style={{ gap: content(24) }}>
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: textSize(24),
                }}
              >
                Search School
              </Text>

              <Text
                style={{
                  fontFamily: fontFamily.regular,
                  fontSize: textSize(12),
                }}
              >
                Search and select the school you're currently attending.
              </Text>
            </View>

            {/* Search */}
            <SearchBar setIsSearching={setIsSearching} />

            {/* Nearby schools */}
            <View style={{ gap: content(20) }}>
              <Text
                style={{
                  fontFamily: fontFamily.semiBold,
                  fontSize: textSize(12),
                }}
              >
                NEARBY SCHOOLS
              </Text>

              <View>
                {schools.map((school) => {
                  const isSelected = selectedSchool === school.name;

                  return (
                    <Pressable
                      key={school.name}
                      onPress={() => setSelectedSchool(school.name)}
                      className={`w-full flex-row items-center border-b ${
                        isSelected ? "border-[#765097]" : "border-[#D9D4D1]"
                      }`}
                      style={{
                        minHeight: controlHeight(61),
                      }}
                    >
                      {/* School logo */}
                      <View
                        style={{
                          width: controlHeight(40),
                          height: controlHeight(40),
                        }}
                        className="mr-3 items-center justify-center"
                      >
                        <Image
                          source={school.logo}
                          style={{
                            width: "100%",
                            height: "100%",
                          }}
                          resizeMode="contain"
                        />
                      </View>

                      {/* School information */}
                      <View className="flex-1">
                        <Text
                          numberOfLines={1}
                          style={{
                            fontFamily: fontFamily.semiBold,
                            fontSize: textSize(16),
                          }}
                        >
                          {school.name}
                        </Text>

                        <Text
                          style={{
                            fontFamily: fontFamily.regular,
                            fontSize: textSize(12),
                          }}
                        >
                          {school.location}
                        </Text>
                      </View>

                      {/* Selected indicator */}
                      {isSelected && (
                        <View className="mr-1 h-[20px] w-[20px] items-center justify-center rounded-full bg-[#765097]">
                          <Ionicons
                            name="checkmark"
                            size={14}
                            color="#FFF9F6"
                          />
                        </View>
                      )}
                    </Pressable>
                  );
                })}
              </View>
            </View>
          </View>
        </View>
      )}
    </AppContainer>
  );
}
