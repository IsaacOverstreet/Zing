import {
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { DELAY } from "./constants";

export function useAnimations() {
  const introLogoOpacity = useSharedValue(1);
  const introBackground = useSharedValue(0);
  const logoScale = useSharedValue(0);
  const blurIntensity = useSharedValue(0);
  const logoGradient = useSharedValue(0);

  const firstCircleLeft = useSharedValue(113);
  const firstCircleTop = useSharedValue(-201);

  const secondCircleLeft = useSharedValue(-191);
  const secondCircleTop = useSharedValue(176);

  const bottomCircleLeft = useSharedValue(67);
  const bottomCircleTop = useSharedValue(544);

  const start = () => {
    // intro
    introLogoOpacity.value = withDelay(
      DELAY.intro,
      withTiming(0, { duration: 0 }),
    );
    introBackground.value = withDelay(
      DELAY.intro,
      withTiming(1, { duration: 0 }),
    );
    blurIntensity.value = withDelay(
      DELAY.intro,
      withTiming(1, { duration: 1000 }),
    );

    // logo
    logoScale.value = withDelay(DELAY.logo, withTiming(1, { duration: 1000 }));

    logoGradient.value = withDelay(
      DELAY.gradient,
      withTiming(1, { duration: 1000 }),
    );

    // top circle
    firstCircleLeft.value = withDelay(
      DELAY.logo,
      withSequence(
        withTiming(-118, { duration: 1200 }),
        withTiming(54, { duration: 1200 }),
      ),
    );
    firstCircleTop.value = withDelay(
      DELAY.logo,
      withSequence(
        withTiming(-245, { duration: 1200 }),
        withTiming(-302, { duration: 1200 }),
        withDelay(100, withTiming(-1000, { duration: 1200 })),
      ),
    );

    // centre circle
    secondCircleLeft.value = withDelay(
      DELAY.logo,
      withSequence(
        withTiming(235, { duration: 1200 }),
        withTiming(72, { duration: 1200 }),
      ),
    );
    secondCircleTop.value = withDelay(
      DELAY.logo,
      withSequence(
        withTiming(240, { duration: 1200 }),
        withTiming(740, { duration: 1200 }),
        withDelay(100, withTiming(2000, { duration: 1200 })),
      ),
    );

    // bottom circle
    bottomCircleLeft.value = withDelay(
      DELAY.logo,
      withSequence(
        withTiming(-120, { duration: 1200 }),
        withTiming(-314, { duration: 1200 }),
        withDelay(100, withTiming(-1000, { duration: 1200 })),
      ),
    );
    bottomCircleTop.value = withDelay(
      DELAY.logo,
      withSequence(
        withTiming(635, { duration: 1200 }),
        withTiming(234, { duration: 1200 }),
      ),
    );
  };

  return {
    start,
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
  };
}
