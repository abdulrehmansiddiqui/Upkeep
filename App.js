
import React from "react";
import { View, Text } from "react-native";
import AppContainer from "./Navigation/Routes";
import SplashScreens from "./src/screens/SplashScreen";
import { SplashScreen } from "expo";

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };
  }

  performTimeConsumingTask = async () => {
    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 1500)
    );
  };
  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    SplashScreen.hide();
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreens />;
    }
    return <AppContainer />;
  }
}
