import React, { Component } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Row, Text, Picker, Content, Form, Item, Accordion } from "native-base";
import Icon from "react-native-vector-icons/Ionicons";
import { theme } from "../../style/theme";
import { LinearGradient } from "expo-linear-gradient";
const dataArray = [
  { title: "New Sink Installation", content: "Lorem ipsum dolor sit amet" },
  { title: "Kitchen Water Leak", content: "Lorem ipsum dolor sit amet" }
];

export default class ServiceEstimation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next1: true,
      next2: true
    };
  }

  accordion1 = () => {
    return (
      <View style={{ borderColor: "#36DAA5", borderWidth: 1, padding: 10 }}>
        <Text style={styles.text}>
          Flat:00 Building: 000, Road: 0000, Block: 000, Street Name, Area Name,
          District, City
        </Text>
      </View>
    );
  };
  accordion2 = () => {
    return (
      <View style={{ borderColor: "#36DAA5", borderWidth: 1, padding: 10 }}>
        <View style={styles.aitem}>
          <Text style={styles.text}>Repariring Charges</Text>
          <Text style={styles.text}> BD00.000</Text>
        </View>
        <View
          style={{ flexDirection: "row-reverse", marginLeft: 5, marginTop: 5 }}
        >
          <Icon name="ios-add-circle-outline" style={styles.icon} />
        </View>
        <View style={styles.aitem}>
          <View style={{ width: "49%" }}>
            <Text style={styles.textsm}>No of the material 1</Text>
          </View>
          <View style={{ width: "20%" }}>
            <Text style={styles.textsm}>QTY1</Text>
          </View>
          <View style={{ width: "30%" }}>
            <Text style={styles.textsm}>BD00.000</Text>
          </View>
        </View>
        <View style={styles.aitem}>
          <View style={{ width: "49%" }}>
            <Text style={styles.textsm}>No of the material 2</Text>
          </View>
          <View style={{ width: "20%" }}>
            <Text style={styles.textsm}>QTY2</Text>
          </View>
          <View style={{ width: "30%" }}>
            <Text style={styles.textsm}>BD00.000</Text>
          </View>
        </View>
        <View style={styles.aitem}>
          <View style={{ width: "49%" }}>
            <Text style={styles.textsm}>No of the material 3</Text>
          </View>
          <View style={{ width: "20%" }}>
            <Text style={styles.textsm}>QTY3</Text>
          </View>
          <View style={{ width: "30%" }}>
            <Text style={styles.textsm}>BD00.000</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row-reverse",
            marginTop: 5,
            borderBottomWidth: 1,
            borderBottomColor: "#999",
            paddingBottom: 5
          }}
        >
          <View style={{ width: "30%" }}>
            <Text style={styles.textcolor}>BD00.000</Text>
          </View>
          <View style={{ width: "20%" }}>
            <Text style={styles.textcolor}> Total:</Text>
          </View>
        </View>
        <View style={{ flexDirection: "row", marginTop: 5 }}>
          <Text style={styles.textsm}>
            {" "}
            Estimated Complete on Time: 00:00 hours
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 10
          }}
        >
          <View>
            <View style={styles.aBorderText}>
              <Icon name="ios-calendar" style={styles.icon} />
              <Text style={styles.text}> dd/mm/yy</Text>
            </View>
            <View style={styles.aBorderText}>
              <Icon name="ios-clock" style={styles.icon} />
              <Text style={styles.text}>00:00 am</Text>
            </View>
          </View>
          <View>
            <LinearGradient
              colors={theme.color.gRight}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ padding: 5, borderRadius: 5 }}
            >
              <TouchableOpacity>
                <Text
                  style={{ color: "#FFF", marginLeft: 20, marginRight: 20 }}
                >
                  Submit
                </Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    );
  };

  displayaccordion1 = () => {
    this.setState({ next1: !this.state.next1 });
  };
  displayaccordion2 = () => {
    this.setState({ next2: !this.state.next2 });
  };
  displayaccordion3 = () => {
    this.setState({ next3: !this.state.next3 });
  };

  render() {
    return (
      <ScrollView>
        <Row style={{ marginTop: 20 }}>
          <View
            style={{ flex: 1, justifyContent: "center", flexDirection: "row" }}
          >
            <Text style={{ color: "#23759E", fontSize: 20 }}>
              Service Estimation
            </Text>
          </View>
        </Row>
        <View style={styles.aBorder}>
          <TouchableOpacity onPress={this.displayaccordion1}>
            <LinearGradient
              colors={theme.color.gRight}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.accordion}
            >
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}
              >
                <Text style={styles.heading}>Name of the Customer</Text>
                <Text style={styles.heading}>Token: 00000</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {this.state.next1 ? this.accordion1() : null}
        </View>

        <View style={styles.aBorder}>
          <TouchableOpacity onPress={this.displayaccordion2}>
            <LinearGradient
              colors={theme.color.gRight}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.accordion}
            >
              <View style={{ justifyContent: "center", flexDirection: "row" }}>
                <Text style={styles.heading}>Pro-Forma Inovice</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {this.state.next2 ? this.accordion2() : null}
        </View>
        <View style={theme.empty.em40} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  aitem: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    marginTop: 5,
    paddingBottom: 8,
    borderColor: "#999",
    borderBottomWidth: 1
  },
  text: {
    color: "#999",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10
  },
  textsm: {
    color: "#999",
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10
  },
  textcolor: {
    color: "#1CB9A3",
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10
  },
  icon: {
    color: "#1CB9A3",
    fontSize: 25
  },
  aBorderText: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 5,
    marginTop: 5
  },
  aBorder: {
    marginTop: 0,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "column"
  },
  accordion: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 15,
    width: "100%",
    padding: 10
  },
  heading: {
    fontSize: 18,
    fontWeight: "100",
    color: "#FFF"
  }
});
