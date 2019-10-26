import React from "react";
import MapView from "react-native-maps";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from "react-native";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import { LinearGradient } from "expo-linear-gradient";
import firebase from "../../../config/firebase";

import { Picker, Input, Row, Icon } from "native-base";

export default class map extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined,
      next1: false,
      next2: "",
      location: {
        coords: {
          latitude: null,
          longitude: null
        }
      }
    };
  }
  
  onValueChange1(value) {
    this.setState({
      selected1: value
    });
  }
  
  async componentDidMount() {

    firebase.auth().onAuthStateChanged((userid) => {
      if(userid){
        console.log("true")
        this.setState({ next2:true})
      }
      else{
        console.log("false")
        this.setState({ next2:false})
      }
    })

    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to accesssss location was denied"
      });
      console.log("status");
    }
    let location = await Location.getCurrentPositionAsync({});

    console.log("s++++++++", location);
    this.setState({ location });
  }

  togglemenu = () => {
    return (
      <LinearGradient
        colors={["#23759E", "#33D0A6", "#33D0A6"]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={{
          width: "50%",
          height: "90%",
          borderTopLeftRadius: 8,
          borderBottomLeftRadius: 8,
          padding: 20,
          flexDirection: "column",
          position: "absolute",
          right: 0,
          top: 30,
          opacity:0.98
        }}
      >
        <TouchableOpacity onPress={this.toggleonoff}>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Image
              source={require("../../assets/icon/align-right.png")}
              style={{
                resizeMode: "contain",
                width: 25,
                height: 25,
                marginRight: 10
              }}
            />
            <Text style={{ color: "#FFF", fontSize: 16 }}>Minimize </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Image
              source={require("../../assets/icon/user.png")}
              style={{
                resizeMode: "contain",
                width: 25,
                height: 25,
                marginRight: 10
              }}
            />
            <Text style={{ color: "#FFF", fontSize: 16 }}>Profile</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Icon type="Entypo" name="notification" style={{color:"white", fontSize:25, marginRight: 10}} />
            <Text style={{ color: "#FFF", fontSize: 16 }}>Notification</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Image
              source={require("../../assets/icon/archive(2).png")}
              style={{
                resizeMode: "contain",
                width: 25,
                height: 25,
                marginRight: 10
              }}
            />
            <Text style={{ color: "#FFF", fontSize: 16 }}>Service Record</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Icon type="Entypo" name="location" style={{color:"white", fontSize:25, marginRight: 10}} />
            <Text style={{ color: "#FFF", fontSize: 16 }}>Agent Live Tracking</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Image
              source={require("../../assets/icon/tools.png")}
              style={{
                resizeMode: "contain",
                width: 25,
                height: 25,
                marginRight: 10
              }}
            />
            <Text style={{ color: "#FFF", fontSize: 16 }}>Book New Service</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Icon type="Entypo" name="shopping-cart" style={{color:"white", fontSize:25, marginRight: 10}} />
            <Text style={{ color: "#FFF", fontSize: 16 }}>Your Cart</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Icon type="Entypo" name="box" style={{color:"white", fontSize:25, marginRight: 10}} />
            <Text style={{ color: "#FFF", fontSize: 16 }}>Matirial Approvals </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.logout} style={{bottom:0, position:"absolute", marginLeft:20}}>
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Icon type="Entypo" name="log-out" style={{color:"white", fontSize:25, marginRight: 10}} />
            <Text style={{ color: "#FFF", fontSize: 16 }}>Log Out </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  togglebutton = () => {
    return(
      <TouchableOpacity
        style={styles.toggle}
        onPress={this.toggleonoff}
      >
        <Image
          source={require("../../assets/icon/align-left.png")}
          style={{ resizeMode: "contain", width: 25, height: 25 }}
        />
      </TouchableOpacity>
    )
  };

  toggleonoff = () => {
    this.setState({ next1: !this.state.next1 });
  };

  logout = () => {
    firebase.auth().signOut()
    this.props.navigation.navigate("Login")
  };

  render() {
    const { location } = this.state;
    return (
      <SafeAreaView style={styles.SafeAreaView}>
        <View style={styles.map}>
          {/* <MapView style={styles.mapStyle} /> */}
          {!!location.coords.latitude && !!location.coords.longitude && (
            <MapView
              style={styles.mapStyle}
              initialRegion={{
                latitudeDelta: 0.0943,
                longitudeDelta: 0.0834,
                latitude: location.coords.latitude,
                longitude: location.coords.longitude
              }}
            >
              <MapView.Marker
                key={1}
                coordinate={{
                  latitude: location.coords.latitude,
                  longitude: location.coords.longitude
                }}
                // title={v}
                description="Set Your Location"
              >
                <View
                  style={{
                    padding: 40,
                    borderRadius: 100,
                    backgroundColor: "gray",
                    opacity: 0.2
                  }}
                >
                  <View
                    style={{
                      opacity: 1,
                      width: 20,
                      height: 20,
                      borderRadius: 100,
                      borderColor: "white",
                      backgroundColor: "black",
                      borderWidth: 2
                    }}
                  />
                </View>
              </MapView.Marker>
            </MapView>
          )}
        </View>

        {this.state.next2 ? this.togglebutton() : null}

        <View style={styles.input1}>
          <View
            style={{ flexDirection: "row", marginLeft: 20, marginRight: 20 }}
          >
            <View
              elevation={10}
              style={{
                marginRight: 5,
                flexDirection: "row",
                width: "40%",
                backgroundColor: "white",
                borderColor: "#194751",
                borderWidth: 1,
                borderRadius: 5
              }}
            >
              <Image
                source={require("../../assets/icon/ic_send_24px.png")}
                style={{
                  resizeMode: "contain",
                  width: 20,
                  height: 20,
                  marginTop: 13,
                  marginLeft: 7
                }}
              />
              <Picker
                mode="dropdown"
                style={{ color: "#194751" }}
                placeholder="Select"
                placeholderStyle={{ color: "#194751", fontSize: 16 }}
                placeholderIconColor="#194751"
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange1.bind(this)}
              >
                <Picker.Item label="Location" value="key0" />
                <Picker.Item label="Abcd" value="key1" />
              </Picker>
            </View>
            <View
              elevation={10}
              style={{
                marginRight: 5,
                flexDirection: "row",
                width: "60%",
                backgroundColor: "white",
                borderColor: "#194751",
                borderWidth: 1,
                borderRadius: 5
              }}
            >
              <Input
                placeholder="Personal ID"
                placeholderTextColor="#194751"
                placeholderStyle={{}}
                style={{ paddingLeft: 10, fontSize: 16 }}
              />
              <Image
                source={require("../../assets/icon/magnifier.png")}
                style={{
                  resizeMode: "contain",
                  width: 20,
                  height: 20,
                  marginTop: 13,
                  marginRight: 10
                }}
              />
            </View>
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("Circle");
            }}
            style={{
              backgroundColor: "#3395A8",
              borderRadius: 5,
              padding: 10
            }}
          >
            <Text style={{ color: "#FFF", marginLeft: 20, marginRight: 20 }}>
              Service Provider
            </Text>
          </TouchableOpacity>
        </View>

        {this.state.next1 ? this.togglemenu() : null}
      
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  input1: {
    backgroundColor: "#fff",
    position: "absolute",
    top: "25%"
  },
  toggle: {
    position: "absolute",
    top: "10%",
    right: 0,
    backgroundColor: "#36DAA5",
    padding: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5
  },
  button: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 20
  },
  SafeAreaView:{
    paddingTop:Platform.OS == "android" ? 30 : 0,
    flex: 1,
     alignItems: "center"
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});