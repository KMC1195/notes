import { View, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function AddFAB() {
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={() => router.push("/add")}
      style={{
        position: "absolute",
        width: 60,
        height: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bottom: 30,
        right: 30,
        backgroundColor: "#008cff",
        borderRadius: 5,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 10,
        shadowOffset: {
          height: 5,
          width: 0,
        },
      }}
    >
      <Ionicons
        name="add"
        color={"white"}
        size={45}
        style={{ marginLeft: 5 }}
      />
    </TouchableOpacity>
  );
}
