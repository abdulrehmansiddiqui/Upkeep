import React from "react";
import { View, ImageBackground, Animated, Image } from "react-native";

export default class SplashScreen extends React.Component {
  constructor() {
    super();
    this.springValue = new Animated.Value(0.4);
  }

  componentWillMount() {
    this.spring();
  }

  spring() {
    Animated.spring(this.springValue, {
      toValue: 1,
      friction: 1
    }).start();
  }
  render() {
    return (
      <ImageBackground
        source={require("../../assets/SplashScreenBackground.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Animated.Image
            style={{
              width: 100,
              height: 100,
              transform: [{ scale: this.springValue }]
            }}
            resizeMode="contain"
            source={require("../../assets/SplashLogo.png")}
          />

          <Image
            style={{ marginTop: 5 }}
            resizeMode="contain"
            source={require("../../assets/UnKeepp.png")}
          />

          <Image
            style={{ marginTop: 5 }}
            resizeMode="contain"
            source={require("../../assets/SimplyEasy.png")}
          />
        </View>
      </ImageBackground>
    );
  }
}
