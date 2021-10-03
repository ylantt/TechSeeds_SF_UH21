import React from "react";
import { Text, View } from "react-native";
import { bases, texts, utilities } from "../styles";
import Footer from "../components/Footer";
import ChatTarget from "../components/ChatTarget";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const ChatToPatientsListScreen = ({ navigation }) => {
  return (
    <View style={[bases.container, { padding: 0 }]}>
      <View style={[utilities.flexStretch, utilities.greyBg]}>
        <ChatTarget navigation={navigation} />
        <Text
          style={[
            texts.normalText,
            utilities.mt3,
            {
              marginBottom: hp("5%"),
            },
          ]}
        >
          Developed by TechSeeds
        </Text>
      </View>
      <Footer {...navigation} />
    </View>
  );
};

export default ChatToPatientsListScreen;
