import React from 'react'
import {StyleSheet, Image, View, TouchableHighlight, FlatList, Text,} from 'react-native';
import {StackNavigator} from 'react-navigation';



export default class ambassadorList extends React.Component {
    static navigationOptions = {
            title: `Meet Our Ambassadors`,
    }





    _keyExtractor = (item, index) => index;

    /*_onPressItem = () => {

        this.props.navigate('ambassadorProfileView', {item})
    }*/

    render() {

        const { state, navigate } = this.props.navigation;
        const item = this.props.item;

        var ambassadors = [
            {name: 'Alec Hanson', grade: 'Sophomore', major: 'Biomedical Engineering', city: 'Cedar Rapids', stateInitials: 'IA', image: 'Resources/alec.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/alec-hanson-biomed-engr-major-cedar-rapids-ia'},
            {name: 'Allie Haugen', grade: 'Sophomore', major: 'Biomedical Engineering', city: 'Ann Arbor', stateInitials: 'MI', image: '/Users/o/Practice2/Resources/allie.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/allie-haugen'},
            {name: 'Allison Rowe', grade: 'Sophomore', major: 'Biomedical Engineering', city: 'Mequon', stateInitials: 'WI', image: '/Users/o/Practice2/Resources/allison_0.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/allison-rowe-mechanical-engr-major-mequon-wi'},
            {name: 'Andrea Birtles', grade: 'Junior', major: 'Chemical Engineering', city: 'Aurora', stateInitials: 'IL', image: '/Users/o/Practice2/Resources/andrea3.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/andrea-birtles'},
            {name: 'Austin Strom', grade: 'Sophomore', major: 'Computer Science and Engineering', city: 'Sioux City', stateInitials: 'IA', image: '/Users/o/Practice2/Resources/austin.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/austin-strom'},
            {name: 'Blake Connor', grade: 'Senior', major: 'Biomedical Engineering', city: 'Swansea', stateInitials: 'IL', image: '/Users/o/Practice2/Resources/blake.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/blake-connor'},
            {name: 'Carli Brucker', grade: 'Senior', major: 'Mechanical Engineering', city: 'Dahinda', stateInitials: 'IL', image: '/Users/o/Practice2/Resources/carli.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/carli-brucker'},
            {name: 'Cassie Lindow', grade: 'Senior', major: 'Environmental Engineering', city: 'Green Bay', stateInitials: 'WI', image: '/Users/o/Practice2/Resources/cassie.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/cassie-lindow'},
            {name: 'Genevieve Goelz', grade: 'Senior', major: 'Biomedical Engineering', city: 'Algonquin', stateInitials: 'IL', image: '/Users/o/Practice2/Resources/genevieve.png', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/genevieve-goelz'},
            {name: 'Jessie Blumberg', grade: 'Senior', major: 'Industrial Engineering', city: 'Gurnee', stateInitials: 'IL', image: '/Users/o/Practice2/Resources/jessie.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/jessie-blumberg'},
            {name: 'Lauren Rasor', grade: 'Junior', major: 'Biomedical Engineering', city: 'Palatine', stateInitials: 'IL', image: '/Users/o/Practice2/Resources/lauren.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/lauren-rasor'},
            {name: 'Madison Murhammer', grade: 'Senior', major: 'Chemical Engineering', city: 'Iowa City', stateInitials: 'IA', image: '/Users/o/Practice2/Resources/madison.png', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/madison-murhammer'},
            {name: 'Mikaela Thiel', grade: 'Sophomore', major: 'Mechanical Engineering', city: 'Chanhassen', stateInitials: 'MN', image: '/Users/o/Practice2/Resources/mikaela.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/mikaela-thiel'},
            {name: 'Paul Flanders', grade: 'Junior', major: 'Chemical Engineering', city: 'Arlington Heights', stateInitials: 'IL', image: '/Users/o/Practice2/Resources/paul.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/paul-flanders'},
            {name: 'Sarah Cooper', grade: 'Senior', major: 'Biomedical Engineering', city: 'Portland', stateInitials: 'OR', image: '/Users/o/Practice2/Resources/sarah3_0.jpg', website: 'https://www.engineering.uiowa.edu/future-students/undergraduate/student-ambassadors/sarah-cooper'},
        ];


        return (

            <View style = {{flex: 1, paddingTop:30, backgroundColor:'black'}}>
                <FlatList
                    data={ambassadors}
                    keyExtractor={this._keyExtractor}
                    renderItem = {({item, index}) => (
                        <TouchableHighlight
                            onPress={()=>
                            {
                                console.log("pressed item: "+index);
                                console.log("Name: "+ambassadors[index].name)

                                navigate('ambassadorProfileView', {person: ambassadors[index]})}}
                            underlayColor='#262624'>
                            <View>
                                <View style={styles.rowContainer}>
                                    <View key = {item.type}>
                                    <Image style={styles.thumb} source={{uri: item.image}} />
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


                                        <Text style={styles.names}>{item.name}</Text>
                                        <Text style={styles.body}>Major: {item.major}</Text>
                                        <Text style={styles.body}>Year: {item.grade}</Text>
                                        <Text style={styles.body}>Hometown: {item.city}, {item.stateInitials} </Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.separator}/>
                            </View>
                        </TouchableHighlight>
                        )

                    }
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    thumb: {
        width: 80,
        height: 80,
        marginRight: 10
    },
    textContainer: {
        flex: 1
    },
    separator: {
        height: 1,
        backgroundColor: 'white'
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
