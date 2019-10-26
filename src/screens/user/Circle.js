import React from "react";
import MapView from "react-native-maps";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity
} from "react-native";

import { Picker, Input, Row, Item } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import firebase from "../../../config/firebase";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
export default class Circle extends React.Component {
  static navigationOptions = {
    header: null
  };
  
  constructor(props) {
    super(props);
    this.state = {
      allData: [],
      selected1: undefined,
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
    console.log("firebase1");
    console.log("firebase");

    firebase
      .database()
      .ref("users")
      .on("value", (snapshot, prevChildKey) => {
        let allData = [];
        var data = snapshot.val();

        // allData.push(data);
        for (var a in data) {
          allData.push(data[a]);
        }

        console.log("aaaaaa", Object.keys(allData));
        this.setState({ allData: allData });
      });

    console.log("all data", this.state.allData);
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
  render() {
    const { location, members } = this.state;
    console.log("all++++", this.state);
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={styles.map}>
          {!!location.coords.latitude && !!location.coords.longitude && (
            <MapView
              style={styles.mapStyle}
              initialRegion={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0943,
                longitudeDelta: 0.0834
              }}
            >
              {!!Object.values(this.state.allData).length &&
                Object.values(this.state.allData).map(v => (
                  <MapView.Marker
                    key={v.MobileNo}
                    coordinate={{
                      latitude: v.coords[0],
                      longitude: v.coords[1]
                    }}
                    title={v.name}
                    description="Set Your Location"
                  >
                    {/* <Image
                    source={{ uri: v.photoURL }}
                    style={{
                      width: 30,
                      height: 30,
                      borderTopLeftRadius: 70,
                      borderBottomLeftRadius: 70,
                      borderTopRightRadius: 70,
                      borderColor: "red",
                      borderWidth: 3
                    }}
                  /> */}
                    {console.log("yewala", v)}
                  </MapView.Marker>
                ))}

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

        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.goBack();
            }}
            style={{flexDirection:"row"}}
          >
            <Icon type="Ionicons" name="ios-arrow-back" style={{color:"black", fontSize:25, marginRight:10}} />
            <Text style={{ color: "#000", fontSize:16 }}>
              Go Back
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.button}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate("ListFreelancer");
            }}
            style={{
              backgroundColor: "#3395A8",
              borderRadius: 5,
              padding: 10
            }}
          >
            <Text style={{ color: "#FFF", marginLeft: 20, marginRight: 20 }}>
              Featured Agent are here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    position: "absolute",
    width: "100%",
    height: "100%"
  },
  header: {
    position: "absolute",
    top: 50,
    left:20
  },
  button: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 20
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
});
