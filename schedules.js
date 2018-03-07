import React, { Component } from 'react';
import {AppRegistry, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import {StackNavigator,} from 'react-navigation';


export default class schedules extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: `Day Schedule`,
        }
    };


    _keyExtractor = (item, index) => index;

    render() {
        const { state, navigate } = this.props.navigation;

        var schedule = [
            {time: '8:15am-9:10am', event: 'Check In/Campus Tours'},
            {time: '9:15am-10:00am', event: 'Introductory Session'},
            {time: '10:45am-12:10pm', event: 'Major Presentations/Building Tour *'},
            {time: '12:20pm-1:10pm', event: 'Lunch/Residence Hall Tours *'},
            {time: '1:25pm-1:50pm', event: 'Faculty Panel'},
            {time: '1:55pm-2:50pm', event: 'Major Presentations/Building Tour*'},
            {time: '2:55pm-3:20pm', event: 'Something More Panel'},
            {time: '3:25pm-4:15pm', event: 'Breakout Sessions'},];

        return (

            <View style = {{flex: 1, paddingTop:30, backgroundColor:'black'}}>
                <FlatList
                    data={schedule}
                    keyExtractor={this._keyExtractor}
                    renderItem = {({item}) =>
                    (
                        <View>
                            <View style={styles.rowContainer}>
                                <View>
                                    <Text style={styles.time}>{item.time}</Text>
                                </View>
                                <View style={styles.textContainer}>
                                        <View style =
                                                  {
                                                      {
                                                          flex: 1,
                                                          flexDirection: 'column',
                                                          justifyContent: 'space-between',
                                                      }
                                                  }>


                                            <Text style={styles.events}>{item.event}</Text>

                                        </View>
                                    </View>
                                </View>
                                <View style={styles.separator}/>
                            </View>
                    )

                    }
                />
            </View>






        );
    }
};

const styles =StyleSheet.create
({
    mainContainer: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: 'black'
    },
    timeContainer: {
        flex:1,
    },
    eventContainer: {
        flex:2
    },
    events: {
        fontSize: 30,
        color: 'white'
    },
    separator: {
        height: 1,
        backgroundColor: 'white'
    },
    times:{
    },
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    names: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white'
    },
    body: {
        fontSize: 20,
        color: '#ffd53f'
    },
    rowContainer: {
        flexDirection: 'row',
        padding: 10,
    },


});