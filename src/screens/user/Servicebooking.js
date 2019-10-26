import React, { Component } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { LinearGradient } from "expo-linear-gradient";

export default class Servicebooking extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={{ padding: 10, alignItems: "center", margin: 20, }}>
                    <Text style={{ color: "#23759E", fontSize: 20, fontWeight: "400" }}>Multiple Service Bookings</Text>
                    <Text style={{ color: "#23759E", fontSize: 20, fontWeight: "400" }}>Live Tracking</Text>
                </View>

                <View style={{ padding: 15, borderTopWidth: 1, borderColor: "#ccc", }}>
                    <View style={{flexDirection: "row", justifyContent: "space-between",marginLeft:10,marginRight:10}}>
                        <View>
                            <Text style={{color:"#666" , fontSize:18 }}>Name of the service</Text>
                            <Text>Place in the house</Text>
                            <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
                                <Icon type="Entypo" name="user" style={{ color: "#ccc", fontSize: 25, }} />
                                <Icon type="Entypo" name="location-pin" style={{ color: "#ccc", fontSize: 25, }} />
                            </View>

                        </View>
                        <View>
                            <View style={{flexDirection:"row",}}>
                                <Icon type="Entypo" name="calendar" style={{ marginRight:5, color: "#ccc", fontSize: 20, }} />
                                <Text style={{color:"#ccc" , fontSize:18 }}>dd/mm/yy</Text>
                            </View>
                            <View style={{flexDirection:"row",}}>
                                <Icon type="Entypo" name="clock" style={{ marginRight:5, color: "#ccc", fontSize: 20, }} />
                                <Text style={{color:"#ccc" , fontSize:18 }}>00:00 AM</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 15, borderTopWidth: 1, borderColor: "#ccc", }}>
                    <View style={{flexDirection: "row", justifyContent: "space-between",marginLeft:10,marginRight:10}}>
                        <View>
                            <Text style={{color:"#666" , fontSize:18 }}>Name of the service</Text>
                            <Text>Place in the house</Text>
                            <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
                                <Icon type="Entypo" name="user" style={{ color: "#ccc", fontSize: 25, }} />
                                <Icon type="Entypo" name="location-pin" style={{ color: "#ccc", fontSize: 25, }} />
                            </View>

                        </View>
                        <View>
                            <View style={{flexDirection:"row",}}>
                                <Icon type="Entypo" name="calendar" style={{ marginRight:5, color: "#ccc", fontSize: 20, }} />
                                <Text style={{color:"#ccc" , fontSize:18 }}>dd/mm/yy</Text>
                            </View>
                            <View style={{flexDirection:"row",}}>
                                <Icon type="Entypo" name="clock" style={{ marginRight:5, color: "#ccc", fontSize: 20, }} />
                                <Text style={{color:"#ccc" , fontSize:18 }}>00:00 AM</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 15, borderTopWidth: 1, borderColor: "#ccc", }}>
                    <View style={{flexDirection: "row", justifyContent: "space-between",marginLeft:10,marginRight:10}}>
                        <View>
                            <Text style={{color:"#666" , fontSize:18 }}>Name of the service</Text>
                            <Text>Place in the house</Text>
                            <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
                                <Icon type="Entypo" name="user" style={{ color: "#ccc", fontSize: 25, }} />
                                <Icon type="Entypo" name="location-pin" style={{ color: "#ccc", fontSize: 25, }} />
                            </View>

                        </View>
                        <View>
                            <View style={{flexDirection:"row",}}>
                                <Icon type="Entypo" name="calendar" style={{ marginRight:5, color: "#ccc", fontSize: 20, }} />
                                <Text style={{color:"#ccc" , fontSize:18 }}>dd/mm/yy</Text>
                            </View>
                            <View style={{flexDirection:"row",}}>
                                <Icon type="Entypo" name="clock" style={{ marginRight:5, color: "#ccc", fontSize: 20, }} />
                                <Text style={{color:"#ccc" , fontSize:18 }}>00:00 AM</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ padding: 15, borderTopWidth: 1, borderColor: "#ccc", }}>
                    <View style={{flexDirection: "row", justifyContent: "space-between",marginLeft:10,marginRight:10}}>
                        <View>
                            <Text style={{color:"#666" , fontSize:18 }}>Name of the service</Text>
                            <Text>Place in the house</Text>
                            <View style={{flexDirection:"row", justifyContent:"space-around", marginTop:20}}>
                                <Icon type="Entypo" name="user" style={{ color: "#ccc", fontSize: 25, }} />
                                <Icon type="Entypo" name="location-pin" style={{ color: "#ccc", fontSize: 25, }} />
                            </View>

                        </View>
                        <View>
                            <View style={{flexDirection:"row",}}>
                                <Icon type="Entypo" name="calendar" style={{ marginRight:5, color: "#ccc", fontSize: 20, }} />
                                <Text style={{color:"#ccc" , fontSize:18 }}>dd/mm/yy</Text>
                            </View>
                            <View style={{flexDirection:"row",}}>
                                <Icon type="Entypo" name="clock" style={{ marginRight:5, color: "#ccc", fontSize: 20, }} />
                                <Text style={{color:"#ccc" , fontSize:18 }}>00:00 AM</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        );
    }
}
