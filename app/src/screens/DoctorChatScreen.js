import Fire from "../api/Fire";
import React, { useState, useCallback, useEffect } from "react";
import { GiftedChat } from "react-native-gifted-chat";

const DoctorChatScreen = () => {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    Fire.get((message) => {
      console.log(messages);
      if (
        message.user._id === "615839cb63b764d3e6a54618" ||
        message.user._id === "6158d4a32e77ed8b8e1e111d"
      ) {
        setMessages((previousMessages) =>
          GiftedChat.append(previousMessages, message)
        );
      }
    });
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    Fire.send(messages);
  }, []);

  setUser({
    _id: "615839cb63b764d3e6a54618",
    name: "Cụi Lưu Văn",
  });

  return (
    <GiftedChat
      messages={messages}
      showAvatarForEveryMessage={true}
      user={user}
      onSend={(messages) => onSend(messages)}
    />
  );
};

export default DoctorChatScreen;
