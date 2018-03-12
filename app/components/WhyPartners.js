import React from 'react';
import { Card, CardItem, Body, } from 'native-base';
import { Text, StyleSheet, Image, } from 'react-native';

const WhyPartners = (props) => {
    return (
        <Card >
            <CardItem>
                <Body style={styles.centerItem}>
                    <Image style={styles.cardImage} source={{ uri: props.thumbnail }} />
                    <Text style={styles.cardTitle}>{props.title}</Text>
                    <Text style={styles.cardDescription}>{props.subTitle}</Text>
                </Body>
            </CardItem>
        </Card>
    )
}

const styles = {
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cardImage: {
        width: 60,
        height: 60,
    },
    cardTitle: {
        fontSize: 18,
        padding: 5,
        textAlign: 'center'
    },
    fontBold: {
        fontWeight: 'bold',
    },
    cardDescription: {
        textAlign: 'center'
    },
}

export default WhyPartners;