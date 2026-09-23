import { useWindowDimensions } from "react-native";

export function useResponsive() {
  const { width, height } = useWindowDimensions();

  const isPhone = width >= 375 && width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isLargeTablet = width >= 1024;

  const textSize = (base: number) => {
    if (isLargeTablet) return base + 12;
    if (isTablet) return base + 8;
    if (isPhone) return base;

    return base;
  };

  const content = (base: number) => {
    if (isLargeTablet) return base + 20;
    if (isTablet) return base + 10;

    return base;
  };

  const controlHeight = (base: number) => {
    if (isLargeTablet) return base + 30;
    if (isTablet) return base + 20;

    return base;
  };

  const imageHeight = (base: number) => {
    if (isLargeTablet) return base + 200;
    if (isTablet) return base + 100;

    return base;
  };

  return {
    width,
    height,
    content,
    textSize,
    controlHeight,
    imageHeight,
  };
}
