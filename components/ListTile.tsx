import { Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Swipeable } from "react-native-gesture-handler";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

interface types {
  title: String;
}

export default function ListTile({ title }: types) {
  const leftSwipe = () => {
    return (
      <View
        style={{
          backgroundColor: "red",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: hp(6.5),
          borderRadius: 5,
        }}
      >
        <Ionicons
          name="trash-outline"
          size={hp(3.5)}
          style={{ marginLeft: hp(0.4) }}
          color={"white"}
        ></Ionicons>
      </View>
    );
  };

  return (
    <Swipeable
      renderLeftActions={() => leftSwipe()}
      containerStyle={{ marginBottom: hp(2) }}
    >
      <TouchableOpacity
        style={{
          borderColor: "#606060",
          borderWidth: 2,
          borderRadius: 5,
          paddingHorizontal: 20,
          paddingVertical: 15,
        }}
      >
        <Text>{title}</Text>
      </TouchableOpacity>
    </Swipeable>
  );
}
