import React from "react";
import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { bases, buttons, texts, images, utilities, formFields } from "../styles";

const WelcomeScreen = ({ navigation }) => {
  return <View style={[bases.container]}>
    <View style={utilities.flexStretch}>
      <Image
        style={images.avtIcon}
        source={require("../../assets/images/anonymousAvt.png")}
      />
      <Text
        style={[texts.midText, utilities.mt3]}
      >Tell us a bit about yourself
      </Text>
      <View style={utilities.mt7}>
        <View style={formFields.horizontalStyle}>
          <TextInput style={[formFields.input, utilities.col2]} placeholder="First name" />
          <TextInput style={[formFields.input, utilities.col2]} placeholder="Last name" />
        </View>
        <TextInput style={formFields.input} placeholder="Email address" />
        <TextInput
          style={formFields.input}
          secureTextEntry={true}
          placeholder="Password"
        />
        <TextInput style={formFields.input} placeholder="Birthday " />
        <TextInput style={formFields.input} placeholder="Gender" />
        <TextInput style={formFields.input} placeholder="Phone number" />
      </View>
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate('Intro')}>
      <Text style={[buttons.btn, buttons.bottomBtn]}>Let's get started</Text>
    </TouchableOpacity>
  </View>
};

export default WelcomeScreen;
