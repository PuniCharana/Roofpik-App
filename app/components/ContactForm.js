import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TextInput,
    Button,
    KeyboardAvoidingView,
    ScrollView,
} from 'react-native';
import { Icon } from 'native-base';

export default class ContactForm extends Component {

    submitReview() {

    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>
                <ScrollView>
                    <View style={styles.contactFormHeader} >
                        <View style={styles.contactFormHeaderText}>
                            <Text style={styles.contactFormHeaderTextTitle}>We're Available 24x5</Text>
                            <Text style={styles.contactFormHeaderTextContent}>We ensure authentic replies from the people behind our smooth running machine. Your queries are just a click away from being solved!</Text>
                        </View>

                        <Image
                            style={styles.contactFormHeaderImage}
                            source={require('../assets/sun-moon.png')} />
                    </View>

                    <View style={styles.contactForm}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon style={{ fontSize: 24, color: '#9e9e9e' }} name="md-person" />
                            <TextInput
                                placeholder="Your Name"
                                style={{ height: 40, flex: 1, marginLeft: 10 }}
                                onChangeText={(text) => console.log('')}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon style={{ fontSize: 24, color: '#9e9e9e' }} name="md-mail" />
                            <TextInput
                                placeholder="Your Email"
                                style={{ height: 40, flex: 1, marginLeft: 10 }}
                                onChangeText={(text) => console.log('')}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Icon style={{ fontSize: 24, color: '#9e9e9e' }} name="md-call" />
                            <TextInput
                                placeholder="Phone No."
                                style={{ height: 40, flex: 1, marginLeft: 10 }}
                                onChangeText={(text) => console.log('')}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <Icon style={{ fontSize: 24, color: '#9e9e9e' }} name="md-text" />
                            <TextInput
                                placeholder="Type your Message"
                                multiline={true}
                                numberOfLines={4}
                                style={{ height: 100, flex: 1, marginLeft: 10 }}
                                onChangeText={(text) => console.log('')}
                            />
                        </View>

                        <Button
                            onPress={this.submitReview}
                            title="SUBMIT"
                            color="#ff5a5f" />

                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contactFormHeader: {
        width: '100%',
        backgroundColor: '#2196F3',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    contactFormHeaderText: {
        flex: 1,
        padding: 20,

    },
    contactFormHeaderTextTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    contactFormHeaderTextContent: {
        color: '#fff',
        textAlign: 'center'
    },
    contactFormHeaderImage: {
        width: 140,
        height: 140,
        margin: 10,
    },
    contactForm: {
        padding: 20,
    },
});