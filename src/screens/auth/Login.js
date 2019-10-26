import React, { Component } from "react";
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  AsyncStorage,
  View
} from "react-native";
import { Item, Input, Text } from "native-base";
import firebase from "../../../config/firebase";

export default class Login extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      pass: "",
    };
  }

  componentDidMount(){
      firebase.auth().onAuthStateChanged((userid) => {
        if(userid){
          console.log("true")
          var ids = userid.uid;

          firebase.database().ref("users").child(ids).once('value').then((snapShot) => {

            const dataInString = JSON.stringify(snapShot.val());
            AsyncStorage.setItem("data1", dataInString);

            var role = snapShot.val().Roll;

            if(role == 1){//Freelancer
              this.props.navigation.navigate("freelancerStack")
            }
            if(role == 2){//user
              this.props.navigation.navigate("userStack")
            }
          })

        }
        else{
          console.log("false")
        }
      })
}

  Loginfunction = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.pass)
      .then(res => {
          firebase.auth().onAuthStateChanged((userid) => {
            
            if(userid){
              var ids = userid.uid;
              firebase.database().ref("users").child(ids).once('value').then((snapShot) => {
                // console.log(snapShot.val())
                // console.log(snapShot.val().roll)

                const dataInString = JSON.stringify(snapShot.val());
                AsyncStorage.setItem("data1", dataInString);
                // console.log(snapShot.val().roll)

                var role = snapShot.val().Roll;
                if(role == 1){//Freelancer
                  this.props.navigation.navigate("freelancerStack")
                }
                if(role == 2){//user
                  this.props.navigation.navigate("userStack")
                }
                // if(role == 3){//agent
                //   this.props.navigation.navigate("agentStack")
                // }
              })
            }
            else{
              console.log("ffffffffff")
              console.log("ffffffffff")
              console.log("ffffffffff")
              console.log("ffffffffff")
              console.log("ffffffffff")
            }
          })
      })
      .catch(error=>{
        Alert.alert(error.message)
      })
  };

  render() {
    return (
      <ImageBackground
        source={require("../../assets/login/bg.png")}
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../../assets/login/upkeepp.png")}
          style={{ resizeMode: "contain", width: "50%", height: "7%" }}
        />
        <Image
          source={require("../../assets/login/simple_easy.png")}
          style={{ resizeMode: "contain", width: "30%", height: "5%" }}
        />
        <View style={{ marginTop: 100, height:50, width:"80%" }}>
          <Input
            onChangeText={val => this.setState({ email: val })}
            placeholder="User Name"
            placeholderTextColor="lightgrey"
            style={{
              textAlign: "center",
              borderColor: "lightgrey",
              borderWidth: 1,
              borderRadius: 5,
              color: "#FFF"
            }}
          />
        </View>
        <View style={{ marginTop: 10, height:50 ,width:"80%"}}>
          <Input
            onChangeText={val => this.setState({ pass: val })}
            placeholder="Password"
            placeholderTextColor="lightgrey"
            style={{
              textAlign: "center",
              borderColor: "lightgrey",
              borderWidth: 1,
              borderRadius: 5,
              color: "#FFF"
            }}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("Guest");
          }}
        >
          <Text style={{ color: "lightgrey", marginTop: 30 }}>
            Continue as Guest
          </Text>
        </TouchableOpacity>

        {/* <Button title="login" onPress={() => this.Login()} /> */}

        <TouchableOpacity
          style={{
            backgroundColor: "#009F3F",
            borderColor: "#FFF",
            borderWidth: 1,
            padding: 10,
            borderRadius: 5,
            marginTop: 20
          }}
          onPress={() => this.Loginfunction()}
        >
          <Text
            style={{
              color: "#FFF",
              marginLeft: 30,
              marginRight: 30,
              fontSize: 20,
              fontWeight: "100"
            }}
          >
            Sign In
          </Text>
        </TouchableOpacity>

        <Text style={{ color: "lightgrey", marginTop: 40 }}>
          Forgot Password ?
        </Text>
        <Text style={{ position: "absolute", bottom: 20, color: "lightgrey" }}>
          Don&apos;t have an account?{" "}
          <Text
            style={{ color: "#FFF", fontWeight: "bold" }}
            onPress={() => this.props.navigation.navigate("SignupOption")}
          >
            Sign Up
          </Text>
        </Text>
      </ImageBackground>
    );
  }
}
