import React from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { bases, texts, utilities } from "../styles";
import Footer from "../components/Footer";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import axios from "axios";

const baseUrl = "http://192.168.1.2:5000";
// const baseUrl = "http://127.0.0.1:5000";

class DoctorDetailScreen extends React.Component {
  state = {
    doctor: {},
  };

  componentDidMount() {
    const doctorId = this.props.navigation.getParam("doctorId").toString();

    axios
      .get(`${baseUrl}/api/v1/doctors/${doctorId}`)
      .then((responseJson) => {
        this.setState(() => ({ doctor: responseJson.data }));
      })
      .catch((error) => {
        alert(error);
      });
  }

  render() {
    return (
      <View style={[bases.container]}>
        <View style={[utilities.flexStretch]}>
          <Image style={styles.img} source={{ uri: this.state.doctor.avt }} />
          <View style={utilities.flexRow}>
            <Text>km</Text>
            <View style={{ marginLeft: wp("5%") }}>
              <Text
                style={[
                  texts.midText,
                  {
                    textAlign: "left",
                    fontWeight: "700",
                  },
                ]}
              >
                {this.state.doctor.name}
              </Text>
              <Text>{this.state.doctor.company}</Text>
            </View>
          </View>

          <View style={[utilities.flexRow, styles.rowIcon, utilities.mt3]}>
            <View>
              <Image
                style={styles.smallIcon}
                source={require("../../assets/images/components/doctor/heartIcon.png")}
              />
              <Text>{this.state.doctor.connection}</Text>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Chat")}
            >
              <Image
                style={styles.smallIcon}
                source={require("../../assets/images/components/doctor/chatIcon.png")}
              />
              <Text>Connect</Text>
            </TouchableOpacity>

            <View>
              <Image
                style={styles.smallIcon}
                source={require("../../assets/images/components/doctor/shareIcon.png")}
              />
              <Text>Share</Text>
            </View>

            <View>
              <Image
                style={styles.smallIcon}
                source={require("../../assets/images/components/doctor/moreIcon.png")}
              />
              <Text>More</Text>
            </View>
          </View>

          <Text style={[utilities.mt7, texts.normalText]}>
            {this.state.doctor.info}
          </Text>
        </View>
        <Footer {...this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: hp("30%"),
    height: hp("30%"),
    alignSelf: "center",
    marginVertical: hp("2%"),
  },
  smallIcon: {
    width: hp("5%"),
    height: hp("5%"),
    alignSelf: "center",
    marginVertical: hp("2%"),
  },
  rowIcon: {
    justifyContent: "space-evenly",
    marginHorizontal: wp("15%"),
  },
});

export default DoctorDetailScreen;
