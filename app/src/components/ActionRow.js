import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { texts } from "../styles";

const HomeScreen = ({ navigation, title, imageSrc, navigateComponent }) => {
  return <View>
    <TouchableOpacity style={styles.row} onPress={() => navigation.navigate(navigateComponent)}>
      <Text style={texts.normalText}>{title}</Text>
      <Image
        style={styles.img}
        source={imageSrc}
      />
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  img: {
    width: hp('8%'),
    height: hp('8%'),
  },
  row: {
    height: hp("14%"),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: wp("5%"),
    backgroundColor: "#fff",
    width: wp("90%"),
    borderRadius: 10,
    alignSelf: "center",
    marginTop: hp("2%"),
    marginBottom: hp("2%")
  }
});

export default HomeScreen;
