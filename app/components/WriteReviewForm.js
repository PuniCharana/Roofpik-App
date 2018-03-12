import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TextInput,
    Picker,
    ScrollView,
    Button,
    DatePickerAndroid,
    ToastAndroid
} from 'react-native';
import { AirbnbRating } from 'react-native-ratings';

import RoofpikRating from "./RoofpikRating";
import RoofpikChoice from "./RoofpikChoice";

const initialState = {
    houseno: '',
    locality: '',
    type: 'live',
    livedwith: 'family',
    yob: '',
    review: '',
    reviewTitle: '',
    gender: 'male',
    block: '',
    rating: 4,
    isSelect: false,
}
export default class WriteReviewForm extends Component {

    constructor() {
        super();

        this.state = initialState
    }

    _onPressHandle = () => {
        this.setState({ isSelect: !this.state.isSelect })
    }

    submitReview = () => {
        console.log(this.state)
        alert(this.state.rating)
        this.setState(initialState)

        ToastAndroid.showWithGravity(
            'Thank you for your review',
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM
        );
    }

    _onSecurityRating(rating) {
        console.log('_onSecurityRating', rating);
    }

    _onAmenitiesRating(rating) {
        console.log('_onAmenitiesRating', rating);
    }

    _onOpenAndGreenAreaRating(rating) {
        console.log('_onOpenAndGreenAreaRating', rating);
    }

    _onConvenienceOfParkingRating(rating) {
        console.log('_onConvenienceOfParkingRating', rating);
    }

    _onInfrastructureRating(rating) {
        console.log('_onInfrastructureRating', rating);
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.title}>Tell us about yourself?</Text>

                <Picker
                    mode="dropdown"
                    selectedValue={this.state.type}
                    onValueChange={(itemValue, itemIndex) => this.setState({ type: itemValue })}>
                    <Picker.Item label="I live on rent" value="live" />
                    <Picker.Item label="I own the place" value="own" />
                    <Picker.Item label="I visited for rent" value="visited" />
                </Picker>

                <Picker
                    mode="dropdown"
                    selectedValue={this.state.livedwith}
                    onValueChange={(itemValue, itemIndex) => this.setState({ livedwith: itemValue })}>
                    <Picker.Item label="I live wtih family" value="family" />
                    <Picker.Item label="I live wtih friend" value="friend" />
                    <Picker.Item label="I live alone" value="alone" />
                    <Picker.Item label="Other" value="other" />
                </Picker>

                <TextInput
                    onChangeText={(text) => this.setState({ locality: text })}
                    value={this.state.locality}
                    placeholder="Where do you live?" />

                <TextInput
                    onChangeText={(text) => this.setState({ block: text })}
                    value={this.state.block}
                    placeholder="Block/Tower" />

                <TextInput
                    onChangeText={(text) => this.setState({ houseno: text })}
                    value={this.state.houseno}
                    placeholder="House/Flat No." />


                <Picker
                    mode="dropdown"
                    selectedValue={this.state.gender}
                    onValueChange={(itemValue, itemIndex) => this.setState({ gender: itemValue })}>
                    <Picker.Item label="Male" value="male" />
                    <Picker.Item label="Female" value="female" />
                </Picker>

                <TextInput
                    onChangeText={(text) => this.setState({ yob: text })}
                    value={this.state.yob}
                    placeholder="Year of birth (YYYY)" />

                <Text style={styles.title}>Your first-hand experiences really help other residents. Thanks!</Text>

                <Text style={{ marginTop: 10 }}>Your Overall rating *</Text>


                <AirbnbRating size={25} type='custom'
                    defaultRating={this.state.rating}
                    ratingColor='#2d2d2d' onFinishRating={(rating) => this.setState({ rating })} />

                <TextInput
                    onChangeText={(text) => this.setState({ reviewTitle: text })}
                    value={this.state.reviewTitle}
                    placeholder="Review title" />

                <TextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text) => this.setState({ review: text })}
                    value={this.state.review}
                    placeholder="Write your review" />

                <Text style={styles.title}>Could you say a little more about it?</Text>
                <Text style={{ marginTop: 10 }}>We'd love your opinion! Anything you can share will help other residents choose their perfect house. Thanks.</Text>

                <RoofpikRating title="Security" defaultRating={0} onRatingChanged={this._onSecurityRating} />

                <RoofpikRating title="Amenities" defaultRating={0} onRatingChanged={this._onAmenitiesRating} />

                <RoofpikRating title="Open and green areas" defaultRating={0} onRatingChanged={this._onOpenAndGreenAreaRating} />

                <RoofpikRating title="Convenience of parking" defaultRating={0} onRatingChanged={this._onConvenienceOfParkingRating} />

                <RoofpikRating title="Infrastructure" defaultRating={1.3} onRatingChanged={this._onInfrastructureRating} />


                <View style={[styles.paddingBottomTop]}>

                    <RoofpikChoice title="Daily Need Items?" onRadioSelected={(selected)=> alert(selected)}/>
                
                </View>

                <Button
                    onPress={this.submitReview}
                    title="Submit review"
                    color="#26a69a" />
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    directionRow: {
        flexDirection: 'row'
    },
    paddingBottomTop: {
        paddingTop: 5,
        paddingBottom: 5
    }
});