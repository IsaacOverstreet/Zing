import FilterHorzontalBlack from "@/assets/images/filter-horizontal-black.svg";
import FilterHorzontalWhite from "@/assets/images/filter-horizontal-white.svg";
import { Pressable, View } from "react-native";
import { useResponsive } from "../utils/responsive";
import SearchTrigger from "./SearchTrigger";

type SearchTriggerAndFilterProps = {
  onpress: () => void;
  showFilterPanel: () => void;
  isFilterPanleActive?: boolean;
  placeholder?: string;
  className?: string;
  setShowSearchScreen?: (value: boolean) => void;
};

export default function SearchTriggerAndFilter({
  onpress,
  showFilterPanel,
  isFilterPanleActive = false,
  className = "mt-7",
}: SearchTriggerAndFilterProps) {
  const { controlHeight } = useResponsive();

  return (
    <View className={`w-full flex-row items-center ${className}`}>
      <SearchTrigger placeholder="search" onpress={onpress} />
      <Pressable
        onPress={showFilterPanel}
        style={{
          height: controlHeight(49),
          width: controlHeight(49),
        }}
        className={`ml-2 items-center justify-center rounded-full border shadow-black shadow-[0px_3px_0px] ${
          isFilterPanleActive
            ? "border-[#765097] bg-[#765097]"
            : "border-[#BDB9B7] bg-[#FFF9F5]"
        }`}
      >
        {isFilterPanleActive ? (
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
  );
}
