import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { bases, texts, utilities } from "../styles";
import Footer from "../components/Footer";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';

// const baseUrl = "http://192.168.1.6:5000";
const baseUrl = "http://127.0.0.1:5000";

class DoctorDetailScreen extends React.Component {
  state = {
    doctor: {}
  }

  componentDidMount() {
    const doctorId = (this.props.navigation.getParam('doctorId')).toString();

    axios.get(`${baseUrl}/api/v1/doctors/${doctorId}`).then((responseJson) => {
      this.setState(() => ({ doctor: responseJson.data }));
    }).catch((error) => {
      alert(error);
    });
  }

  render() {
    return (
      <View style={[bases.container]} >
        <View style={[utilities.flexStretch]} >
          <Image style={styles.img} source={{ uri: this.state.doctor.avt }} />
          <View style={utilities.flexRow}>
            <Text>km</Text>
            <View style={{ marginLeft: wp("5%") }}>
              <Text style={[
                texts.midText, {
                  textAlign: "left",
                  fontWeight: "700"
                }
              ]}>{this.state.doctor.name}</Text>
              <Text>{this.state.doctor.company}</Text>
            </View>
          </View>
        </View>
        <Footer {...this.props.navigation} />
      </View >
    )
  }
};

const styles = StyleSheet.create({
  img: {
    width: hp('30%'),
    height: hp('30%'),
    alignSelf: "center",
    marginVertical: hp("2%")
  }
});

export default DoctorDetailScreen;