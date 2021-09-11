import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { bases, texts, utilities } from "../styles";
import Footer from "../components/Footer";
import ActionRow from "../components/ActionRow";

const HomeScreen = ({ navigation }) => {
  return <View style={[bases.container, { padding: 0 }]}>
    <View style={[utilities.flexStretch, utilities.greyBg]} >
      <ActionRow
        navigation={navigation}
        title="Check your face's health"
        imageSrc={
          require("../../assets/images/components/actionType/face.png"
          )}
        navigateComponent="Camera"
      />

      <ActionRow
        navigation={navigation}
        title="Facial skin diary"
        imageSrc={
          require("../../assets/images/components/actionType/note.png"
          )}
        navigateComponent="DiaryList"
      />

      <ActionRow
        navigation={navigation}
        title="Tips for a healthy skin"
        imageSrc={
          require("../../assets/images/components/actionType/tip.png"
          )}
        navigateComponent="Tip"
      />

      <ActionRow
        navigation={navigation}
        title="Connect doctor"
        imageSrc={
          require("../../assets/images/components/actionType/doctor.png"
          )}
        navigateComponent="DoctorList"
      />

      <Text style={[texts.normalText, utilities.mt3]}>Developed by TechSeeds</Text>
    </View>
    <Footer {...navigation} />
  </View>
};

export default HomeScreen;
