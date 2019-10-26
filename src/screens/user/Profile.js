import React, { Component } from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Carousel, { Pagination } from 'react-native-snap-carousel';

const SCREEN_WIDTH = Dimensions.get('window').width

export default class Profile extends Component {
    static navigationOptions = {

        title: "Profile",
        headerTitleStyle: {
            color: "black",
            fontWeight: "100",
            fontSize: 16,
        },
    };

    componentDidMount() {
        console.log(SCREEN_WIDTH);
    }

    constructor(props) {
        super(props);
        this.state = {
            entries: [
                { title: 'Abdul' },
                { title: 'Rehman' },
                { title: 'Siddiqui' },
            ],
            activeSlide:1,
        };
    }

    _renderItem({ item, index }) {
        return (
            <View
                style={{
                    borderRadius: 10,
                    marginTop:20,
                    backgroundColor: 'rgba(14, 67, 93, 0.82)',
                    borderWidth: 1,
                    borderColor: "#ccc",
                    padding: 10,
                    height: "80%",
                    width: "100%",
                    alignItems: "center"
                }}
            >
                <View style={{ position: "absolute", right: 10, top: 10 }}>
                    <Icon name="share" style={{ color: "#fff", fontSize: 20 }} />
                </View>

                <View style={{
                    margin: 25,
                    borderRadius: 10,
                    borderWidth: 2,
                    borderColor: "#fff",
                    borderRadius: 10,
                }}
                >
                    <Image
                        source={require("../../assets/user.jpg")}
                        style={{ resizeMode: "contain", width: 130, height: 130, borderRadius: 10, }}
                    />
                </View>

                <Text style={{ color: "#F7CF09", fontSize: 20, fontWeight: "bold" }}>{item.title}</Text>
                <Text style={{ color: "#ccc", fontSize: 18, }}>Plumber / Electricaian</Text>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Icon name="star" style={{ color: "#fff", fontSize: 30, marginRight: 10 }} />
                    <Icon name="star" style={{ color: "#fff", fontSize: 30, marginRight: 10 }} />
                    <Icon name="star" style={{ color: "#fff", fontSize: 30, marginRight: 10 }} />
                </View>

                <View style={{ flexDirection: "row", marginTop: 20 }}>
                    <Icon type="Entypo" name="location-pin" style={{ color: "#ccc", fontSize: 25, marginRight: 10 }} />
                    <Text style={{ color: "#ccc", fontSize: 18, }}>00 min away</Text>
                </View>


                <View style={{ position: "absolute", bottom: -20 }}>
                    <View style={{ backgroundColor: "#009F3F", borderColor: "#FFF", borderWidth: 2, borderRadius: 5, padding: 5 }}>
                        <Text style={{ color: "#FFF", fontSize: 20, marginLeft: 20, marginRight: 20 }}>BOOK </Text>
                    </View>
                </View>




            </View>
        );
    }

    get pagination() {
        const { entries, activeSlide } = this.state;
        // for(i=1; i=entries.length; i++){
        //     return(

        //     );
        // }
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    backgroundColor: 'rgba(0, 0, 0, 0.92)'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return (
            <ImageBackground
                source={require("../../assets/welcome/bg.png")}
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={350}
                    itemWidth={300}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />

                {this.pagination}

            </ImageBackground>
        );
    }
}
//////////////////////////////////

const styles = StyleSheet.create({
    title: {
        color: "white",
        padding: 10,
        fontSize: 25
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }
});



