import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  Button,
} from "react-native";
import {
  bases,
  buttons,
  texts,
  images,
  utilities,
  formFields,
} from "../styles";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";

const InfoFormScreen = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <View style={[bases.container, { overflow: "scroll" }]}>
      <View style={utilities.flexStretch}>
        <Image
          style={images.avtIcon}
          source={require("../../assets/images/anonymousAvt.png")}
        />
        <Text style={[texts.midText, utilities.mt3]}>
          Tell us a bit about yourself
        </Text>
        <View style={utilities.mt7}>
          <View style={formFields.horizontalStyle}>
            <TextInput
              style={[formFields.input, utilities.col2]}
              placeholder="First name"
            />
            <TextInput
              style={[formFields.input, utilities.col2]}
              placeholder="Last name"
            />
          </View>
          <TextInput style={formFields.input} placeholder="Email address" />
          <TextInput
            style={formFields.input}
            secureTextEntry={true}
            placeholder="Password"
          />
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="year"
            is24Hour={true}
            display="default"
          />
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
          </Picker>
          {/* <TextInput style={formFields.input} placeholder="Gender" /> */}
          <TextInput style={formFields.input} placeholder="Phone number" />
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("Intro")}>
        <Text style={[buttons.btn, buttons.bottomBtn]}>Let's get started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default InfoFormScreen;
