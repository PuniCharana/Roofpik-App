import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
} from 'react-native';

export default RoofpikAutoComplete = (props) => {

    const foo = props.items.map((item, index) => (
        <TouchableOpacity onPress={() => props.onItemSelected(item)} key={index}>
            <Text style={styles.item} >{item}</Text>
        </TouchableOpacity>
    ))

    return (
        <View style={styles.container}>
            <ScrollView>
                {foo}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        padding: 10,
        flexDirection: 'column',
        maxHeight: 220,
        overflow: 'hidden'
    },
    item: {
        padding: 5,
        backgroundColor: '#fff',
    }
});