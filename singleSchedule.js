import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View} from 'react-native';
import {StackNavigator,} from 'react-navigation';


export default class singleSchedule extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Single Schedule`,
        }
    };
    render() {
        const { state, navigate } = this.props.navigation;
        return (
            <Text>Schedule Single</Text>

        );
    }
};