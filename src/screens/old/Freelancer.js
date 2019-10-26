// import React, { Component } from 'react';
// import { createDrawerNavigator, createStackNavigator, createBottomTabNavigator,createAppContainer } from 'react-navigation';
// import { Icon } from 'native-base';
// import LinearGradient from "react-native-linear-gradient";


// //////////////////////

// const AppNavigator = createDrawerNavigator({
//   Indexs: Indexs,
//   login: login,
//   SignUp: SignUp,
//   Home: Home,
//   Pro: ProfileScreen,
//   SR: ServiceRecord,
//   PR: PaymentRecords,
//   ALT: agentlivetracking,
//   ANSL: Addnewservicelocation,
//   SE: ServiceEstimation,
//   CFB: CustomerFeedback,
//   OPR: OnlinePaymentRecord,
//   PD: PaymentDetails,
// })

// const Menu = createStackNavigator({
//   defaulthome:AppNavigator,
//   // HD: HdCameraScreen,
// },
// // {
// //   defaultNavigationOptions:({navigation})=> {
// //     const{routeName} = navigation.state.routes[navigation.state.index]
// //     return{
// //       headerTitle: routeName,
// //       headerLeft: <Icon type="Entypo" name="menu" size={32} color="white" style={{marginLeft: 30,}} onPress={()=>navigation.toggleDrawer()}/>,
      
// //       headerBackground: (
// //         <LinearGradient
// //           colors={['#1977a0', '#33d0a6']}
// //           style={{ flex: 1 }}
// //           start={{x: 0, y: 0}}
// //           end={{x: 1, y: 0}}
// //         />
// //     ),
// //       headerTintColor: '#fff',
// //       headerTitleStyle: {
// //         fontWeight: 'bold',
// //       },
// //     }
    
// //   }
// //}
// );

// const AppContainer = createAppContainer(Menu);

// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }

/////////////////////////////////////////////////
import React from 'react';
import { Button, View, Text } from 'react-native';
import { createDrawerNavigator, createBottomTabNavigator,createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './src/screens/freelancer/Home'
import ProfileScreen from './src/screens/freelancer/Profile';
import ServiceRecord from './src/screens/freelancer/ServiceRecord'
import PaymentRecords from './src/screens/freelancer/PaymentRecords'
import agentlivetracking from './src/screens/freelancer/Agentlivetracking'
import Addnewservicelocation from './src/screens/freelancer/Addnewservicelocation'
import ServiceEstimation from './src/screens/freelancer/ServiceEstimation'
import CustomerFeedback from './src/screens/freelancer/CustomerFeedback'
import OnlinePaymentRecord from './src/screens/freelancer/OnlinePaymentRecord'
import PaymentDetails from './src/screens/freelancer/PaymentDetails'
import login from './src/screens/freelancer/Login'
import SignUp from './src/screens/freelancer/SignUp'
import Indexs from './src/screens/freelancer/Indexs'

const RootStack = createBottomTabNavigator(
  {
    Indexs: Indexs,
    login: login,
    SignUp: SignUp,
    Home: Home,
    Profile: ProfileScreen,
    serviceRecord: ServiceRecord,
    PR: PaymentRecords,
    ALT: agentlivetracking,
    ANSL: Addnewservicelocation,
    SE: ServiceEstimation,
    CFB: CustomerFeedback,
    OPR: OnlinePaymentRecord,
    PD: PaymentDetails,
  },
  {
    initialRouteName: 'login',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}