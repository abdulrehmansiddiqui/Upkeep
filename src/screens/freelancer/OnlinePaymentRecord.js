import React, { Component } from 'react';
import { View, ScrollView, StyleSheet ,Image} from "react-native";
import { Row, Text, Picker, Content, Form, Item, Input, CheckBox, Icon } from 'native-base';
import { theme } from '../../style/theme'

export default class OnlinePaymentRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: "false"
        };
    }
    

    render() {
        return (
            <ScrollView>
                <View style={{ flexDirection: "column", marginTop: 40 }}>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20,marginBottom:15 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{color:"#23759E",fontSize:22,marginRight:10}}>Payout</Text>
                            <View style={{borderColor:"#36DAA5",borderWidth:2,borderRadius:5,paddingLeft:15,paddingRight:15,}}>
                                <Image
                                    source={require("../../assets/icon/give-money.png")}
                                    style={{ resizeMode: "contain", width: 25, height: 25, marginTop:2 }}
                                />
                            </View>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <View style={{marginRight:10,borderColor:"#36DAA5",borderWidth:2,borderRadius:5,paddingLeft:15,paddingRight:15,}}>
                                <Image
                                    source={require("../../assets/icon/file-excel.png")}
                                    style={{ resizeMode: "contain", width: 20, height: 20, marginTop:2 }}
                                />
                            </View>
                            <View style={{borderColor:"#36DAA5",borderWidth:2,borderRadius:5,paddingLeft:15,paddingRight:15,}}>
                                <Image
                                    source={require("../../assets/icon/file-pdf.png")}
                                    style={{ resizeMode: "contain", width: 20, height: 20, marginTop:2}}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginLeft: 20, marginRight: 20 }}>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type="Ionicons" name="ios-calendar" style={styles.icon}></Icon>
                            <Text style={styles.text} >dd/mm/yy</Text>
                        </View>
                        <View style={{ flexDirection: "row" }}>
                            <Icon type="Ionicons"  name="ios-calendar" style={styles.icon}></Icon>
                            <Text style={styles.text} >dd/mm/yy</Text>
                        </View>
                    </View>
                    <View style={{ borderColor: "#999", borderTopWidth: 1, marginTop: 20 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20, }}>
                            <View style={{ width: "15%", }}>
                                <CheckBox
                                    value={this.state.checked}
                                    style={{ borderColor: '#20ACA3', borderRadius: 5 }}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                />
                            </View>
                            <View style={{ width: "44%", }}>
                                <Text style={styles.text} >Windows AC Serviced</Text>
                            </View>
                            <View style={{ width: "25%", }}>
                                <Text style={styles.text} >BD00.000</Text>
                            </View>
                            <View style={{ width: "15%", }}>
                                <Icon  type="Ionicons" name="ios-person" style={styles.icon}></Icon>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderColor: "#999", borderTopWidth: 1, }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20, }}>
                            <View style={{ width: "15%", }}>
                                <CheckBox
                                    value={this.state.checked}
                                    style={{ borderColor: '#20ACA3', borderRadius: 5 }}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                />
                            </View>
                            <View style={{ width: "44%", }}>
                                <Text style={styles.text} >Windows AC Serviced</Text>
                            </View>
                            <View style={{ width: "25%", }}>
                                <Text style={styles.text} >BD00.000</Text>
                            </View>
                            <View style={{ width: "15%", }}>
                                <Icon type="Ionicons"  name="ios-person" style={styles.icon}></Icon>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderColor: "#999", borderTopWidth: 1, }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20, }}>
                            <View style={{ width: "15%", }}>
                                <CheckBox
                                    value={this.state.checked}
                                    style={{ borderColor: '#20ACA3', borderRadius: 5 }}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                />
                            </View>
                            <View style={{ width: "44%", }}>
                                <Text style={styles.text} >Windows AC Serviced</Text>
                            </View>
                            <View style={{ width: "25%", }}>
                                <Text style={styles.text} >BD00.000</Text>
                            </View>
                            <View style={{ width: "15%", }}>
                                <Icon type="Ionicons"  name="ios-person" style={styles.icon}></Icon>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderColor: "#999", borderTopWidth: 1 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20, }}>
                            <View style={{ width: "60%", flexDirection: "row", }}>
                                <View style={{ width: "15%", }}>
                                    <CheckBox
                                        value={this.state.checked}
                                        style={{ borderColor: '#20ACA3', borderRadius: 5 }}
                                        onValueChange={() => this.setState({ checked: !this.state.checked })}
                                    />
                                </View>
                                <View style={{ flexDirection: "column" }}>
                                    <View style={{ flexDirection: "row", marginBottom: 10 }}>
                                        <Text style={{ width: "15%", backgroundColor: "#23759E", borderRadius: 200, height: 10, width: 10, marginTop: 5, marginRight: 5, marginRight: 5 }}></Text>
                                        <Text style={{ width: "85%",color: "#999", fontSize: 16, }}>Windows AC Serviced</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", }}>
                                        <Text style={{ width: "15%", backgroundColor: "#23759E", borderRadius: 200, height: 10, width: 10, marginTop: 5, marginRight: 5, marginRight: 5 }}></Text>
                                        <Text style={{ width: "85%",color: "#999",  }}>Invoice No 000000</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", }}>
                                        <Text style={{ width: "15%", backgroundColor: "#23759E", borderRadius: 200, height: 10, width: 10, marginTop: 5, marginRight: 5, marginRight: 5 }}></Text>
                                        <Text style={{ width: "85%",color: "#999",  }}>Token No 000000</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", }}>
                                        <Text style={{ width: "15%", backgroundColor: "#23759E", borderRadius: 200, height: 10, width: 10, marginTop: 5, marginRight: 5, marginRight: 5 }}></Text>
                                        <Text style={{ width: "85%",color: "#999",  }}>Date: dd/mm/yy</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", }}>
                                        <Text style={{ width: "15%", backgroundColor: "#23759E", borderRadius: 200, height: 10, width: 10, marginTop: 5, marginRight: 5, marginRight: 5 }}></Text>
                                        <Text style={{ width: "85%",color: "#999",  }}>Time: 00:00 am</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", }}>
                                        <Text style={{ backgroundColor: "#23759E", borderRadius: 200, height: 10, width: 10, marginTop: 5, marginRight: 5, marginRight: 5 }}></Text>
                                        <Text style={{color: "#999", }}>Location: Hmala, Hamad Town</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", }}>
                                        <Text style={{ backgroundColor: "#23759E", borderRadius: 200, height: 10, width: 10, marginTop: 5, marginRight: 5, marginRight: 5 }}></Text>
                                        <Text style={{color: "#999", }}>Window Ac Service Spare Parts Material</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ width: "25%", }}>
                                <Text style={styles.text} >BD00.000</Text>
                            </View>
                            <View style={{ width: "15%", }}>
                                <Icon type="Ionicons"  name="ios-person" style={styles.icon}></Icon>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderColor: "#999", borderTopWidth: 1,}}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20, }}>
                            <View style={{ width: "15%", }}>
                                <CheckBox
                                    value={this.state.checked}
                                    style={{ borderColor: '#20ACA3', borderRadius: 5 }}
                                    onValueChange={() => this.setState({ checked: !this.state.checked })}
                                />
                            </View>
                            <View style={{ width: "44%", }}>
                                <Text style={styles.text} >Windows AC Serviced</Text>
                            </View>
                            <View style={{ width: "25%", }}>
                                <Text style={styles.text} >BD00.000</Text>
                            </View>
                            <View style={{ width: "15%", }}>
                                <Icon type="Ionicons"  name="ios-person" style={styles.icon}></Icon>
                            </View>
                        </View>
                    </View>
                    <View style={{ borderColor: "#999", borderTopWidth: 1,}}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around", margin: 20, }}>
                            <View>
                                <Text style={styles.textcolor} >Serviced BD00.000</Text>
                            </View>
                            <View>
                                <Text style={styles.textcolor} >Total: BD00.000</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    text: {
        color: "#999", fontSize: 16,
    },
    textcolor: {
        color: "#36DAA5", fontSize: 16,
    },
    icon: {
        color: "#999", 
        fontSize: 25,
        paddingRight:10
    },
});