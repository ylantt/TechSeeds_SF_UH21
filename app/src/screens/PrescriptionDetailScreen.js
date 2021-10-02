import React from "react";
import { Text, View } from "react-native";
import { bases, texts, utilities } from "../styles";
import Footer from "../components/Footer";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class PrescriptionsListScreen extends React.Component {
  render() {
    return (
      <View style={[bases.container, { padding: 0 }]}>
        <View style={[utilities.flexStretch, utilities.greyBg]}>
          <Text style={[texts.bigText, utilities.mt3, { fontWeight: "bold" }]}>
            Prescriptions
            </Text>
          <View style={
            [utilities.mt3, {
              backgroundColor: "#fff",
              marginHorizontal: wp("7%"),
              padding: wp("5%")
            }]}>
            <View style={utilities.flexRow}>
              <Text style={{ fontWeight: "bold" }}>Key: </Text>
              <Text>P001</Text>
            </View>
            <View style={utilities.flexRow}>
              <Text style={{ fontWeight: "bold" }}>Created Date: </Text>
              <Text>22/10/2021</Text>
            </View>
            <View style={utilities.flexRow}>
              <Text style={{ fontWeight: "bold" }}>Patient: </Text>
              <Text>Nguyen Van A</Text>
            </View>
            <View style={utilities.flexRow}>
              <Text style={{ fontWeight: "bold" }}>Doctor: </Text>
              <Text>Luu Van Cui</Text>
            </View>
            <View style={utilities.flexRow}>
              <Text style={{ fontWeight: "bold" }}>Diagnose: </Text>
              <Text>Melasma</Text>
            </View>
            <Text style={{ fontWeight: "bold" }}>Medicine List</Text>
            <View>
              <View>
                <Text>1. Transino x 1</Text>
                <Text>2. Vitamin 3B x 1</Text>
              </View>
            </View>
          </View>
        </View>
        <Footer {...this.props.navigation} />
      </View >
    );
  }
}

export default PrescriptionsListScreen;
