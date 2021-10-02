import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import * as SecureStore from "expo-secure-store";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Platform,
  KeyboardAvoidingViewBase,
} from "react-native";
import Fire from "../api/Fire";
import { SafeAreaView } from "react-native-safe-area-context";

export default class ChatScreen extends React.Component {
  state = {
    messages: [],
  };

  get user() {
    return {
      _id: Fire.uid,
      // name: this.props.navigation.state.params.name,
      name: "Cui",
    };
  }

  componentDidMount() {
    Fire.get((message) => {
      this.setState((previous) => {
        messages: GiftedChat.append(previous.message, message);
      });
    });
  }

  componentWillUnmount() {
    Fire.off();
  }

  render() {
    const chat = (
      <GiftedChat
        messages={this.state.messages}
        onSend={Fire.send}
        user={this.user}
      />
    );

    if (Platform.OS === "android") {
      return (
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior="padding"
          keyboardVerticalOffset={30}
          enable
        >
          {chat}
        </KeyboardAvoidingView>
      );
    }

    return <SafeAreaView style={{ flex: 1 }}>{chat}</SafeAreaView>;
  }
}
