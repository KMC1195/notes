import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Pressable,
} from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import ListTile from "../../components/ListTile";
import AddFAB from "../../components/AddFAB";
import ChangeViewModePopup from "../../components/ChangeViewModePopup";
import Input from "../../components/Input";
import { useFocusEffect, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface Note {
  title: String;
  description: String;
  id: Number;
}

export default function index() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  // states
  const [searchBarValue, setSearchBarValue] = useState("");
  const [isListViewPopupVisible, setIsListViewPopupVisible] = useState(false);
  const [list, setList] = useState();

  const findData = async () => {
    // await AsyncStorage.setItem("data", JSON.stringify([]));
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

  useFocusEffect(
    useCallback(() => {
      // AsyncStorage.clear();
      findData();
      // AsyncStorage.setItem("data", JSON.stringify([]));
    }, [])
  );

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
        renderItem={(el) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: `/${el.item.id}`,
                params: {
                  data: JSON.stringify(el.item),
                },
              })
            }
          >
            <ListTile title={el.item.title} />
          </Pressable>
        )}
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
