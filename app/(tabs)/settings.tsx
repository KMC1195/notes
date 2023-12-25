import { View, Text, Switch, StyleSheet } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

export default function settings() {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        height: "100%",
        paddingTop: insets.top,
        paddingHorizontal: hp(2),
      }}
    >
      <Text style={{ fontSize: hp(7) }}>Ustawienia</Text>

      <View style={{ marginTop: 20 }}>
        <View style={styles.settingContainer}>
          <Text style={{ fontSize: hp(2) }}>Tryb Ciemny</Text>
          <Switch />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  settingContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
