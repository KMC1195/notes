import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ListTile from "../../components/ListTile";
import SearchBar from "../../components/SearchBar";
import AddFAB from "../../components/AddFAB";
import ChangeViewModePopup from "../../components/ChangeViewModePopup";

export default function index() {
  const insets = useSafeAreaInsets();

  // states
  const [searchBarValue, setSearchBarValue] = useState("");
  const [isListViewPopupVisible, setIsListViewPopupVisible] = useState(false);

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingHorizontal: hp(2),
        height: "100%",
      }}
    >
      <StatusBar style="dark" />

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Title */}
        <Text style={{ fontSize: hp(7) }}>Notatki</Text>

        {/* Change notes view mode button */}
        <TouchableOpacity
          onPress={() => setIsListViewPopupVisible(!isListViewPopupVisible)}
          style={{
            backgroundColor: "#cecece",
            height: hp(5),
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Ionicons name="list" size={hp(2.5)} />
        </TouchableOpacity>
      </View>

      <SearchBar
        searchBarValue={searchBarValue}
        setSearchBarValue={setSearchBarValue}
      />

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
      </ScrollView>

      <ChangeViewModePopup isVisible={isListViewPopupVisible} />

      <AddFAB />
    </View>
  );
}
