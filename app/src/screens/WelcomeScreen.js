import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { bases, buttons, texts, images, utilities } from "../styles";

const WelcomeScreen = ({ navigation }) => {
  return <View style={[bases.container]}>
    <View style={utilities.flexStretch}>
      <Image
        style={images.introImg}
        source={require('../../assets/images/logo.png')}
      />
      <Text
        style={[texts.bigText, texts.purpleText, utilities.mt7]}
      >Welcome to Skinee</Text>
      <Text
        style={[texts.normalText, utilities.mt3]}
      >Developed by TechSeeds team</Text>
      <Text
        style={texts.normalText}>We look forward to giving you a healthy facial skin </Text>
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate('Intro')}>
      <Text style={[buttons.btn, buttons.bottomBtn]}>Continue</Text>
    </TouchableOpacity>
  </View>
};

export default WelcomeScreen;
