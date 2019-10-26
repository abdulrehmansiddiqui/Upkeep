import React, { Component } from "react";
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer
} from "react-navigation";
import { Icon } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

import ProfileScreen from "../agent/Profile";
import Home from "../agent/Home";
import ServiceEstimation from "../agent/ServiceEstimation";
import PaymentDetails from "../agent/PaymentDetails";
import PaymentProcess1 from "../agent/PaymentProcess";
import PaymentProcess2 from "../agent/PaymentProcess2";
import CustomerRecord from "../agent/CustomerRecord";
import addNewCustomer from "../agent/addNewCustomer";
import CashHandOverConfirmatiom from "../agent/CashHandOverConfirmatiom";
import CustomerFeedback from "../agent/CustomerFeedback";
// import PaymentRecords from '../agent/PaymentRecords'
import OnlinePaymentRecord from "../agent/OnlinePaymentRecord";

const AppNavigator = createDrawerNavigator({
  Home: Home,
  Profile: ProfileScreen,
  ServiceEstimation: ServiceEstimation,
  PaymentDetails: PaymentDetails,
  PaymentProcess1: PaymentProcess1,
  PaymentProcess2: PaymentProcess2,
  CustomerRecord: CustomerRecord,
  addNewCustomer: addNewCustomer,
  CashHandOverConfirmatiom: CashHandOverConfirmatiom,
  CustomerFeedback: CustomerFeedback,
  // PaymentRecords: PaymentRecords,
  OnlinePaymentRecord: OnlinePaymentRecord
});

const Menu = createStackNavigator(
  {
    defaulthome: AppNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerTitle: routeName,
        headerLeft: (
          <Icon
            type="Entypo"
            name="menu"
            size={32}
            style={{ marginLeft: 30, color: "#000" }}
            onPress={() => navigation.toggleDrawer()}
          />
        ),
        // headerBackground: (
        //           <LinearGradient
        //             colors={['#1977a0', '#33d0a6']}
        //             style={{ flex: 1 }}
        //             start={{x: 0, y: 0}}
        //             end={{x: 1, y: 0}}
        //           />
        //       ),
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        }
      };
    }
  }
);

const AppContainer = createAppContainer(Menu);

export default class Agent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppContainer />;
  }
}
