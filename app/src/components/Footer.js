import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Footer = (navigation) => {
  return (
    <View style={styles.footer}>
      <TouchableOpacity
        style={styles.btnGroup}
        onPress={() => navigation.navigate('Home')}
      >
        <View style={styles.circlePurple}></View>
        <Text>Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnGroup}
        onPress={() => navigation.navigate('Setting')}
      >
        <View style={styles.circlePurple}></View>
        <Text>Setting</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btnGroup}
        onPress={() => navigation.navigate('Account')}
      >
        <View style={styles.circlePurple}></View>
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#fff",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: hp("10%"),
  },
  circlePurple: {
    width: hp("5%"),
    height: hp("5%"),
    borderRadius: "50%",
    backgroundColor: "#AEAEB2"
  },
  btnGroup: {
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Footer;
