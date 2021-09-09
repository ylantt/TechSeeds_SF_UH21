import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { bases, buttons, texts, images, utilities } from "../styles";

const WelcomeScreen = () => {
  return <View style={[bases.container]}>
    <Image
      style={[images.avtIcon, utilities.mt15]}
      source={require("../../assets/images/anonymousAvt.png")}
    />
    <Text
      style={[texts.midText, utilities.mt3]}
    >Welcome
      </Text>
    <Text
      style={[texts.normalText]}
    >Sign in to continue
      </Text>
    <View style={utilities.mt15}>
      <TouchableOpacity>
        <Text style={[buttons.roundBtn, btns.btnGrey, buttons.btn]}>Sign up with form number</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[buttons.roundBtn, btns.btnBlue, buttons.btn]}>Sign up with Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={[buttons.btn, buttons.roundBtn, btns.btnWhite]}>Sign up with Facebook</Text>
      </TouchableOpacity>
    </View>
  </View>
};

const btns = StyleSheet.create({
  btnGrey: {
    backgroundColor: '#C7C7CC'
  },
  btnBlue: {
    backgroundColor: '#007AFF'
  },
  btnWhite: {
    backgroundColor: '#fff',
    color: '000',
    borderColor: '#999',
    borderWidth: 1,
  }
});

export default WelcomeScreen;
