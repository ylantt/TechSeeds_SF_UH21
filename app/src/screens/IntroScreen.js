import React from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { bases, buttons, texts, images, utilities } from "../styles";

const WelcomeScreen = ({ navigation }) => {
  return <View style={[bases.container]}>
    <View style={utilities.flexStretch}>
      <Text
        style={[texts.bigText, utilities.mt3]}
      >Identify Your Facial Skin Health Condition
      </Text>
      <Image
        style={images.introImg}
        source={require("../../assets/images/intro.png")}
      />
      <Text
        style={[texts.normalText, utilities.mt7]}
      >Detect your facial skin desease as well as other problems easily early and exactly
      </Text>
    </View>
    <TouchableOpacity
      onPress={() => navigation.navigate('SignIn')}
    ><Text style={[buttons.btn, buttons.bottomBtn]}>Continue</Text>
    </TouchableOpacity>
  </View>
};

export default WelcomeScreen;
