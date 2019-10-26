import React, { Component } from "react";
import { Image, ImageBackground, TouchableOpacity, Alert } from "react-native";
import { Item, Input, Text } from "native-base";
import firebase from "../../../config/firebase";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  login() {
    const { email, password } = this.state;
    if (email && password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(success => {
          this.props.navigation.navigate("Profile");
        })
        .catch(e => Alert.alert(e.message));
    } else {
      Alert.alert("Plese Fill Email and Password");
    }
  }
  //   if (this.state.userName === this.state.text) {
  //     if (this.state.pass === this.state.password) {
  //       this.props.navigation.navigate("User");
  //     }
  //   }
  // }

  render() {
    return (
      <ImageBackground
        source={require("../../assets/login/bg.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 50
        }}
      >
        <Image
          source={require("../../assets/login/upkeepp.png")}
          style={{ resizeMode: "contain", width: "50%", height: "7%" }}
        />
        <Image
          source={require("../../assets/login/simple_easy.png")}
          style={{ resizeMode: "contain", width: "30%", height: "5%" }}
        />
        <Item style={{ marginTop: 100 }}>
          <Input
            onChangeText={text => {
              this.setState({ text });
            }}
            placeholder="User Name"
            placeholderTextColor="lightgrey"
            style={{
              textAlign: "center",
              borderColor: "lightgrey",
              borderWidth: 1,
              borderRadius: 5,
              color: "#FFF"
            }}
          />
        </Item>
        <Item style={{ marginTop: 10 }}>
          <Input
            onChangeText={pass => {
              this.setState({ pass });
            }}
            placeholder="Password"
            placeholderTextColor="lightgrey"
            style={{
              textAlign: "center",
              borderColor: "lightgrey",
              borderWidth: 1,
              borderRadius: 5,
              color: "#FFF"
            }}
            secureTextEntry={true}
          />
        </Item>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Guest");
          }}
        >
          <Text style={{ color: "lightgrey", marginTop: 30 }}>
            Continue as Guest
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            backgroundColor: "#009F3F",
            borderColor: "#FFF",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginTop: 20
          }}
          onPress={() => this.login()}
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
            Sign In
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "lightgrey", marginTop: 40 }}>
          Forgot Password ?
        </Text>
        <Text style={{ position: "absolute", bottom: 20, color: "lightgrey" }}>
          Don&apos;t have an account?{" "}
          <Text
            style={{ color: "#FFF", fontWeight: "bold" }}
            onPress={() => this.props.navigation.navigate("freelancerStack")}
          >
            Sign Up
          </Text>
        </Text>
      </ImageBackground>
    );
  }
}
