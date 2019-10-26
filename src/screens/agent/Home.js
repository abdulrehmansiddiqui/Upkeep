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

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      next1: true,
      next2: true,
      next3: true
    };
  }

  accordion1 = () => {
    return (
      <View style={{ borderColor: "#36DAA5", borderWidth: 1, padding: 10 }}>
        <View style={{ position: "absolute", right: 10, top: 20 }}>
          <Text style={{ color: "#999", fontSize: 22, marginLeft: 5 }}>
            {" "}
            Token: 00000
          </Text>
        </View>
        <View style={styles.aBorderText}>
          <Icon name="ios-calendar" style={styles.icon} />
          <Text style={styles.text}> dd/mm/yy</Text>
        </View>
        <View style={styles.aBorderText}>
          <Icon name="ios-clock" style={styles.icon} />
          <Text style={styles.text}>00:00 am</Text>
        </View>
        <View style={styles.aBorderText}>
          <Icon name="ios-image" style={styles.icon} />
          <Text style={styles.text}>0 Images available</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("liveT");
          }}
        >
          <View style={styles.aBorderText}>
            <Icon name="ios-pin" style={styles.icon} />
            <Text style={styles.text}>Street Name, Area Name</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  accordion2 = () => {
    return (
      <View style={{ borderColor: "#36DAA5", borderWidth: 1, padding: 10 }}>
        <View style={{ position: "absolute", right: 10, top: 20 }}>
          <Text style={{ color: "#999", fontSize: 22, marginLeft: 5 }}>
            {" "}
            Token: 00000
          </Text>
        </View>
        <View style={styles.aBorderText}>
          <Icon name="ios-calendar" style={styles.icon} />
          <Text style={styles.text}> dd/mm/yy</Text>
        </View>
        <View style={styles.aBorderText}>
          <Icon name="ios-clock" style={styles.icon} />
          <Text style={styles.text}>00:00 am</Text>
        </View>
        <View style={styles.aBorderText}>
          <Icon name="ios-image" style={styles.icon} />
          <Text style={styles.text}>4 Images available</Text>
        </View>
        <View style={styles.aBorderText}>
          <Image
            source={require("../../assets/image1.png")}
            style={{
              resizeMode: "contain",
              width: 70,
              height: 70,
              marginRight: 10
            }}
          />
          <Image
            source={require("../../assets/image2.png")}
            style={{
              resizeMode: "contain",
              width: 70,
              height: 70,
              marginRight: 10
            }}
          />
          <Image
            source={require("../../assets/image3.png")}
            style={{
              resizeMode: "contain",
              width: 70,
              height: 70,
              marginRight: 10
            }}
          />
          <Image
            source={require("../../assets/image4.png")}
            style={{
              resizeMode: "contain",
              width: 70,
              height: 70,
              marginRight: 10
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("liveT");
          }}
        >
          <View style={styles.aBorderText}>
            <Icon name="ios-pin" style={styles.icon} />
            <Text style={styles.text}>
              Flat:00 Building: 000, Road: 0000, Block: 000, Street Name, Area
              Name, District, City
            </Text>
          </View>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10,
            marginTop: 10
          }}
        >
          <TouchableOpacity
            style={{ padding: 5, borderRadius: 5, backgroundColor: "#ccc" }}
          >
            <Text style={{ color: "#FFF", marginLeft: 15, marginRight: 15 }}>
              Accept
            </Text>
          </TouchableOpacity>

          <LinearGradient
            colors={theme.color.gRight}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ padding: 5, borderRadius: 5 }}
          >
            <TouchableOpacity>
              <Text style={{ color: "#FFF", marginLeft: 15, marginRight: 15 }}>
                Accept
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  };
  accordion3 = () => {
    return (
      <View style={{ borderColor: "#36DAA5", borderWidth: 1, padding: 10 }}>
        <View style={{ position: "absolute", right: 10, top: 20 }}>
          <Text style={{ color: "#999", fontSize: 22, marginLeft: 5 }}>
            {" "}
            Token: 00000
          </Text>
        </View>
        <View style={styles.aBorderText}>
          <Icon name="ios-calendar" style={styles.icon} />
          <Text style={styles.text}> dd/mm/yy</Text>
        </View>
        <View style={styles.aBorderText}>
          <Icon name="ios-clock" style={styles.icon} />
          <Text style={styles.text}>00:00 am</Text>
        </View>
        <View style={styles.aBorderText}>
          <Icon name="ios-image" style={styles.icon} />
          <Text style={styles.text}>0 Images available</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate("liveT");
          }}
        >
          <View style={styles.aBorderText}>
            <Icon name="ios-pin" style={styles.icon} />
            <Text style={styles.text}>Street Name, Area Name</Text>
          </View>
        </TouchableOpacity>
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
        <Row style={{ marginTop: 40, marginLeft: 20, marginRight: 20 }}>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row"
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="ios-calendar"
                style={{ color: "#1CB9A3", fontSize: 25 }}
              />
              <Text style={{ color: "#999", fontSize: 20, marginLeft: 5 }}>
                {" "}
                dd/mm/yy
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <Icon
                name="ios-clock"
                style={{ color: "#1CB9A3", fontSize: 25 }}
              />
              <Text style={{ color: "#999", fontSize: 20, marginLeft: 5 }}>
                00:00 am
              </Text>
            </View>
          </View>
        </Row>
        <View style={styles.aBorder}>
          <LinearGradient
            colors={theme.color.gRight}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.accordion}
          >
            <View
              style={{ justifyContent: "space-between", flexDirection: "row" }}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("ServiceEstimation");
                }}
              >
                <Text style={styles.heading}>New Sink Installation</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={this.displayaccordion1}>
                <Icon
                  name="ios-arrow-up"
                  style={{ color: "#FFF", fontSize: 25, marginRight: 10 }}
                />
              </TouchableOpacity>
            </View>
          </LinearGradient>
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
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row"
                }}
              >
                <Text style={styles.heading}>Kitchen Water Leak</Text>
                <Icon
                  name="ios-arrow-down"
                  style={{ color: "#FFF", fontSize: 25, marginRight: 10 }}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {this.state.next2 ? this.accordion2() : null}
        </View>

        <View style={styles.aBorder}>
          <TouchableOpacity onPress={this.displayaccordion3}>
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
                <Text style={styles.heading}>New Sink Installation</Text>
                <Icon
                  name="ios-arrow-down"
                  style={{ color: "#FFF", fontSize: 25, marginRight: 10 }}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          {this.state.next3 ? this.accordion3() : null}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    color: "#999",
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
