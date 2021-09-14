import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import { bases, buttons, texts, images, utilities } from "../styles";
import * as Google from "expo-google-app-auth";

const IOS_CLIENT_ID =
  "135161324527-i8s84tfks2f8c2jbitv468osdli71281.apps.googleusercontent.com";
const ANDROID_CLIENT_ID = "";

const signInWithGoogle = async (props) => {
  console.log(props.navigation);
  try {
    const result = await Google.logInAsync({
      androidClientId: ANDROID_CLIENT_ID,
      iosClientId: IOS_CLIENT_ID,
      success: ["profile", "email"],
    });

    if (result.type === "success") {
      console.log("LoginScreen.js", result.user.id);
      return result.accessToken;
    } else {
      return { cancelled: true };
    }
  } catch (error) {
    console.log("Oh no");
    return { error: true };
  }
};

const SignInScreen = (props) => {
  return (
    <View style={[bases.container]}>
      <Image
        style={[images.avtIcon, utilities.mt15]}
        source={require("../../assets/images/anonymousAvt.png")}
      />
      <Text style={[texts.midText, utilities.mt3]}>Welcome</Text>
      <Text style={[texts.normalText]}>Sign in to continue</Text>
      <View style={utilities.mt15}>
        <TouchableOpacity>
          <Text style={[buttons.roundBtn, btns.btnGrey, buttons.btn]}>
            Sign up with form number
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={[buttons.roundBtn, btns.btnBlue, buttons.btn]}>
            Sign up with Facebook
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => signInWithGoogle(props)}>
          <Text style={[buttons.btn, buttons.roundBtn, btns.btnWhite]}>
            Sign up with Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const btns = StyleSheet.create({
  btnGrey: {
    backgroundColor: "#C7C7CC",
  },
  btnBlue: {
    backgroundColor: "#007AFF",
  },
  btnWhite: {
    backgroundColor: "#fff",
    color: "#000",
    borderColor: "#999",
    borderWidth: 1,
  },
});

export default SignInScreen;
