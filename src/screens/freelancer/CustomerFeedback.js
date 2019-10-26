import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Row, Text, Picker, Content, Form, Item, Accordion } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { theme } from "../../style/theme";
import { LinearGradient } from "expo-linear-gradient";

export default class CustomerFeedback extends Component {
  static navigationOptions = {
    title: "Customer Feedback",
    headerBackground: (
      <LinearGradient
        colors={["#1977a0", "#33d0a6"]}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    ),
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "100",
      fontSize: 15
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      next1: true,
      next2: true
    };
  }

  customer1 = () => {
    return (
      <View
        style={{
          backgroundColor: "#f1f1f1",
          borderColor: "#36DAA5",
          borderWidth: 1,
          flexDirection: "column"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 10
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="ios-star" style={styles.iconcolor} />
            <Icon name="ios-star" style={styles.iconcolor} />
            <Icon name="ios-star" style={styles.iconcolor} />
          </View>
          <Text style={styles.textcolor}>Token:00000 </Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={styles.text}>
            Review about service Review about service Review about service
            Review about service Review about service Review about service
            Review about service Review about service{" "}
          </Text>
        </View>
      </View>
    );
  };
  customer2 = () => {
    return (
      <View
        style={{
          backgroundColor: "#f1f1f1",
          borderColor: "#36DAA5",
          borderWidth: 1,
          flexDirection: "column"
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            backgroundColor: "#fff",
            padding: 10
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Icon name="ios-star" style={styles.iconcolor} />
            <Icon name="ios-star" style={styles.iconcolor} />
            <Icon name="ios-star" style={styles.iconcolor} />
          </View>
          <Text style={styles.textcolor}>Token:00000 </Text>
        </View>
        <View style={{ padding: 10 }}>
          <Text style={styles.text}>
            Review about service Review about service Review about service
            Review about service Review about service Review about service
            Review about service Review about service{" "}
          </Text>
        </View>
      </View>
    );
  };

  displayaccordion1 = () => {
    this.setState({ next1: !this.state.next1 });
  };
  displayaccordion2 = () => {
    this.setState({ next2: !this.state.next2 });
  };
  displayaccordion3 = () => {
    this.setState({ next3: !this.state.next3 });
  };

  render() {
    return (
      <ScrollView>
        <View style={styles.aBorder}>
          <TouchableOpacity onPress={this.displayaccordion1}>
            <LinearGradient
              colors={theme.color.gRight}
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.accordion}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}
              >
                <Text style={styles.heading}>Name of the Client</Text>
                <Icon name="ios-refresh" style={styles.icon} />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {this.state.next1 ? this.customer1() : null}
        </View>

        <View style={styles.aBorder}>
          <TouchableOpacity onPress={this.displayaccordion2}>
            <LinearGradient
              colors={theme.color.gRight}
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.accordion}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}
              >
                <Text style={styles.heading}>Name of the Client</Text>
                <Icon name="ios-refresh" style={styles.icon} />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {this.state.next2 ? this.customer2() : null}
        </View>
        <View style={theme.empty.em40} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  aBorder: {
    marginLeft: 15,
    marginRight: 15
  },
  aitem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    marginTop: 5,
    paddingBottom: 8,
    borderColor: "#999",
    borderBottomWidth: 1
  },
  text: {
    color: "#999",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "justify"
  },
  textcolor: {
    color: "#23759E",
    fontSize: 18
  },
  iconcolor: {
    color: "#23759E",
    fontSize: 20,
    marginRight: 8
  },
  icon: {
    color: "#fff",
    fontSize: 25
  },
  accordion: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 15,
    width: "100%",
    padding: 10
  },
  heading: {
    fontSize: 18,
    fontWeight: "100",
    color: "#FFF"
  }
});
