import React, { Component } from "react";
import { View, Text, ScrollView, StyleSheet, Image ,TouchableOpacity, KeyboardAvoidingView, Alert,AsyncStorage } from "react-native";
import { Container, Header, Content, Form, Icon, Input } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { theme } from "../../style/theme";

export default class Addnewservicelocation extends Component {
  
  static navigationOptions = {
    // headerLeft: (
    //   <TouchableOpacity
    //     onPress={() => {
    //       this.props.navigation.goBack();
    //     }}
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

  constructor(props) {
    super(props);
    this.state = {
      fullname: null,
      email: null,
      mobile: null,
      locateme: null,
      flatno: null,
      landmark: null,
      anotherLocation: null,
      latitude: null,
      longitude: null,
      error:null,
    };
  }
  

  Booknow = () => {
    const {
      fullname,
      mobile,
      email,
      locateme,
      flatno,
      landmark,
      anotherLocation,
      latitude,
      longitude
    } = this.state;

    if (latitude == null) {
      Alert.alert("Please Click on locate me")
    }
    if (locateme == null) {
      Alert.alert("Please Fill the Street, Area")
    }
    if (flatno == null) {
      Alert.alert("Please Fill the Flat # Building #")
    }
    if (landmark == null) {
      Alert.alert("Please Fill the Land Mark")
    }
    if (fullname == null) {
      Alert.alert("Please Fill the Full Name")
    }
    if (mobile == null) {
      Alert.alert("Please Fill the Mobile")
    }
    if (email == null) {
      Alert.alert("Please Fill the Email")
    }
    else {

      const data = {
        PersonalId: "0",
        FullName: fullname,
        Email: email,
        MobileNo: mobile,
        // StreetArea:locateme,
        // Flat:flatno,
        // LandMark: landmark,
        Address: [locateme, flatno, landmark],
        AnotherLocation: anotherLocation,
        Roll: 2,
        coords: [latitude, longitude],
        ActiveLocation: false
      };

      const dataInString = JSON.stringify(data);
      AsyncStorage.setItem("userData", dataInString);
      console.log("wokeeey");
      this.props.navigation.navigate("SnapIt")
    }
  }

  getlocation = () => {
    navigator.geolocation.getCurrentPosition(
       (position) => {
        //  console.log("wokeeey");
        //  console.log(position);
         this.setState({
           latitude: position.coords.latitude,
           longitude: position.coords.longitude,
           error: null,
         });
       },
       (error) => this.setState({ error: error.message }),
       { enableHighAccuracy: false, timeout: 200000, maximumAge: 1000 },
     );
    //  Alert.alert("Your Location is successful Save")
    }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
      <ScrollView style={{ paddingLeft: 20, paddingRight: 20 }}>
        <View style={{ alignItems: "center", marginBottom: 20 }}>
        <Text> {this.state.latitude} {this.state.longitude}</Text>
          <Text style={styles.text}>Where do you require the service? </Text>
        </View>
        <View style={styles.input_1}>
          <View>
            <Input 
              onChangeText={(val) => this.setState({locateme:val})}
              placeholder="Street, Area"
              placeholderTextColor="#1F8BA0" />
          </View>
          <TouchableOpacity
            onPress={() => this.getlocation()}
          >
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
          </TouchableOpacity>
        </View>
        <View style={styles.input}>
          <Input
            onChangeText={(val) => this.setState({flatno:val})}
            placeholder="Flat #, Building #"
            placeholderTextColor="#999999"
          />
        </View>
        <View style={styles.input}>
          <Input
            onChangeText={(val) => this.setState({landmark:val})}
            placeholder="Land Mark" placeholderTextColor="#999999" />
        </View>
        <View style={styles.input}>
          <Input
            onChangeText={(val) => this.setState({anotherLocation:val})}
            placeholder="Book for Another Location"
            placeholderTextColor="#999999"
          />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={styles.p}>Your contact information</Text>
        </View>
        <View style={styles.input}>
          <Input 
            onChangeText={(val) => this.setState({fullname:val})}
            placeholder="Your Full Name" placeholderTextColor="#999999" />
        </View>
        <View style={styles.input}>
          <Input 
            onChangeText={(val) => this.setState({mobile:val})}
            keyboardType={'numeric'}
            placeholder="Your Mobile" placeholderTextColor="#999999" />
        </View>
        <View style={styles.input}>
          <Input
            onChangeText={(val) => this.setState({email:val})}
            placeholder="Your Email" placeholderTextColor="#999999" />
        </View>
        <View style={{ alignItems: "center" }}>
          <Text style={{ color: "#23759E", marginTop: 10 }}>
            All fields are mandatory
          </Text>
          <TouchableOpacity
          onPress={() => this.Booknow()}
          >
            <LinearGradient
              colors={["#23759E", "#36DAA5"]}
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
                  fontWeight: "100",
                  fontSize: 18,
                  justifyContent: "center"
                }}
              >
                BOOK NOW
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
      </KeyboardAvoidingView>
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
