import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { texts, utilities } from "../styles";

const DoctorShortInfo = ({ navigation, rating, title, imageSrc, connection, doctorId }) => {
  return <View>
    <TouchableOpacity
      style={[styles.row, { height: hp("20%") }]}
      onPress={() => navigation.navigate("DoctorDetail", {
        doctorId: doctorId
      })}
    >
      <View>
        <Text
          style={[texts.midText, {
            fontWeight: "700",
            textAlign: "left"
          }]}>{title}</Text>
        <Text style={utilities.mt3}>km</Text>
        <Text>Connections: {connection}</Text>
      </View>
      <View>
        <Image
          style={styles.img}
          source={imageSrc}
        />
        <Text style={utilities.mt3}>Rating: {rating} / 5</Text>
      </View>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
  img: {
    width: hp('8%'),
    height: hp('8%'),
    alignSelf: "center"
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

export default DoctorShortInfo;
