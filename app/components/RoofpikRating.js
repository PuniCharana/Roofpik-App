import React from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import { AirbnbRating } from 'react-native-ratings';

export default RoofpikRating = (props) => {

    return (
        <View style={styles.container}>
            <View style={styles.ratingLabel}>
                <Text>{props.title}</Text>
            </View>
            <View style={styles.roofpikRating}>
                <AirbnbRating
                    type='custom'
                    size={20}
                    showRating={false}
                    defaultRating={props.defaultRating}
                    ratingColor='#2d2d2d'
                    onFinishRating={(rating) => props.onRatingChanged(rating)}
                />
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
    ratingLabel: {
        width: 100,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    roofpikRating: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    }
});