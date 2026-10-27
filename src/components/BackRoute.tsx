import Back from "@/assets/images/backButton.svg";
import { useResponsive } from "@/src/utils/responsive";
import { router } from "expo-router";
import { Pressable } from "react-native";

type BackButtonProps = {
  onPress?: () => void;
  className?: string;
};

export default function BackRoute({
  onPress = () => router.back(),
  className,
}: BackButtonProps) {
  const { controlHeight } = useResponsive();

  return (
    <Pressable onPress={onPress} className={className}>
      <Back width={controlHeight(11)} height={controlHeight(23)} />
    </Pressable>
  );
}
