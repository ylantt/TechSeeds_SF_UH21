import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { texts } from "../styles";

const PrescriptionShortInfo = ({ navigation, date, patient, problem }) => {
  return <View>
    <TouchableOpacity
      style={[styles.row, { height: hp("20%") }]}
      onPress={() => navigation.navigate("PrescriptionDetail")}
    >
      <View>
        <Text
          style={[texts.midText, {
            fontWeight: "700",
            textAlign: "left"
          }]}>Created date: {date}</Text>
        <Text>Patient: {patient}</Text>
        <Text>Problem: {problem}</Text>
      </View>
      <View>
      </View>
    </TouchableOpacity>
  </View>
};

const styles = StyleSheet.create({
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

export default PrescriptionShortInfo;
