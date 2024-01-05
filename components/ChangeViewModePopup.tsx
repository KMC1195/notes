import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import Animated, { FadeIn } from "react-native-reanimated";

interface types {
  isVisible: boolean;
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setPopupValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function ChangeViewModePopup({
  isVisible,
  setIsVisible,
  setPopupValue,
}: types) {
  return (
    <>
      {isVisible && (
        <Pressable
          onPress={() => setIsVisible(false)}
          style={[
            StyleSheet.absoluteFillObject,
            { backgroundColor: "rgba(0, 0, 0, 0.6)" },
          ]}
        >
          <Animated.View
            entering={FadeIn}
            style={{
              opacity: 1,
              position: "fixed",
              top: "40%",
              margin: hp(2),
              backgroundColor: "#cecece",
              borderRadius: 5,
              shadowColor: "black",
              shadowOpacity: 0.5,
              shadowRadius: 10,
              shadowOffset: {
                height: 5,
                width: 0,
              },
            }}
          >
            <Text style={{ textAlign: "center", fontSize: hp(3.5) }}>
              Zmień układ
            </Text>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                marginTop: 15,
                padding: 10,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setPopupValue("list");
                  setIsVisible(false);
                }}
                style={{
                  borderColor: "#606060",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 3,
                }}
              >
                <Ionicons name="list" size={hp(5.5)} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => {
                  setPopupValue("masonry-list");
                  setIsVisible(false);
                }}
                style={{
                  borderColor: "#606060",
                  borderWidth: 2,
                  borderRadius: 5,
                  padding: 3,
                }}
              >
                <Ionicons name="square-outline" size={hp(5.5)} />
              </TouchableOpacity>
            </View>
          </Animated.View>
        </Pressable>
      )}
    </>
  );
}
