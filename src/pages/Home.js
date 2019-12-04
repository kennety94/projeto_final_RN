import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import api from './../services/api';

export default class Home extends Component {

    static navigationOptions = {
        headerShown: false,
    };

    state = {
        pets: []
    }

    getPets = async () => {
        const response = await api.get('/pets');
        const pets = response.data;
        this.setState({ pets });
    }

    componentDidMount = () => {
        this.getPets();
    }

    renderItem = ({ item }) => (
        <View key={item._id} style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subtitle}>{item.raca}</Text>
        </View>
    )

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}> Home </Text>
                <FlatList
                    data={this.state.pets}
                    keyExtractor={item => item._id}
                    renderItem={this.renderItem}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    header: {
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        color: '#1d1108'
    },
    container: {
        flex: 1,
        backgroundColor: '#f5f9f7'
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: 6,
        padding: 20,
        elevation: 5,
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        color: '#9EA797',
        fontSize: 16,
        marginTop: 30,
    }
})