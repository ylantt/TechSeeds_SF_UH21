import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import IntroScreen from "./src/screens/IntroScreen";
import SignInScreen from "./src/screens/SignInScreen";
import InfoFormScreen from "./src/screens/InfoFormScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Welcome: WelcomeScreen,
    Intro: IntroScreen,
    SignIn: SignInScreen,
    InfoForm: InfoFormScreen
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "Skinee",
    },
  }
);

export default createAppContainer(navigator);
