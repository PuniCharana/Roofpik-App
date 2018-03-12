import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

const Partners = (props) => {
    const { title, thumbnail } = props;
    return (
        <View style={{ width: '33%', justifyContent: 'center', alignItems: 'center' }}>
            <Image source={{ uri: thumbnail }} style={{ width: 50, height: 50 }} />
            <Text style={{ textAlign: 'center', padding: 16 }} >{title}</Text>
        </View>
    )
}

export default Partners;