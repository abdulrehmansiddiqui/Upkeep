import React, { Component } from 'react';
import { View, ScrollView, Image } from "react-native";
import { Row, H1, Button, Text, List, ListItem } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5'
import { theme } from '../../style/theme';

export default class ServiceRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView style={{}}>
                <Row style={{ marginTop: 30 }}>
                    <View style={{ flex: 1, justifyContent: "space-around", flexDirection: 'row' }}>
                        <View>
                            <Text style={{ fontSize: 18, textAlign: "center", color: "#23759E" }}>Your Service Record</Text>
                            <Text style={{ fontSize: 18, textAlign: "center", color: "#23759E" }}>Based on the online payments</Text>
                        </View>
                    </View>
                </Row>
                <Row style={{ marginTop: 10, borderTopWidth: 1, borderColor: "#BEBBB8", paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                        <View style={{ width: "50%", }}>
                            <Text style={{ color: "#BEBBB8" }}>Name of the Services</Text>
                            <Text style={{ fontSize: 12, color: "#BEBBB8", }}>Location of the service in the premises</Text>
                        </View>
                        <View style={{ width: "20%", alignItems:"center" }}>
                            <Icon name='user-alt' style={{ color: "#BEBBB8", fontSize: 20 }} />
                        </View>
                        <View style={{ width: "40%"}}>
                            <Text style={{ color: "#BEBBB8" }}>dd/yy/mm</Text>
                            <Text style={{ color: "#BEBBB8" }}>00:00:am</Text>
                        </View>
                    </View>
                </Row>
                <Row style={{ marginTop: 10, borderTopWidth: 1, borderColor: "#BEBBB8", paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                        <View style={{ width: "50%", }}>
                            <Text style={{ color: "#BEBBB8" }}>Name of the Services</Text>
                            <Text style={{ fontSize: 12, color: "#BEBBB8", }}>Location of the service in the premises</Text>
                        </View>
                        <View style={{ width: "20%", alignItems:"center" }}>
                            <Icon name='user-alt' style={{ color: "#BEBBB8", fontSize: 20 }} />
                        </View>
                        <View style={{ width: "40%"}}>
                            <Text style={{ color: "#BEBBB8" }}>dd/yy/mm</Text>
                            <Text style={{ color: "#BEBBB8" }}>00:00:am</Text>
                        </View>
                    </View>
                </Row>
                <Row style={{ marginTop: 10, borderTopWidth: 1, borderColor: "#BEBBB8", paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                        <View style={{ width: "50%", }}>
                            <Text style={{ color: "#BEBBB8" }}>Name of the Services</Text>
                            <Text style={{ fontSize: 12, color: "#BEBBB8", }}>Location of the service in the premises</Text>
                        </View>
                        <View style={{ width: "20%", alignItems:"center" }}>
                            <Icon name='user-alt' style={{ color: "#BEBBB8", fontSize: 20 }} />
                        </View>
                        <View style={{ width: "40%"}}>
                            <Text style={{ color: "#BEBBB8" }}>dd/yy/mm</Text>
                            <Text style={{ color: "#BEBBB8" }}>00:00:am</Text>
                        </View>
                    </View>
                </Row>
                <Row style={{ marginTop: 10, borderTopWidth: 1, borderColor: "#BEBBB8", paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                        <View style={{ width: "50%", }}>
                            <Text style={{ color: "#BEBBB8" }}>Name of the Services</Text>
                            <Text style={{ fontSize: 12, color: "#BEBBB8", }}>Location of the service in the premises</Text>
                        </View>
                        <View style={{ width: "20%", alignItems:"center" }}>
                            <Icon name='user-alt' style={{ color: "#BEBBB8", fontSize: 20 }} />
                        </View>
                        <View style={{ width: "40%"}}>
                            <Text style={{ color: "#BEBBB8" }}>dd/yy/mm</Text>
                            <Text style={{ color: "#BEBBB8" }}>00:00:am</Text>
                        </View>
                    </View>
                </Row>
                <Row style={{ marginTop: 10, borderTopWidth: 1, borderColor: "#BEBBB8", paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                        <View style={{ width: "50%", }}>
                            <Text style={{ color: "#BEBBB8" }}>Name of the Services</Text>
                            <Text style={{ fontSize: 12, color: "#BEBBB8", }}>Location of the service in the premises</Text>
                        </View>
                        <View style={{ width: "20%", alignItems:"center" }}>
                            <Icon name='user-alt' style={{ color: "#BEBBB8", fontSize: 20 }} />
                        </View>
                        <View style={{ width: "40%"}}>
                            <Text style={{ color: "#BEBBB8" }}>dd/yy/mm</Text>
                            <Text style={{ color: "#BEBBB8" }}>00:00:am</Text>
                        </View>
                    </View>
                </Row>
                <Row style={{ marginTop: 10, borderTopWidth: 1, borderColor: "#BEBBB8", paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                        <View style={{ width: "50%", }}>
                            <Text style={{ color: "#BEBBB8" }}>Name of the Services</Text>
                            <Text style={{ fontSize: 12, color: "#BEBBB8", }}>Location of the service in the premises</Text>
                        </View>
                        <View style={{ width: "20%", alignItems:"center" }}>
                            <Icon name='user-alt' style={{ color: "#BEBBB8", fontSize: 20 }} />
                        </View>
                        <View style={{ width: "40%"}}>
                            <Text style={{ color: "#BEBBB8" }}>dd/yy/mm</Text>
                            <Text style={{ color: "#BEBBB8" }}>00:00:am</Text>
                        </View>
                    </View>
                </Row>
                <Row style={{ marginTop: 10, borderTopWidth: 1, borderColor: "#BEBBB8", paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                        <View style={{ width: "50%", }}>
                            <Text style={{ color: "#BEBBB8" }}>Name of the Services</Text>
                            <Text style={{ fontSize: 12, color: "#BEBBB8", }}>Location of the service in the premises</Text>
                        </View>
                        <View style={{ width: "20%", alignItems:"center" }}>
                            <Icon name='user-alt' style={{ color: "#BEBBB8", fontSize: 20 }} />
                        </View>
                        <View style={{ width: "40%"}}>
                            <Text style={{ color: "#BEBBB8" }}>dd/yy/mm</Text>
                            <Text style={{ color: "#BEBBB8" }}>00:00:am</Text>
                        </View>
                    </View>
                </Row>
                <Row style={{ marginTop: 10, borderTopWidth: 1, borderColor: "#BEBBB8", paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                        <View style={{ width: "50%", }}>
                            <Text style={{ color: "#BEBBB8" }}>Name of the Services</Text>
                            <Text style={{ fontSize: 12, color: "#BEBBB8", }}>Location of the service in the premises</Text>
                        </View>
                        <View style={{ width: "20%", alignItems:"center" }}>
                            <Icon name='user-alt' style={{ color: "#BEBBB8", fontSize: 20 }} />
                        </View>
                        <View style={{ width: "40%"}}>
                            <Text style={{ color: "#BEBBB8" }}>dd/yy/mm</Text>
                            <Text style={{ color: "#BEBBB8" }}>00:00:am</Text>
                        </View>
                    </View>
                </Row>
                <Row style={{ marginTop: 10, borderTopWidth: 1, borderColor: "#BEBBB8", paddingTop: 10 }}>
                    <View style={{ flexDirection: 'row', marginLeft: 30, marginRight: 30 }}>
                        <View style={{ width: "50%", }}>
                            <Text style={{ color: "#BEBBB8" }}>Name of the Services</Text>
                            <Text style={{ fontSize: 12, color: "#BEBBB8", }}>Location of the service in the premises</Text>
                        </View>
                        <View style={{ width: "20%", alignItems:"center" }}>
                            <Icon name='user-alt' style={{ color: "#BEBBB8", fontSize: 20 }} />
                        </View>
                        <View style={{ width: "40%"}}>
                            <Text style={{ color: "#BEBBB8" }}>dd/yy/mm</Text>
                            <Text style={{ color: "#BEBBB8" }}>00:00:am</Text>
                        </View>
                    </View>
                </Row>
            </ScrollView>
        );
    }
}
