import React, { Component } from 'react';
import {
  Text,
  View,
StyleSheet,
} from 'react-native';
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title } from 'native-base';
import ContactForm from "../components/ContactForm";
export default class Contact extends Component {

render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={()=>this.props.navigation.navigate('DrawerOpen')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Contact Us</Title>
          </Body>
          <Right>
          </Right>
        </Header>
        <ContactForm/>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      
  },
});