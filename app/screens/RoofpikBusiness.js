import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import { Container, Content, Header, Left, Body, Button, Right, Icon, Title } from 'native-base';
import RoofpikBusinessContent from "../components/RoofpikBusinessContent";

export default class RoofpikBussiness extends Component {

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
          <Body style={{ flex: 2 }}>
            <Title>Roofpik Bussiness</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <Content>
          <RoofpikBusinessContent />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
});
