import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import WelcomeScreen from "./src/screens/WelcomeScreen";
import IntroScreen from "./src/screens/IntroScreen";
import SignInScreen from "./src/screens/SignInScreen";
import InfoFormScreen from "./src/screens/InfoFormScreen";
import CameraScreen from "./src/screens/CameraScreen";
import EvaluateImgScreen from "./src/screens/EvaluateImgScreen";
import DoctorListScreen from "./src/screens/DoctorListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Welcome: WelcomeScreen,
    Intro: IntroScreen,
    SignIn: SignInScreen,
    InfoForm: InfoFormScreen,
    Camera: CameraScreen,
    EvaluateImg: EvaluateImgScreen,
    DoctorList: DoctorListScreen,
  },
  {
    initialRouteName: "Welcome",
    defaultNavigationOptions: {
      title: "Skinee",
    },
  }
);

export default createAppContainer(navigator);
