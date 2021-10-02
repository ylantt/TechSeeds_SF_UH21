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
import DoctorDetailScreen from "./src/screens/DoctorDetailScreen";
import ChatScreen from "./src/screens/ChatScreen";
import RoleScreen from "./src/screens/RoleScreen";
import InfoDoctorFormScreen from "./src/screens/InfoDoctorFormScreen";
import DashboardDoctorScreen from "./src/screens/DashboardDoctorScreen";
import ChatToPatientsListScreen from "./src/screens/ChatToPatientsListScreen";
import PrescriptionsListScreen from "./src/screens/PrescriptionsListScreen";

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
    DoctorDetail: DoctorDetailScreen,
    Chat: ChatScreen,
    Role: RoleScreen,
    InfoDoctorForm: InfoDoctorFormScreen,
    DashboardDoctor: DashboardDoctorScreen,
    ChatToPatientsList: ChatToPatientsListScreen,
    PrescriptionsList: PrescriptionsListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Skinee",
    },
  }
);

export default createAppContainer(navigator);
