import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Row, Text, Picker, Content, Form, Item, Icon } from 'native-base';
import { theme } from '../../style/theme';
import { LinearGradient } from "expo-linear-gradient";

export default class PaymentDetails extends Component {
    static navigationOptions = {
      title: 'Payment Details',
      headerBackground: (
          <LinearGradient
            colors={['#1977a0', '#33d0a6']}
            style={{ flex: 1 }}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
          />
      ),
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: '100',
        fontSize: 15,
      },
    };
    constructor(props) {
        super(props);
        this.state = {
            next1: true,
            next2: true,
            next3: true,
        };
    }

    customer1 = () => {
        return (
            <View style={{ backgroundColor: "#fff", borderColor: "#36DAA5", borderWidth: 1, flexDirection: "column" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.text}>Name of the Client</Text>
                    </View>
                    <Text style={styles.text}>Token:00000 </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#f3f3f3", padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.textsm}>Client Paid Online</Text>
                        <Text style={styles.textsm}>Recipt:0000</Text>
                    </View>
                    <View style={{ flexDirection:"row-reverse" }}>
                        <Icon type="AntDesign" name="checkcircle" style={styles.iconcolor} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ backgroundColor: "#36DAA5", borderRadius: 8, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5 }}>
                            <Text style={{ color: "#FFF" }}>Start</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.textsm}>Acceptd to pay in Cash</Text>
                        <Text style={styles.textsm}>Recipt:0000</Text>
                    </View>
                    <View style={{ flexDirection:"row-reverse" }}>
                        <Icon type="AntDesign" name="checkcircle" style={styles.icongrey} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ backgroundColor: "#ccc", borderRadius: 8, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5 }}>
                            <Text style={{ color: "#FFF" }}>Start</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    customer2 = () => {
        return (
            <View style={{ backgroundColor: "#fff", borderColor: "#36DAA5", borderWidth: 1, flexDirection: "column" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.text}>Name of the Client</Text>
                    </View>
                    <Text style={styles.text}>Token:00000 </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#f3f3f3", padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.textsm}>Acceptd to pay in Cash</Text>
                        <Text style={styles.textsm}>Recipt:0000</Text>
                    </View>
                    <View style={{ flexDirection:"row-reverse" }}>
                        <Icon type="AntDesign" name="checkcircle" style={styles.icongrey} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ backgroundColor: "#ccc", borderRadius: 8, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5 }}>
                            <Text style={{ color: "#FFF" }}>Start</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.textsm}>Client Paid Online</Text>
                        <Text style={styles.textsm}>Recipt:0000</Text>
                    </View>
                    <View style={{ flexDirection:"row-reverse" }}>
                        <Icon type="AntDesign" name="checkcircle" style={styles.iconcolor} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ backgroundColor: "#36DAA5", borderRadius: 8, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5 }}>
                            <Text style={{ color: "#FFF" }}>Start</Text>
                        </View>
                    </View>
                </View>
            </View>

        )
    }

    customer3 = () => {
        return (
            <View style={{ backgroundColor: "#fff", borderColor: "#36DAA5", borderWidth: 1, flexDirection: "column" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={styles.text}>Name of the Client</Text>
                    </View>
                    <Text style={styles.text}>Token:00000 </Text>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: "#f3f3f3", padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.textsm}>Client Paid Online</Text>
                        <Text style={styles.textsm}>Recipt:0000</Text>
                    </View>
                    <View style={{ flexDirection:"row-reverse" }}>
                        <Icon type="AntDesign" name="checkcircle" style={styles.iconcolor} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ backgroundColor: "#36DAA5", borderRadius: 8, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5 }}>
                            <Text style={{ color: "#FFF" }}>Start</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 10 }}>
                    <View style={{ flexDirection: "column" }}>
                        <Text style={styles.textsm}>Acceptd to pay in Cash</Text>
                        <Text style={styles.textsm}>Recipt:0000</Text>
                    </View>
                    <View style={{ flexDirection:"row-reverse" }}>
                        <Icon type="AntDesign" name="checkcircle" style={styles.icongrey} />
                    </View>
                    <View style={{ flexDirection: "column" }}>
                        <View style={{ backgroundColor: "#ccc", borderRadius: 8, paddingLeft: 15, paddingRight: 15, paddingTop: 5, paddingBottom: 5 }}>
                            <Text style={{ color: "#FFF" }}>Start</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    displayaccordion1 = () => { this.setState({ next1: !this.state.next1 }) };
    displayaccordion2 = () => { this.setState({ next2: !this.state.next2 }) };
    displayaccordion3 = () => { this.setState({ next3: !this.state.next3 }) };

    render() {
        return (
            <ScrollView>

                <View style={styles.aBorder}>
                    <TouchableOpacity onPress={this.displayaccordion1}>
                        <LinearGradient
                            colors={theme.color.gRight}
                            start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                            style={styles.accordion}
                        >
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={styles.heading}>Payment Details</Text>
                                <Icon type="Ionicons" name="ios-refresh" style={styles.icon} />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    {this.state.next1 ? (this.customer1()) : null}
                </View>

                <View style={styles.aBorder}>
                    <TouchableOpacity onPress={this.displayaccordion2}>
                        <LinearGradient
                            colors={theme.color.gRight}
                            start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                            style={styles.accordion}
                        >
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={styles.heading}>Payment Details</Text>
                                <Icon type="Ionicons" name="ios-refresh" style={styles.icon} />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    {this.state.next2 ? (this.customer2()) : null}
                </View>
                <View style={styles.aBorder}>
                    <TouchableOpacity onPress={this.displayaccordion3}>
                        <LinearGradient
                            colors={theme.color.gRight}
                            start={{ x: 1, y: 0 }} end={{ x: 0, y: 0 }}
                            style={styles.accordion}
                        >
                            <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                <Text style={styles.heading}>Payment Details</Text>
                                <Icon type="Ionicons" name="ios-refresh" style={styles.icon} />
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>
                    {this.state.next3 ? (this.customer3()) : null}
                </View>
                <View style={theme.empty.em40}></View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    aBorder: {
        marginLeft: 20,
        marginRight: 20,
    },
    aitem: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginLeft: 5,
        marginTop: 5,
        paddingBottom: 8,
        borderColor: "#999",
        borderBottomWidth: 1,
    },
    text: {
        color: "#999", fontSize: 16, marginLeft: 10,
        marginRight: 10,
        textAlign: "justify"
    },
    textsm: {
        color: "#999", fontSize: 14, marginLeft: 10,
        marginRight: 10,
        textAlign: "justify"
    },
    textcolor: {
        color: "#23759E", fontSize: 18,
    },
    iconcolor: {
        color: "#36DAA5", fontSize: 18,
        marginRight: 8
    },
    icongrey: {
        color: "#ccc", fontSize: 18,
        marginRight: 8
    },
    icon: {
        color: "#fff", fontSize: 25
    },
    accordion: {
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        marginTop: 15,
        width: "100%",
        padding: 10
    },
    heading: {
        fontSize: 17,
        fontWeight: "100",
        color: "#FFF",
    }
});