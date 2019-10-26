import React, { Component } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { Icon } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default class BookingCart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <ScrollView>
          <View style={{ padding: 10, alignItems: "center" }}>
            <Text
              style={{ color: "#23759E", fontSize: 25, fontWeight: "bold" }}
            >
              {" "}
              Booking Cart{" "}
            </Text>
          </View>

          <View
            style={{
              padding: 15,
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 8,
              margin: 20
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                borderColor: "#ccc",
                paddingBottom: 5
              }}
            >
              <Text>Code: 0000</Text>
              <Text>Receipt: 0000</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                borderBottomWidth: 1,
                borderColor: "#ccc",
                paddingBottom: 20,
                marginTop: 5
              }}
            >
              <Text style={{ color: "#23759E", fontSize: 18 }}>
                Plumbing Service
              </Text>
              <Text>dd/mm/yy - 00:00 pm</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingTop: 10
              }}
            >
              <Text style={{ color: "#666", fontSize: 20 }}>
                Amount: BD.0.0000
              </Text>
              <Icon
                type="MaterialIcons"
                name="check-box-outline-blank"
                style={{ color: "#ccc", fontSize: 30, marginRight: 10 }}
              />
            </View>
          </View>
        </ScrollView>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 20
          }}
        >
          <Text style={{ color: "#23759E", fontSize: 20, fontWeight: "bold" }}>
            {" "}
            Total:BD.00:00{" "}
          </Text>

          <LinearGradient
            colors={["#23759E", "#36DAA5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ borderRadius: 5, padding: 10, alignItems: "center" }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "100",
                fontSize: 14,
                justifyContent: "center"
              }}
              onPress={() => {
                this.props.navigation.navigate("Thankyou");
              }}
            >
              Pay Selected
            </Text>
          </LinearGradient>
        </View>

        <View style={{ padding: 10, alignItems: "center" }}>
          <Text style={{ color: "#36DAA5", fontSize: 14 }}>
            {" "}
            Terms and Conditions{" "}
          </Text>
        </View>
      </View>
    );
  }
}
