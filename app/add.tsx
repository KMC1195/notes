import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import Input from "../components/Input";

export default function add() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [titleInputValue, setTitleInputValue] = useState("");
  const [descInputValue, setDescInputValue] = useState("");

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
          justifyContent: "space-between",
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
          <Ionicons name="arrow-back" size={hp(2.5)} />
        </TouchableOpacity>
        <Text style={{ fontSize: hp(5.5) }}>Dodaj notatkę</Text>
      </View>

      <ScrollView>
        <View style={{ marginTop: hp(2) }}>
          <Text style={{ fontSize: hp(2), fontWeight: "500" }}>Tytuł:</Text>
          <Input
            multiline={false}
            inputValue={titleInputValue}
            setInputValue={setTitleInputValue}
            icon={"document-outline"}
            placeholderText={"Tytuł notatki"}
          />

          <Text style={{ fontSize: hp(2), fontWeight: "500" }}>Opis:</Text>
          <Input
            inputValue={descInputValue}
            setInputValue={setDescInputValue}
            icon={"copy-outline"}
            placeholderText={"Opis notatki"}
            multiline={true}
          />
        </View>

        <TouchableOpacity
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            backgroundColor: "#008cff",
            paddingVertical: 5,
            borderRadius: 5,
            marginBottom: hp(6),
          }}
        >
          <Text style={{ fontSize: hp(2.5), color: "white" }}>Dodaj</Text>
          <Ionicons name="add" size={hp(2.5)} color={"white"} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
