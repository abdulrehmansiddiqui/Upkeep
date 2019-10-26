import React from "react";
import { Image, ImageBackground, View,Alert } from "react-native";
import { Picker, Input, Row, Text, Button, Item } from "native-base";
import { theme } from "../../style/theme";
import { LinearGradient } from "expo-linear-gradient";

export default class TrackFreelancer extends React.Component {

  componentDidMount() {
    Alert.alert("your Device is not screen please restart")
  }
  componentWillMount(){
    this.props.navigation.navigate("Login")
  }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/agentlivetracking/map1.png")}
        style={{
          flex: 1
        }}
      >
        <LinearGradient
          colors={theme.color.gRight}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            borderRadius: 200,
            width: 50,
            height: 50,
            padding: 8,
            position: "absolute",
            bottom: "33%",
            right: 10
          }}
        >
          <Image
            source={require("../../assets/icon/location.png")}
            style={{ resizeMode: "contain", width: 30, height: 30 }}
          />
        </LinearGradient>

        <View
          elevation={10}
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#FFF",
            position: "absolute",
            bottom: "10%",
            borderRadius: 5,
            width: "95%",
            height: 120,
            marginLeft: 10,
            padding: 10
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/agentlivetracking/user.png")}
              style={{ resizeMode: "contain", width: 80, height: 80 }}
            />
          </View>
          <View style={{ flexDirection: "column", width: "40%" }}>
            <Text style={{ color: "blue", fontSize: 16 }}>
              Name of the Client
            </Text>
            <Text style={{ color: "grey", fontSize: 12 }}>
              Name of the Area
            </Text>
            <Text style={{ color: "grey", fontSize: 12, fontWeight: "100" }}>
              Appointment at 00:00 pm
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/agentlivetracking/Group221.png")}
              style={{ resizeMode: "contain", width: 80, height: 80 }}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}
