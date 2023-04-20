import colors from "../colors";
import React, { useState, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Timer } from "react-native-stopwatch-timer";
import { Camera, CameraType } from "expo-camera";

export default function CameraScreen({ navigation }) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </SafeAreaView>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePictures = async () => {
    const first = await takePicture();
    toggleCameraType();
    setTimeout(async () => {
      const second = await takePicture();
      handleImages(first, second);
    }, 1500);
  };

  function handleImages(first, second) {
    console.log(first);
    console.log(second);
  }

  const takePicture = async () => {
    if (cameraRef) {
      try {
        return (data = await cameraRef.current.takePictureAsync());
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <SafeAreaView style={styles.background}>
      <Timer
        totalDuration={120000}
        start={true}
        options={options}
        //options for the styling
        handleFinish={() => {
          alert("Custom Completion Function");
        }}
      />
      <Camera style={styles.camera} type={type} ratio="4:3" ref={cameraRef}>
        <TouchableWithoutFeedback onPress={toggleCameraType}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
      </Camera>
      <TouchableOpacity style={styles.button} onPress={takePictures}>
        <Text style={styles.text}>FES LA FOTO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
    padding: 5,
  },
  camera: {
    width: "100%",
    aspectRatio: 3 / 4,
    marginTop: 30,
    marginBottom: 20,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },
  title: {
    color: colors.white,
    fontSize: 75,
    fontWeight: "900",
  },
});

const options = {
  container: {
    padding: 5,
    width: 200,
    alignItems: "center",
  },
  text: {
    color: colors.white,
    fontSize: 65,
    fontWeight: "900",
  },
};
