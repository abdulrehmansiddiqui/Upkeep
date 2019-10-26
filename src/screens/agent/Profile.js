import React from "react";
import { Image, ImageBackground, View, ScrollView } from "react-native";
import { Text, Row, H1, Button, Footer, List, Icon } from "native-base";
import { theme } from '../../style/theme';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require("../../assets/bg.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row style={{
          marginTop: 150,
          padding: 15,
          width: "90%",
          borderTopRightRadius: 5,
          borderTopLeftRadius: 5,
          backgroundColor: "white",
          height: 100
        }}>

          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View>
              <Icon name="share" style={{ color: "#36DAA5", fontSize: 25 }} />
            </View>
            <View elevation={10} style={{ marginTop: -60, }} >
              <Image
                source={require("../../assets/user.png")}
                style={{ resizeMode: "contain", width: 130, height: 130, borderRadius: 200, }}
              />
            </View>
            <View>
              <Icon name='create' style={{ color: "#36DAA5", fontSize: 25 }} />
            </View>
          </View>
        </Row>
        <Row style={{
          backgroundColor: "white",
          paddingLeft: 20,
          paddingRight: 20,
          width: "90%", flexDirection: "column",
        }}>
          <ScrollView>
            <Row style={{ flexDirection: "column", alignItems: 'center', marginTop: 20 }} >
              <Text style={{ fontSize: 24, fontWeight: "100", color: "#23759E" }}>Name of the Freelancer</Text>
              <Text style={{ fontSize: 16, fontWeight: "100", color: "#BEBBB8" }}>Name of the service</Text>
            </Row>
            <Row style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }} >
              <H1 style={{ fontSize: 18, fontWeight: "100", color: "#BEBBB8" }}>Active my Location</H1>
              <Image
                source={require("../../assets/icon/toggle.png")}
                style={{ resizeMode: "contain", width: 25, height: 25, }}
              />
            </Row>
            <Row style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}
              onPress={() => { this.props.navigation.navigate("serviceRecord") }}>
              <H1 style={{ fontSize: 18, fontWeight: "100", color: "#BEBBB8" }}>Service Records</H1>
              <Image
                source={require("../../assets/icon/servicerecord.png")}
                style={{ resizeMode: "contain", width: 25, height: 25, }}
              />
            </Row>
            <Row style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 10 }}
              onPress={() => { this.props.navigation.navigate("PaymentRecord") }}>
              <H1 style={{ fontSize: 18, fontWeight: "100", color: "#BEBBB8" }}>Payment Records</H1>
              <Image
                source={require("../../assets/icon/calculator.png")}
                style={{ resizeMode: "contain", width: 25, height: 25, }}
              />
            </Row>
            <Row style={{ flexDirection: "row", justifyContent: 'space-between', marginTop: 20 }} >
              <H1 style={{ fontSize: 18, fontWeight: "100", color: "#BEBBB8" }}>Custom Records</H1>
              <Image
                source={require("../../assets/icon/addressbook.png")}
                style={{ resizeMode: "contain", width: 25, height: 25, }}
              />
            </Row>
          </ScrollView>
        </Row>
        <View style={{
          backgroundColor: "white",
          paddingLeft: 30,
          paddingRight: 30,
          height: 50,
          width: "90%", flexDirection: "column-reverse",
        }}>
          <Row style={{ flexDirection: "row", justifyContent: 'space-between' }} >
            <H1 style={{ fontSize: 20, fontWeight: "100", color: "#36DAA5" }}>SignOut</H1>
            <Image
              source={require("../../assets/icon/log-out.png")}
              style={{ resizeMode: "contain", width: 25, height: 25, }}
            />
          </Row>
        </View>
      </ImageBackground>
    );
  }
}
