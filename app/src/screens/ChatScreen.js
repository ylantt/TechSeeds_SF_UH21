import Fire from "../api/Fire";
import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";
import * as SecureStore from "expo-secure-store";
import trackerApi from "../api/tracker";

export default function ChatScreen({ navigation }) {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [userId, setUserId] = useState(null);
  const [name, setName] = useState(null);
  const [doctor, setDoctor] = useState(navigation.getParam("doctor"));

  useEffect(() => {
    (async () => {
      const token = await SecureStore.getItemAsync("secure_token");
      const { data } = await trackerApi("/auth/me", {
        headers: { authorization: `Bearer ${token}` },
      });

      setUserId(data.data._id);
      setName(data.data.name);

      setUser({
        _id: userId,
        name: name,
      });

      await Fire.get((message) => {
        if (doctor) {
          if (message.user._id === doctor._id || message.user._id === userId) {
            setMessages((previousMessages) =>
              GiftedChat.append(previousMessages, message)
            );
          }
        }
      });
    })();
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    Fire.send(messages);
  }, []);

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      user={user}
      onSend={(messages) => onSend(messages)}
    />
  );
}
