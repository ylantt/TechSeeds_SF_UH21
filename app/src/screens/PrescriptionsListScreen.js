import React from "react";
import { Text, View } from "react-native";
import { bases, texts, utilities } from "../styles";
import Footer from "../components/Footer";
import PrescriptionShortInfo from "../components/PrescriptionShortInfo";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

class PrescriptionsListScreen extends React.Component {
  render() {
    return (
      <View style={[bases.container, { padding: 0 }]}>
        <View style={[utilities.flexStretch, utilities.greyBg]}>
          <Text style={[texts.bigText, utilities.mt3, { fontWeight: "bold" }]}>
            My Prescriptions List
            </Text>
          <PrescriptionShortInfo
            navigation={this.props.navigation}
            date="22/10/2021"
            patient="Nguyen Van A"
            problem="Melasma"
          />

          <PrescriptionShortInfo
            navigation={this.props.navigation}
            date="13/05/2021"
            patient="Anna Le"
            problem="Inflammatory"
          />

          <PrescriptionShortInfo
            navigation={this.props.navigation}
            date="02/09/2020"
            patient="Truong B"
            problem="Inflammatory"
          />

          <PrescriptionShortInfo
            navigation={this.props.navigation}
            date="10/05/2020"
            patient="Anna Le"
            problem="Melasma"
          />
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
        <Footer {...this.props.navigation} />
      </View>
    );
  }
}

export default PrescriptionsListScreen;
