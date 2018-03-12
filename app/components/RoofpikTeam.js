import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
} from 'react-native';

import { Card, CardItem, Body } from 'native-base';

export default class RoofpikTeam extends Component {

    render() {
        const roofpikTeams = [
            {
                name: "Arpit Mittal",
                profile: "http://www.roofpik.com/images/arpit.jpg",
                linkedin: "",
                title: "The Tech Maestro",
                position: "Co-Founder",
                bio: "Arpit brings rich technical experience and a passion for all things entrepreneurial. His previous venture, Edcited.com, was acquired by VC-funded company, Co-Cubes.",
                roleAtRoofpik: "He is the force that keeps Roofpik on the cutting edge of technology and product innovation.",
                quote: "\"I work because I love to not because I have to. Arpit believes in never giving up. He says if you dare to dream Big, you will fail multiple times but all you need to do is have courage to pursue them. When no one believes in you, you never loose faith but to Dream Bigger. #Geek,#courage# leader with a strong believer of creating a success\""
            },
            {
                name: "Kanika Katoch",
                profile: "http://www.roofpik.com/images/kanika.jpg",
                linkedin: "",
                title: "The Talent Maven",
                position: "Co-Founder",
                bio: "Kanika has to her credit close to a decade of lending value to reputable brands such KPMG, Convergys and Oracle through her expertise in human resources and strategic business planning.",
                roleAtRoofpik: "At Roofpik Kanika spearheads the People Strategy and fosters operational excellence.",
                quote: "\"Kanika believes in Smart Work. She firmly builds the high driven performance culture where your performance is measured by strategic application and results and not by the number of hours in office. #Smart work,#creativity#passionate leader with a tinge of honest helping hand.\""
            }
        ]

        const teamsList = roofpikTeams.map((person, index) => {
            return (
                <View key={index} style={styles.personinfo}>

                    <Card>
                        <CardItem cardBody>

                            <Image source={{ uri: person.profile }} style={{ height: 200, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={{fontWeight: 'bold', fontSize: 16,}}>{person.name} - {person.title}</Text>
                                <Text style={{paddingTop: 5, paddingBottom: 5}}>{person.position}</Text>
                                <Text>{person.bio}</Text>
                                <Text style={{paddingTop: 5, paddingBottom: 5}}>{person.roleAtRoofpik}</Text>
                                <Text style={{fontStyle: 'italic'}}>{person.quote}</Text>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            )
        })

        return (
            <View style={styles.container}>
                <Text style={styles.teamTitle} >Who’s Leading The Charge?</Text>
                {teamsList}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 10,
        paddingBottom: 10,
        borderColor: '#b3b3b3',
        borderTopWidth: 0.8,
    },
    teamTitle: {
        padding: 10,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    personinfo: {},
});