import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Image,
    Button,
    Modal,
    TouchableHighlight,
} from 'react-native';

export default class ProjectItem extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    _scheduleVisit = () => {
        this.setModalVisible(true);
    }

    _writeReview = () => {
        this.props.navigation.navigate('WriteReview')
    }

    _viewDetails = () => {
        console.log(this.props.project)
        this.props.navigation.navigate('ProjectDetails', { project: this.props.project })
    }

    render() {
        const project = this.props.project;
        // console.log(project)

        return (
            <View>
                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 50 }}>
                        <View>
                            <Text>Hello World!</Text>

                            <TouchableHighlight
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
                <TouchableOpacity
                    onPress={this._viewDetails}
                    style={styles.project}>
                    <View style={styles.projectHeader}>
                        <Image
                            style={styles.thumbnail}
                            source={{ uri: 'http://139.162.9.71/images/' + project.thumbnail + '-s.jpg' }} />
                        <View style={styles.projectInfo}>
                            <Text style={{ color: '#26a69a' }}>#{project.rank} in {project.location.locname}</Text>
                            <Text style={{ fontWeight: 'bold' }}>{project.name}</Text>
                            <Text>{project.location.display}</Text>

                            <View style={styles.scores}>
                                <Text style={styles.score}>{project.score}</Text>
                                <Text>{project.reviews} reviews </Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.projectBody}>
                        <View style={styles.infoTitle}>
                            <Text style={styles.title}>Rent of 3BHK:</Text>
                            <Text style={styles.title}>Builder:</Text>
                            <Text style={styles.title}>Property type:</Text>
                            <Text style={styles.title}>Style:</Text>
                        </View>
                        <View style={styles.info}>
                            <Text>{project.rent} (Approximate)</Text>
                            <Text>{project.builder}</Text>
                            <Text>{project.ptype}</Text>
                            <Text>{project.style}</Text>
                        </View>
                    </View>

                    <View style={styles.projectActions}>
                        <TouchableOpacity
                            onPress={this._scheduleVisit}
                            style={styles.action}
                        ><Text style={styles.actionTitle}>Schedule Visit</Text></TouchableOpacity>
                        <TouchableOpacity
                            onPress={this._writeReview}
                            style={[styles.action, styles.borderStyle]}
                        ><Text style={styles.actionTitle}>Write Review</Text></TouchableOpacity>
                        <TouchableOpacity
                            onPress={this._viewDetails}
                            style={styles.action}
                        ><Text style={styles.actionTitle}>View Details</Text></TouchableOpacity>
                    </View>

                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    project: {
        backgroundColor: "#fff",
        padding: 10,
        marginBottom: 5
    },
    projectHeader: {
        flexDirection: 'row',
    },
    thumbnail: {
        flex: 1,
        resizeMode: 'cover'
    },
    projectInfo: {
        flex: 2,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'space-around'
    },
    scores: {
        paddingTop: 5,
        flexDirection: 'row',
    },
    score: {
        backgroundColor: '#26a69a',
        paddingTop: 2,
        paddingBottom: 2,
        paddingLeft: 5,
        paddingRight: 5,
        marginRight: 10
    },
    projectBody: {
        padding: 5,
        marginTop: 10,
        flexDirection: 'row',
        borderStyle: 'solid',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderTopColor: '#e6e6e6',
        borderBottomColor: '#e6e6e6',
    },
    infoTitle: {
        flex: 1,
        borderStyle: 'solid',
        borderRightWidth: 1,
        borderRightColor: '#e6e6e6',
    },
    title: {
        fontWeight: 'bold'
    },
    info: {
        flex: 2,
        paddingLeft: 8,
    },
    projectActions: {
        flex: 1,
        flexDirection: 'row',
    },
    action: {
        paddingTop: 10,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionTitle: {
        color: '#26a69a',
    },
    borderStyle: {
        borderStyle: 'solid',
        borderLeftWidth: 1,
        borderLeftColor: '#e6e6e6',
        borderRightWidth: 1,
        borderRightColor: '#e6e6e6',
    }
});