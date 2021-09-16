import React from "react";
import { Text, View } from "react-native";
import { bases, texts, utilities } from "../styles";
import Footer from "../components/Footer";
import DoctorShortInfo from "../components/DoctorShortInfo";
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';

class DoctorList extends React.Component {
  state = {
    doctors: []
  }

  componentDidMount() {
    axios.get("http://localhost:5000/doctors").then((responseJson) => {
      this.setState(() => ({ doctors: responseJson.data }));
    }).catch((error) => {
      alert(error + "e");
    });
  }

  render() {
    return (
      <View style={[bases.container, { padding: 0 }]} >
        <View style={[utilities.flexStretch, utilities.greyBg]} >
          {
            this.state.doctors && this.state.doctors.map((doctor) => <DoctorShortInfo
              key={doctor._id}
              navigation={this.props.navigation}
              title={doctor.name}
              imageSrc={{ uri: doctor.avt }}
              connection={doctor.connection}
              rating={doctor.rating}
              doctorId={doctor._id}
            />
            )}
          <Text
            style={[texts.normalText,
            utilities.mt3, {
              marginBottom: hp("5%")
            }
            ]}
          >Developed by TechSeeds</Text>
        </View>
        <Footer {...this.props.navigation} />
      </View >
    )
  }
};

export default DoctorList;
