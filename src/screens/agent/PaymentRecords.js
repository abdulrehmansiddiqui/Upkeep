import React, { Component } from "react";
import { View, ScrollView, Image } from "react-native";
import {
  Row,
  Text,
  Picker,
  Content,
  Form,
  Item,
  Input,
  CheckBox
} from "native-base";
import Icon from "react-native-vector-icons/Fontisto";
import { theme } from "../../style/theme";
import { LinearGradient } from "expo-linear-gradient";

export default class PaymentRecords extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: undefined
    };
  }
  onValueChange1(value) {
    this.setState({
      selected1: value
    });
  }

  render() {
    return (
      <ScrollView style={{}}>
        <Row style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-around",
              flexDirection: "row"
            }}
          >
            <Content>
              <View
                style={{
                  backgroundColor: "#e8e8e8",
                  borderLeftWidth: 3,
                  borderLeftColor: theme.color.inputSide,
                  marginBottom: 10,
                  padding: 10
                }}
              >
                <Text
                  style={{ color: "#999999", fontSize: 20, marginLeft: 20 }}
                >
                  Sort by Agent:
                </Text>
              </View>
              <View style={{ marginBottom: 10, fontSize: 40 }}>
                {/* <Item style={{marginBottom:20}}> */}
                <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  style={{ marginLeft: 20, fontSize: 40 }}
                  placeholder="Select"
                  placeholderStyle={{ color: "#bfc6ea" }}
                  placeholderIconColor="#007aff"
                  selectedValue={this.state.selected1}
                  onValueChange={this.onValueChange1.bind(this)}
                >
                  <Picker.Item label="Sort by Agent" value="key0" />
                  <Picker.Item label="abcd" value="key1" />
                </Picker>
              </View>
              {/* </Item> */}
              <View
                style={{
                  backgroundColor: "#e8e8e8",
                  borderLeftWidth: 3,
                  borderLeftColor: theme.color.inputSide,
                  marginBottom: 10,
                  padding: 10
                }}
              >
                <Text
                  style={{ color: "#999999", fontSize: 20, marginLeft: 20 }}
                >
                  Filter by status:
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  justifyContent: "space-around"
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ marginTop: 2 }}>Paid</Text>
                  <CheckBox
                    value={this.state.checked}
                    style={{ borderColor: "#20ACA3" }}
                    onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    }
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 30
                  }}
                >
                  <Text style={{ marginTop: 2 }}>Pending</Text>
                  <CheckBox
                    value={this.state.checked}
                    style={{ borderColor: "#20ACA3" }}
                    onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#e8e8e8",
                  borderLeftWidth: 3,
                  borderLeftColor: theme.color.inputSide,
                  marginBottom: 10,
                  padding: 10
                }}
              >
                <Item>
                  <Text
                    style={{ color: "#999999", fontSize: 20, marginLeft: 20 }}
                  >
                    Filter by mode:
                  </Text>
                </Item>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  justifyContent: "space-around"
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ marginTop: 2 }}>Cash</Text>
                  <CheckBox
                    value={this.state.checked}
                    style={{ borderColor: "#20ACA3" }}
                    onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    }
                  />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingLeft: 30
                  }}
                >
                  <Text style={{ marginTop: 2, borderColor: "#20ACA3" }}>
                    Online
                  </Text>
                  <CheckBox
                    value={this.state.checked}
                    style={{ borderColor: "#20ACA3" }}
                    onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    }
                  />
                </View>
              </View>
              <View
                style={{
                  backgroundColor: "#e8e8e8",
                  borderLeftWidth: 3,
                  borderLeftColor: theme.color.inputSide,
                  marginBottom: 10,
                  padding: 10
                }}
              >
                <Item>
                  <Text
                    style={{ color: "#999999", fontSize: 20, marginLeft: 20 }}
                  >
                    Filter by date
                  </Text>
                </Item>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                  justifyContent: "space-around"
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#45BF9E",
                    padding: 7,
                    borderRadius: 5
                  }}
                >
                  <Text style={{ color: "#999999" }}>dd/mm/yy </Text>
                  <Icon
                    name="date"
                    style={{
                      color: theme.color.black,
                      fontSize: 20,
                      marginLeft: 5
                    }}
                  />
                </View>
                <View>
                  <Text
                    style={{ color: "#999999", fontSize: 25, color: "#000" }}
                  >
                    to
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    // width:'40%',
                    alignItems: "center",
                    borderWidth: 1,
                    borderColor: "#45BF9E",
                    padding: 7,
                    borderRadius: 5
                  }}
                >
                  <Text style={{ color: "#999999" }}>dd/mm/yy </Text>
                  <Icon
                    name="date"
                    style={{ color: theme.color.black, fontSize: 20 }}
                  />
                </View>
              </View>

              <View style={{ alignItems: "center" }}>
                <LinearGradient
                  colors={theme.color.gRight}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                    borderRadius: 5,
                    width: "50%",
                    height: 50,
                    alignItems: "center",
                    marginTop: 20
                  }}
                >
                  <Text
                    style={{
                      width: 100,
                      alignItems: "center",
                      marginTop: 12,
                      marginLeft: 50,
                      color: "#fff",
                      fontWeight: "300",
                      fontSize: 15,
                      justifyContent: "center"
                    }}
                    onPress={() => {
                      this.props.navigation.navigate("Profile");
                    }}
                  >
                    Display
                  </Text>
                </LinearGradient>
              </View>
            </Content>
          </View>
        </Row>
      </ScrollView>
    );
  }
}
