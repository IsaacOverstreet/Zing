import BackRoute from "@/src/components/BackRoute";
import SearchBar from "@/src/components/searchBar";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, Text, View } from "react-native";

const schools = [
  "University of Ibadan",
  "Obafemi Awolowo University",
  "Lagos State University",
  "University of Lagos",
];

type SearchSchoolProps = {
  setIsSearching: (value: boolean) => void;
};

export default function SearchSchool({ setIsSearching }: SearchSchoolProps) {
  const [search, setSearch] = useState("");
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  const filteredSchools = schools.filter((school) =>
    school.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View>
      {/* Search bar */}
      <View className="relative w-full flex-row items-center justify-end gap-7">
        <BackRoute onPress={() => setIsSearching(false)} />

        <SearchBar setSearch={setSearch} className="w-[93%]" />
      </View>

      {/* Search results */}
      <View className="mt-6">
        {filteredSchools.length > 0 ? (
          filteredSchools.map((school) => {
            const isSelected = selectedSchool === school;

            return (
              <Pressable
                key={school}
                onPress={() => setSelectedSchool(school)}
                className={`h-[50px] w-full flex-row items-center border-b ${
                  isSelected ? "border-[#765097]" : "border-[#E5E5E5]"
                }`}
              >
                <View className="flex-1 flex-row items-center">
                  <Ionicons name="search-outline" size={18} color="#B5B0AD" />

                  <Text className="ml-3 text-[14px]">{school}</Text>
                </View>

                {/* Selected indicator */}
                {isSelected && (
                  <View className="mr-2 h-[20px] w-[20px] items-center justify-center rounded-full bg-[#765097]">
                    <Ionicons name="checkmark" size={14} color="#FFF9F6" />
                  </View>
                )}
              </Pressable>
            );
          })
        ) : (
          <Text className="py-4 text-[12px] text-[#777]">No school found.</Text>
        )}
      </View>
    </View>
  );
}
