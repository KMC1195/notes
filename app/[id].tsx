import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

type ListElement = {
  title: string;
  description: string;
  id: number;
};

export default function id() {
  const insets = useSafeAreaInsets();
  let {
    id,
    data: dataFromParams,
    list: listFromParams,
  } = useLocalSearchParams();
  const router = useRouter();

  const data = JSON.parse(
    typeof dataFromParams === "string" ? dataFromParams : ""
  );
  const list = JSON.parse(
    typeof listFromParams === "string" ? listFromParams : ""
  );

  function isElementsList(val: any): val is ListElement[] {
    return Array.isArray(val) && val.every((e: any) => isElement(e));
  }

  function isElement(val: any): val is ListElement {
    return "title" in val;
  }

  const deleteItem = () => {
    const listToBeSavedInStorage = isElementsList(list)
      ? list.filter((el) => String(el.id) !== String(id))
      : [];

    AsyncStorage.setItem("data", JSON.stringify(listToBeSavedInStorage));
    router.push("/");
  };

  return (
    <View
      style={{
        height: "100%",
        paddingTop: insets.top,
        paddingHorizontal: hp(2),
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
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
          <Text style={{ fontSize: hp(5.5), flex: 1, lineHeight: 50 }}>
            {data.title}
          </Text>
        </View>
        <View style={{ marginTop: hp(3) }}>
          <Text style={{ fontSize: hp(4) }}>Opis:</Text>
          <Text style={{ fontSize: hp(2) }}>{data.description}</Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={deleteItem}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
          backgroundColor: "red",
          paddingVertical: 5,
          borderRadius: 5,
          marginBottom: hp(12),
        }}
      >
        <Text style={{ fontSize: hp(2.5), color: "white" }}>Usuń</Text>
      </TouchableOpacity>
    </View>
  );
}
