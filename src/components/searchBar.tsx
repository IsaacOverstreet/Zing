import { fontFamily } from "@/assets/fonts_dimensions/fontsFamily";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, TextInput, View } from "react-native";
import { useResponsive } from "../utils/responsive";

type searchBarProps = {
  setSearch?: (search: string) => void;
  onSearch?: string;
  setIsSearching?: (value: boolean) => void;
  className?: string;
  placeholder: string;
};

export default function SearchBar({
  setSearch = () => {},
  onSearch = "",
  setIsSearching = () => {},
  className,
  placeholder,
}: searchBarProps) {
  const { textSize, imageHeight, controlHeight, content } = useResponsive();
  return (
    <View className={` ${className} `}>
      <View
        style={{
          height: controlHeight(43),
        }}
        className="w-full  border border-[#BDB9B7]  flex-row items-center rounded-full  b bg-[#FFF9F6]
        shadow-black shadow-[0px_3px_0px] px-8"
      >
        <Ionicons name="search-outline" size={18} color="#B5B0AD" />

        <TextInput
          value={onSearch}
          onFocus={() => setIsSearching(true)}
          onChangeText={setSearch}
          placeholder={placeholder}
          placeholderTextColor="#B5B0AD"
          className="ml-2 flex-1"
          style={{
            fontFamily: fontFamily.regular,
            fontSize: textSize(12),
            paddingVertical: 0,
          }}
        />

        {onSearch.length > 0 && (
          <Pressable onPress={() => setSearch("")} hitSlop={10}>
            <Ionicons name="close-circle" size={18} color="#B5B0AD" />
          </Pressable>
        )}
      </View>
    </View>
  );
}
