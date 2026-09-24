import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import AppContainer from "@/src/components/AppContainer";
import { useResponsive } from "@/src/utils/responsive";
import { useMemo, useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import TextInput from "../../components/TextInput";
import { Ionicons } from "@expo/vector-icons";

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

export default function SearchSchool() {
  const { textSize, imageHeight, controlHeight, content } = useResponsive();

  const [search, setSearch] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  const filteredSchools = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) {
      return schools;
    }

    return schools.filter(
      (school) =>
        school.name.toLowerCase().includes(query) ||
        school.location.toLowerCase().includes(query),
    );
  }, [search]);

  return (
    <AppContainer>
      {/* Main Card */}
      <View style={{ gap: content(60), paddingTop: 20 }}>
        {/* Progress */}
        <View className="w-full flex-row gap-2">
          <View className="h-[4px] flex-1 rounded-full bg-[#D985A8]" />
          <View className="h-[4px] flex-1 rounded-full bg-[#E5E1DE]" />
          <View className="h-[4px] flex-1 rounded-full bg-[#E5E1DE]" />
        </View>

        <View style={{ gap: content(28) }} className="mt-[48px]">
          {/* Heading */}
          <View style={{ gap: content(8) }}>
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
          <View
            style={{
              height: controlHeight(43),
            }}
            className="w-full flex-row items-center rounded-full border border-[#BDB9B7] px-4"
          >
            <Ionicons name="search-outline" size={18} color="#B5B0AD" />

            <TextInput
              //   value={search}
              //   onChangeText={setSearch}
              placeholder="Search for your school"
              //   placeholderTextColor="#B5B0AD"
              //   className="ml-2 flex-1"
              //   style={{
              //     fontFamily: fontFamily.regular,
              //     fontSize: textSize(12),
              //     paddingVertical: 0,
              //   }}
            />

            {search.length > 0 && (
              <Pressable onPress={() => setSearch("")} hitSlop={10}>
                <Ionicons name="close-circle" size={18} color="#B5B0AD" />
              </Pressable>
            )}
          </View>

          {/* Nearby schools */}
          <View style={{ gap: content(12) }}>
            <Text
              style={{
                fontFamily: fontFamily.semiBold,
                fontSize: textSize(12),
              }}
            >
              NEARBY SCHOOLS
            </Text>

            <View>
              {filteredSchools.length > 0 ? (
                filteredSchools.map((school) => {
                  const isSelected = selectedSchool === school.name;

                  return (
                    <Pressable
                      key={school.name}
                      onPress={() => setSelectedSchool(school.name)}
                      className={`w-full flex-row items-center border-b ${
                        isSelected ? "border-[#765097]" : "border-[#D9D4D1]"
                      }`}
                      style={{
                        minHeight: controlHeight(71),
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
                            fontSize: textSize(15),
                          }}
                        >
                          {school.name}
                        </Text>

                        <Text
                          style={{
                            fontFamily: fontFamily.regular,
                            fontSize: textSize(11),
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
                })
              ) : (
                <Text
                  style={{
                    fontFamily: fontFamily.regular,
                    fontSize: textSize(12),
                  }}
                  className="py-4 text-[#777]"
                >
                  No school found.
                </Text>
              )}
            </View>
          </View>
        </View>
      </View>
    </AppContainer>
  );
}
