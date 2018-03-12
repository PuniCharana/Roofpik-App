import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

import ImageHeader from "./ImageHeader";
import { Icon } from 'native-base';

export default class RoofpikBusinessIntro extends Component {

    startToday = () => {
        console.log(this.props.navigation)
        // this.props.navigation.navigate('Test')
        this.props.navigation.navigate('RoofpikBusiness')
    }

    render() {

        const headerImageMeta = {
            title: "Roofpik For Business" + "\n" + "Multiply your income 4x by becoming a partner with the largest real estate reviewing platform.",
            thumbnail: "http://www.roofpik.com/images/v1/home/business-bg.jpg",
            buttonText: "START TODAY",
        }

        const servicesData = [
            {
                id: 1,
                color: "#FF5722",
                icon: "md-ribbon",
                title: "Search and Shortlist Projectss",
                description: "Access to verified Project Information, Reviews, and Ratings with Project Photos"
            },
            {
                id: 2,
                color: "#00BCD4",
                icon: "md-people",
                title: "Find Best Reviewed Agents",
                description: "Our Hall of Fame agents who can help you find a great apartment in the right neighborhood."
            },
            {
                id: 3,
                color: "#FFEB3B",
                icon: "md-navigate",
                title: "Site Visit",
                description: "Guided site visits with our verified partners"
            },
            {
                id: 4,
                color: "#26a69a",
                icon: "md-home",
                title: "Get Right Home",
                description: "Committed guidance all the way till move-in"
            },
        ]


        const services = servicesData.map((service) => {
            return (
                <View key={service.id} style={styles.service}>
                    <View style={styles.serviceDescription}>
                        <Text style={{ padding: 10, textAlign: 'center' }}>{service.description}</Text>
                    </View>
                    <View style={styles.serviceTitle}>
                        <Icon style={{ fontSize: 27, color: service.color }} name={service.icon} />
                        <Text style={{ textAlign: 'center', color: '#000' }}>{service.title}</Text>
                    </View>

                </View>
            )
        })


        return (
            <View style={styles.container}>
                <ImageHeader header={headerImageMeta} onClick={this.startToday} />
                <Text style={styles.title}>Advantage Roofpik {'\n'} World’s First Property Reviewing Platform</Text>

                {services}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff'
    },
    title: {
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    services: {
        width: '100%',
        zIndex: 0,
        marginTop: -50,
        backgroundColor: '#fff'
    },
    servicesTitle: {
        marginTop: 60,
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 15,
        textDecorationLine: 'underline'
    },
    service: {
        padding: 20,
        flexDirection: 'row',
    },
    serviceTitle: {
        flex: 1,
        padding: 5,
        borderColor: '#ddd',
        borderLeftWidth: 0.8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    serviceDescription: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
});