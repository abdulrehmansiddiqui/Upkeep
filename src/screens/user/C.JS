import React, { Component } from "react";
import { Button, FAB, IconButton } from "react-native-paper";
import {
  Platform,
  Text,
  View,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity
} from "react-native";
import { Constants, Location, Permissions, MapView, TaskManager } from "expo";
import { connect } from "react-redux";
import firebase from "../../config/firebase";
import { loginUser } from "../../redux/Action/userAction";

class Circle extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <IconButton
          icon="keyboard-backspace"
          size={20}
          onPress={() => navigation.navigate("Home")}
        />
      )
    };
  };
  constructor(props) {
    super(props);
    this.state = {
      members: [],
      flag: true
    };
  }

  sendNotifiaction() {
    this.setState({ loading: true });
    const { members } = this.state;
    console.log("1****", members);
    members.map(v => {
      fetch("https://exp.host/--/api/v2/push/send", {
        body: JSON.stringify({
          to: `ExponentPushToken[${v.expoToken}]`,

          title: v.name, // Notification title

          body: "Now at this time " + v.name + " In please help... ", // Notification body

          data: {}
        }),
        headers: {
          "Content-Type": "application/json"
        },

        method: "POST"
      }).then(() => {
        console.log("2***", members);

        this.setState({ loading: false });
      });
    });

    Alert.alert("Notification", "Your Notification Send Successfully");
  }
  componentWillReceiveProps(n, p) {
    const membersArrays = Object.values(n.groupData.members);
    this.setState({ members: [] }, () => this.fetchData(membersArrays));
  }

  async fetchData(membersArray) {
    const { members } = this.state;

    console.log("componentDidMountlengt ", membersArray.length);
    // console.log("memberArray", membersArray[1].memberUid);
    //   for (i = 0; i < membersArray.length; ++i) {
    //     fetch(
    //       `https://familylocator-1.firebaseio.com/userInfo/${
    //         membersArray[i].memberUid
    //       }.json`
    //     )
    //       .then(data => data.json())
    //       .then(res => {
    //         members.push(res);
    //         this.setState({ members });
    //       });
    //     console.log("iiiii", i);
    //   }
    // }
    if (this.state.flag) {
      for (i = 0; i < membersArray.length; ++i) {
        await firebase
          .database()
          .ref("userInfo/" + membersArray[i].memberUid)
          .on("value", snap => {
            if (members.length) {
              var flag = true;
              for (j = 0; j < members.length; ++j) {
                if (snap.val().uid === members[j].uid) {
                  members[j].coords = snap.val().coords;
                  flag = false;
                  break;
                } else {
                  flag = true;
                }
              }
              flag && members.push(snap.val());
              console.log("snap wala data", snap.val());

              this.setState({ members });
            } else {
              members.push(snap.val());
              this.setState({ members });
            }
          });
      }
    }
  }

  componentDidMount() {
    //  this.setState({ members: Object.values(this.props.groupData.members) });
    const membersArray = Object.values(this.props.groupData.members);

    this.fetchData(membersArray);
  }

  render() {
    console.log("stateMap", this.state);
    console.log("render first load ", this.props.groupData);
    const { members } = this.state;

    // console.log("group*****", this.props.groupData);
    console.log("membersin map", members.length);
    if (members.length) {
      return (
        <View style={{ flex: 1 }}>
          {/* <FAB
            style={styles.fab}
            large
            icon="notifications"
            onPress={() => this.sendNotifiaction()}
          /> */}

          <MapView
            style={{ flex: 1 }}
            initialRegion={{
              latitude: members[0].coords.latitude,
              longitude: members[0].coords.longitude,
              latitudeDelta: 0.0943,
              longitudeDelta: 0.0834
            }}
          >
            {members.map(v => (
              <MapView.Marker
                key={v.uid}
                coordinate={{
                  latitude: v.coords.latitude,
                  longitude: v.coords.longitude
                }}
                title={v.name}
                description="Set Your Location"
              >
                <Image
                  source={{ uri: v.photoURL }}
                  style={{
                    width: 30,
                    height: 30,
                    borderTopLeftRadius: 70,
                    borderBottomLeftRadius: 70,
                    borderTopRightRadius: 70,
                    borderColor: "red",
                    borderWidth: 3
                  }}
                />
                {console.log("yewala", v)}
              </MapView.Marker>
            ))}
          </MapView>
          <Button
            icon="notifications"
            mode="outlined"
            loading={this.state.loading && "true"}
            onPress={() => this.sendNotifiaction()}
          >
            Emergency Notifiaction
          </Button>
        </View>
      );
    } else {
      return (
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            fontSize: 40,
            padding: 25,
            fontWeight: "bold"
          }}
        />
      );
    }
  }
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: "center"
  }
});

const mapstatetoprops = state => {
  return { user: state.userReducer, groupData: state.groupData };
};
const mapdispatchtoprops = dispatch => {
  return { loginUser: data => dispatch(loginUser(data)) };
};
export default connect(
  mapstatetoprops,
  mapdispatchtoprops
)(Circle);