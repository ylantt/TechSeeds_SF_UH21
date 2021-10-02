import React from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Button,
  Platform,
} from "react-native";
import { bases, buttons, texts, images, utilities } from "../styles";
import * as Google from "expo-google-app-auth";
import * as SecureStore from "expo-secure-store";
import trackerApi from "../api/tracker";

const IOS_CLIENT_ID =
  "135161324527-i8s84tfks2f8c2jbitv468osdli71281.apps.googleusercontent.com";
const ANDROID_CLIENT_ID =
  "135161324527-2ufm8m4i4ole49odc9e4ok1ed7cm3oc1.apps.googleusercontent.com";

const platform = Platform.OS;

const signInWithGoogle = async (navigation) => {
  try {
    const result = await Google.logInAsync({
      androidClientId: ANDROID_CLIENT_ID,
      iosClientId: IOS_CLIENT_ID,
      success: ["profile", "email"],
    });

    if (result.type === "success") {
      const idToken = result.idToken;
      // Get token from server
      try {
        const { data } = await trackerApi.post(`/auth/googlelogin`, {
          idToken,
          platform,
        });

        if (data.success == false) {
          const user = result.user;
          navigation.navigate("Role", { user });
        } else if (data.success == true) {
          await SecureStore.setItemAsync("secure_token", data.token);
          if (data.isFullData) {
            if (data.role == "user") {
              navigation.navigate("Home");
            } else {
              // Home of doctor screen
              navigation.navigate("Home");
            }
          } else {
            if (data.role == "user") {
              navigation.navigate("InfoForm");
            } else {
              navigation.navigate("InfoDoctorForm");
            }
          }
        } else {
          console.log("Some thing went wrong!");
          return;
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      return { cancelled: true };
    }
  } catch (error) {
    console.log("Some thing went wrong!");
    return { error: true };
  }
};

const SignInScreen = ({ navigation }) => {
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
        <TouchableOpacity onPress={() => signInWithGoogle(navigation)}>
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
