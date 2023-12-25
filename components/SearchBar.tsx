import { View, TextInput } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ searchBarValue, setSearchBarValue }) {
  const handleTextInput = (e: String) => {
    setSearchBarValue(e);
  };

  return (
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
        value={searchBarValue}
        onChangeText={handleTextInput}
      />
    </View>
  );
}
