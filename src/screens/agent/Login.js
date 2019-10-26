import React from "react";
import { Image, ImageBackground } from "react-native";
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Item,
  Label,
  Input,
  Button,
  Text
} from "native-base";

export default class Login extends React.Component {
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
        <Button
          success
          block
          style={{
            marginHorizontal: 50,
            marginTop: 60,
            borderColor: "#FFF",
            borderRadius: 5,
            borderWidth: 2
          }}
          onPress={() => this.props.navigation.navigate("LoggedIn")}
        >
          <Text>Sign In</Text>
        </Button>
        <Text style={{ color: "#FFF", marginTop: 40 }}>Forgot Password ?</Text>

      </ImageBackground>
    );
  }
}
