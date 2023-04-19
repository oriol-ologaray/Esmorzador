import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../colors";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MainScreen() {
  return <SafeAreaView style={styles.background}></SafeAreaView>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.background,
    padding: 30,
  },
});
