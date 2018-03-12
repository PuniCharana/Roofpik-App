import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import { Icon } from 'native-base';

const RoofpikService = (props) => {

    const { color, icon, title, description } = props;

    return (
        <View style={styles.service}>
            <View style={styles.serviceTitle}>
                <Icon style={{ fontSize: 27, color: color }} name={icon} />
                <Text style={{ textAlign: 'center', color: '#000' }}>{title}</Text>
            </View>
            <View style={styles.serviceDescription}>
                <Text style={{ padding: 10, textAlign: 'center' }}>{description}</Text>
            </View>
        </View>
    )
}

const styles = {
    service: {
        padding: 20,
        flexDirection: 'row',
    },
    serviceTitle: {
        flex: 1,
        borderColor: '#ddd',
        borderRightWidth: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    serviceDescription: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
}

export default RoofpikService;