import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native';
import AboutContent from "../components/AboutContent";
import RoofpikTeam from "../components/RoofpikTeam";
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default About = (props) => {

  navigateToSearch = () => {
    props.navigation.goBack()
  }

  return (
    <Container style={styles.container}>
      <Header>
        <Left>
          <Button transparent onPress={() => props.navigation.navigate('DrawerOpen')}>
            <Icon name='menu' />
          </Button>
        </Left>
        <Body>
          <Title>About</Title>
        </Body>
        <Right>
        </Right>
      </Header>
      <Content>

        <AboutContent onClick={this.navigateToSearch} />

        <View style={{ padding: 20, }}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', textDecorationLine: 'underline' }}>We make a difference</Text>
          <Text>At <Text style={{ fontWeight: 'bold', }}>Roofpik</Text> , we decided to disrupt the status quo by bringing to life a hub for genuine and verified user reviews. Whether you’re investing, buying, or renting, we help <Text style={{ fontWeight: 'bold', }}>you make the best property choice based on recommendations, advice, and reviews</Text> from thousands of people like you.</Text>
        </View>

        <RoofpikTeam />
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});