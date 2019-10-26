import React, { Component } from 'react';
import { Text, View, TouchableOpacity ,} from 'react-native';
import {
    Container, Content, Footer, Item, Textarea,
    Grid, Row, Col, Button,  List, ListItem, Thumbnail, Spinner,Radio
} from 'native-base';
import { LinearGradient } from "expo-linear-gradient";
import { theme } from '../../style/theme'


var radio_props = [
    {label: 'param1', value: 0 },
    {label: 'param2', value: 1 }
  ];
export default class ServicesCencellation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datas : {
                label:"usama",
                value:1
            },
          gender: [
            {
              label: 'Male',
              value: "Male",
              color: 'skyblue',
            },
            {
              label: 'Female',
              value: "Female",
              color: 'skyblue',
            }
          ],
        };
      }
    render() {
        return (
            <Container>
                <Content>
                    <View style={{ flex: 1 }}>
                        <View style={{ alignItems: 'center', top: 30, flexDirection: 'column' }}>
                            <Text style={{ fontSize: 15, color: '#156D90', }}>We apprecaite your time.</Text>
                            <Text style={{ fontSize: 15, color: '#156D90', }}>Help us improve our services further</Text>
                            <Text style={{ fontSize: 15, color: '#156D90', }}>Plaese share your reason for cancellation below</Text>
                        </View>

                        <View style={{ marginTop: 50,}}>
                            <View style={{ flexDirection: 'row',color:'#156d90',top:5}}>
                                <View style={{marginLeft:'10%',}}>
                                <Radio selected={false} color="green" />
                                </View>
                                <Text style={{ fontSize: 15 ,left:10,color:'#999999'}}>service Agent Was Wxpensive</Text>
                            </View>
                            <View style={{ flexDirection: 'row',color:'#156d90',top:10}}>
                                <View style={{marginLeft:'10%',}}>
                                <Radio selected={false} color="green" />
                                </View>
                                <Text style={{ fontSize: 15 ,left:10,color:'#999999'}}>inaccurate Evalution by the Agent</Text>
                            </View>
                            <View style={{ flexDirection: 'row',color:'#156d90',top:10}}>
                                <View style={{marginLeft:'10%',}}>
                                <Radio selected={false} color="green" />
                                </View>
                                <Text style={{ fontSize: 15 ,left:10,color:'#999999'}}>Service Agent Was Inexperienced</Text>
                            </View>
                            <View style={{ flexDirection: 'row',color:'#156d90',top:10}}>
                                <View style={{marginLeft:'10%',}}>
                                <Radio selected={false} color="green" />
                                </View>
                                <Text style={{ fontSize: 15 ,left:10,color:'#999999'}}>Service Agent Was Lacked Professionalism</Text>
                            </View>
                            <View style={{ flexDirection: 'row',color:'#156d90',top:10}}>
                                <View style={{marginLeft:'10%',}}>
                                <Radio selected={false} color="green" />
                                </View>
                                <Text style={{ fontSize: 15 ,left:10,color:'#999999'}}>Service Agent Lacked Hygiene</Text>
                            </View>
                            <View style={{ flexDirection: 'row',color:'#156d90',top:10}}>
                                <View style={{marginLeft:'10%',}}>
                                <Radio selected={false} color="green"  />
                                </View>
                                <Text style={{ fontSize: 15 ,left:10,color:'#999999'}}>Service Agent Lacked Basic Commination</Text>
                            </View>
                            <View style={{ flexDirection: 'row',color:'#156d90',top:10}}>
                                <View style={{marginLeft:'10%',}}>
                                <Radio selected={false} color="green" />
                                </View>
                                <Text style={{ fontSize: 15 ,left:10,color:'#999999'}}>Service Agent Was Inexperienced</Text>
                            </View>
                        </View>

                        <View style={{ borderColor: '#20ACA3', borderWidth: 1, padding: 20, margin: 20,height:'20%'}}>
                            <Textarea
                            placeholder={"Other Reasons"}
                            style={{top:-20,left:-10,color:'#999999'}}
                            />
                        </View>

                        <TouchableOpacity style={{ alignItems: 'center', }}>
                            <LinearGradient
                                colors={theme.color.gRight}
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                style={{ borderRadius: 5, width: '50%', height: 50, alignItems: 'center', marginTop: 20 }}
                            >
                                <Text style={{
                                    width: '100%',
                                    alignItems: 'center',
                                    marginTop: 12,
                                    paddingLeft: 50, paddingRight: 50,
                                    color: "#fff", fontWeight: '300', fontSize: 15, justifyContent: 'center'
                                }}
                                >
                                    Submit & Close
                            </Text>
                            </LinearGradient>
                        </TouchableOpacity>

                    </View>
                </Content>
            </Container>

        )
    }
}