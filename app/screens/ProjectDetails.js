import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
} from 'react-native';

import ProjectDetailsContent from "../components/ProjectDetailsContent";
import { Container, Header, Content, Left, Body, Right, Button, Icon, Title } from 'native-base';

export default class ProjectDetails extends Component {

    static navigationOptions = {
        header: null,
    }

    render() {
        const { params } = this.props.navigation.state;
        const { project } = params        

        return (
            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name='md-arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{ flex: 2 }}>
                        <Title>{project.name}</Title>
                    </Body>
                    <Right>
                    </Right>
                </Header>
                <Content>
                    <ProjectDetailsContent project={project}/>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {

    },
});