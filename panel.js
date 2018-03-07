import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {StackNavigator,} from 'react-navigation';


export default class panel extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Faculty Panel`,
        }
    };
    render() {
        const { state, navigate } = this.props.navigation;
        return (
            <Text>Panel</Text>
        );
    }
};