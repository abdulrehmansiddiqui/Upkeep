import React, { Component } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, AsyncStorage } from "react-native";
import { Icon } from "native-base";
import firebase from "../../../config/firebase";
import { LinearGradient } from "expo-linear-gradient";

export default class ListFreelancer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allData: []
    };
  }

  static navigationOptions = {
    // headerLeft: (
    //   <TouchableOpacity
    //       onPress={() => {
    //         this.props.navigation.navigate("Circle");
    //       }}
    //     style={{ marginLeft: 20}}
    //   >
    //   <Icon type="Ionicons" name="ios-arrow-back" style={{color:"white", fontSize:25,}} />
    //   </TouchableOpacity>
    // ),
    headerBackground: (
      <LinearGradient
        colors={['#23759E', '#36DAA5']}
        style={{ flex: 1 }}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      />
    ),
    title: "Name of tth Service",
    headerTitleStyle: {
      color: "white",
      fontWeight: "100",
      fontSize:15
    },
  };

  componentDidMount() {
    
    // firebase.auth().onAuthStateChanged((userid) => {
    //   if(!userid){
    //     this.props.navigation.navigate("UserReg")
    //   }
    // })

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

        // console.log("aaaaaa", Object.keys(allData));
        this.setState({ allData: allData });
      });

    // console.log("all data", this.state.allData);
  }
  
  onRoute = (id) => {
    // console.log(v);
    AsyncStorage.setItem("bookfreelancerid", id);
    this.props.navigation.navigate("Addnewservicelocation")
  }

  render() {
    return (
      <ScrollView>
        {!!Object.values(this.state.allData).length &&
          Object.values(this.state.allData).filter((v)=>v.Roll==1).map(v => (
            <View key={v.Uid}
              style={{
                flexDirection: "column",
                padding: 15,
                borderBottomWidth: 1,
                borderColor: "#CCC"
              }}
            >
              <View style={{ flexDirection: "row", marginBottom: 15 }}>
                <View style={{ width: "23%", alignItems: "center" }}>
                  <Image
                    source={require("../../assets/user.jpg")}
                    style={{
                      resizeMode: "contain",
                      width: 60,
                      height: 60,
                      borderRadius: 10
                    }}
                  />
                </View>
                <View style={{ width: "50%" }}>
                  <Text style={{ color: "#000", fontSize: 18 }}>
                    {v.FullName}
                  </Text>
                  <Text style={{ color: "#999", fontSize: 14 }}>
                    00 years of experince
                  </Text>
                  <View style={{ flexDirection: "row" }}>
                    <Icon
                      type="EvilIcons"
                      name="star"
                      style={{ color: "#000", fontSize: 14 }}
                    />
                    <Icon
                      type="EvilIcons"
                      name="star"
                      style={{ color: "#000", fontSize: 14 }}
                    />
                    <Icon
                      type="EvilIcons"
                      name="star"
                      style={{ color: "#000", fontSize: 14 }}
                    />
                    <Icon
                      type="EvilIcons"
                      name="star"
                      style={{ color: "#000", fontSize: 14 }}
                    />
                    <Icon
                      type="EvilIcons"
                      name="star"
                      style={{ color: "#000", fontSize: 14 }}
                    />
                  </View>
                </View>
                <View style={{ width: "25%" }}>
                  <TouchableOpacity
                    onPress={() => this.onRoute(v.Uid)}  key={v.Uid}
                    style={{
                      backgroundColor: "#23759E",
                      padding: 5,
                      alignItems: "center",
                      borderRadius: 5
                    }}
                  >
                    <Text style={{ color: "#FFF", fontSize: 16 }}>BOOK</Text>
                  </TouchableOpacity>
                  <View style={{ marginTop: 10 }}>
                    <Text style={{ color: "#999" }}>00 min away</Text>
                  </View>
                </View>
              </View>
              <View style={{}}>
                <Text style={{ color: "#999", fontSize: 16 }}>
                  {v.ServicesOffer.map((v, i) => {
                    return v + " ";
                  })}
                </Text>
                {/* <Text style={{ color: "#999", fontSize: 16 }}>
                  Roofing Dranage Mechanical Serives
                </Text> */}
              </View>
            </View>
          ))}
      </ScrollView>
    );
  }
}