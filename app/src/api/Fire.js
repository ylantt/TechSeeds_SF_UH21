import firebase from "firebase";
import { call } from "react-native-reanimated";

class Fire {
  constructor() {
    this.init();
    this.checkAuth();
  }

  init = () => {
    if (!firebase.apps.length) {
      firebase.initializeApp({
        apiKey: "AIzaSyAYWHmj94HtRtgxySxi5NV8V9hZinsY4XA",
        authDomain: "skinee-chat-app.firebaseapp.com",
        projectId: "skinee-chat-app",
        storageBucket: "skinee-chat-app.appspot.com",
        messagingSenderId: "539097887306",
        appId: "1:539097887306:web:5619eaf15ca56f87b72cb3",
      });
    }
  };

  checkAuth = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        firebase.auth().signInAnonymously();
      }
    });
  };

  send = (messages) => {
    messages.forEach((item) => {
      const message = {
        text: item.text,
        timestamp: firebase.database.ServerValue.TIMESTAMP,
        user: item.user,
      };

      this.db.push(message);
    });
  };

  parse = (message) => {
    const { user, text, timestamp } = message.val();
    const { key: _id } = message;
    const createdAt = new Date(timestamp);

    return {
      _id,
      createdAt,
      text,
      user,
    };
  };

  get = (callback) => {
    this.db.on("child_added", (snapshot) => callback(this.parse(snapshot)));
  };

  off() {
    this.db.off();
  }

  get db() {
    return firebase.database().ref("messages");
  }

  get uid() {
    return (firebase.auth().currentUser || {}).uid;
  }
}

export default new Fire();

const firebaseConfig = {
  apiKey: "AIzaSyAYWHmj94HtRtgxySxi5NV8V9hZinsY4XA",
  authDomain: "skinee-chat-app.firebaseapp.com",
  projectId: "skinee-chat-app",
  storageBucket: "skinee-chat-app.appspot.com",
  messagingSenderId: "539097887306",
  appId: "1:539097887306:web:5619eaf15ca56f87b72cb3",
};

let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();
