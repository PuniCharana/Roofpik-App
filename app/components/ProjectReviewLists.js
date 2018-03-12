import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
} from 'react-native';

export default ProjectReviewLists = (props) => {

    const review = props.review;

    date = (unixTime) => {
        var d = new Date(unixTime)
        var dateString = (d.getDay() + 1) + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
        return dateString;
    }

    camelCaseName = (name) => {
        if(name) {
            return name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
        } else {
            return ''
        }
        
    }

    return (
        <View style={styles.userReviews}>
            <Image style={styles.userThumbnail}
                source={{ uri: 'http://www.roofpik.com/images/general/noImage.png' }} />
            <View style={styles.userReview}>
                <Text>{camelCaseName(review.name)} | {date(review.date)}</Text>
                <Text style={styles.reviewTitle}>{camelCaseName(review.title)}</Text>
                <Text>{review.details}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    userReviews: {
        width: '100%',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
    },
    userThumbnail: {
        margin: 10,
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    userReview: {
        padding: 10,
        flex: 1
    },
    reviewTitle: {
        fontSize: 16,
        fontWeight: 'bold'
    }
});