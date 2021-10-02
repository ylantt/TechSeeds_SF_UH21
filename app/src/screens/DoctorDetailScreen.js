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
          <View style={styles.bigBackground}>
            <View ></View>
            <Image style={styles.img} source={{ uri: this.state.doctor.avt }} />
          </View>
          <View style={utilities.flexRow, { alignSelf: "center", }}>
            <View>
              <Text
                style={[
                  texts.midText,
                  utilities.mt3,
                  {
                    textAlign: "left",
                    fontWeight: "700",
                  },
                ]}
              >
                Doctor {this.state.doctor.name}
              </Text>
              <Text>{this.state.doctor.company}</Text>
              <Text style={utilities.mt3, { fontWeight: "bold", color: "red" }}>Rating: {this.state.doctor.rating} / 5</Text>
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
            {this.state.doctor.bio}
          </Text>

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("ReviewList")}
            style={utilities.flexRow}
          >
            <Image
              style={styles.smallIcon}
              source={require("../../assets/images/components/doctorAction/rating.png")}
            />
            <Text style={texts.midText, { fontWeight: "bold", marginLeft: wp("2%") }}>View all reviews</Text>
          </TouchableOpacity>
        </View>
        <Footer {...this.props.navigation} />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  img: {
    width: hp("30%"),
    height: hp("30%"),
    borderRadius: hp("15%"),
    alignSelf: "center",
    marginVertical: hp("2%"),
    borderWidth: hp("1%"),
    borderColor: "#fff",
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
  bigBackground: {
    backgroundColor: "#A066CB"
  }
});

export default DoctorDetailScreen;
