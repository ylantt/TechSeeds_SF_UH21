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

const updateUserInfo = async (yearOfBirth, gender, phone) => {
  // const res = await trackApi.post('/user:')
};

const InfoFormScreen = ({ navigation }) => {
  const initialYear = [{ id: "year", value: 18 }];
  const [year, setYear] = useState(initialYear);
  const yearNumber = [{ id: "year", label: "Ages", min: 12, max: 60 }];
  const [gender, setGender] = useState("Male");
  const [phone, setPhone] = useState("");

  return (
    <View style={[bases.container]}>
      <View style={utilities.flexStretch}>
        <Image
          style={images.avtIcon}
          source={require("../../assets/images/anonymousAvt.png")}
        />
        <Text style={[texts.midText, utilities.mt3]}>
          Tell us a bit about yourself
        </Text>
        <View style={utilities.mt7}>
          <ScrollView keyboardShouldPersistTaps="never">
            <Text>Phone number</Text>
            <TextInput
              keyboardType="number-pad"
              style={formFields.input}
              placeholder="Phone number"
              onChangeText={(phone) => setPhone(phone)}
            />
          </ScrollView>
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
              value="Male"
              containerStyle={{ marginBottom: 10 }}
              selected={gender}
              onSelected={(value) => setGender(value)}
              radioBackground="grey"
            >
              <Text>Male</Text>
            </RadioButton>
            <RadioButton
              value="Female"
              selected={gender}
              onSelected={(value) => setGender(value)}
              radioBackground="gray"
            >
              <Text>Female</Text>
            </RadioButton>
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={() => updateUserInfo(year, gender, phone)}>
        <Text style={[buttons.btn, buttons.bottomBtn]}>Let's get started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InfoFormScreen;
