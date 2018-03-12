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

const data = ["Louise", "Alice", "Chloe", "Emma", "Ines", "Sarah", "Jeanne", "Anna", "Adele", "Juliette", "Camille", "Lea", "Lina", "Eva", "Sofia", "Charlotte", "Victoria", "Rose", "Mila", "Josephine", "Manon", "Zoe", "Nina", "Jade", "Olivia", "Margaux", "Lou", "Anaïs", "Julia", "Lucie", "Gabrielle", "Romane", "Heloise", "Valentine", "Clémence", "Apolline", "Mathilde", "Victoire", "Alix", "Ava", "Agathe", "Marie", "Nour", "Suzanne", "Margot", "Clara", "Elsa", "Romy", "Iris", "Léonie", "Mia", "Pauline", "Yasmine", "Constance", "Lena", "Madeleine", "Ambre", "Garance", "Alma", "Alicia", "Diane", "Laura", "Sophia", "Maya", "Capucine", "Aya", "Sara", "Fatoumata", "Giulia", "Noémie", "Elena", "Mariam", "Celeste", "Inaya", "Lisa", "Lola", "Elise", "Sophie", "Anouk", "Elisa", "Aïcha", "Lise", "Salome", "Assia", "Maryam", "Hanna", "Ella", "Roxane", "Lila", "Myriam", "Lily", "Eleonore", "Raphaëlle", "Maëlys", "Ines", "Luna", "Berenice", "Sasha", "Maria", "Eleonore",]

const defaultValue = ["Louise", "Alice", "Chloe", "Emma",]

export default class ProjectSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            localityName: '',
            items: [],
            showSuggestion: false
        };
        this._onSelectedItem = this._onSelectedItem.bind(this)
        this._onFocus = this._onFocus.bind(this)
    }

    onPressSearch = () => {

        var query = this.state.projectName;
        Keyboard.dismiss();
        this.props.navigation.navigate('ProjectLists', { query })
    }

    _onFocus() {
        console.log("_onFocus")

        if(!this.state.projectName) {
            this.setState({
                showSuggestion: true,
                items: defaultValue
            })
        }
        
    }

    _onProjectChange = (query) => {
        this.setState({ projectName: query, showSuggestion: true })
        this._loadNewSuggestions(query)
    }

    _loadNewSuggestions(query) {
        if (query) {
            var newDate = data.filter((item) => item.toLowerCase().includes(query.toLowerCase()))
            this.setState({ items: newDate })
        } else {
            this.setState({ items: defaultValue })
        }
    }

    _onSelectedItem(text) {
        this.setState({
            projectName: text,
            showSuggestion: false
        })
    }

    _renderAutoComplete() {
        if (this.state.showSuggestion) {
            return <RoofpikAutoComplete onItemSelected={this._onSelectedItem} items={this.state.items} />
        } else {
            return null;
        }
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container}>

                <Text style={styles.mainSearchTitle}>
                    Power Your Property Search with Genuine User Reviews</Text>


                <View style={styles.autoCompleteContainer}>
                    <TextInput
                        placeholderTextColor='#999999'
                        placeholder="Search by Project"
                        style={styles.inputBox}
                        onChangeText={(text) => this._onProjectChange(text)}
                        value={this.state.projectName}
                        onFocus={this._onFocus}
                    />

                    {this._renderAutoComplete()}

                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>

                    <Button style={{ flex: 1 }}
                        onPress={() => this.props.navigation.navigate('WriteReview')}
                        title="Write Review"
                        color="#ff5a5f"
                        accessibilityLabel="Learn more about this purple button"
                    />

                    <Button
                        onPress={this.onPressSearch}
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