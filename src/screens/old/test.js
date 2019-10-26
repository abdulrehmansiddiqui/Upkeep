import React, { Component } from 'react';
import { View } from 'react-native';

export default class App extends Component {
  render() {
    const gradientHeight=500;
    const gradientBackground  = 'purple';
        const data = Array.from({ length: gradientHeight });
        return (
            <View style={{flex:1}}>
                {data.map((_, i) => (
                    <View
                        key={i}
                        style={{
                            backgroundColor: gradientBackground,
                            bottom: (gradientHeight - i),
                            opacity: (1 / gradientHeight) * (i + 1)
                        }}
                    />
                ))}
            </View>
        );
  }
}