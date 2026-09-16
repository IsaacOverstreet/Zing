import Name from "@/assets/images/Zing!.svg";
import Logo from "@/assets/images/zing.svg";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect } from "react";
import { useWindowDimensions, View } from "react-native";
import Animated from "react-native-reanimated";

import {
  CIRCLE_COLORS,
  GRADIENT_COLORS,
  INITIAL_CIRCLE_SIZE,
  LOGO_GRADIENT_HEIGHT,
  LOGO_GRADIENT_WIDTH,
  LOGO_HEIGHT,
  LOGO_WIDTH,
} from "./constants";
import { useAnimations } from "./useAnimation";
import { useStyles } from "./useStyle";

interface Props {
  onFinish: () => void;
}
export default function SplashScreen({ onFinish }: Props) {
  const { width } = useWindowDimensions();

  // breakpoints
  const isTablet = width >= 768 && width < 1024;
  const isLargeTablet = width >= 1024;
  const isScaled = isTablet || isLargeTablet;

  // sizing
  const logoSize = isLargeTablet ? 2 : isTablet ? 1.5 : 1;
  const circleScale = isLargeTablet ? 2.1 : isTablet ? 1.7 : 1;
  const size = INITIAL_CIRCLE_SIZE * circleScale;

  // circle positions
  const topCircle = {
    top: isScaled ? -201 * circleScale : -201,
    left: isScaled ? 120 * circleScale : 113,
  };
  const centreCircle = {
    top: isScaled ? 150 * circleScale : 176,
    left: isScaled ? -191 * circleScale : -191,
  };
  const bottomCircle = {
    top: isScaled ? 500 * circleScale : 544,
    left: isScaled ? 100 * circleScale : 67,
  };

  // shared circle style
  const circleStyle = {
    position: "absolute" as const,
    width: size,
    height: size,
    borderRadius: size,
  };

  const animations = useAnimations();
  const styles = useStyles(animations);

  useEffect(() => {
    animations.start();

    const timer = setTimeout(onFinish, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="relative flex-1 justify-center items-center overflow-hidden">
      {/* Blur layer */}
      <Animated.View
        className="absolute top-0 left-0 right-0 bottom-0 z-20"
        style={styles.animatedBlurStyle}
      >
        <BlurView intensity={80} tint="light" style={{ flex: 1 }} />
      </Animated.View>

      {/* Initial logo — disappers  */}
      <Animated.View
        className="absolute z-10 justify-center items-center gap-[19px]"
        style={styles.introLogoStyle}
      >
        <Logo width={LOGO_WIDTH * logoSize} height={LOGO_HEIGHT * logoSize} />
        <Name width={100} height={30} />
      </Animated.View>

      {/* Circles — fade in then animate out */}
      <Animated.View
        className="absolute top-0 left-0 right-0 bottom-0"
        style={styles.introBackgroundStyle}
      >
        <Animated.View
          style={[
            circleStyle,
            { ...topCircle, backgroundColor: CIRCLE_COLORS.top },
            styles.animatedFirstCircleStyle,
          ]}
        />
        <Animated.View
          style={[
            circleStyle,
            { ...centreCircle, backgroundColor: CIRCLE_COLORS.centre },
            styles.animatedSecondCircleStyle,
          ]}
        />
        <Animated.View
          style={[
            circleStyle,
            { ...bottomCircle, backgroundColor: CIRCLE_COLORS.bottom },
            styles.animatedBottomCircleStyle,
          ]}
        />
      </Animated.View>

      {/* Final logo — scales in */}
      <Animated.View
        className="absolute z-20 justify-center items-center "
        style={styles.logoScaleStyle}
      >
        <View
          className=" overflow-hidden justify-end items-center flex p-3"
          style={{
            width: logoSize * LOGO_GRADIENT_WIDTH,
            height: logoSize * LOGO_GRADIENT_HEIGHT,
          }}
        >
          <Logo width={LOGO_WIDTH * logoSize} height={LOGO_HEIGHT * logoSize} />
          <Animated.View
            style={[
              {
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                borderColor: "#D5BFD4",
                borderBottomLeftRadius: 13,
                borderBottomRightRadius: 13,
                overflow: "hidden",
                zIndex: -20,
              },
              styles.logoGradientStyle,
            ]}
          >
            <LinearGradient
              colors={[GRADIENT_COLORS.start, GRADIENT_COLORS.end]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{ flex: 1 }}
            />
          </Animated.View>
        </View>

        <View style={{ marginTop: 15 }}>
          <Name width={100} height={30} />
        </View>
      </Animated.View>
    </View>
  );
}
