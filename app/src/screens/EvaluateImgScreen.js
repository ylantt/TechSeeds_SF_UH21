import * as React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { bases, utilities, buttons } from "../styles";
import axios from "axios";

const getDataFromModel = async (photoBase64) => {
  const res = await axios.post(
    "http://192.168.1.9:8000/v1/object-detection/yolov5s",
    {
      photoBase64,
    }
  );
  console.log("send post req");
  console.log(res);
};

const EvaluateImgScreen = ({ navigation }) => {
  // get photo from camera
  const photo = navigation.getParam("photo");

  getDataFromModel(photo.base64);

  return (
    <View style={[bases.container]}>
      <View style={utilities.flexStretch}>
        <Image
          source={{ uri: photo.uri }}
          style={[styles.evaluateImg, utilities.mt3]}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
        <Text style={[buttons.btn, buttons.bottomBtn, buttons.roundBtn]}>
          Take Guide
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
        <Text style={[buttons.btn, buttons.bottomBtn, buttons.roundBtn]}>
          Connect doctor
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  evaluateImg: {
    width: hp("27%"),
    height: hp("27%"),
    alignSelf: "center",
  },
});

export default EvaluateImgScreen;
