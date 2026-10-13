import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import FilterIconVertical from "@/assets/images/hugeicons_filter-vertical.svg";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useResponsive } from "../utils/responsive";
import Button from "./Button";
import FilterOption from "./FilterOption";
import SearchBar from "./SearchBar";

const categories = [
  "AI",
  "Arts",
  "Music",
  "Health",
  "Business",
  "Education",
  "Technology",
];

const dates = ["Any date", "Today", "Tomorrow", "This week"];

type FilterPanelProps = {
  selectedCategory: string | null;
  selectedDate: string;
  freeOnly: boolean;
  onCategoryChange: (category: string) => void;
  onDateChange: (date: string) => void;
  onFeeChange: (freeOnly: boolean) => void;
  onReset: () => void;
  onApply: () => void;
  onClose: () => void;
};

export default function FilterPanel({
  selectedCategory,
  selectedDate,
  freeOnly,
  onCategoryChange,
  onDateChange,
  onFeeChange,
  onReset,
  onApply,
  onClose,
}: FilterPanelProps) {
  const { textSize, controlHeight } = useResponsive();

  return (
    <View className="absolute inset-0 z-50">
      {/* Background dim */}
      {/* <Pressable onPress={onClose} className="absolute inset-0 bg-black/20" /> */}

      {/* Filter surface */}
      <View className="absolute inset-x-0 top-0 overflow-hidden bg-[#FFF9F6]">
        {/* Search and close button */}
        <View className="flex-row items-center gap-2  pb-3 pt-4 ">
          <SearchBar
            className="flex-1"
            placeholderTextColor="#000000"
            placeholder="Search"
            searchIconColor="#000000"
          />

          <Pressable
            onPress={onClose}
            style={{
              height: controlHeight(49),
              width: controlHeight(49),
            }}
            className="items-center justify-center rounded-full border border-[#765097] bg-[#765097] shadow-black shadow-[0px_3px_0px]"
          >
            <FilterIconVertical
              width={controlHeight(21)}
              height={controlHeight(21)}
              color="#FFF9F5"
            />
          </Pressable>
        </View>

        {/* Scrollable filter options */}
        <ScrollView
          className="flex-1 rounded-[25px] border border-[#2D2927]"
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingTop: 20,
            paddingBottom: 24,
            gap: 24,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Categories Section */}
          <View className="gap-[20px]">
            <View className="flex-row items-center justify-between">
              <Text
                className="text-[#000000]"
                style={{
                  fontSize: textSize(16),
                  fontFamily: fontFamily.medium,
                }}
              >
                Categories
              </Text>

              <Pressable
                onPress={onClose}
                className="items-center justify-center"
                style={{
                  height: controlHeight(24),
                  width: controlHeight(24),
                }}
              >
                <Ionicons
                  name="close"
                  size={controlHeight(24)}
                  color="#2D2927"
                />
              </Pressable>
            </View>

            <View className="gap-[14px]">
              {categories.map((category) => (
                <FilterOption
                  key={category}
                  label={category}
                  selected={selectedCategory === category}
                  onPress={() => onCategoryChange(category)}
                  fontValue={12}
                  controlHeight={controlHeight}
                />
              ))}
            </View>
          </View>

          {/* Date Section */}
          <View className="gap-[20px]">
            <Text
              style={{
                fontSize: textSize(16),
                fontFamily: fontFamily.medium,
              }}
            >
              Date
            </Text>

            <View className="gap-[14px]">
              {dates.map((date) => (
                <FilterOption
                  key={date}
                  label={date}
                  selected={selectedDate === date}
                  onPress={() => onDateChange(date)}
                  fontValue={12}
                  controlHeight={controlHeight}
                />
              ))}
            </View>
          </View>

          {/* Fee Section */}
          <View className="gap-[20px]">
            <Text
              style={{
                fontSize: textSize(16),
                fontFamily: fontFamily.medium,
              }}
            >
              Fee
            </Text>

            <View className="gap-[14px]">
              <FilterOption
                label="Free events"
                selected={freeOnly}
                onPress={() => onFeeChange(!freeOnly)}
                fontValue={12}
                controlHeight={controlHeight}
              />
            </View>
          </View>

          {/* Reset and Apply Buttons */}
          <View className="flex-row justify-between gap-4 bg-[#FFF9F6]">
            <Button
              onPress={onReset}
              text="Reset"
              fontSize={12}
              buttonHeight={30}
              className="flex-1 bg-[#FFF9F5]"
            />

            <Button
              onPress={onApply}
              text="Apply Filters"
              fontSize={12}
              buttonHeight={30}
              className="flex-1 bg-[#765097]"
              textClassName="color-white"
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
