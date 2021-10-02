import Fire from "../api/Fire";
import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

export default function ChatScreen() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    Fire.get((message) => {
      console.log(message);
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, message)
      );
    });

    setUser({
      _id: "615833db79bbd3d7e1ab9fcd",
      name: "Cui",
    });
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
