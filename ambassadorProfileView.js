import React from 'react';
import { WebView , Text, View, Alert} from 'react-native';
import {StackNavigator} from 'react-navigation';




export default class ambassadorProfileView extends React.Component {


    static navigationOptions = ({ navigation }) => {
        return {
            title: `Meet Our Ambassadors`,
        }
    };

    /*_ambassadorUrlCreator = (item) => {
        console.log('Made it to the creator');
        let urlString = 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/';
        conle.log(urlString);
        urlString = urlString + (params.person.name.replace(" ", "-"))+ '-';
        console.log(urlString);
        if(params.person.major === 'Computer Science and Engineering')
        {
            urlString = urlString +''
        }
        if(item.major === 'Biomedical Engineering')
        {
            urlString = urlString +'biomed-engr-major-'
        }
        console.log(urlString);
        urlString = urlString + item.city.replace(" ", "-") + '-' + item.stateInitials;
        console.log(urlString);
        return urlString;
    };
*/

    render() {
        const{params} = this.props.navigation.state;
        /*
        console.log('Made it to the creator');
        let urlString = 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/';
        console.log(urlString);
        urlString = urlString + (params.person.name.replace(" ", "-"))+ '-';
        console.log(urlString);
        if(params.person.major === 'Computer Science and Engineering')
        {
            urlString = urlString +''
        }
        if(params.person.major === 'Biomedical Engineering')
        {
            urlString = urlString +'biomed-engr-major-'
        }
        console.log(urlString);
        urlString = urlString + params.person.city.replace(" ", "-") + '-' + params.person.stateInitials;
        console.log(urlString);
        */

        return (

            <WebView
                source={{uri: params.person.website}}
                style={{marginTop: 20}}
            />
            );
    }
}