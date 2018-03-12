import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Button,
} from 'react-native';
import { Card, CardItem, Body, } from 'native-base';
import ImageHeader from "./ImageHeader";

export default class WhyReview extends Component {

    writeReview = () => {
        this.props.navigation.navigate('RoofpikBusiness')
        // this.props.navigation.navigate('WriteReview')
    }

    render() {
        const headerImageMeta = {
            title: "Why Share your Experience with us ?",
            thumbnail: "http://www.roofpik.com/images/v1/home/business-bg.jpg",
            buttonText: "Write a Review",
        }

        return (
            <View style={styles.container}>

                <ImageHeader header={headerImageMeta} onClick={this.writeReview} />

                <View style={{ margin: 20 }}>
                    <Card>
                        <CardItem>
                            <Body style={styles.centerItem}>
                                <Image style={styles.shareImage} source={require('../assets/share-earn.png')} />
                                <Text style={styles.shareTitle}>Share to <Text style={styles.fontBold}>Earn</Text></Text>
                                <Text style={styles.shareDescription}><Text style={styles.greenColor}>Earn incentives</Text> in the form of a goody bag or exciting gift vouchers</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card >
                        <CardItem>
                            <Body style={styles.centerItem}>
                                <Image style={styles.shareImage} source={require('../assets/share-inform.png')} />
                                <Text style={styles.shareTitle}>Share to <Text style={styles.fontBold}>Inform</Text></Text>
                                <Text style={styles.shareDescription}>Share your <Text style={styles.redColor}>“Aha!” or “Oh no!”</Text> moments so others can learn from your experience</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card >
                        <CardItem>
                            <Body style={styles.centerItem}>
                                <Image style={styles.shareImage} source={require('../assets/share-educate.png')} />
                                <Text style={styles.shareTitle}>Share to <Text style={styles.fontBold}>Educate</Text></Text>
                                <Text style={styles.shareDescription}><Text style={styles.blueColor}>Lend a helping hand</Text> by expressing your valuable insights and experiences</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Card >
                        <CardItem>
                            <Body style={styles.centerItem}>
                                <Image style={styles.shareImage} source={require('../assets/share-count.png')} />
                                <Text style={styles.shareTitle}>Share to be <Text style={styles.fontBold}>Counted</Text></Text>
                                <Text style={styles.shareDescription}>Join the <Text style={styles.yellowColor}>fastest-growing</Text> real estate community to find help in buying / selling / renting tomorrow</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff"
    },
    centerItem: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    shareImage: {
        width: 60,
        height: 60,
    },
    shareTitle: {
        fontSize: 18,
        padding: 5
    },
    fontBold: {
        fontWeight: 'bold',
    },
    shareDescription: {
        textAlign: 'center'
    },
    greenColor: {
        color: "#26a69a"
    },
    blueColor: {
        color: "#2196F3"
    },
    redColor: {
        color: "#F44336"
    },
    yellowColor: {
        color: "#ff9800"
    },
});