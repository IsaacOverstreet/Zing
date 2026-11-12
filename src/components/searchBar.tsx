import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";
import { useSearchStore } from "../store/searchStore";
import { useResponsive } from "../utils/responsive";

type searchBarProps = {
  // onChangeText: (search: string) => void;
  // value: string;
  setIsSearching?: (value: boolean) => void;
  className?: string;
  placeholder: string;
  placeholderTextColor?: string;
  searchIconColor?: string;
};

export default function SearchBar({
  // onChangeText = () => {},
  // value = "",
  setIsSearching = () => {},
  className,
  placeholder,
  placeholderTextColor = "#B5B0AD",
  searchIconColor = "#B5B0AD",
}: searchBarProps) {
  const { textSize, controlHeight } = useResponsive();

  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);

  const value = useSearchStore((state) => state.searchQuery);

  return (
    <View className={` ${className} flex-1 `}>
      <View
        style={{
          height: controlHeight(43),
        }}
        className="border border-[#BDB9B7]  flex-row items-center rounded-full  b bg-[#FFF9F6]
        shadow-black shadow-[0px_3px_0px] px-8"
      >
        <Ionicons name="search-outline" size={18} color={searchIconColor} />

        <TextInput
          value={value}
          onChangeText={setSearchQuery}
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          className="ml-2 flex-1"
          style={{
            fontFamily: fontFamily.regular,
            fontSize: textSize(12),
            paddingVertical: 0,
          }}
        />

        {value.length > 0 && (
          <Pressable onPress={() => setSearchQuery("")} hitSlop={10}>
            <Ionicons name="close-circle" size={18} color="#B5B0AD" />
          </Pressable>
        )}
      </View>
    </View>
  );
}
