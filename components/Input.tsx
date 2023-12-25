import { View, TextInput } from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

export default function Input({
  inputValue,
  setInputValue,
  icon,
  placeholderText,
  multiline,
}) {
  const handleTextInput = (e: String) => {
    setInputValue(e);
  };

  return (
    <View
      style={{
        backgroundColor: "#cecece",
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
      }}
    >
      <Ionicons name={icon} size={22} />
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={"#606060"}
        style={{ fontSize: 18, marginRight: 20 }}
        value={inputValue}
        onChangeText={handleTextInput}
        multiline={multiline}
      />
    </View>
  );
}
