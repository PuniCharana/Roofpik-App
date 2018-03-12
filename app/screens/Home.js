import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  Dimensions
} from 'react-native';

import { StackNavigator } from "react-navigation";
import ProjectLists from "./ProjectLists";
import WriteReview from "./WriteReview";
import RoofpikBusiness from "./RoofpikBusiness";
import ProjectDetails from "./ProjectDetails";
import WhyReview from "../components/WhyReview";
import RoofpikServices from "../components/RoofpikServices";
import MainSearch from "../components/MainSearch";
import ProjectSearch from "../components/ProjectSearch";
import RoofpikBusinessIntro from "../components/RoofpikBusinessIntro";

import { Container, Content, Header, Left, Body, Button, Right, Icon, Title } from 'native-base';

class Home extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Roofpik</Title>
          </Body>
          <Right>
          </Right>
        </Header>

        <Content style={{ flex: 1 }} >
          <Image style={imageStyle} source={require('../assets/main-bg.jpg')} />
          
          <ProjectSearch {...this.props}/>

          {/* <MainSearch {...this.props} /> */}

          <RoofpikServices />

          <WhyReview {...this.props} />

          <RoofpikBusinessIntro {...this.props} />

        </Content>

      </Container>
    );
  }
}

const { width, height } = Dimensions.get('window')
const imageStyle = {
  width: width < height ? width : height,
  height: width < height ? height : width,
  resizeMode: 'cover',
  position: 'absolute'
}

const MainNavigation = StackNavigator({
  Home: { screen: Home },
  ProjectLists: { screen: ProjectLists },
  ProjectDetails: { screen: ProjectDetails },
  WriteReview: { screen: WriteReview },
  RoofpikBusiness: { screen: RoofpikBusiness },
});
const styles = StyleSheet.create({

  backgroundImage: {
    position: 'absolute',
    height: '100%',
    width: '100%',
  },

});


export default MainNavigation;