import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ListTile from "../../components/ListTile";
import AddFAB from "../../components/AddFAB";
import ChangeViewModePopup from "../../components/ChangeViewModePopup";
import Input from "../../components/Input";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "expo-router";

export default function index() {
  const insets = useSafeAreaInsets();

  // states
  const [searchBarValue, setSearchBarValue] = useState("");
  const [isListViewPopupVisible, setIsListViewPopupVisible] = useState(false);
  const [list, setList] = useState([{ title: "a", description: "b", id: 1 }]);

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
        <Text style={{ fontSize: hp(7), marginBottom: 20 }}>Notatki</Text>

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

      <Input
        inputValue={searchBarValue}
        setInputValue={setSearchBarValue}
        icon={"search"}
        placeholderText={"Szukaj notatek"}
        multiline={false}
      />

      {/* List */}
      <FlatList
        data={list}
        renderItem={(el) => <ListTile title={el.item.title} />}
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
      />

      <ChangeViewModePopup
        isVisible={isListViewPopupVisible}
        setIsVisible={setIsListViewPopupVisible}
      />

      <AddFAB />
    </View>
  );
}
