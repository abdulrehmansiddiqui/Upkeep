import React, { Component } from 'react'
import { View } from 'react-native'
import { Header, Text, Row, H1, } from "native-base";
import Modal from 'react-native-modalbox'
import Icon from 'react-native-vector-icons/Entypo'


export default class Modal1 extends Component {
    constructor(props) {
        super(props)
        this.state={
        }
        
    }

    showModal = () => {
        this.refs.modal.open();
    }

    render() {
        return (
            <Modal
                ref={"modal"}
                style={{
                    justifyContent: 'center',
                    borderRadius: 5,
                    shadowRadius: 10,
                    width: '80%',
                    height: 400,
                    // top:'25%'
                }}
                position='center' backdrap={true}
            >
                     <Row style={{}}>
                    <Text style={{
                        backgroundColor: '#45BF9E',
                        color: '#fff',
                        width: '100%',
                        paddingTop: 20,
                        paddingLeft: 10,
                    }}>Use Location ?</Text>
                </Row>
                <Row style={{ backgroundColor: '#fff' ,marginLeft:10}}>
                    <Text style={{
                        // backgroundColor:'#45BF9E',
                        color: '#000',
                        width: '100%',
                        paddingTop: 10,
                        paddingLeft: 10,
                    }}>This app want to chage your device settings:</Text>
                </Row>
                <Row style={{ flexDirection: 'row', backgroundColor: '#fff',marginLeft:10 }}>
                    <Icon name='location-pin' size={30} style={{ paddingLeft: 5 }} />
                    <Text style={{ width: '80%', paddingLeft: 10 }}>User GPS,Wi-Fi and mobile netword for location</Text>
                </Row>
                <Row style={{ flexDirection: 'row', backgroundColor: '#fff',marginLeft:10,top:-15}}>
                    <Icon name='google-' size={30} style={{ paddingLeft: 5 }} />
                    <Text style={{ width: '80%', paddingLeft: 10 }}>
                        User GPS,Wi-Fi and mobile netword for location to Google even when no apps are running
                        </Text>
                </Row>
                <Row style={{ flexDirection: "row", justifyContent: 'space-between',alignItems:'center'}} >
                    <View style={{
                        backgroundColor: '#20ACA3',
                        alignItems:'center',
                        width: '40%',
                        padding:20,
                        height:'20%',
                        marginLeft: 20,
                        borderRadius: 10,
                        }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "300",
                        color: "#fff",
                        top:-15,}}>No</Text>
                    </View>
                    <View style={{
                        backgroundColor: '#20ACA3',
                        alignItems:'center',
                        width: '40%',
                        padding:20,
                        height:'20%',
                        marginRight: 10,
                        borderRadius: 10,
                        }}>
                    <Text style={{
                        fontSize: 20,
                        fontWeight: "300",
                        color: "#fff",
                        top:-15,}}>Yes</Text>
                    </View>
                </Row>
           
            </Modal>

        )
    }
}