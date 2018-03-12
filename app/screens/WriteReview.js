import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import WriteReviewForm from "../components/WriteReviewForm";
import { Container, Content, StyleProvider, Header, Left, Body, Button, Right, Icon, Title } from 'native-base';

export default class WriteReview extends Component {
    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='md-arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Write Review</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <WriteReviewForm />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});