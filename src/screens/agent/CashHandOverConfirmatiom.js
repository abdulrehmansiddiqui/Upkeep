import React, { Component } from 'react';
import { View, ScrollView, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Row, Text, Icon, Content, Form, Item, Accordion } from 'native-base';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={{ marginTop: 40, marginLeft: 20, marginRight: 20 ,marginBottom:30}}>
          <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
            <View style={{ flexDirection: 'row' }}>
              <Icon type="Ionicons" name='ios-calendar' style={{ color: "#1CB9A3", fontSize: 25 }} />
              <Text style={{ color: "#999", fontSize: 20, marginLeft: 5 }}> dd/mm/yy</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
              <Icon type="Entypo" name='clock' style={{ color: "#1CB9A3", fontSize: 25 }} />
              <Text style={{ color: "#999", fontSize: 20, marginLeft: 5 }}>00:00 am</Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20, padding: 20, borderColor: "#36DAA5", borderWidth: 2, borderRadius: 5, flexDirection: "column",}}>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ width: "20%" }}>
              <Image
                source={require("../../assets/user.png")}
                style={{ resizeMode: "contain", width: 50, height: 50, }}
              />
            </View>
            <View style={{ flexDirection: "column", width: "60%" }}>
              <Text style={{ color: "#23759E", fontSize: 16 }}>Paid in Cash BD 00 000</Text>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Service Agent name</Text>
            </View>
            <View style={{ width: "10%" }}>
              <Icon type="MaterialCommunityIcons" name='checkbox-blank-outline' style={{ color: "#1CB9A3", fontSize: 25 }} />
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ flexDirection: "column", width: "40%" }}>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Receipt:00000</Text>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Token 00000</Text>
            </View>
            <View style={{ flexDirection: "column", width: "25%" }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="Ionicons" name='ios-calendar' style={{ color: "#999", fontSize: 16 }} />
                <Text style={{ color: "#999", fontSize: 14, marginLeft: 5 }}> dd/mm/yy</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="Entypo" name='clock' style={{ color: "#999", fontSize: 16 }} />
                <Text style={{ color: "#999", fontSize: 14, marginLeft: 5 }}>00:00 am</Text>
              </View>
            </View>
            <View style={{ width: "25%" }}>
              <View style={{ position:"absolute" ,bottom:0, right:0,backgroundColor:"#36DAA5",alignItems:"center",borderRadius:5}}>
              <Text style={{color:"#FFF",margin:5,marginLeft:20,marginRight:20}}>Paid</Text></View>
            </View>
          </View>
        </View>


        <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20, padding: 20, borderColor: "#36DAA5", borderWidth: 2, borderRadius: 5, flexDirection: "column",}}>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ width: "20%" }}>
              <Image
                source={require("../../assets/user.png")}
                style={{ resizeMode: "contain", width: 50, height: 50, }}
              />
            </View>
            <View style={{ flexDirection: "column", width: "60%" }}>
              <Text style={{ color: "#23759E", fontSize: 16 }}>Paid in Cash BD 00 000</Text>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Service Agent name</Text>
            </View>
            <View style={{ width: "10%" }}>
              <Icon type="MaterialCommunityIcons" name='checkbox-blank-outline' style={{ color: "#1CB9A3", fontSize: 25 }} />
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ flexDirection: "column", width: "40%" }}>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Receipt:00000</Text>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Token 00000</Text>
            </View>
            <View style={{ flexDirection: "column", width: "25%" }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="Ionicons" name='ios-calendar' style={{ color: "#999", fontSize: 16 }} />
                <Text style={{ color: "#999", fontSize: 14, marginLeft: 5 }}> dd/mm/yy</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="Entypo" name='clock' style={{ color: "#999", fontSize: 16 }} />
                <Text style={{ color: "#999", fontSize: 14, marginLeft: 5 }}>00:00 am</Text>
              </View>
            </View>
            <View style={{ width: "25%" }}>
              <View style={{ position:"absolute" ,bottom:0, right:0,backgroundColor:"#36DAA5",alignItems:"center",borderRadius:5}}>
              <Text style={{color:"#FFF",margin:5,marginLeft:20,marginRight:20}}>Paid</Text></View>
            </View>
          </View>
        </View>

        
        <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20, padding: 20, borderColor: "#36DAA5", borderWidth: 2, borderRadius: 5, flexDirection: "column",}}>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ width: "20%" }}>
              <Image
                source={require("../../assets/user.png")}
                style={{ resizeMode: "contain", width: 50, height: 50, }}
              />
            </View>
            <View style={{ flexDirection: "column", width: "60%" }}>
              <Text style={{ color: "#23759E", fontSize: 16 }}>Paid in Cash BD 00 000</Text>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Service Agent name</Text>
            </View>
            <View style={{ width: "10%" }}>
              <Icon type="MaterialCommunityIcons" name='checkbox-blank-outline' style={{ color: "#1CB9A3", fontSize: 25 }} />
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ flexDirection: "column", width: "40%" }}>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Receipt:00000</Text>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Token 00000</Text>
            </View>
            <View style={{ flexDirection: "column", width: "25%" }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="Ionicons" name='ios-calendar' style={{ color: "#999", fontSize: 16 }} />
                <Text style={{ color: "#999", fontSize: 14, marginLeft: 5 }}> dd/mm/yy</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="Entypo" name='clock' style={{ color: "#999", fontSize: 16 }} />
                <Text style={{ color: "#999", fontSize: 14, marginLeft: 5 }}>00:00 am</Text>
              </View>
            </View>
            <View style={{ width: "25%" }}>
              <View style={{ position:"absolute" ,bottom:0, right:0,backgroundColor:"#36DAA5",alignItems:"center",borderRadius:5}}>
              <Text style={{color:"#FFF",margin:5,marginLeft:20,marginRight:20}}>Paid</Text></View>
            </View>
          </View>
        </View>

        
        <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20, padding: 20, borderColor: "#36DAA5", borderWidth: 2, borderRadius: 5, flexDirection: "column",}}>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ width: "20%" }}>
              <Image
                source={require("../../assets/user.png")}
                style={{ resizeMode: "contain", width: 50, height: 50, }}
              />
            </View>
            <View style={{ flexDirection: "column", width: "60%" }}>
              <Text style={{ color: "#23759E", fontSize: 16 }}>Paid in Cash BD 00 000</Text>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Service Agent name</Text>
            </View>
            <View style={{ width: "10%" }}>
              <Icon type="MaterialCommunityIcons" name='checkbox-blank-outline' style={{ color: "#1CB9A3", fontSize: 25 }} />
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ flexDirection: "column", width: "40%" }}>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Receipt:00000</Text>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Token 00000</Text>
            </View>
            <View style={{ flexDirection: "column", width: "25%" }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="Ionicons" name='ios-calendar' style={{ color: "#999", fontSize: 16 }} />
                <Text style={{ color: "#999", fontSize: 14, marginLeft: 5 }}> dd/mm/yy</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="Entypo" name='clock' style={{ color: "#999", fontSize: 16 }} />
                <Text style={{ color: "#999", fontSize: 14, marginLeft: 5 }}>00:00 am</Text>
              </View>
            </View>
            <View style={{ width: "25%" }}>
              <View style={{ position:"absolute" ,bottom:0, right:0,backgroundColor:"#36DAA5",alignItems:"center",borderRadius:5}}>
              <Text style={{color:"#FFF",margin:5,marginLeft:20,marginRight:20}}>Paid</Text></View>
            </View>
          </View>
        </View>

        
        <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20, padding: 20, borderColor: "#36DAA5", borderWidth: 2, borderRadius: 5, flexDirection: "column",}}>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ width: "20%" }}>
              <Image
                source={require("../../assets/user.png")}
                style={{ resizeMode: "contain", width: 50, height: 50, }}
              />
            </View>
            <View style={{ flexDirection: "column", width: "60%" }}>
              <Text style={{ color: "#23759E", fontSize: 16 }}>Paid in Cash BD 00 000</Text>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Service Agent name</Text>
            </View>
            <View style={{ width: "10%" }}>
              <Icon type="MaterialCommunityIcons" name='checkbox-blank-outline' style={{ color: "#1CB9A3", fontSize: 25 }} />
            </View>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "space-between"}}>
            <View style={{ flexDirection: "column", width: "40%" }}>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Receipt:00000</Text>
              <Text style={{ color: "#ccc", fontSize: 14 }}>Token 00000</Text>
            </View>
            <View style={{ flexDirection: "column", width: "25%" }}>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="Ionicons" name='ios-calendar' style={{ color: "#999", fontSize: 16 }} />
                <Text style={{ color: "#999", fontSize: 14, marginLeft: 5 }}> dd/mm/yy</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon type="Entypo" name='clock' style={{ color: "#999", fontSize: 16 }} />
                <Text style={{ color: "#999", fontSize: 14, marginLeft: 5 }}>00:00 am</Text>
              </View>
            </View>
            <View style={{ width: "25%" }}>
              <View style={{ position:"absolute" ,bottom:0, right:0,backgroundColor:"#36DAA5",alignItems:"center",borderRadius:5}}>
              <Text style={{color:"#FFF",margin:5,marginLeft:20,marginRight:20}}>Paid</Text></View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#999", fontSize: 18, marginLeft: 10,
    marginRight: 10
  },
});