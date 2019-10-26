import React from "react";
import { Image, ImageBackground, View, TouchableOpacity } from "react-native";
import { Container, Header, Text, Button, Footer } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default class Home extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <ImageBackground
        source={require("../../assets/bg.png")}
        style={{
          flex: 1,
          alignItems: "center"
        }}
      >
        <View style={{ marginTop: 50 }} />
        <Image
          source={require("../../assets/welcome/upkeepp.png")}
          style={{ resizeMode: "contain", width: "50%", margin: 0 }}
        />
        <Image
          source={require("../../assets/welcome/simple_easy.png")}
          style={{ resizeMode: "contain", width: "30%", marginTop: -90 }}
        />

        <TouchableOpacity
          style={{
            padding: 15,
            width: "80%",
            borderRadius: 5,
            borderColor: "#FFf",
            borderWidth: 1,
            marginTop: 50,
            alignItems: "center"
          }}
          onPress={() => {
            this.props.navigation.navigate("UserReg");
          }}
        >
          <Text style={{ color: "#FFF" }}>User Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 15,
            width: "80%",
            borderRadius: 5,
            borderColor: "#FFf",
            borderWidth: 1,
            marginTop: 50,
            alignItems: "center"
          }}
          onPress={() => {
            this.props.navigation.navigate("SignUp");
          }}
        >
          <Text style={{ color: "#FFF" }}>Service Provider Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: "absolute",
            bottom: "5%",
            justifyContent: "space-between"
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "100", color: "#FFF" }}>
            Terms and Condition
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }
}
