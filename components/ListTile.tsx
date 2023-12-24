import { View, Text } from "react-native";
import React from "react";

export default function ListTile() {
  return (
    <View
      style={{
        borderColor: "#606060",
        borderWidth: 2,
        borderRadius: 5,
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginBottom: 20,
      }}
    >
      <Text>ListTile</Text>
    </View>
  );
}
