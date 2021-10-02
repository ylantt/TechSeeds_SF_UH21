import React from "react";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { texts } from "../styles";

const ChatItem = ({ navigation }) => {
  return <View>
    <TouchableOpacity
      style={[styles.row, { height: hp("20%") }]}
      onPress={() => navigation.navigate("Chat", {
        patientId: "1"
      })}
    >
      <View>
        <Image
          style={styles.img}
          source={{ uri: "https://i.ibb.co/2g2F52j/doctor-1.png" }}
        />
      </View>
      <View>
        <Text
          style={[texts.smallText, {
            fontWeight: "700",
            textAlign: "left"
          }]}>Nguyen Van A</Text>
        <Text>Lorem Ipsum is simply dummy text...</Text>
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
    height: hp("5%"),
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

export default ChatItem;
