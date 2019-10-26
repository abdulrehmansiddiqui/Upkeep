
// import React from 'react';
// import { Button, View, Text } from 'react-native';
// import { createDrawerNavigator, createBottomTabNavigator,createAppContainer } from 'react-navigation';
// import { createStackNavigator } from 'react-navigation-stack';





import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createDrawerNavigator, createBottomTabNavigator,createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';//is file par warning ara ha

import map from '../user/map'
import Registration from '../user/Registration'
import SnapIt from '../user/SnapIt'
import ListFreelancer from '../user/ListFreelancer'
import Profile from '../user/Profile'
import BookingCartscreen from '../user/BookingCart'
import Servicebooking from '../user/Servicebooking'
import Addnewservicelocation from '../user/Addnewservicelocation'
import ServicesCencellation from '../user/ServicesCencellation'
import ServiceSummary from '../user/ServiceSummary1'
import AdvanceBooking1 from '../user/AdvanceBooking1'


const Menu = createBottomTabNavigator(
  {
    map: map,
    // Registration: Registration,
    // SnapIt: SnapIt,
    // ListFreelancer: ListFreelancer,
    // Profile: Profile,
    // Booking: BookingCartscreen,
    // Servicebooking: Servicebooking,
    // ANS: Addnewservicelocation,
    // ServicesCencellation: ServicesCencellation,
    // ServiceSummary: ServiceSummary,
    // AdvanceBooking: AdvanceBooking,
  },
  {
    initialRouteName: 'map',
  }
);

const AppContainer = createAppContainer(Menu);

export default class User extends Component {

  render() {
    return (
      <AppContainer />
    );
  }
}
