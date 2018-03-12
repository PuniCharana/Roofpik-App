
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView
} from 'react-native';

import { Container, Header, Content, Left, Body, Right, Button, Icon, Title } from 'native-base';

import { DrawerNavigator, DrawerItems } from "react-navigation";
import Home from "./screens/Home";
import About from "./screens/About";
import Contact from "./screens/Contact";
import WriteReview from "./screens/WriteReview";
import TermsConditions from "./screens/TermsConditions";

export default class App extends Component {
  render() {
    return (
      <AppDrawer />
    );
  }
}

const CustomDrawerContentComponent = (props) => (

  <Container>
    <Header style={{ height: 150 }}>
      <Body>
        <Image
          style={styles.drawerImage}
          source={require('./assets/logo.png')} />
      </Body>
    </Header>
    <Content>
      <ScrollView>
        <DrawerItems {...props} />
      </ScrollView>
    </Content>
  </Container>
);


const AppDrawer = DrawerNavigator({
  'Home': { screen: Home },
  'About Us': { screen: About },
  'Write Review': { screen: WriteReview },
  'Contact Us': { screen: Contact },
  'Terms & Conditions': { screen: TermsConditions },
}, {
    initialRouteName: 'Home',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  });



const styles = StyleSheet.create({
  drawerImage: {
    alignSelf: 'stretch',
    width: '100%'
    
  }
});
