import React, { Component } from 'react';
import { View, Text, ScrollView,TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

export default class CustomerRecord extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <ScrollView>
                <View style={{ margin: 30 }}>
                    <View style={{ flexDirection: "row-reverse",borderColor:"#ccc", borderBottomWidth: 1, paddingBottom:15,paddingTop:15}}>
                        <Icon type="AntDesign" name="pluscircle" style={{color:"#ccc"}} />
                    </View>
                    <View style={{ flexDirection: "row",justifyContent:"space-between",borderColor:"#ccc", borderBottomWidth: 1,paddingBottom:15,paddingTop:15 }}>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{color:"#36DAA5",fontSize:16}}> Name Of the Customer </Text>
                            <Text style={{color:"#ccc"}}> Stree, Area, City </Text>
                        </View>
                        <TouchableOpacity>
                            <Icon type="FontAwesome5" name="ellipsis-v" style={{color:"#ccc"}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row",justifyContent:"space-between",borderColor:"#ccc", borderBottomWidth: 1,paddingBottom:15,paddingTop:15 }}>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{color:"#36DAA5",fontSize:16}}> Name Of the Customer </Text>
                            <Text style={{color:"#ccc"}}> Stree, Area, City </Text>
                        </View>
                        <TouchableOpacity>
                            <Icon type="FontAwesome5" name="ellipsis-v" style={{color:"#ccc"}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row",justifyContent:"space-between",borderColor:"#ccc", borderBottomWidth: 1,paddingBottom:15,paddingTop:15 }}>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{color:"#36DAA5",fontSize:16}}> Name Of the Customer </Text>
                            <Text style={{color:"#ccc"}}> Stree, Area, City </Text>
                        </View>
                        <TouchableOpacity>
                            <Icon type="FontAwesome5" name="ellipsis-v" style={{color:"#ccc"}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row",justifyContent:"space-between",borderColor:"#ccc", borderBottomWidth: 1,paddingBottom:15,paddingTop:15 }}>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{color:"#36DAA5",fontSize:16}}> Name Of the Customer </Text>
                            <Text style={{color:"#ccc"}}> Stree, Area, City </Text>
                        </View>
                        <TouchableOpacity>
                            <Icon type="FontAwesome5" name="ellipsis-v" style={{color:"#ccc"}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row",justifyContent:"space-between",borderColor:"#ccc", borderBottomWidth: 1,paddingBottom:15,paddingTop:15 }}>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{color:"#36DAA5",fontSize:16}}> Name Of the Customer </Text>
                            <Text style={{color:"#ccc"}}> Stree, Area, City </Text>
                        </View>
                        <TouchableOpacity>
                            <Icon type="FontAwesome5" name="ellipsis-v" style={{color:"#ccc"}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row",justifyContent:"space-between",borderColor:"#ccc", borderBottomWidth: 1,paddingBottom:15,paddingTop:15 }}>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{color:"#36DAA5",fontSize:16}}> Name Of the Customer </Text>
                            <Text style={{color:"#ccc"}}> Stree, Area, City </Text>
                        </View>
                        <TouchableOpacity>
                            <Icon type="FontAwesome5" name="ellipsis-v" style={{color:"#ccc"}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row",justifyContent:"space-between",borderColor:"#ccc", borderBottomWidth: 1,paddingBottom:15,paddingTop:15 }}>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{color:"#36DAA5",fontSize:16}}> Name Of the Customer </Text>
                            <Text style={{color:"#ccc"}}> Stree, Area, City </Text>
                        </View>
                        <TouchableOpacity>
                            <Icon type="FontAwesome5" name="ellipsis-v" style={{color:"#ccc"}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flexDirection: "row",justifyContent:"space-between",borderColor:"#ccc", borderBottomWidth: 1,paddingBottom:15,paddingTop:15 }}>
                        <View style={{flexDirection:"column"}}>
                            <Text style={{color:"#36DAA5",fontSize:16}}> Name Of the Customer </Text>
                            <Text style={{color:"#ccc"}}> Stree, Area, City </Text>
                        </View>
                        <TouchableOpacity>
                            <Icon type="FontAwesome5" name="ellipsis-v" style={{color:"#ccc"}} />
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}
