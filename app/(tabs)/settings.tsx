import { View, Text, Switch, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import MySwitch from "../../components/MySwitch";

export default function settings() {
  const insets = useSafeAreaInsets();

  // states
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

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
          <Text style={{ fontSize: hp(2.5) }}>Tryb Ciemny</Text>
          <MySwitch
            isActive={isDarkModeActive}
            setIsActive={setIsDarkModeActive}
          />
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
