import {
  createSwitchNavigator,
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import Login from "../src/screens/auth/Login";
import Guest from "../src/screens/auth/Guest";
import SignupOption from "../src/screens/auth/SignupOption";
import SignUp from "../src/screens/auth/SignUp";
import userReg from "../src/screens/auth/Registration";

import Profile from "../src/screens/freelancer/Profile";

import map from "../src/screens/user/map";
import userProfile from "../src/screens/user/Profile";
import Circle from "../src/screens/user/Circle";
import ListFreelancer from "../src/screens/user/ListFreelancer";
import Addnewservicelocation from "../src/screens/user/Addnewservicelocation";
import SnapIt from "../src/screens/user/SnapIt";
import AdvanceBooking1 from "../src/screens/user/AdvanceBooking1";
import AdvanceBooking2 from "../src/screens/user/AdvanceBooking2";
import Thankyou from "../src/screens/user/Thankyou";
import TrackFreelancer from "../src/screens/user/TrackFreelancer";
import BookingCart from "../src/screens/user/BookingCart";
import Servicebooking from "../src/screens/user/Servicebooking";


import agentHome from "../src/screens/agent/Home";

const Auth = createStackNavigator({
  Login: Login,
  Guest: Guest,
  SignupOption: SignupOption,
  SignUp: SignUp,
  UserReg: userReg,
});

const userStack = createStackNavigator({
  map: map,
  Circle: Circle,
  userProfile: userProfile,
  ListFreelancer: ListFreelancer,
  Addnewservicelocation: Addnewservicelocation,
  SnapIt: SnapIt,
  AdvanceBooking1: AdvanceBooking1,
  AdvanceBooking2: AdvanceBooking2,
  Thankyou: Thankyou,
  BookingCart: BookingCart,
  TrackFreelancer: TrackFreelancer,
  UserReg: userReg,
});

const freelancerStack = createStackNavigator({
  Profile: Profile,
});
 
const agentStack = createStackNavigator({
  agentHome: agentHome,
});

const RootStack = createSwitchNavigator(
  {
    Login: Login,
    Auth: Auth,
    userStack: userStack,
    freelancerStack: freelancerStack,
    agentStack: agentStack,
  },
  {
    initialRouteName: "userStack"
  }
);

export default createAppContainer(RootStack);
