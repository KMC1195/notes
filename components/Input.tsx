import { View, TextInput } from "react-native";
import React, { SetStateAction } from "react";
import { Ionicons } from "@expo/vector-icons";

interface types {
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
  icon: keyof typeof Ionicons.glyphMap;
  placeholderText: string;
  multiline: boolean;
}

export default function Input({
  inputValue,
  setInputValue,
  icon,
  placeholderText,
  multiline,
}: types) {
  const handleTextInput = (e: SetStateAction<string>) => {
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
