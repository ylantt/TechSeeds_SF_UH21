import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import { bases, texts, utilities } from "../styles";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function App({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null)
  // default is front camera
  const [type, setType] = useState(Camera.Constants.Type.front);

  useEffect(() => {
    // request permission on the first time access to camera
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  // user allow access to camera => go to camera view
  if (hasPermission === null) {
    return <View />;
  }

  // user not allow access to camera 
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View
      style={[bases.container, { padding: 0, }]}
    >
      <Camera
        type={type}
        ref={ref => {
          setCameraRef(ref);
        }}
        autoFocus="on"
        style={[bases.container, { padding: 0, }]}
      >
        <View>
          <View style={[utilities.flexRow, styles.groupBtn]}>
            <TouchableOpacity
              // capture image and send to Image component
              onPress={async () => {
                if (cameraRef) {
                  let photo = await cameraRef.takePictureAsync("photo");
                  navigation.navigate("EvaluateImg", { photo });
                }
              }}>
              <View style={styles.captureBtn} ></View>
            </TouchableOpacity>

            <TouchableOpacity
              // convert cameratype from front <=> back 
              onPress={() => {
                setType(
                  type === Camera.Constants.Type.back
                    ? Camera.Constants.Type.front
                    : Camera.Constants.Type.back
                );
              }}>
              <Text style={[texts.normalText, styles.flipBtn]}> Flip </Text>
            </TouchableOpacity>
          </View>
        </View >
      </Camera >
    </View >
  );
}

const styles = StyleSheet.create({
  groupBtn: {
    flex: 1,
    // alignItems: "flex-end",
    // justifyContent: "flex-end",
    position: "absolute",
    top: hp("78%"),
    alignSelf: "center"
  },
  captureBtn: {
    borderWidth: 6,
    borderRadius: 50,
    borderColor: "white",
    height: hp("10%"),
    width: hp("10%"),
    backgroundColor: "transparent",
    marginBottom: hp("2%"),
    marginRight: 20
  },
  flipBtn: {
    borderRadius: 8,
    borderColor: "white",
    height: hp("5%"),
    width: hp("10%"),
    backgroundColor: "white",
    lineHeight: hp("5%"),
  }
});