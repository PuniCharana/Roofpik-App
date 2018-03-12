import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import api from "../data/api";
import RoofpikService from './RoofpikService';
export default class RoofpikServices extends Component {

    constructor(props) {
        super(props)

        this.state = {
            servicesData : api.getRoofpikServicesData()
        }
    }
    render() {

        const services = this.state.servicesData.map((service) => {
            return (
                <RoofpikService key = {service.id} {...service}/>
            )
        })

        return (
            <View style={styles.container}>

                <View style={styles.contentInfo}>
                    <View style={styles.numProjects}>
                        <Text style={{ fontWeight: 'bold', color: '#F44336' }}>299</Text>
                        <Text>Projects</Text>
                    </View>
                    <View style={styles.numReviews}>
                        <Text style={{ fontWeight: 'bold', color: '#26a69a' }}>4050</Text>
                        <Text>Reviews</Text>
                    </View>
                </View>
                <View style={styles.services}>
                    <Text style={styles.servicesTitle}>What we have at Roofpik</Text>

                    {services}

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 30
    },
    contentInfo: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    numProjects: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 7,
        zIndex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.8,
        borderColor: '#F44336',
    },
    numReviews: {
        width: 100,
        height: 100,
        zIndex: 1,
        marginLeft: 7,
        borderRadius: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.8,
        borderColor: '#26a69a',
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

});