import Back from "@/assets/images/backButton.svg";
import { useResponsive } from "@/src/utils/responsive";
import { router } from "expo-router";

import { Pressable } from "react-native";

export default function BackRoute() {
  const { controlHeight } = useResponsive();

  return (
    <Pressable onPress={() => router.back()} className="absolute left-0">
      <Back width={controlHeight(11)} height={controlHeight(23)} />
    </Pressable>
  );
}
