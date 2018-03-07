import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Platform} from 'react-native';
import {StackNavigator, TabNavigator, TabBarBottom} from 'react-navigation';

import homeScreen from './homeScreen';
import ambassadorList from './ambassadorList';
import schedules from './schedules';
import feedback from './feedback';
import panel from './panel';
import ambassadorProfileView from "./ambassadorProfileView";
import singleSchedule from "./singleSchedule";

const MainNavigation = StackNavigator({
    Home: { screen: homeScreen},
    ambassadorList: { screen: ambassadorList},
    schedules: { screen: schedules},
    feedback: {screen: feedback},
    panel: {screen: panel},
    ambassadorProfileView: {screen: ambassadorProfileView},
    singleSchedule: {screen: singleSchedule},
});

/*    ambassadorList: { screen: ambassadorList},
    schedules: { screen: schedules},
    feedback: {screen: feedback},
    panel: {screen: panel},*/


export const Tabs = TabNavigator({
    ambassadorList: {
        screen: ambassadorList,
        navigationOptions: {
            tabBarLabel: 'Meet Our Ambassadors',
            tabBarIcon: ({ tintColor }) => <MaterialIcons name='account-circle' size={26} style={{ color: tintColor }} />
        },
    },
    schedules: {
        screen: schedules,
        navigationOptions: {
            tabBarLabel: 'Schedule',
            tabBarIcon: ({ tintColor }) => <Ionicons name='ios-time' size={26} style={{ color: tintColor }} />
        },
    },
    feedback:   {
        screen: feedback,
        navigationOptions: {
            tabBarLabel: 'Feedback'
        }
    }
}, {
    headerMode: 'none',        // I don't want a NavBar at top
    tabBarPosition: 'bottom',  // So your Android tabs go bottom
    tabBarOptions: {
        activeTintColor: 'red',  // Color of tab when pressed
        inactiveTintColor: '#b5b5b5', // Color of tab when not pressed
        showIcon: 'true', // Shows an icon for both iOS and Android
        showLabel: (Platform.OS !== 'android'), //No label for Android
        labelStyle: {
            fontSize: 11,
        },
        style: {
            backgroundColor: '#fff', // Makes Android tab bar white instead of standard blue
            height: (Platform.OS === 'ios') ? 48 : 50 // I didn't use this in my app, so the numbers may be off.
        }
    },
});

const AppNav = () => (
    <TabNav/>
);

export default class App extends React.Component {
    render() {
        return (
            <AppNav/>

        );
    }
}
