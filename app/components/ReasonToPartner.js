import React from 'react';

import { Text, View, Image, } from 'react-native';

const ReasonToPartner = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.itemContainer}>
                <Image
                    style={styles.imageStyle}
                    source={{ uri: 'http://www.roofpik.com/images/v1/business/leads.jpg' }}
                />
                <View style={styles.container}>
                    <Text style={styles.title}>Get Relevant and Verified Leads:</Text>
                    <Text style={styles.description}>Pre Screened and Verified Customers with their preferences about budget, apartment size, locality, move in time etc</Text>
                </View>
            </View>

            <View style={styles.itemContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>Improve your discoverability:</Text>
                    <Text style={styles.description}>Increase your footfall and drive more revenue by boosting the visibility to more relevant audiences</Text>
                </View>

                <Image
                    style={styles.imageStyle}
                    source={{ uri: 'http://www.roofpik.com/images/v1/business/discoverability.jpg' }}
                />
            </View>
        </View>
    )
}

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column'
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 16,
    },
    imageStyle: {
        width: 150
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    description: {
        textAlign: 'center'
    }
}

export default ReasonToPartner;