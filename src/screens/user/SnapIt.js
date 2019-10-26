import React, { Component } from "react";
import { View, Text, ScrollView, Alert, Image, TouchableOpacity, AsyncStorage } from "react-native";
import { Container, Header, Content, Textarea, Form } from "native-base";
// import ImagePicker from 'react-native-image-picker';
import firebase from "../../../config/firebase";
import { LinearGradient } from "expo-linear-gradient";
import * as ImagePicker from 'expo-image-picker';
// import {ImagePicker} from 'expo';

export default class SnapIt extends Component {
  static navigationOptions = {
    // headerLeft: (
    //   <TouchableOpacity
    //     onPress={() => {
    //       this.props.navigation.goBack();
    //     }}
    //     style={{ marginLeft: 20}}
    //   >
    //   <Icon type="Ionicons" name="ios-arrow-back" style={{color:"white", fontSize:25,}} />
    //   </TouchableOpacity>
    // ),
    headerBackground: (
      <LinearGradient
        colors={['#23759E', '#36DAA5']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    ),
    title: "Name of tth Service",
    headerTitleStyle: {
      color: "white",
      fontWeight: "100",
      fontSize: 15
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      userpaymentoption: null,
      time: null,
      date: null,
      picture: null,
      describe: null

    };
  }

  async componentDidMount() {
    userpayOption = await AsyncStorage.getItem('userpaymentoption') || 'none';
    console.log(userpayOption);
    this.setState({ userpaymentoption: userpayOption })

    this.Clock = setInterval(() => this.GetTime(), 1000);
  }


  componentWillUnmount() {
    clearInterval(this.Clock);
  }

  GetTime() {
    var date, TimeType, hour, minutes, seconds, fullTime, fullDate;

    var date1 = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    // Creating Date() function object.
    date = new Date();
    hour = date.getHours();

    if (hour <= 11) {
      TimeType = 'AM';
    }
    else {
      TimeType = 'PM';
    }
    if (hour > 12) {
      hour = hour - 12;
    }
    if (hour == 0) {
      hour = 12;
    }
    minutes = date.getMinutes();
    if (minutes < 10) {
      minutes = '0' + minutes.toString();
    }
    seconds = date.getSeconds();
    if (seconds < 10) {
      seconds = '0' + seconds.toString();
    }
    fullTime = hour.toString() + ':' + minutes.toString() + ':' + seconds.toString() + ' ' + TimeType.toString();
    this.setState({
      time: fullTime
    });

    fullDate = date1 + '-' + month + '-' + year;
    this.setState({
      date: fullDate
    });
  }


  currentBooking = () => {
    const {
      date,
      time,
      picture,
      describe,
      userpaymentoption
    } = this.state;

    if (describe == null) {
      Alert.alert("Please describe your field why you want this service")
    }
    else {
      const data = {
        Date: date,
        Time: time,
        Describe: describe,
        PaymentOption: userpaymentoption,
      };

      const dataInString = JSON.stringify(data);
      AsyncStorage.setItem("snapitdata", dataInString);

      if (this.state.userpaymentoption == "Cash") {
        this.props.navigation.navigate("Thankyou")
      }
      else {
        firebase.auth().onAuthStateChanged((userid) => {
          if (userid) {
            this.props.navigation.navigate("BookingCart")
          }
          else {
            Alert.alert("You must have to login or register your self first");
            this.props.navigation.navigate("UserReg")
          }
        })
      }
    }

  }

  advancetBooking = () => {
    const {
      describe,
    } = this.state;

    if (describe == null) {
      Alert.alert("Please describe your field why you want this service")
    }
    else {
      if (this.state.userpaymentoption == "Cash") {
        this.props.navigation.navigate("AdvanceBooking1",{describe:describe})
      }
      else {
        firebase.auth().onAuthStateChanged((userid) => {
          if (userid) {
            this.props.navigation.navigate("AdvanceBooking1",{describe:describe})
          }
          else {
            Alert.alert("You must have to login or register your self first");
            this.props.navigation.navigate("UserReg")
          }
        })
      }
    }
  }

  camera = async () => {
    console.log("abs")
    let result = await ImagePicker.launchCameraAsync();

    if (!result.cancelled) {
      this.uploadImage(result.uri, "test-image")
        .then(() => {
          Alert.alert("suss")
        })
        .catch((error) => {
          Alert.alert(error)
        })
    }
  }

  uploadImage = async (uri, imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("booking/" + imageName);
    return ref.put(blob);
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Show us the problem</Text>
        <TouchableOpacity
          onPress={() => this.camera()}
        >
          <LinearGradient
            colors={["#23759E", "#36DAA5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 8,
              width: "50%",
              padding: 10,
              alignItems: "center",
              marginTop: 30,
              marginBottom: 50,
              flexDirection: "row",
              justifyContent: "space-around"
            }}
          >
            <Image
              source={require("../../assets/icon/camera.png")}
              style={{
                resizeMode: "contain",
                height: 25,
                width: 25,
              }}
            />
            <Text
              style={{
                color: "#fff",
                fontWeight: "100",
                fontSize: 16,
                justifyContent: "center"
              }}
            >
              SNAP IT
          </Text>
          </LinearGradient>
        </TouchableOpacity>

        <View
          style={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 7,
            width: "80%"
          }}
        >
          <Textarea rowSpan={5}
            onChangeText={(val) => this.setState({ describe: val })}
            placeholderTextColor="#999"
            placeholder="*Describe the problem in detail" />
        </View>

        <TouchableOpacity
          onPress={() => this.currentBooking()}
        >
          <LinearGradient
            colors={["#23759E", "#36DAA5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 8,
              width: "50%",
              padding: 10,
              alignItems: "center",
              marginTop: 30,
              marginBottom: 50
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "100",
                fontSize: 16,
                justifyContent: "center"
              }}
            >
              Current Booking
          </Text>
          </LinearGradient>
        </TouchableOpacity>

        <Text>Chose the Date And Time Suitable for you</Text>
        <TouchableOpacity
          onPress={() => this.advancetBooking()}
        >
          <LinearGradient
            colors={["#23759E", "#36DAA5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 8,
              width: "50%",
              padding: 10,
              alignItems: "center",
              marginTop: 30,
              marginBottom: 50
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "100",
                fontSize: 16,
                justifyContent: "center"
              }}
            >
              Advance Booking
          </Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  }
}
////////////////////////////////////////////////////////////////////////
