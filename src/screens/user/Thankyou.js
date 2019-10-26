import React, { Component } from 'react';
import { View, Text, TouchableOpacity, AsyncStorage, Alert } from 'react-native';
import { Container, Header, Content, Textarea, Form } from "native-base";
import firebase from "../../../config/firebase";
import { LinearGradient } from "expo-linear-gradient";
import { allow } from 'expo/build/ScreenOrientation/ScreenOrientation';

export default class Thankyou extends Component {
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
        title: "Agent Confirmation",
        headerTitleStyle: {
            color: "white",
            fontWeight: "100",
            fontSize: 15
        },
    };

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                Address:{
                    Streat:'',
                    Flat:'',
                    LandMark:'',
                },
                AnotherLocation:'',
                Email:'',
                FullName:'',
                MobileNo:'',
                PersonalId:'',
                Roll:'',
                coords:{
                    latitude:'',
                    longitude:'',
                },
            },
            snapitdata: {
              Time: "",
              Date: "",
              Describe: "",
              PaymentOption: "",
            },
            userpaymentoption:'',
            bookfreelancerid:'',
        };
    }

    async componentDidMount() {

        userpaymentoption = await AsyncStorage.getItem('userpaymentoption') || 'none';
        console.log(userpaymentoption);
        this.setState({ userpaymentoption: userpaymentoption })

        bookfreelancerid1 = await AsyncStorage.getItem('bookfreelancerid') || 'none';
        console.log(bookfreelancerid1);
        this.setState({ bookfreelancerid: bookfreelancerid1 })

        snapitdatas1 = await AsyncStorage.getItem('snapitdata') || 'none';
        const snapitdata = JSON.parse(snapitdatas1);
        console.log(snapitdata);
        this.setState({ snapitdata: snapitdata })

        userData1 = await AsyncStorage.getItem('userData') || 'none';
        const userData = JSON.parse(userData1);
        console.log(userData);
        this.setState({ userData: userData })

        const uid = userData.MobileNo;


        firebase
          .database()
          .ref("booking/" + uid)
          .set([...userData,
            ...snapitdata,
            ...userpaymentoption,
            ...bookfreelancerid
        ])

}
        

    render() {
        return (
            <View style={{ padding: 30, flex: 1, justifyContent: "center" }}>

            {/* <Text>{this.state.userData.FullName}</Text>
            <Text>{this.state.userData.Email}</Text>
            <Text>{this.state.snapitdata.Date}</Text>
            <Text>{this.state.snapitdata.Time}</Text>
            <Text>{this.state.bookfreelancerid}</Text>
            <Text>{this.state.userpaymentoption}</Text> */}

                <View style={{ borderColor: "#23759E", borderWidth: 2, alignItems: "center" }}>
                    <Text style={{ color: "#23759E", fontSize: 25, padding: 10, fontWeight: "500" }}> Thank You ! </Text>
                    <View style={{ backgroundColor: "#36DAA5", padding: 10, width: "100%" }}>
                        <Text> Token: 00000 </Text>

                    </View>
                    <Text style={{ color: "#23759E", fontSize: 18, padding: 10, fontWeight: "500" }}>Agent Confirmation ! </Text>
                    <View style={{ flexDirection: "column", alignItems: "center", marginTop: 50, marginBottom: 50 }}>
                        <Text style={{ color: "#999", fontSize: 14, fontWeight: "200" }}>Booking Date: {this.state.snapitdata.Date} </Text>
                        <Text style={{ color: "#999", fontSize: 14, fontWeight: "200" }}>Booking Time: {this.state.snapitdata.Time}  </Text>
                        <Text style={{ color: "#999", fontSize: 14, fontWeight: "200" }}>Service Location: </Text>
                    </View>

                </View>

                <View style={{ flexDirection: "column", alignItems: "center", marginTop: 30, marginBottom: 30 }}>
                    <Text style={{ color: "#999", fontSize: 13, }}> Thank you for engaging our service agent.You can </Text>
                    <Text style={{ color: "#999", fontSize: 13, }}> now "Live track" our agent and Guide Him to the </Text>
                    <Text style={{ color: "#999", fontSize: 13, }}> Serice location </Text>

                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate("TrackFreelancer")}
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
                                    fontSize: 16,
                                    justifyContent: "center"
                                }}
                            >
                                Live Tracking
                </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
