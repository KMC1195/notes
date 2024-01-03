import { Text, View } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

interface types {
  title: String;
}

export default function ListTile({ title }: types) {
  return (
    <View
      style={[
        {
          marginBottom: hp(2),
          borderColor: "#606060",
          borderWidth: 2,
          borderRadius: 5,
          paddingHorizontal: 20,
          paddingVertical: 15,
          height: hp(5.5),
        },
      ]}
    >
      <Text>{title}</Text>
    </View>
  );
}
