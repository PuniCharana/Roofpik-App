import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
    TextInput,
    Button,
    TouchableOpacity,
} from 'react-native';

export default class MainSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            localityName: '',
        };
    }

    onPressSearch = () => {

        console.log(this.props.navigation)
        Keyboard.dismiss();
        this.props.navigation.navigate('ProjectLists', this.state.projectName)

        this.setState({
            projectName: '',
            localityName: ''
        })
    }


    render() {

        return (
            <KeyboardAvoidingView style={styles.container}>
            
                <Text style={styles.mainSearchTitle}>
                    Power Your Property Search with Genuine User Reviews
                </Text>
                <TextInput
                    placeholderTextColor='#999999'
                    placeholder="Search by Project"
                    style={styles.inputBox}
                    onChangeText={(text) => this.setState({ projectName: text })}
                    value={this.state.projectName}
                />
                <TextInput
                    placeholderTextColor='#999999'
                    placeholder="Enter a Locality"
                    style={styles.inputBox}
                    onChangeText={(text) => this.setState({ localityName: text })}
                    value={this.state.localityName}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Button style={{ flex: 1 }}
                        onPress={() => this.props.navigation.navigate('WriteReview')}
                        title="Write Review"
                        color="#ff5a5f"
                        accessibilityLabel="Learn more about this purple button"
                    />

                    <Button
                        onPress={this.onPressSearch}
                        title="Search"
                        color="#26a69a"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </KeyboardAvoidingView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.43)',
        margin: 20,
        padding: 20
    },
    mainSearchTitle: {
        textAlign: 'center',
        color: '#666666',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    inputBox: {
        color: '#000',
        marginBottom: 10,
    },
});