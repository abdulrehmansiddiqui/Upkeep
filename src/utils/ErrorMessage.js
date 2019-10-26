import React from 'react';
import {View, Text} from 'react-native';
// import {Style} from './Style';

const ErrorMessage = ({error}) => {
    return (
        <View style={{alignItems:'center'}}>
            <Text style={{
                color: 'gray',
                textAlign: 'justify',
                justifyContent: 'center',
                color: 'red',
            }}>{error}</Text>
        </View>
    );
};
export default ErrorMessage;
// module.exports = {ErrorMessage};
