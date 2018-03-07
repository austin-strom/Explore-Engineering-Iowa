import React, { Component } from 'react';
import {AppRegistry, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import { Materiallcons } from '@expo/vector-icons';

export default class homeScreen extends React.Component {
    static navigationOptions = {
        title: 'Explore Engineering @ Iowa',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style =
              {
                  {
                    backgroundColor: '#262624',
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }
              }>
                <View style ={{backgroundColor: 'white',justifyContent:'center',alignItems:'center', flex:3}}>
                    <Image resizeMode="center"
                           source ={require('/Users/o/Practice2/Resources/logo.v1.png')}
                           style ={styles.canvas}
                    />
                </View>

    /*
            <View style =
                {
                  {
                      flex: 2,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                  }

                }>


            <View style={{flex:1}}>

                <TouchableOpacity
                    onPress=
                        {() =>
                            navigate('schedules', { name: 'schedules' })
                        }
                    style = {styles.buttons}
                >

                <Text style={styles.text}> Schedule </Text>

                </TouchableOpacity>
            </View>

            <View style={{flex:2}}>

                <TouchableOpacity
                    onPress=
                        {() =>
                            navigate('ambassadorList', { name: 'ambassadorList' })
                        }
                    style = {styles.buttons}
                >

                    <Text style ={styles.text}> Meet Your Ambassadors! </Text>

                </TouchableOpacity>
            </View>
            </View>

                <View style =
                          {
                              {
                                  flex: 2,
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                              }

                          }>
            <View style={{flex:2}}>

                <TouchableOpacity
                    onPress=
                        {() =>
                            navigate('panel', { name: 'panel' })
                        }
                    style = {styles.buttons}
                >

                    <Text style = {styles.text}> Faculty Panel </Text>

                </TouchableOpacity>
            </View>
            <View style={{flex:2}}>

                <TouchableOpacity
                    onPress=
                        {() =>
                            navigate('feedback', { name: 'feedback' })
                        }
                    style = {styles.buttons}
                >

                    <Text style = {styles.text}> Feedback </Text>

                </TouchableOpacity>
            </View>
            </View>*/
            </View>

        );
    }
}

const styles = StyleSheet.create({
    thumb: {
        width: 200,
        height: 200,
        marginRight: 10,
        marginBottom: 30
    },
    separator: {
        height: 1,
        backgroundColor: 'white'
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    canvas: {
        top: 0,
        paddingLeft: 0,
        paddingBottom: 0,
        paddingRight: 0,
    },

    buttons:{
        flex: 2,
        marginTop: 20,
        borderRadius: 4,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },

});

