import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { useRouter } from "expo-router";

interface ListElement {
  title: string;
  description: string;
  id: number;
}

interface List {
  list: ListElement[];
}

export default function MasonryList({ list }: List) {
  const router = useRouter();

  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: hp(2),
        }}
      >
        {list.map((el) => (
          <Pressable
            onPress={() =>
              router.push({
                pathname: `/${el.id}`,
                params: {
                  data: JSON.stringify(el),
                  list: JSON.stringify(list),
                },
              })
            }
            key={el.id}
            style={{
              height: hp(7),
              width: wp(43.5),
              borderRadius: 5,
              borderColor: "grey",
              borderWidth: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: hp(2.5) }}>{el.title}</Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
