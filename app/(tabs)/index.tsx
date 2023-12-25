import { View, Text, TouchableOpacity, FlatList } from "react-native";
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
  const [list, setList] = useState([
    {
      title: "First",
      description: "sth",
      id: 1,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
    {
      title: "second",
      description: "sth",
      id: 2,
    },
  ]);

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
      <FlatList
        data={list}
        renderItem={(el) => <ListTile title={el.item.title} />}
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <ChangeViewModePopup isVisible={isListViewPopupVisible} />

      <AddFAB />
    </View>
  );
}
