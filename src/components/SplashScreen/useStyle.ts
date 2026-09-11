import { useAnimatedStyle } from "react-native-reanimated";
import { useAnimations } from "../SplashScreen/useAnimation";

export function useStyles(animations: ReturnType<typeof useAnimations>) {
  const {
    introLogoOpacity,
    introBackground,
    logoScale,
    blurIntensity,
    logoGradient,
    firstCircleLeft,
    firstCircleTop,
    secondCircleLeft,
    secondCircleTop,
    bottomCircleLeft,
    bottomCircleTop,
  } = animations;

  const introLogoStyle = useAnimatedStyle(() => ({
    opacity: introLogoOpacity.value,
  }));

  const introBackgroundStyle = useAnimatedStyle(() => ({
    opacity: introBackground.value,
  }));

  const logoScaleStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoScale.value }],
  }));

  const animatedBlurStyle = useAnimatedStyle(() => ({
    opacity: blurIntensity.value,
  }));

  const animatedFirstCircleStyle = useAnimatedStyle(() => ({
    left: firstCircleLeft.value,
    top: firstCircleTop.value,
  }));

  const animatedSecondCircleStyle = useAnimatedStyle(() => ({
    left: secondCircleLeft.value,
    top: secondCircleTop.value,
  }));

  const animatedBottomCircleStyle = useAnimatedStyle(() => ({
    left: bottomCircleLeft.value,
    top: bottomCircleTop.value,
  }));

  const logoGradientStyle = useAnimatedStyle(() => ({
    transform: [{ scale: logoGradient.value }],
  }));

  return {
    introLogoStyle,
    introBackgroundStyle,
    logoScaleStyle,
    animatedBlurStyle,
    animatedFirstCircleStyle,
    animatedSecondCircleStyle,
    animatedBottomCircleStyle,
    logoGradientStyle,
  };
}
