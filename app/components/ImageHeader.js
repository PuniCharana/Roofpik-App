import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    Button,
} from 'react-native';

export default class ImageHeader extends Component {

    click = () => {
        this.props.onClick();
    }

    render() {
        return (
            <View style={styles.imageHeaderContainer}>
                <Image
                    style={styles.imageHeaderImage}
                    source={{uri: this.props.header.thumbnail}} />
                <Text style={styles.imageHeaderTitle}>{this.props.header.title}</Text>
                <Button
                    onPress={this.click.bind(this)}
                    title={this.props.header.buttonText}
                    color="#ff5a5f"
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageHeaderContainer: {
        height: 220,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageHeaderImage: {
        width: '100%',
        height: 220,
        position: 'absolute',
    },
    imageHeaderTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#fff',
        padding: 20,
        textAlign: 'center'
    },
});