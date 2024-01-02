import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { useFocusEffect, useRouter } from "expo-router";
import Input from "../components/Input";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function add() {
  const insets = useSafeAreaInsets();
  const router = useRouter();
  const [titleInputValue, setTitleInputValue] = useState("");
  const [descInputValue, setDescInputValue] = useState("");
  const [list, setList] = useState([]);

  const findData = async () => {
    // await AsyncStorage.clear();
    // await AsyncStorage.setItem(
    //   "data",
    //   JSON.stringify([
    //     { title: "1", description: "2", id: 1 },
    //     { title: "2", description: "3", id: 2 },
    //   ])
    // );
    try {
      const result = await AsyncStorage.getItem("data");
      if (result) {
        const data = JSON.parse(result);
        setList(data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useFocusEffect(() => {
    findData();
  });

  const addNote = () => {
    const newNote = {
      title: titleInputValue,
      description: descInputValue,
      id: Date.now(),
    };

    if (titleInputValue && descInputValue) {
      const updatedNotes = [newNote, ...list];
      AsyncStorage.setItem("data", JSON.stringify(updatedNotes));
      router.push("/");
    } else {
      alert("Uzupełnij wszystkie pola tekstowe!");
    }
  };

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

      <ScrollView showsVerticalScrollIndicator={false}>
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
          onPress={addNote}
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
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
