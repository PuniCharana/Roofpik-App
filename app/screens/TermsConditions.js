import React, { Component } from 'react';
import { StyleSheet, } from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title } from 'native-base';

import TermsConditionsContent from "../components/TermsConditionsContent";
export default class TermsConditions extends Component {

    render() {
        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body style={{flex: 2}}>
                        <Title>Terms & Conditions</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <TermsConditionsContent />
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});