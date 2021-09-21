import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { bases, utilities, buttons } from "../styles";
import axios from "axios";

const getDataFromModel = async (photoBase64) => {
  const result = {};
  try {
    const { data } = await axios.post(
      "http://192.168.1.9:8000/v1/object-detection/yolov5s",
      {
        photoBase64,
      }
    );

    result.success = true;

    if (data.name === "nam_da") {
      result.name = "Nám da";
    } else if (data.name === "viem_da_tiet_ba") {
      result.name = "Viêm da tiết bã";
    } else if (data.name === "mun_viem_do") {
      result.name = "Mụn viêm đỏ";
    }
  } catch {
    result.success = false;
    result.name = "Không nhận dạng được loại bệnh nào";
  }
  return result;
};

const EvaluateImgScreen = ({ navigation }) => {
  // get photo from camera
  const photo = navigation.getParam("photo");
  const [name, setName] = useState("");

  const getDataFromModel = async (photoBase64) => {
    try {
      const { data } = await axios.post(
        "http://192.168.1.9:8000/v1/object-detection/yolov5s",
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
      </View>
      <View>
        <Text>{name}</Text>
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
