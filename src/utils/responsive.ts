import { useWindowDimensions } from "react-native";

export function useResponsive() {
  const { width, height } = useWindowDimensions();

  return {
    width,
    height,
    isPhone: width < 768,
    isTablet: width >= 768 && width < 1024,
    isLargeTablet: width >= 1024, // iPad Pro, large tablets
    isLandscape: width > height,

    // scale any value relative to screen
    wp: (percent: number) => (width * percent) / 100, // width percent
    hp: (percent: number) => (height * percent) / 100, // height percent
  };
}
