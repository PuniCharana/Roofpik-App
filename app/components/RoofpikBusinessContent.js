import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

import api from "../data/api";
import WhyPartners from "./WhyPartners";
import Partners from "./Partners";
import ReasonToPartner from "./ReasonToPartner";

export default class RoofpikBusinessContent extends Component {

    constructor(props) {
        super(props);
        console.log('RoofpikBusinessContent', props);
        this.state = {
            channelPartners: api.getChannelPartners(),
            couponPartners: api.getCouponPartners(),
            whyPartners: api.getWhyPartners(),
        }
    }
    render() {

        const channelPartners = this.state.channelPartners.map((partner) => {
            return <Partners key={partner.id} {...partner} />
        })

        const couponPartners = this.state.couponPartners.map((partner) => {
            return <Partners key={partner.id} {...partner} />
        })

        const whyPartners = this.state.whyPartners.map((item)=> {
            return <WhyPartners key={item.id} {...item} />
        })
        
        return (
            <View>
                <View style={styles.imageHeaderContainer}>
                    <Image
                        style={styles.imageHeaderImage}
                        source={{ uri: 'http://www.roofpik.com/images/v1/business/main-bg.jpg' }} />
                    <Text style={styles.headerTitle}>Roofpik{'\n'}Business Advantage</Text>
                </View>
                <Text style={styles.headerSubTitle}>World’s First Property Reviewing Platform.{'\n'}Multiply your income 4x by becoming a partner with the largest real estate reviewing platform.</Text>

                <Text style={styles.headerTitle}>Who all can get Associated?</Text>

                <Text style={styles.partnerTitle}>Channel Partners</Text>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    {channelPartners}
                </View>

                <Text style={styles.partnerTitle}>Coupon Partners</Text>
                <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                    {couponPartners}
                </View>

                <View style={{ padding: 1 }}>
                    <Text style={styles.headerTitle}>Why become our partner?</Text>
                    <ReasonToPartner/>
                </View>
                
                <View style={{ margin: 16 }}>
                    {whyPartners}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageHeaderContainer: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageHeaderImage: {
        width: '100%',
        height: 150,
        position: 'absolute',
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#000',
        padding: 10,
        paddingBottom: 5,
        textAlign: 'center'
    },
    headerSubTitle: {
        padding: 16,
        textAlign: 'center'
    },
    partnerTitle: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#000',
        padding: 10,
        textAlign: 'center'
    },
    imageLeftCard: {
        padding: 10,
        flexDirection: 'row',

    },
    imageRightCard: {
        padding: 10,
        flexDirection: 'row',
    },

});