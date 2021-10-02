import * as React from "react";
import { View, TouchableOpacity } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { texts, utilities, bases, buttons } from "../styles";
import trackerApi from "../api/tracker";
import * as SecureStore from "expo-secure-store";

const RoleScreen = ({ navigation }) => {
  const user = navigation.state.params.user;
  const [checked, setChecked] = React.useState("users");

  const createUser = async () => {
    const { data } = await trackerApi.post(`/${checked}`, {
      user,
    });

    await SecureStore.setItemAsync("secure_token", data.token);

    if (checked === "users") {
      navigation.navigate("InfoForm");
    } else {
      navigation.navigate("InfoDoctorForm");
    }
  };

  return (
    <View style={[bases.container]}>
      <View style={utilities.flexStretch}>
        <Text style={texts.bigText}>Who you are?</Text>
        <RadioButton.Group
          onValueChange={(newValue) => setChecked(newValue)}
          value={checked}
        >
          <View style={utilities.flexRow}>
            <Text>Normal user</Text>
            <RadioButton value="users" />
          </View>
          <View style={utilities.flexRow}>
            <Text>Doctor</Text>
            <RadioButton value="doctors" />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity onPress={createUser}>
        <Text style={[buttons.btn, buttons.bottomBtn]}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RoleScreen;
