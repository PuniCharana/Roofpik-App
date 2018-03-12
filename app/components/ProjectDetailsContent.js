import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';
import api from "../data/api";
import ProjectReviewLists from "./ProjectReviewLists";
export default class ProjectDetailsContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            projectDetails: null,
            projectReviews: []
        }
    }

    componentDidMount() {
        this.loadProjectDetails()
        this.loadProjectReviews()
    }

    loadProjectDetails() {
        console.log(this.props.project)
        api.getProjectDetails({
            key: this.props.project.key
        }).then((response) => {
            console.log(response);
            this.setState({
                projectDetails: response.items[0].data
            })
        }).catch((error) => {
            console.log(error)
        })
    }

    loadProjectReviews() {

        var param = {
            pkey: this.props.project.key,
            userType: '',
            ratings: '',
            pagination: 1
        };
        api.getProjectReviews(param).then((response) => {
            console.log(response);
            this.setState({ projectReviews: response.items })
        }).catch((error) => {
            console.log(error)
        })
    }

    toFixPoint = (num) => {
        return num.toFixed(1)
    }

    render() {
        const projectDeatils = this.state.projectDetails;

        const reviews = this.state.projectReviews.map((review, index) => <ProjectReviewLists key={index} review={review} />)

        return projectDeatils ? (
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Image
                        style={styles.thumbnail}
                        source={{ uri: 'http://139.162.9.71/images/' + projectDeatils.general.thumbnail + '-xl.jpg' }} />
                    <View style={styles.metaContainer}>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>{projectDeatils.name}</Text>
                            <Text style={styles.subTitle}>{projectDeatils.location.display}</Text>
                        </View>
                        <View style={styles.ratingContainer}>
                            <Text style={styles.rating}>{this.toFixPoint(projectDeatils.review.rating)}</Text>
                            <Text style={styles.roofpikRating}>{this.toFixPoint(projectDeatils.review.score)} Roofpik Score</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={[styles.style, styles.infoCard]}>
                        <Text style={styles.text}>Style</Text>
                        <Text style={styles.text}>High End</Text>
                    </View>
                    <View style={[styles.rent, styles.infoCard]}>
                        <Text style={styles.text}>Rent</Text>
                        <Text style={styles.text}>{projectDeatils.rentsummary.min} - {projectDeatils.rentsummary.min}</Text>
                    </View>
                    <View style={[styles.reviews, styles.infoCard]}>
                        <Text style={styles.text}>{projectDeatils.review.count} Reviews</Text>
                    </View>
                </View>

                {reviews}

            </View>
        ) : null;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        width: '100%',
        height: 200,
        position: 'relative',
    },
    thumbnail: {
        width: '100%',
        height: 200,
    },
    metaContainer: {
        left: 0,
        bottom: 0,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        position: 'absolute',
        flexDirection: 'row',
    },
    titleContainer: {
        flex: 1,
        padding: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#fff',
    },
    subTitle: {
        color: '#fff',
    },
    ratingContainer: {
        padding: 10,
        alignSelf: 'center',
    },
    rating: {
        color: '#fff',
        width: 30,
        paddingTop: 2,
        paddingLeft: 4,
        paddingRight: 4,
        paddingBottom: 2,
        backgroundColor: '#26a69a',
        alignSelf: 'center',
        textAlign: 'center'
    },
    roofpikRating: {
        color: '#fff',
        fontSize: 12,
    },
    info: {
        width: '100%',
        height: 80,
        flex: 1,
        flexDirection: 'row',
    },
    infoCard: {
        height: 80,
        justifyContent: 'center',
    },
    style: {
        flex: 1,
        borderStyle: 'solid',
        borderRightColor: '#e6e6e6',
        borderRightWidth: 1,
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
    },
    rent: {
        flex: 1.5,
        borderStyle: 'solid',
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
    },
    reviews: {
        flex: 1,
        borderLeftWidth: 1,
        borderStyle: 'solid',
        borderLeftColor: '#e6e6e6',
        borderBottomColor: '#e6e6e6',
        borderBottomWidth: 1,
    },
    text: {
        alignSelf: 'center',
    },
});