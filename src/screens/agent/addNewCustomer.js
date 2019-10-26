import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Button,
  Dimensions,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { Header } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";
import RegistrationImage from "./styles/images/Update.png";
import arrowLeft from "./styles/images/arrowLeftWhite.png";
import SideMenuImage from "./styles/images/align-left.png";
import { Icon } from "native-base";

const screenwidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: "Street,Area",
      Block: "Flat #,Building #"
    };
  }

  // static navigationOptions = ({ navigation }) => {
  //   return {
  //     headerLeft: (
  //       <TouchableOpacity
  //         style={{ marginLeft: 20, marginTop: -10 }}
  //         onPress={() => navigation.navigate("DrawerNavigator")}
  //       >
  //       <Image source={arrowLeft} style={styles.Icon} />
  //       </TouchableOpacity>
  //     ),
  //     headerBackground: (
  //       <LinearGradient
  //         colors={["#1977a0", "#33d0a6"]}
  //         style={{ flex: 1 }}
  //         start={{ x: 0, y: 0 }}
  //         end={{ x: 1, y: 0 }}
  //       />
  //     ),
  //     headerStyle: {
  //       paddingTop: 20,
  //       height: Header.HEIGHT + 25
  //     },
  //     title: "Profile",
  //     headerTitleStyle: {
  //       color: "white",
  //       fontWeight: "100"
  //     }
  //   };
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "#127366", fontSize: 20, marginBottom: 20 }}>
          Add New Customer
        </Text>

        <View style={{ alignItems: "center" }}>
          <TextInput style={styles.input} placeholder="Full Name" />
          <TextInput style={styles.input} placeholder="Mobile" />

          <TextInput style={styles.input} placeholder="Land Mark" />
          <TextInput style={styles.input} placeholder="E-mail" />

          <View style={{ marginTop: 10 }}>
            <Icon
              type="AntDesign"
              name="pluscircle"
              style={{ color: "grey", fontSize: 16 }}
            />
          </View>
          <TextInput style={styles.input} placeholder={this.state.address} />
          <TextInput style={styles.input} placeholder={this.state.Block} />
          <TextInput style={styles.input} placeholder="Land Mark" />

          <View style={{ marginTop: 5, marginBottom: 10 }}>
            <Text style={{ fontSize: 12, color: "#127366" }}>
              All Fields are mendatory
            </Text>
          </View>
          <TouchableOpacity>
            <LinearGradient
              colors={["#23759E", "#36DAA5"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{
                marginTop: 10,
                width: 140,
                alignItems: "center",
                borderRadius: 5
              }}
            >
              <Text style={{ color: "#FFF", margin: 5 }}>Save</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 20
  },
  Heading: {
    fontSize: 25,
    textAlign: "center",
    color: "white",
    alignSelf: "flex-start",
    marginHorizontal: 70,
    marginVertical: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  subText: {
    marginVertical: 2,
    alignSelf: "center"
    // paddingVertical: 10,
  },
  text: {
    fontSize: 12,
    color: "white"
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderRadius: 5,
    borderColor: "#73b09e",
    margin: 5,
    height: 35,
    minWidth: Dimensions.get("window").width * 0.5,
    width: Dimensions.get("window").width * 0.6,
    paddingLeft: 10
  },
  picker: {
    width: 130,
    height: 40,
    paddingLeft: 0,
    alignSelf: "flex-start"
  },
  Icon: {
    width: 20,
    height: 20,
    marginTop: 10,
    resizeMode: "contain",
    marginRight: 5
  },
  ProfileHeading: {
    color: "#1f7aad",
    textAlign: "center",
    margin: 10
  },
  Services: {
    color: "#d3b6b4",
    marginVertical: 20,
    flexDirection: "row",
    alignItems: "flex-end"
  },
  ServiceText: {
    color: "#939e9c"
  },
  avatar: {
    width: 140,
    height: 120,
    marginTop: -60
  },
  green: {
    color: "#52c6a2"
  },
  dropDown: {
    marginTop: 0
  },
  content: {
    borderWidth: 1,
    borderColor: "#99ddc7",
    borderTopWidth: 0,
    padding: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginBottom: 10
  }
});

// Profile.propTypes = {
//   updateProfile: PropTypes.func.isRequired
// };

// const mapStateToProps = state => ({
//   user: state.contact.user
// });

// export default connect(
//   mapStateToProps,
//   { updateProfile }
// )(Profile);
