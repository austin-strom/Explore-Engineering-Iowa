import React, { Component } from 'react';
import {WebView} from 'react-native';
import {StackNavigator,} from 'react-navigation';


export default class feedback extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Program Feedback`,
        }
    };
    render() {
        const { state, navigate } = this.props.navigation;

        return (
            <WebView
                source={{uri: 'https://uiowa.qualtrics.com/jfe/form/SV_51mmjunRolYX1fT'}}
                style={{marginTop: 20}}
            />
        );
    }
};