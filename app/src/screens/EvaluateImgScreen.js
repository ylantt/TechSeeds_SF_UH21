import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { bases, utilities, buttons, texts } from "../styles";
import axios from "axios";

const EvaluateImgScreen = ({ navigation }) => {
  // get photo from camera
  const photo = navigation.getParam("photo");
  const [name, setName] = useState("");
  const [problem, setProblem] = useState("");
  const [level, setLevel] = useState("");
  const [mainReason, setMainReason] = useState("");

  const reason = {
    nam_da:
      "Ánh nắng mặt trời, Di truyền,  Nội tiết tố, sử dụng mỹ phẩm không đúng cách, chất lượng kém, chế độ sinh hoạt không khoa học hợp lý.",
    mun_viem_do:
      "Rửa mặt quá nhiều, Lạm dụng tẩy tế bào chết, Không làm sạch mồ hôi, Nặn mụn thường xuyên, Lười gội đầu, Để sản phẩm tạo kiểu tóc bết dính trên da",
    viem_da_tiet_ba:
      "Do tình trạng da bị nhờn, tiết dầu nhiều, Hormon cũng ảnh hưởng đến sự phát triển của bệnh, Yếu tố di truyền cũng là nguyên nhân gây bệnh, Thay đổi nội tiết tố",
  };

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
        setProblem("MX");
        setMainReason(reason.nam_da);
      } else if (data.name === "viem_da_tiet_ba") {
        setName("Viêm da tiết bã");
        setProblem("SD");
        setMainReason(reason.viem_da_tiet_ba);
      } else if (data.name === "mun_viem_do") {
        setName("Mụn viêm đỏ");
        setProblem("IA");
        setMainReason(reason.mun_viem_do);
      }

      if (data.level >= 0.4) {
        setLevel("Nặng");
      } else {
        setLevel("Nhẹ");
      }
    } catch {
      setName("Da của bạn khoẻ mạnh. Hãy chăm sóc da thường xuyên nhé!");
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
        ) : name ===
          "Da của bạn khoẻ mạnh. Hãy chăm sóc da thường xuyên nhé!" ? (
          <Text style={[texts.midText, utilities.mt3]}>{name}</Text>
        ) : (
          <View>
            <Text style={[texts.midText, utilities.mt7]}>
              Bệnh được chuẩn đoán: {name}
            </Text>
            <Text style={[texts.midText]}>{`Mức độ: ${level}`}</Text>
            <Text
              style={{ fontSize: 14, marginTop: 10 }}
            >{`Nguyên nhân phổ biến: ${mainReason}`}</Text>
            <Text style={utilities.mt3}>
              Để nắm rõ hơn về tình hình loại bệnh, bạn có thể bấm qua tab tips
              hoặc tìm đến bác sĩ
            </Text>
          </View>
        )}
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
        <Text style={[buttons.btn, buttons.bottomBtn, buttons.roundBtn]}>
          Take Guide
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("DoctorList", {
            problem: problem,
          })
        }
      >
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
    borderRadius: 40,
  },
});

export default EvaluateImgScreen;
