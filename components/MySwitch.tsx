import { View, Text, Pressable } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function MySwitch({ isActive, setIsActive }) {
  return (
    <Pressable
      onPress={() => setIsActive(!isActive)}
      style={{
        backgroundColor: isActive ? "#008cff" : "#cecece",
        width: hp(7.4),
        height: hp(4),
        borderRadius: 5,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          height: hp(3.2),
          width: hp(3.2),
          borderRadius: 5,
          margin: 3.8,
          transform: [{ translateX: isActive ? hp(3.5) : 0 }],
        }}
      ></View>
    </Pressable>
  );
}
