import React from "react";
import { Image, ImageBackground, View, TouchableOpacity, AsyncStorage } from "react-native";
import { Container, Header, Text, Button, Footer } from "native-base";

export default class Guest extends React.Component {
  static navigationOptions = {
    header: null
  };

  guestoption=(id) => {
    console.log(id);
    AsyncStorage.setItem("userpaymentoption", id);
    this.props.navigation.navigate("userStack")
  }


  render() {
    return (
      <ImageBackground
        source={require("../../assets/welcome/bg.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 50
        }}
      >
        <Image
          source={require("../../assets/welcome/upkeepp.png")}
          style={{ resizeMode: "contain", width: "70%", height: "10%" }}
        />
        <Image
          source={require("../../assets/welcome/simple_easy.png")}
          style={{ resizeMode: "contain", width: "40%", height: "7%" }}
        />
        <Text style={{ color: "#FFF", marginTop: 50 }}>
          For a seemless results we&apos;d request you to choose your prefered
          mode of payment?
        </Text>
        <View style={{ width: "100%", alignItems: "center", marginTop: 50 }}>
          <TouchableOpacity
            onPress={() => this.guestoption("Card")}
            style={{
              backgroundColor: "#009F3F",
              borderColor: "#FFF",
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              marginBottom: 30
            }}
          >
            <Text
              style={{
                color: "#FFF",
                marginLeft: 30,
                marginRight: 30,
                fontSize: 20,
                fontWeight: "100"
              }}
            >
              Card
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.guestoption("Cash")}
            style={{
              backgroundColor: "#009F3F",
              borderColor: "#FFF",
              borderWidth: 1,
              padding: 10,
              borderRadius: 5,
              marginBottom: 30
            }}
          >
            <Text
              style={{
                color: "#FFF",
                marginLeft: 30,
                marginRight: 30,
                fontSize: 20,
                fontWeight: "100"
              }}
            >
              Cash
            </Text>
          </TouchableOpacity>
        </View>
        <Text style={{ color: "lightgrey", position: "absolute", bottom: 20 }}>
          Don't have an account?{" "}
          <Text style={{ color: "#FFF", fontWeight: "400" }}>SignUp</Text>
        </Text>
      </ImageBackground>
    );
  }
}
