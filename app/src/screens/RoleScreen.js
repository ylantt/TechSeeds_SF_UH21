import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import { texts, utilities, bases, buttons } from '../styles';

const RoleScreen = ({ navigation }) => {
  const [checked, setChecked] = React.useState('user');

  return (
    <View style={[bases.container]}>
      <View style={utilities.flexStretch}>
        <Text style={texts.bigText}>Who you are?</Text>
        <RadioButton.Group onValueChange=
          {
            newValue => setChecked(newValue)}
          value={checked}
        >
          <View style={utilities.flexRow}>
            <Text>Normal user</Text>
            <RadioButton value="user" />
          </View>
          <View style={utilities.flexRow}>
            <Text>Doctor</Text>
            <RadioButton value="doctor" />
          </View>
        </RadioButton.Group>
      </View>

      <TouchableOpacity
        onPress={
          () => checked === "doctor" ?
            navigation.navigate('InfoDoctorForm')
            : navigation.navigate('InfoForm')}
      ><Text style={[buttons.btn, buttons.bottomBtn]}>Continue</Text>
      </TouchableOpacity>
    </View >
  );
};

export default RoleScreen;