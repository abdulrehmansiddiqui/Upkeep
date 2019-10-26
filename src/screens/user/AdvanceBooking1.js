import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  ScrollView,
  TimePickerAndroid,
  AsyncStorage
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "native-base";
import firebase from "../../../config/firebase";

class AdvanceBooking1 extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      date: new Date("2020-06-12T14:42:42"),
      show: false,
    };
  }

  render() {
    LocaleConfig.locales["fr"] = {
      monthNames: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      dayNames: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursay",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      dayNamesShort: ["M", "T", "W", "T", "F", "S", "S"]
    };
    LocaleConfig.defaultLocale = "fr";

    const des = this.props.navigation.getParam('describe')

    return (
      <View>
        <LinearGradient
          colors={["#1977a0", "#33d0a6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={{ width: "100%", height: 200 }}
        >
          <View style={{ flexDirection: "row", paddingTop: 50 }}>
            <TouchableOpacity
              style={{ width: 20, marginLeft: 20 }}
              onPress={() => this.props.navigation.goBack()}
            >
              <Icon
                type="Ionicons"
                name="ios-arrow-back"
                style={{ color: "#FFF", fontSize: 20 }}
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 20, color: "#f1f1f1", fontSize: 17 }}>
              Advance Booking
            </Text>
          </View>
        </LinearGradient>
        <View
          style={{
            marginTop: -100,
            width: "90%",
            alignSelf: "center"
          }}
        >
        <TouchableOpacity
        onPress={() => this.props.navigation.navigate("AdvanceBooking2")}
        >
          <Calendar
            markedDates={{ [this.state.selectedDate]: { selected: true } }}
            onDayPress={this.onDayPress}
            hideExtraDays={true}
            minDate={"2019-01-01"}
            style={{
              borderRadius: 5,
              height: 370,
              width: "100%",

              shadowColor: "#000",
              shadowOffset: {
                width: 0,
                height: 5
              },
              shadowOpacity: 0.34,
              shadowRadius: 6.27,

              elevation: 10
            }}
            theme={{
              arrowColor: "#9d9d9d",
              monthTextColor: "black",
              textMonthFontWeight: "bold",
              textDayHeaderFontWeight: "300",
              textDayFontSize: 17,
              textMonthFontSize: 20,
              textDayHeaderFontSize: 15
            }}
          />
          </TouchableOpacity>
        </View>

        <ScrollView>
          <View style={{ padding: 10 }}>
            <View
              style={{
                flexDirection: "row",
                borderWidth: 1,
                borderColor: "#000",
                borderRadius: 5,
                height: 70,
                alignSelf: "center",
                marginTop: 8,
                elevation: 2
              }}
            >
              <View
                style={{
                  flexDirection: "column",
                  top: 3,
                  padding: 5,
                  paddingLeft: 30
                }}
              >
                <Text
                  style={{ fontWeight: "400", fontSize: 20, color: "#000" }}
                >
                  Abdul
                </Text>
                <Text>1:00AM-2:00PM</Text>
              </View>
              <View style={{ flex: 1, alignItems: "flex-end"}}>
                <Image
                  source={require("../../assets/user.jpg")}
                  style={{ width: 50, height: 50, top: 5, marginRight: 10,borderRadius:100  }}
                />
              </View>
            </View>


          </View>
        </ScrollView>
      </View>
    );
  }
}

export default AdvanceBooking1;
