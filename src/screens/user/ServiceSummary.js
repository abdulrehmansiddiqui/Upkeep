import React, { Component } from 'react';
import { Text, View } from 'react-native';
import {
    Container, Content, Footer, Item, Textarea,
} from 'native-base';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from '../../style/theme'

export default class ServiceSummary extends Component {

    render() {
        return (
            <Container>
                <Content>

                    <View style={{ alignItems: 'center', marginTop: 30, flexDirection: 'column' }}>
                        <Text style={{ fontSize: 25, color: '#009999', }}>Plumbing Services</Text>
                        <Text style={{ fontSize: 20, color: '#999999', }}>Service/Repair Summary</Text>
                    </View>

                    <View style={{
                        borderWidth: 2,borderColor: '#36DAA5',margin: 30, borderRadius:8,paddingLeft:10,paddingRight:10
                    }}>
                        <View style={{
                            marginTop: 10,
                            flexDirection: 'row',
                            // paddingLeft: 20, 
                            justifyContent:'space-between',
                            borderBottomWidth:1,
                            paddingBottom:10,
                            borderColor:'#999999',
                        }}>
                            <Text style={{ fontSize: 13, color: '#999', }}>27-November-2017</Text>
                            <Text style={{ fontSize: 13, color: '#999', }}>11AM to 1PM</Text>
                        </View>




                        <View style={{
                            marginTop: 10,
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                            borderBottomWidth: 1, 
                            paddingBottom: 10, 
                            borderColor: '#999999',
                            
                        }}>
                            <View style={{
                                top: -5, flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}>
                                <Text style={{ fontSize: 13, color: '#23759E', }}>Services</Text>
                                <Text style={{ fontSize: 13, color: '#999', }}>BD.00.000</Text>
                            </View>

                            <View style={{ marginTop: -10 }}>
                                <Text style={{ fontSize: 13, color: '#999',top:5 }}>Repair and Fixes</Text>
                            </View>
                        </View>

                        <View style={{
                            top: 5,
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            marginLeft: 0,
                            borderBottomWidth: 1, paddingBottom: 10, borderColor: '#999999'
                        }}>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                marginLeft: 5
                            }}>
                                <Text style={{ fontSize: 13, color: '#999', }}>Metarial 1</Text>
                                <Text style={{ fontSize: 13, color: '#999', }}>BD.00.000</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 13, color: '#009999', marginLeft: 5, }}>Quantity / Unit</Text>
                            </View>
                        </View>

                        <View style={{
                            marginTop: 5,
                            flexDirection: 'column',
                            justifyContent: 'space-around',
                        }}>
                            <View style={{ 
                                flexDirection: 'row' ,
                                justifyContent: 'space-between',
                                top:5
                                }}>
                                <Text style={{ fontSize: 13, color: '#999',  }}>Metarial 2</Text>
                                <Text style={{ fontSize: 13, color: '#9999', marginRight:10}}>BD.00.000</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: 13, color: '#23759E',top:5}}>Quantity / Unit</Text>
                            </View>
                        </View>

                        <View style={{
                            marginTop: 90,
                        }}>

                            <View style={{
                                flexDirection: 'row' ,
                                justifyContent: 'space-between',
                                borderBottomWidth: 1, paddingBottom: 10,   borderColor: '#999999',
                                borderTopWidth: 1, paddingTop: 10,  borderColor: '#999999'
                            }}>
                                <Text style={{ fontSize: 15, color: '#999', }}>VAT</Text>
                                <Text style={{ fontSize: 15, color: '#9999', }}>BD.00.000</Text>
                            </View>

                            <View style={{ 
                                 flexDirection: 'row' ,
                                 justifyContent: 'space-between',
                                 paddingBottom:10,paddingTop:10 
                                }}>
                                <Text style={{ fontSize: 15,fontWeight:'500', color: '#000', }}>Total</Text>
                                <Text style={{ fontSize: 15, color: '#000',}}>BD.00.000</Text>
                            </View>
                        </View>

                    </View>
                    
                    <View style={{ alignItems: 'center' }}>
                        <LinearGradient
                            colors={theme.color.gRight}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            style={{ borderRadius: 5, width: '50%', height: 50, alignItems: 'center', marginTop: 20 }}
                        >
                            <Text style={{
                                width: 100,
                                alignItems: 'center',
                                marginTop: 12,
                                marginLeft: 50,
                                color: "#fff", fontWeight: '300', fontSize: 15, justifyContent: 'center'
                            }}
                            >
                                Play Now
                                </Text>
                        </LinearGradient>
                    </View>
                </Content>
            </Container>

        )
    }
}