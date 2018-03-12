import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default RoofpikAutoComplete = (props) => {

    const suggestion = props.items.map((item, index) => (
        <View key={index} style={styles.container}>
            <TouchableOpacity onPress={() => props.onItemSelected(item)} >
                <Text style={styles.item} >{item.name}</Text>
            </TouchableOpacity>
        </View>
    ))

    return (
        <View>
            <TextInput
                value={props.value}
                placeholderTextColor='#999999'
                placeholder="Search by Project"
                onChangeText={(text) => props.onChangeText(text)}
                onFocus={props.onFocus}
            />

            {suggestion}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 220,
    },
    item: {
        padding: 5,
        backgroundColor: '#fff',
    }
});