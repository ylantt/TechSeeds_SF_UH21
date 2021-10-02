import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { bases, utilities, buttons, texts } from "../styles";
import axios from "axios";

const EvaluateImgScreen = ({ navigation }) => {
  // get photo from camera
  const photo = navigation.getParam("photo");
  const [name, setName] = useState("");
  const [confidence, setConfidence] = useState(0);

  const getDataFromModel = async (photoBase64) => {
    try {
      const { data } = await axios.post(
        "http://192.168.1.8:8000/v1/object-detection/yolov5s",
        {
          photoBase64,
        }
      );

      if (data.name === "nam_da") {
        setName("Nám da");
      } else if (data.name === "viem_da_tiet_ba") {
        setName("Viêm da tiết bã");
      } else if (data.name === "mun_viem_do") {
        setName("Mụn viêm đỏ");
      }
      setConfidence((data.confidence * 100).toFixed(2));
    } catch {
      setName("Không nhận dạng được loại bệnh nào");
    }
  };

  getDataFromModel(photo.base64);

  return (
    <View style={[bases.container]}>
      <View style={utilities.flexStretch}>
        <Image
          source={{ uri: photo.uri }}
          style={[styles.evaluateImg, utilities.mt3]}
        />
        {name === "" ? (
          <Text style={[texts.midText, utilities.mt3]}>Đang phân tích...</Text>
        ) : name === "Không nhận dạng được loại bệnh nào" ? (
          <Text style={[texts.midText, utilities.mt3]}>{name}</Text>
        ) : (
          <View>
            <Text style={[texts.midText, utilities.mt7]}>
              Loại bệnh: {name}
            </Text>
            <Text
              style={[texts.midText, utilities.mt3]}
            >{`Độ tin cậy: ${confidence}%`}</Text>
          </View>
        )}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
        <Text style={[buttons.btn, buttons.bottomBtn, buttons.roundBtn]}>
          Take Guide
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("DoctorList")}>
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
