import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => <Ionicons name="add" size={25} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          tabBarIcon: () => <Ionicons name="settings" size={25} />,
        }}
      />
    </Tabs>
  );
}
