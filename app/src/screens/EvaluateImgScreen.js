import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { bases, utilities, buttons } from "../styles";

export default function notification({ navigation }) {
  // get photo from camera
  const photo = navigation.getParam('photo');

  return (
    <View style={[bases.container]}>
      <View style={utilities.flexStretch}>
        <Image source={{ uri: photo.uri }} style={[styles.evaluateImg, utilities.mt3]} />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Intro')}>
        <Text style={[buttons.btn, buttons.bottomBtn, buttons.roundBtn]}>Take Guide</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Intro')}>
        <Text style={[buttons.btn, buttons.bottomBtn, buttons.roundBtn]}>Connect doctor</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  evaluateImg: {
    width: hp('27%'),
    height: hp('27%'),
    alignSelf: 'center'
  },
});