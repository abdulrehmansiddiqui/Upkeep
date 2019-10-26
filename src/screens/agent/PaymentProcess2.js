import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Icon } from "native-base";
import { theme } from "../../style/theme";
import { LinearGradient } from "expo-linear-gradient";

export default class PaymentProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{
            borderColor: "#23759E",
            borderWidth: 1,
            borderRadius: 10,
            padding: 20,
            marginLeft: 20,
            marginRight: 20,
            marginTop: 30,
            flexDirection: "column"
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 20
            }}
          >
            <View>
              <Text
                style={{ color: "#23759E", fontSize: 16, fontWeight: "400" }}
              >
                Name of the Client
              </Text>
              <Text style={{ color: "grey", fontSize: 12 }}>Plumbing Work</Text>
            </View>
            <View>
              <Text
                style={{ color: "#23759E", fontSize: 16, fontWeight: "400" }}
              >
                Token: 0000
              </Text>
              <Text style={{ color: "grey", fontSize: 12 }}>dd/mm/yyyy</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              paddingBottom: 30
            }}
          >
            <View>
              <Text
                style={{ color: "#36DAA5", fontSize: 20, fontWeight: "600" }}
              >
                00:00
              </Text>
              <Text style={{ color: "grey", fontSize: 12 }}>Started</Text>
            </View>
            <View>
              <Text
                style={{
                  color: "grey",
                  fontSize: 12,
                  borderBottomWidth: 2,
                  borderColor: "grey"
                }}
              >
                1h:26m
              </Text>
              <Text style={{ color: "grey", fontSize: 12 }}>ON TIME</Text>
            </View>
            <View>
              <Text
                style={{ color: "#36DAA5", fontSize: 20, fontWeight: "600" }}
              >
                00:00
              </Text>
              <Text style={{ color: "grey", fontSize: 12 }}>fullfilled</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            borderColor: "#000",
            borderWidth: 1,
            borderRadius: 10,
            padding: 20,
            marginLeft: 20,
            marginRight: 20,
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "#23759E", fontSize: 18, fontWeight: "400" }}>
              Client Satisfaction
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Icon type="FontAwesome" name="star" />
            <Icon type="FontAwesome" name="star" />
            <Icon type="FontAwesome" name="star" />
            <Icon type="FontAwesome" name="star" />
            <Icon type="FontAwesome" name="star" />
          </View>
          <View style={{}}>
            <Text style={{ color: "#36DAA5", fontSize: 30 }}>98%</Text>
          </View>
        </View>
        <View
          style={{
            padding: 20,
            marginLeft: 20,
            marginRight: 20,
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <View style={{ marginBottom: 10 }}>
            <Text style={{ color: "#36DAA5", fontSize: 18, fontWeight: "600" }}>
              Rate the client Please!
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Icon type="FontAwesome" name="star" />
            <Icon type="FontAwesome" name="star" />
            <Icon type="FontAwesome" name="star" />
            <Icon type="FontAwesome" name="star" />
            <Icon type="FontAwesome" name="star" />
          </View>
        </View>
      </ScrollView>
    );
  }
}
