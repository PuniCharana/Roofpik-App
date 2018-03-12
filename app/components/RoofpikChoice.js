import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import { AirbnbRating } from 'react-native-ratings';
import { Radio } from 'native-base';

export default RoofpikChoice = (props) => {

    _yes = () => {
        props.onRadioSelected(1)
    }

    _no = () => {
        props.onRadioSelected(0)
    }

    _notSure = () => {
        props.onRadioSelected(2)
    }

    return (
        <View>
            <Text style={styles.container}>{props.title}</Text>
            <View style={styles.radioContainer}>
                <View style={{ flexDirection: 'row' }}>
                    <Radio selected={true} onPress={this._no} />
                    <Text>Yes</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Radio selected={true} onPress={this._yes} />
                    <Text>No</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <Radio selected={true} onPress={this._notSure} />
                    <Text>Not Sure</Text>
                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingTop: 10,
        paddingBottom: 10,
    },
    radioContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});