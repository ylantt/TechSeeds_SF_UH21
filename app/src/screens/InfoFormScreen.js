import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import {
  bases,
  buttons,
  texts,
  images,
  utilities,
  formFields,
} from "../styles";
import RadioButton from "expo-radio-button";
import NumberPlease from "react-native-number-please";
import trackApi from "../api/tracker";
import * as SecureStore from "expo-secure-store";

const updateUserInfo = async (navigation, yearOfBirth, gender, phone) => {
  const token = await SecureStore.getItemAsync("secure_token");

  const { data } = await trackApi.post(
    "/users/update",
    {
      yearOfBirth,
      gender,
      phone,
    },
    {
      headers: { authorization: `Bearer ${token}` },
    }
  );

  if (data.success) {
    navigation.navigate("Home");
  } else {
    console.log(data.error);
  }
};

const InfoFormScreen = ({ navigation }) => {
  const initialYear = [{ id: "year", value: 18 }];
  const [year, setYear] = useState(initialYear);
  const yearNumber = [{ id: "year", min: 1971, max: 2011 }];
  const [gender, setGender] = useState("male");
  const [phone, setPhone] = useState("");

  return (
    <ScrollView keyboardShouldPersistTaps="never" style={[bases.container]}>
      <View style={utilities.flexStretch}>
        <Image
          style={images.avtIcon}
          source={require("../../assets/images/anonymousAvt.png")}
        />
        <Text style={[texts.midText, utilities.mt3]}>
          Tell us a bit about yourself
        </Text>
        <View style={utilities.mt7}>
          <View>
            <Text>Phone number</Text>
            <TextInput
              keyboardType="number-pad"
              style={formFields.input}
              placeholder="Phone number"
              onChangeText={(phone) => setPhone(phone)}
            />
          </View>
          <View>
            <Text>Year of birth</Text>
            <NumberPlease
              digits={yearNumber}
              values={year}
              onChange={(values) => setYear(values)}
            />
          </View>
          <View>
            <Text>Gender</Text>
            <RadioButton
              value="male"
              containerStyle={{ marginBottom: 10 }}
              selected={gender}
              onSelected={(value) => setGender(value)}
              radioBackground="grey"
            >
              <Text>Male</Text>
            </RadioButton>
            <RadioButton
              value="female"
              selected={gender}
              onSelected={(value) => setGender(value)}
              radioBackground="gray"
            >
              <Text>Female</Text>
            </RadioButton>
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => updateUserInfo(navigation, year[0].value, gender, phone)}
      >
        <Text style={[buttons.btn, buttons.bottomBtn]}>Let's get started</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default InfoFormScreen;
