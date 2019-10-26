import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import { Container, Header, Content, Form, Item, Input } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../style/theme";

export default class Addnewservicelocation extends Component {
  render() {
    return (
      <ScrollView style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.text}>Add New Service Location </Text>
          <Text style={styles.text}>Where do you require the service? </Text>
        </View>
        <Content style={styles.input}>
          <Input
            placeholder="Flat #, Building #"
            placeholderTextColor="#999999"
          />
        </Content>
        <View style={styles.input_1}>
          <View>
            <Input placeholder="Street, Area" placeholderTextColor="#1F8BA0" />
          </View>
          <View>
            <Image
              source={require("../../assets/icon/locateme.png")}
              style={{
                resizeMode: "contain",
                height: 40,
                width: 150,
                marginTop: 5,
                marginBottom: 5,
                marginRight: 5
              }}
            />
          </View>
        </View>
        <Content style={styles.input}>
          <Input placeholder="Land Mark" placeholderTextColor="#999999" />
        </Content>
        <Content style={styles.input}>
          <Input
            placeholder="This is my patent's Home"
            placeholderTextColor="#999999"
          />
        </Content>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.p}>Your contact information</Text>
        </View>
        <Content style={styles.input}>
          <Input placeholder="Your Full Name" placeholderTextColor="#999999" />
        </Content>
        <Content style={styles.input}>
          <Input placeholder="Your Mobile" placeholderTextColor="#999999" />
        </Content>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#23759E", marginTop: 10 }}>
            All fields are mandatory
          </Text>
          <LinearGradient
            colors={theme.color.gRight}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              borderRadius: 8,
              width: "50%",
              padding: 10,
              alignItems: "center",
              marginTop: 30,
              marginBottom: 50
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontWeight: "600",
                fontSize: 18,
                justifyContent: "center"
              }}
            >
              UPDATE NOW
            </Text>
          </LinearGradient>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    borderColor: "#36DAA5",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10
  },
  input_1: {
    borderColor: "#36DAA5",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: "row",
    justifyContent: "space-between"
  },

  text: {
    fontSize: 20,
    color: "#23759E",
    marginTop: 50
  },
  p: {
    fontSize: 16,
    color: "#999999",
    marginTop: 50
  }
});
