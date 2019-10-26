import React, { Component } from "react";
import {
  Button,
  Header,
  Right,
  Content,
  Icon,
  Item,
  Picker,
  H2,
  Input,
  Row
} from "native-base";
import {
  View,
  Text,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../style/theme";
import firebase from "../../../config/firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class SignUp extends Component {
  static navigationOptions = {
    header: null
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

      radio1: [
        {
          label: "Organization",
          value: "Organization",
          color: "skyblue"
        },
        {
          label: "Individual",
          value: "Individual",
          color: "skyblue"
        }
      ],
      gender: [
        {
          label: "Male",
          value: "Male",
          color: "skyblue"
        },
        {
          label: "Female",
          value: "Female",
          color: "skyblue"
        }
      ],
      card: [
        {
          label: "Card",
          value: "Card",
          color: "skyblue"
        },
        {
          label: "Cash",
          value: "Cash",
          color: "skyblue"
        },
        {
          label: "Both",
          value: "both",
          color: "skyblue"
        }
      ],
      selected1: undefined,
      selected2: undefined,
      next1: false,
      next2: false,
      next3: false,
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

  GenderButton(v) {
    v.map((v, i) => {
      if (v.selected) {
        this.setState({ s_Gender: v.value });
      }
    });
  }

  OrgAndInd(v) {
    v.map((v, i) => {
      if (v.selected) {
        this.setState({ s_OrgAndInd: v.value });
      }
    });
  }

  CardAndCash(v) {
    v.map((v, i) => {
      if (v.selected) {
        this.setState({ s_CardAndCash: v.value });
      }
    });
  }
  onValueChange1(value) {
    this.setState({
      selected1: value
    });
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }

  Openmodal = () => {
    alert("hi");
  };

  service1 = () => {
    return (
      <View>
        <TouchableOpacity onPress={this.Cancel_1}>
          <Icon
            type="Entypo"
            name="circle-with-minus"
            style={{ color: "red", fontSize: 22 }}
          />
        </TouchableOpacity>
        <Item style={{ marginTop: 10, marginBottom: 10 }}>
          <Input
            onChangeText={text => this.setState({ servicesOffer1: text })}
            placeholder="Service Offer"
            placeholderTextColor="#BEBBB8"
            style={{
              paddingLeft: 20,
              textAlign: "left",
              borderColor: "#BEBBB8",
              borderWidth: 1,
              borderRadius: 5,
              color: "#000"
            }}
          />
        </Item>
      </View>
    );
  };

  service2 = () => {
    return (
      <View>
        <TouchableOpacity onPress={this.Cancel_2}>
          <Icon
            type="Entypo"
            name="circle-with-minus"
            style={{ color: "red", fontSize: 22 }}
          />
        </TouchableOpacity>
        <Item style={{ marginTop: 10, marginBottom: 10 }}>
          <Input
            onChangeText={text => this.setState({ servicesOffer2: text })}
            placeholder="Service Offer"
            placeholderTextColor="#BEBBB8"
            style={{
              paddingLeft: 20,
              textAlign: "left",
              borderColor: "#BEBBB8",
              borderWidth: 1,
              borderRadius: 5,
              color: "#000"
            }}
          />
        </Item>
      </View>
    );
  };

  service3 = () => {
    return (
      <View>
        <TouchableOpacity onPress={this.Cancel_3}>
          <Icon
            type="Entypo"
            name="circle-with-minus"
            style={{ color: "red", fontSize: 22 }}
          />
        </TouchableOpacity>
        <Item style={{ marginTop: 10, marginBottom: 10 }}>
          <Input
            onChangeText={text => this.setState({ servicesOffer3: text })}
            placeholder="Service Offer"
            placeholderTextColor="#BEBBB8"
            style={{
              paddingLeft: 20,
              textAlign: "left",
              borderColor: "#BEBBB8",
              borderWidth: 1,
              borderRadius: 5,
              color: "#000"
            }}
          />
        </Item>
      </View>
    );
  };

  nextPicker_1 = () => {
    if (this.state.next2) {
      this.setState({ next3: true });
    }

    if (this.state.next1) {
      this.setState({ next2: true });
    }
    this.setState({ next1: true });
  };

  Cancel_1 = () => {
    this.setState({ next1: false });
  };
  Cancel_2 = () => {
    this.setState({ next2: false });
  };
  Cancel_3 = () => {
    this.setState({ next3: false });
  };

  async componentDidMount() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to accesssss location was denied"
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  }

  SignUpClick() {
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
        console.log("error1", s);
        const uid = firebase.auth().currentUser.uid;
        const data = {
          PersonalId: p_Id,
          FullName: f_Name,
          Email: email,
          MobileNo: mobileNo,
          ServicesOffer: [
            servicesOffer,
            servicesOffer1,
            servicesOffer2,
            servicesOffer3
          ],
          Uid:uid,

          Gender: s_Gender,
          OrgAndInd: s_OrgAndInd,
          CardAndCash: s_CardAndCash,
          Roll: 1,
          coords: [location.coords.latitude, location.coords.longitude],
          ActiveLocation: false
        };

        firebase
          .database()
          .ref("users/" + uid)
          .set(data);

        console.log("error2", data);

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
    console.log("state", this.state);
    return (
      <KeyboardAvoidingView behavior="padding">
        <ScrollView>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: "row", margin: 30, marginLeft: 0 }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("SignupOption");
                }}
              >
                <Icon
                  type="Ionicons"
                  name="ios-arrow-back"
                  style={{
                    color: "#23759E",
                    fontSize: 25,
                    marginRight: 30,
                    marginTop: 8
                  }}
                />
              </TouchableOpacity>
              <Text style={{ color: "#23759E", fontSize: 25 }}>Sign Up</Text>
            </View>

            <RadioGroup
              flexDirection="row"
              radioButtons={this.state.radio1}
              onPress={v => this.OrgAndInd(v)}
            />
            <Item style={{ marginTop: 10, marginBottom: 10 }}>
              <Input
                placeholder="Full Name"
                placeholderTextColor="#BEBBB8"
                style={{
                  paddingLeft: 20,
                  textAlign: "left",
                  borderColor: "#BEBBB8",
                  borderWidth: 1,
                  borderRadius: 5,
                  color: "#000"
                }}
                onChangeText={text => this.setState({ f_Name: text })}
              />
            </Item>
            <RadioGroup
              flexDirection="row"
              radioButtons={this.state.gender}
              onPress={v => this.GenderButton(v)}
            />
            <Row style={{ flexDirection: "row", marginTop: 10 }}>
              <Item style={{ width: "65%", marginRight: 10 }}>
                <Input
                  onChangeText={text => this.setState({ p_Id: text })}
                  placeholder="Personal ID"
                  placeholderTextColor="#BEBBB8"
                  style={{
                    paddingLeft: 20,
                    textAlign: "left",
                    borderColor: "#BEBBB8",
                    borderWidth: 1,
                    borderRadius: 5,
                    color: "#000"
                  }}
                />
              </Item>
              <View
                style={{
                  width: "30%",
                  borderRadius: 5,
                  borderColor: "#BEBBB8",
                  borderWidth: 1
                }}
              >
                <Item>
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ color: "#BEBBB8" }}
                    placeholder="Select"
                    placeholderStyle={{ color: "#BEBBB8" }}
                    placeholderIconColor="#BEBBB8"
                    selectedValue={this.state.selected1}
                    onValueChange={this.onValueChange1.bind(this)}
                  >
                    <Picker.Item label="Expiry" value="Expiry" />
                    <Picker.Item label="Renew" value="Renew" />
                  </Picker>
                </Item>
              </View>
            </Row>
            <Item style={{ marginTop: 10 }}>
              <Input
                onChangeText={text => this.setState({ mobileNo: text })}
                placeholder="Mobile Number"
                placeholderTextColor="#BEBBB8"
                style={{
                  paddingLeft: 20,
                  textAlign: "left",
                  borderColor: "#BEBBB8",
                  borderWidth: 1,
                  borderRadius: 5,
                  color: "#000"
                }}
              />
            </Item>
            <View style={{ flexDirection: "row-reverse", marginTop: 10 }}>
              <TouchableOpacity onPress={this.nextPicker_1}>
                <Icon
                  type="Entypo"
                  name="circle-with-plus"
                  style={{ color: "#36DAA5", fontSize: 22 }}
                />
              </TouchableOpacity>
            </View>

            <Item style={{ marginTop: 10, marginBottom: 10 }}>
              <Input
                onChangeText={text => this.setState({ servicesOffer: text })}
                placeholder="Service Offer"
                placeholderTextColor="#BEBBB8"
                style={{
                  paddingLeft: 20,
                  textAlign: "left",
                  borderColor: "#BEBBB8",
                  borderWidth: 1,
                  borderRadius: 5,
                  color: "#000"
                }}
              />
            </Item>

            {this.state.next1 ? this.service1() : null}
            {this.state.next2 ? this.service2() : null}
            {this.state.next3 ? this.service3() : null}
            {/* <Item style={{ marginTop: 10, marginBottom: 10 }}>
              <Input
                placeholder="Service Offer"
                placeholderTextColor="#BEBBB8"
                style={{
                  paddingLeft: 20,
                  textAlign: "left",
                  borderColor: "#BEBBB8",
                  borderWidth: 1,
                  borderRadius: 5,
                  color: "#000"
                }}
                secureTextEntry={true}
              />
            </Item> */}
            <RadioGroup
              flexDirection="row"
              radioButtons={this.state.card}
              onPress={v => this.CardAndCash(v)}
            />
            <Item style={{ marginTop: 10 }}>
              <Input
                onChangeText={text => this.setState({ email: text })}
                placeholder="Email"
                placeholderTextColor="#BEBBB8"
                style={{
                  paddingLeft: 20,
                  textAlign: "left",
                  borderColor: "#BEBBB8",
                  borderWidth: 1,
                  borderRadius: 5,
                  color: "#000"
                }}
              />
            </Item>
            <Item style={{ marginTop: 10 }}>
              <Input
                onChangeText={text => this.setState({ password: text })}
                placeholder="Password"
                placeholderTextColor="#BEBBB8"
                style={{
                  paddingLeft: 20,
                  textAlign: "left",
                  borderColor: "#BEBBB8",
                  borderWidth: 1,
                  borderRadius: 5,
                  color: "#000"
                }}
                secureTextEntry={true}
              />
            </Item>
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.SignUpClick();
                }}
              >
                <LinearGradient
                  colors={theme.color.gRight}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 5,
                    width: "100%",
                    padding: 10,
                    alignItems: "center",
                    marginTop: 10
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontWeight: "600",
                      fontSize: 18,
                      justifyContent: "center"
                    }}
                    onPress={() => {
                      // this.props.navigation.navigate("Profile");
                    }}
                  >
                    Sign Up
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <Text
              style={{
                marginTop: 30,
                marginBottom: 30,
                textAlign: "center",
                color: "#36DAA5",
                alignSelf: "center"
              }}
              onPress={this.Openmodal}
            >
              Terms &amp; Conditions
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    );
  }
}
