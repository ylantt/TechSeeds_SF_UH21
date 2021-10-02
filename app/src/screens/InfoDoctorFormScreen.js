import React, { useState, useEffect } from "react";
import { TextInput, View, TouchableOpacity } from "react-native";
import { RadioButton, Text } from 'react-native-paper';
import {
  bases,
  buttons,
  texts,
  utilities,
  formFields,
} from "../styles";
import trackApi from "../api/tracker";

const InfoFormScreen = () => {
  const [SD, setSD] = useState("1");
  const [IA, setIA] = useState("1");
  const [MX, setMX] = useState("1");
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWeb, setCompanyWeb] = useState("");
  const [bio, setBio] = useState("");
  const [problems, setProblems] = useState("");

  useEffect(() => {
    (async () => {
      const problem = await trackApi.get(
        "/problems",
      );

      setProblems(problem.data.data);
    })();
  }, []);

  return (
    <View style={[bases.container]}>
      <View style={utilities.flexStretch}>
        <Text style={[texts.midText, utilities.mt3]}>
          Tell us abit about yourself
        </Text>
        <View style={utilities.mt7}>
          <View>
            <Text>Name</Text>
            <TextInput
              style={formFields.input}
              placeholder="Name"
              onChangeText={(name) => setName(name)}
            />
          </View>
          <View>
            <Text style={utilities.mt3}>Evaluate your levels in each field</Text>
            {problems &&
              problems.map((problem) => (
                <View style={utilities.mt3} key={problem.key}>
                  <Text>{problem.name}</Text>
                  <RadioButton.Group onValueChange=
                    {
                      (newValue) => {
                        if (problem.key === "SD") {
                          setSD(newValue);
                        }

                        if (problem.key === "IA") {
                          setIA(newValue);
                        }

                        if (problem.key === "MX") {
                          setMX(newValue);
                        }
                      }
                    }
                    value={problem.key === "SD" ? SD : problem.key === "IA" ? IA : MX}
                  >
                    <View style={utilities.flexRow}>
                      <View style={{ alignSelf: "center" }}>
                        <RadioButton value="1" />
                        <Text>1</Text>
                      </View>
                      <View style={{ alignSelf: "center" }}>
                        <RadioButton value="2" />
                        <Text>2</Text>
                      </View>
                      <View style={{ alignSelf: "center" }}>
                        <RadioButton value="3" />
                        <Text>3</Text>
                      </View>
                      <View style={{ alignSelf: "center" }}>
                        <RadioButton value="4" />
                        <Text>4</Text>
                      </View>
                      <View style={{ alignSelf: "center" }}>
                        <RadioButton value="5" />
                        <Text>5</Text>
                      </View>
                    </View>
                  </RadioButton.Group>
                </View>
              ))}
          </View>
          <View style={utilities.mt3}>
            <Text>Company name</Text>
            <TextInput
              style={formFields.input}
              placeholder="Company name"
              onChangeText={(companyName) => setCompanyName(companyName)}
            />
          </View>
          <View style={utilities.mt3}>
            <Text>Company website</Text>
            <TextInput
              style={formFields.input}
              placeholder="Company website"
              onChangeText={(companyWeb) => setCompanyWeb(companyWeb)}
            />
          </View>
          <View style={utilities.mt3}>
            <Text>Bio</Text>
            <TextInput
              style={formFields.input}
              placeholder="Short intro"
              onChangeText={(bio) => setBio(bio)}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={utilities.mt3}>
        <Text style={[buttons.btn, buttons.bottomBtn]}>Let's get started</Text>
      </TouchableOpacity>
    </View >
  );
};

export default InfoFormScreen;
