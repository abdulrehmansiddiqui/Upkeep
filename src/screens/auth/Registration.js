import React from "react";
import {
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
  Content,
  H2,
  Item,
  Input,
  CheckBox,
  Text,
  ListItem,
  Button,
  Icon
} from "native-base";
import { View, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../../../config/firebase";

export default class Registration extends React.Component {
  static navigationOptions = {
    title: "Registration",
    headerTitleStyle: {
      color: "black",
      fontWeight: "100",
      fontSize:15
    },
  };

  constructor(props) {
    super(props);
    this.state = {
      location: {
        coords: {
          latitude: 12,
          longitude: 12
        }
      },
      s_CardAndCash: "Card",
      s_Gender: "Male",
      s_OrgAndInd: "Organization",
      selected1: "Expiry",
      servicesOffer: null,
      servicesOffer1: null,
      servicesOffer2: null,
      servicesOffer3: null,
      p_Id: null,
      mobileNo: null,
      f_Name: null,
      email: null,
      password: null
    };
  }

  Register = () => {
    const {
      p_Id,
      mobileNo,
      servicesOffer,
      servicesOffer1,
      servicesOffer2,
      servicesOffer3,
      s_Gender,
      s_OrgAndInd,
      s_CardAndCash,
      f_Name,
      email,
      password,
      location
    } = this.state;

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(s => {
        const uid = firebase.auth().currentUser.uid;
        const data = {
          PersonalId: p_Id,
          FullName: "Upkeep User",
          Email: email,
          MobileNo: "null",
          ServicesOffer: [
            "0",
            "0",
            "0",
            "0"
          ],
          Uid:uid,

          Gender: s_Gender,
          OrgAndInd: s_OrgAndInd,
          CardAndCash: s_CardAndCash,
          Roll: 2,
          coords: [location.coords.latitude, location.coords.longitude],
          ActiveLocation: false
        };

        firebase
          .database()
          .ref("users/" + uid)
          .set(data);

        firebase
          .database()
          .ref("users/" + uid)
          .set(data)
          .then(() => {
            Alert.alert("Sign up", "You are suessfully Sign In");
            const dataInString = JSON.stringify(data);

            AsyncStorage.setItem("data1", dataInString);
          });
      }).catch(error => {
        console.log(error)
        alert(error)
    })
  }

  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={{
            flex: 1,
            justifyContent: "center",
            padding: 50
          }}
        >
          <H2 style={{ color: "skyblue" }}>Registration</H2>
          <Item style={{ marginTop: 50 }}>
            <Input
              onChangeText={text => this.setState({ email: text })}
              placeholder="User Name (Your Mobile)"
              placeholderTextColor="lightgrey"
              style={{
                paddingLeft: 20,
                textAlign: "left",
                borderColor: "lightgrey",
                borderWidth: 1,
                borderRadius: 5,
                color: "#000"
              }}
            />
          </Item>
          <Item style={{ marginTop: 20 }}>
            <Input
              onChangeText={text => this.setState({ password: text })}
              placeholder="Password"
              placeholderTextColor="lightgrey"
              style={{
                paddingLeft: 20,
                textAlign: "left",
                borderColor: "lightgrey",
                borderWidth: 1,
                borderRadius: 5,
                color: "#000"
              }}
              secureTextEntry={true}
            />
            {/* <Icon name="eye" /> */}
          </Item>
          <ListItem noBorder style={{ paddingLeft: 70, marginTop: 20 }}>
            <CheckBox checked={true} style={{ alignSelf: "center" }} />
            <Body>
              <Text>Remember</Text>
            </Body>
          </ListItem>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Login");
            }}
          >
            <Text style={{ marginTop: 20, color: "#ccc", fontSize: 14, textAlign: "center" }}>
              Already Have Account ?
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <Text style={{ marginTop: 20, color: "#ccc", fontSize: 14, textAlign: "center" }}>
              Forgot Password ?
            </Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => {
              this.Register();
            }}
          >
            <LinearGradient
              colors={["#23759E", "#36DAA5"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                marginTop: 30,
                width: "100%",
                alignItems: "center",
                borderRadius: 5,
                padding: 10
              }}
            >
              <Text style={{ color: "white" }}>Sign Up</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text
            style={{
              position: "absolute",
              bottom: 20,
              textAlign: "center",
              color: "#23759E",
              alignSelf: "center",
              fontSize: 14
            }}
          >
            Terms &amp; Conditions
          </Text>
        </Content>
      </Container>
    );
  }
}
