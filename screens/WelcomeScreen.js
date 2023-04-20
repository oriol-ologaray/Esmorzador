import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import colors from "../colors";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function WelcomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.background}>
      <Text style={styles.title}>No has sortit a esmorzar a temps. 🥺</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Camera")}
        >
          <Text style={styles.buttonText}>PENJA LA TEVA EXCUSA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.background,
    padding: 30,
  },
  button: {
    backgroundColor: colors.primary,
    height: 50,
    width: 300,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    alignItems: "center",
  },
  buttonText: { color: colors.white, fontWeight: "600" },
  title: {
    color: colors.white,
    fontSize: 50,
    fontWeight: "900",
    paddingBottom: 50,
  },
});
