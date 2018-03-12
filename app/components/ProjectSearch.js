import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    KeyboardAvoidingView,
    Keyboard,
    TextInput,
    Button,
} from 'react-native';

import RoofpikAutoComplete from "./RoofpikAutoComplete";
import api from "../data/api";

const defaultValue = [
    {
        name: "Apartments in Gurgaon",
        category: "default",
        key: "apartment"
    },
    {
        name: "Villa in Gurgaon",
        category: "default",
        key: "villa"
    },
    {
        name: "Row House in Gurgaon",
        category: "default",
        key: "rowhouse"
    },
    {
        name: "Penthouse in Gurgaon",
        category: "default",
        key: "penthouse"
    }
]

const initialState = {
    items: [],
    selectedItem: null,
    selectedItemText: null
};

export default class ProjectSearch extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;

        this._onSelectedItem = this._onSelectedItem.bind(this)
        this._onChangeText = this._onChangeText.bind(this)
        this._loadDefault = this._loadDefault.bind(this)
    }

    _onPressSearch = () => {
        console.log(this.state.selectedItem)
        Keyboard.dismiss();

        if (this.state.selectedItem) {

            if (this.state.selectedItem.category == "residential") {
                this.props.navigation.navigate('ProjectDetails', { project: this.state.selectedItem })
                console.log("residential");
            } else {
                console.log("else");
                this.props.navigation.navigate('ProjectLists', this.state.selectedItem)
            }

            this.setState(initialState)
        } else {
            this._loadDefault()
        }
    }

    _onChangeText(query) {
        console.log('_onChangeText', query);
        this.setState({ selectedItemText: query })

        if (query) {
            console.log(query);

            api.searchProjects({
                'val': query
            }).then((response) => {
                var newData = [...this.state.items, ...response.items];
                console.log(newData);
                newData = response.items.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
                console.log(newData);
                this.setState({ items: newData })
            }).catch((error) => {
                console.log(error)
            })

        } else {
            this.setState({ items: defaultValue })
        }
    }

    _loadNewSuggestions(query) {
        if (query) {
            var newData = data.filter((item) => item.name.toLowerCase().includes(query.toLowerCase()))
            this.setState({ items: newData })
        } else {
            this.setState({ items: defaultValue })
        }
    }

    _loadDefault() {
        if (!this.state.selectedItem) {
            this.setState({ items: defaultValue })
        }
    }

    _onSelectedItem(item) {
        this.setState({
            selectedItem: item,
            items: [],
            selectedItemText: item.name,
        })
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>

                <Text style={styles.mainSearchTitle}>Power Your Property Search with Genuine User Reviews</Text>

                <RoofpikAutoComplete
                    value={this.state.selectedItemText ? this.state.selectedItemText : ''}
                    items={this.state.items}
                    onChangeText={this._onChangeText}
                    onItemSelected={this._onSelectedItem}
                    onFocus={this._loadDefault}
                />

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Button style={{ flex: 1 }}
                        onPress={() => this.props.navigation.navigate('WriteReview')}
                        title="Write Review"
                        color="#ff5a5f"
                        accessibilityLabel="Learn more about this purple button"
                    />

                    <Button
                        onPress={this._onPressSearch}
                        title="Search"
                        color="#26a69a"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </KeyboardAvoidingView >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.43)',
        margin: 20,
        padding: 20
    },
    mainSearchTitle: {
        textAlign: 'center',
        color: '#666666',
        marginBottom: 10,
        fontWeight: 'bold'
    },
    autoCompleteContainer: {
    }
});