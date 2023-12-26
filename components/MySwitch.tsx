import { View, Text, Pressable } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Animated, {
  useSharedValue,
  withTiming,
  Easing,
} from "react-native-reanimated";

interface types {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MySwitch({ isActive, setIsActive }: types) {
  const transform = useSharedValue(hp(0));

  const handleSwitch = () => {
    setIsActive(!isActive);
    transform.value = isActive
      ? withTiming(hp(0), {
          duration: 100,
          easing: Easing.inOut(Easing.quad),
        })
      : withTiming(hp(3.5), {
          duration: 100,
          easing: Easing.inOut(Easing.quad),
        });
  };

  return (
    <Pressable
      onPress={handleSwitch}
      style={{
        backgroundColor: isActive ? "#008cff" : "#cecece",
        width: hp(7.4),
        height: hp(4),
        borderRadius: 5,
      }}
    >
      <Animated.View
        style={{
          backgroundColor: "white",
          height: hp(3.2),
          width: hp(3.2),
          borderRadius: 5,
          margin: hp(0.4),
          transform: [{ translateX: transform }],
        }}
      ></Animated.View>
    </Pressable>
  );
}
