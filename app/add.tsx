import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function add() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View
      style={{
        height: "100%",
        paddingTop: insets.top,
        paddingHorizontal: hp(2),
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        <TouchableOpacity
          onPress={() => router.push("/")}
          style={{
            backgroundColor: "#cecece",
            marginRight: hp(2),
            height: hp(5),
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="arrow-back" size={25} />
        </TouchableOpacity>
        <Text style={{ fontSize: hp(5.5) }}>Dodaj notatkę</Text>
      </View>
    </View>
  );
}
