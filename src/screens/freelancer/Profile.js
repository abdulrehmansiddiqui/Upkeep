import React from "react";
import {
  Image,
  ImageBackground,
  View,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from "react-native";
import { Text, Row, H1, Button, Footer, List, Icon } from "native-base";
import { theme } from "../../style/theme";
import { LinearGradient } from "expo-linear-gradient";
import Modal1 from "../Modallocation";
import firebase from "../../../config/firebase";
import Constants from "expo-constants";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default class ProfileScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      next1: false,
      data: {
        PersonalId: "",
        FullName: "",
        Email: "",
        MobileNo: "",
        ServicesOffer: [],
        Roll: 1,
        coords: [0, 0],
        ActiveLocation: false
      }
    };
    this.openModal = this.openModal.bind(this);
  }
  async componentDidMount() {
    // const uid = firebase.auth().currentUser.uid;
    const data1 = await AsyncStorage.getItem("data1");
    const data = JSON.parse(data1);
    this.setState({ data });

    const uid = await firebase.auth().currentUser.uid;

    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    let location = await Location.getCurrentPositionAsync({});
    // this.filterClientLocation();
    console.log("", location);

    let initialRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: location.coords.latitude,
      longitudeDelta: location.coords.latitude
    };

    const BACKGROUND_LOCATION_UPDATE_TASK = "BACKGROUND_LOCATION_UPDATE_TASK";
    let _this = this;

    this.watch = await TaskManager.defineTask(
      BACKGROUND_LOCATION_UPDATE_TASK,
      async ({ data, error }) => {
        if (error) return console.log("error--->", error);

        if (data) {
          try {
            let result = data.locations[0];
            console.log("Backgroundlocation", result);

            let lastRegion = {
              latitude: result.coords.latitude,
              longitude: result.coords.longitude
            };

            _this.setState({
              initialPosition: lastRegion,
              markerPostion: lastRegion
            });

            firebase
              .database()
              .ref(`users/${uid}/coords`)
              .update(lastRegion);
          } catch (err) {
            console.log("backgroundError", err);
          }
        }
      }
    );

    let isRegistered = await console.log("register", isRegistered);
  }

  // console.log("dataa", data);

  async livelocation() {
    // const uid = firebase.auth().currentUser.uid;
    const data1 = await AsyncStorage.getItem("data1");
    const data = JSON.parse(data1);
    this.setState({ data });
    const uid = await firebase.auth().currentUser.uid;

    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    let location = await Location.getCurrentPositionAsync({});
    // this.filterClientLocation();
    console.log("", location);

    let initialRegion = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: location.coords.latitude,
      longitudeDelta: location.coords.latitude
    };

    const BACKGROUND_LOCATION_UPDATE_TASK = "BACKGROUND_LOCATION_UPDATE_TASK";
    let _this = this;

    this.watch = await TaskManager.defineTask(
      BACKGROUND_LOCATION_UPDATE_TASK,
      async ({ data, error }) => {
        if (error) return console.log("error--->", error);

        if (data) {
          try {
            let result = data.locations[0];
            console.log("Backgroundlocation", result);

            let lastRegion = {
              latitude: result.coords.latitude,
              longitude: result.coords.longitude
            };

            _this.setState({
              initialPosition: lastRegion,
              markerPostion: lastRegion
            });

            firebase
              .database()
              .ref(`users/${uid}/coords`)
              .update(lastRegion);
          } catch (err) {
            console.log("backgroundError", err);
          }
        }
      }
    );

    let isRegistered = await console.log("register", isRegistered);
  }

  openModal() {
    this.refs.addModal.showModal();
  }

  
  camera = async () => {
    let result = await ImagePicker.launchCameraAsync();
    // let result = await ImagePicker.launchImageLibraryAsync();

    if(!result.cancelled){
      this.uploadImage(result.uri,"test-image" )
      .then(() =>{
        Alert.alert("suss")
      })
      .catch((error)=>{
        Alert.alert(error)
      })
    }
  }
  uploadImage = async (uri,imageName) => {
    const response = await fetch(uri);
    const blob = await response.blob();

    var ref = firebase.storage().ref().child("userProfile/" + imageName);
    return ref.put(blob);
  }

  toggle = () => {
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
          top: 30
        }}
      >
        <TouchableOpacity onPress={this.displayaccordion1}>
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
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("PD");
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Image
              source={require("../../assets/icon/checkbox-checked.png")}
              style={{
                resizeMode: "contain",
                width: 25,
                height: 25,
                marginRight: 10
              }}
            />
            <Text style={{ color: "#FFF", fontSize: 16 }}>Work Approvals </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("CFB");
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 30 }}>
            <Image
              source={require("../../assets/icon/thumbs-up.png")}
              style={{
                resizeMode: "contain",
                width: 25,
                height: 25,
                marginRight: 10
              }}
            />
            <Text style={{ color: "#FFF", fontSize: 16 }}>FeedBack </Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    );
  };

  displayaccordion1 = () => {
    this.setState({ next1: !this.state.next1 });
  };

  logout = () => {
    firebase.auth().signOut()
    this.props.navigation.navigate("Login")
  };

  render() {
    const { data } = this.state;
    console.log("data", data);
    return (
      <ImageBackground
        source={require("../../assets/bg.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <TouchableOpacity
          style={{
            position: "absolute",
            top: "5%",
            right: 0,
            backgroundColor: "#36DAA5",
            padding: 10,
            paddingTop: 20,
            paddingBottom: 20,
            borderTopLeftRadius: 5,
            borderBottomLeftRadius: 5
          }}
          onPress={this.displayaccordion1}
        >
          <Image
            source={require("../../assets/icon/align-left.png")}
            style={{ resizeMode: "contain", width: 25, height: 25 }}
          />
        </TouchableOpacity>

        <Row
          style={{
            marginTop: 150,
            padding: 15,
            width: "90%",
            borderTopRightRadius: 5,
            borderTopLeftRadius: 5,
            backgroundColor: "white",
            height: 100
          }}
        >
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row"
            }}
          >
            <View>
              <Icon name="share" style={{ color: "#36DAA5", fontSize: 25 }} />
            </View>
            <View elevation={10} style={{ marginTop: -60, borderRadius: 200 }}>
              <Image
                source={require("../../assets/user.jpg")}
                style={{
                  resizeMode: "contain",
                  width: 130,
                  height: 130,
                  borderRadius: 200
                }}
              />
            </View>
            <View>
              <Icon name="create" style={{ color: "#36DAA5", fontSize: 25 }} />
            </View>
          </View>
        </Row>
        <Row
          style={{
            backgroundColor: "white",
            paddingLeft: 20,
            paddingRight: 20,
            width: "90%",
            flexDirection: "column"
          }}
        >
          <ScrollView>
            <Row
              style={{
                flexDirection: "column",
                alignItems: "center",
                marginTop: 20
              }}
            >
              <Text
                style={{ fontSize: 24, fontWeight: "100", color: "#23759E" }}
              >
                {data.FullName}
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "100", color: "#BEBBB8" }}
              >
                {data.ServicesOffer[0]}
                {data.ServicesOffer[1]}
                {data.ServicesOffer[2]}
                {data.ServicesOffer[3]}
              </Text>
            </Row>
            <Row
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20
              }}
            >
              <H1 style={{ fontSize: 18, fontWeight: "100", color: "#BEBBB8" }}>
                Active my Location
              </H1>
              <TouchableOpacity onPress={this.openModal}>
                <Image
                  source={require("../../assets/icon/toggle.png")}
                  style={{ resizeMode: "contain", width: 25, height: 25 }}
                />
              </TouchableOpacity>
            </Row>
            <Row
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10
              }}
              onPress={() => {
                this.props.navigation.navigate("serviceRecord");
              }}
            >
              <H1 style={{ fontSize: 18, fontWeight: "100", color: "#BEBBB8" }}>
                Service Records
              </H1>
              <Image
                source={require("../../assets/icon/servicerecord.png")}
                style={{ resizeMode: "contain", width: 25, height: 25 }}
              />
            </Row>
            <Row
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 10
              }}
              onPress={() => {
                this.props.navigation.navigate("PaymentRecord");
              }}
            >
              <H1 style={{ fontSize: 18, fontWeight: "100", color: "#BEBBB8" }}>
                Payment Records
              </H1>
              <Image
                source={require("../../assets/icon/calculator.png")}
                style={{ resizeMode: "contain", width: 25, height: 25 }}
              />
            </Row>
            <Row
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20
              }}
            >
              <H1 style={{ fontSize: 18, fontWeight: "100", color: "#BEBBB8" }}>
                Custom Records
              </H1>
              <Image
                source={require("../../assets/icon/addressbook.png")}
                style={{ resizeMode: "contain", width: 25, height: 25 }}
              />
            </Row>
          </ScrollView>
        </Row>
        <View
          style={{
            backgroundColor: "white",
            paddingLeft: 30,
            paddingRight: 30,
            paddingBottom:20,
            height: 50,
            width: "90%",
            flexDirection: "column-reverse"
          }}
        >
          <TouchableOpacity
            style={{ flexDirection: "row", justifyContent: 'space-between' }}
            onPress={this.logout}
          >
            <H1 style={{ fontSize: 20, fontWeight: "100", color: "#36DAA5" }}>SignOut</H1>
            <Image
              source={require("../../assets/icon/log-out.png")}
              style={{ resizeMode: "contain", width: 25, height: 25, }}
            />
          </TouchableOpacity>
        </View>
        <Modal1 ref={"addModal"} />
        {this.state.next1 ? this.toggle() : null}
      </ImageBackground>
    );
  }
}
