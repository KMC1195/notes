import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ListTile from "../../components/ListTile";

export default function index() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingHorizontal: hp(2),
        height: "100%",
      }}
    >
      <StatusBar style="dark" />

      {/* Title */}
      <Text style={{ fontSize: hp(7) }}>Notatki</Text>

      {/* Search Bar */}
      <View
        style={{
          backgroundColor: "#cecece",
          marginTop: hp(2),
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 5,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <Ionicons name="search" size={22} />
        <TextInput
          placeholder="Szukaj notatek"
          placeholderTextColor={"#606060"}
          style={{ fontSize: 18, marginRight: 20 }}
        />
      </View>

      {/* List */}
      <ScrollView
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      >
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
        <ListTile />
      </ScrollView>

      {/* Add Button */}
      <TouchableOpacity
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
        }}
      >
        <Ionicons
          name="add"
          color={"white"}
          size={45}
          style={{ marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
}
