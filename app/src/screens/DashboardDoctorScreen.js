import React from "react";
import { Text, View } from "react-native";
import { bases, texts, utilities } from "../styles";
import Footer from "../components/Footer";
import ActionRow from "../components/ActionRow";

const DashboardDoctorScreen = ({ navigation }) => {
  return <View style={[bases.container, { padding: 0 }]}>
    <View style={[utilities.flexStretch, utilities.greyBg]} >
      <ActionRow
        navigation={navigation}
        title="Message with patients"
        imageSrc={
          require("../../assets/images/components/doctorAction/message.png"
          )}
        navigateComponent="ChatToPatientsList"
      />

      <ActionRow
        navigation={navigation}
        title="Created prescriptions"
        imageSrc={
          require("../../assets/images/components/actionType/note.png"
          )}
        navigateComponent="PrescriptionsList"
      />

      <ActionRow
        navigation={navigation}
        title="My rating"
        imageSrc={
          require("../../assets/images/components/doctorAction/rating.png"
          )}
        navigateComponent="RatingView"
      />
      <Text style={[texts.normalText, utilities.mt3]}>
        Developed by TechSeeds
        </Text>
    </View>
    <Footer {...navigation} />
  </View>
};

export default DashboardDoctorScreen;
