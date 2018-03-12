import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    ScrollView,
    Image,
    Button,
} from 'react-native';
import { Icon } from 'native-base';
import ImageHeader from "./ImageHeader";

export default class AboutContent extends Component {
    
    navigatToReviewUs = () => {
        this.props.onClick()
    }

    render() {

        const headerImageMeta = {
            title: "RE-IMAGINE \n THE FUTURE OF PROPERTY SEARCH ",
            thumbnail: "http://www.roofpik.com/images/v1/about/main-bg.jpg",
            buttonText: "Search Project",
        }

        return (
            <ScrollView>

                <ImageHeader header={headerImageMeta} onClick={this.navigatToReviewUs} />

                <View style={styles.aboutRight}>
                    <View style={{
                        width: 150,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon style={{ fontSize: 40, color: '#F44336' }} name="md-checkmark-circle" />
                        <Text style={styles.aboutTitle}>Reliable Property <Text  style={{color: '#F44336'}}>Reviews</Text></Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>We’re pushing the boundaries of user reviews to help residents share real experiences of buying, renting, or investing in property. With a comprehensive verification process in place, we ensure that nothing but genuine opinions reach you.</Text>
                    </View>
                </View>
                <View style={styles.aboutLeft}>
                    <View style={{ flex: 1 }}>
                        <Text style={{textAlign: 'right'}}>We’re about more than just real estate projects. With thousands of reviews about neighbourhoods and localities in leading Indian cities, Roofpik helps you shortlist and select the best areas to work, live, and play.</Text>
                    </View>
                    <View style={{
                        width: 150,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon style={{ fontSize: 40, color: '#26a69a' }} name="md-map" />
                        <Text style={styles.aboutTitle}><Text  style={{color: '#26a69a'}}>Guide</Text> to Localities</Text>
                    </View>
                </View>
                <View style={styles.aboutRight}>
                    <View style={{
                        width: 150,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Icon style={{ fontSize: 40, color: '#ff9800' }} name="md-stats" />
                        <Text style={styles.aboutTitle}><Text  style={{color: '#ff9800'}}>Data</Text> driven Insights</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text>We gather and investigate data based on structured parameters to give you a transparent evaluation of projects. This is done via statistical rankings of properties, comparative listings of localities, and refined search results.</Text>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    aboutTitle: {
        textAlign: 'center'
    },
    aboutLeft: {
        padding: 10,
        flexDirection: 'row',

    },
    aboutRight: {
        padding: 10,
        flexDirection: 'row',
    },
});