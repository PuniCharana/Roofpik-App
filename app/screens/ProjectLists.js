import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { Container, Content, Header, Left, Body, Button, Right, Icon, Title } from 'native-base';
import ProjectDetails from "./ProjectDetails";
import { StackNavigator } from "react-navigation";
import ProjectItem from "../components/ProjectItem";
import api from "../data/api";

class ProjectLists extends Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      refreshing: false,
      page: 1,
      error: null,
      projects: []
    }
  }

  _changeFilter = () => {
    alert("_changeFilter");
  }

  componentDidMount() {
    var param = this.props.navigation.state.params;
    console.log(param)
    console.log(param.key)
    this.loadData()
  }

  loadData() {
    var param = this.props.navigation.state.params;

    api.getProjects({
      pagination: this.state.page,
      ptype: param.key,
    }).then((response) => {

      console.log(response);
      this.setState({
        projects: [...this.state.projects, ...response.items]
      })

    }).catch((error) => {
      console.log(error)
    })
  }

  _keyExtractor = (project, index) => index.toString();

  _renderItem = ({ item }) => (
    <ProjectItem {...this.props} project={item} />
  );

  _onEndReached = () => {
    console.log("_onEndReached")
    this.setState({
      page: this.state.page + 1
    }, () => {
      console.log("Load more data")
      if (this.state.projects.length > 0) {
        this.loadData()
      }

    })
  };
  render() {

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
              <Icon name='md-arrow-back' />
            </Button>
          </Left>
          <Body style={{ flex: 2 }}>
            <Title>Project Lists</Title>
          </Body>
          <Right>
            <Button transparent onPress={this._changeFilter}>
              <Icon name='md-funnel' />
            </Button>
          </Right>
        </Header>

        <Content>
          <FlatList
            data={this.state.projects}
            renderItem={this._renderItem}
            keyExtractor={this._keyExtractor}
            onEndReached={this._onEndReached}
            onEndReachedThreshold={2}
          />

        </Content>


      </Container>
    );
  }
}

const styles = StyleSheet.create({
});

const ProjectListsNavigator = StackNavigator({
  ProjectLists: { screen: ProjectLists },
  ProjectDetails: { screen: ProjectDetails },
});

export default ProjectListsNavigator;
