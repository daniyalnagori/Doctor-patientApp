import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left, Text, Footer, Thumbnail, FooterTab, Badge } from 'native-base';
import { Image, DrawerLayoutAndroid, View, TouchableHighlight, ScrollView, StyleSheet, ListView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase'
import HeaderComp from '../common/header'
import { connect } from 'react-redux'
import { AuthActions } from '../../store/actions'

class Dashboard extends Component {
    openDrawer = () => {
        this.refs['myDrawer'].openDrawer();
    }
    closeDrawer = () => {
        this.refs['myDrawer'].closeDrawer();
    }
    handlelogout() {
        this.props.logoutRequest()
    }
    logout() {
        let log = firebase.auth().signOut()
        if(log){
            Actions.login()
        }
    }
    render() {
        var navigationView = (
            <View>
                <TouchableHighlight onPress={() => Actions.patientadd()}>
                    <CardItem style={styles.drawermenu}>
                        <Icon name="ios-add-circle-outline" style={styles.drawericon}></Icon>
                        <Text style={styles.drawertext}>Add Patient</Text>
                    </CardItem>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => Actions.patientlist()}>
                    <CardItem style={styles.drawermenu}>
                        <Icon name="list" style={styles.drawericon}></Icon>
                        <Text style={styles.drawertext}>Patient List</Text>
                    </CardItem>
                </TouchableHighlight>
                <TouchableHighlight onPress={() => Actions.patientsearch()}>
                    <CardItem style={styles.drawermenu}>
                        <Icon name="ios-search-outline" style={styles.drawericon}></Icon>
                        <Text style={styles.drawertext}>Search</Text>
                    </CardItem>
                </TouchableHighlight>
            </View>
        );
        return (
            <Container style={styles.container}>
                <HeaderComp header="Dashboard" name="menu" logouticon="ios-log-out-outline" logout={() => this.logout()} press={() => this.openDrawer()} />
                <DrawerLayoutAndroid
                    style={styles.drawer}
                    ref="myDrawer"
                    drawerWidth={250}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}
                >
                    <Image source={require('../../Assets/mobile.jpg')} style={styles.pic} />

                    <View style={styles.view}>
                        <CardItem style={styles.card1}>
                            <View onTouchStart={() => Actions.patientadd()}>
                                <Image source={require('../../Assets/user_add.png')} style={styles.image} />
                            </View>
                        </CardItem>


                        <CardItem style={styles.card2}>
                            <View onTouchStart={() => Actions.patientlist()}>
                                <Image source={require('../../Assets/patientdetail.png')} style={styles.image} />
                            </View>
                        </CardItem>

                        <CardItem style={styles.card3}>
                            <View onTouchStart={() => Actions.patientsearch()}>
                                <Image source={require('../../Assets/search.png')} style={styles.image} />
                            </View>
                        </CardItem>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', marginBottom: 40, marginLeft: 10 }}>
                        <CardItem style={styles.seccard}><Text style={styles.patientcaption} onPress={() => Actions.patientadd()}>Patient Add</Text></CardItem>
                        <CardItem style={styles.seccard}><Text style={styles.patientcaption} onPress={() => Actions.patientlist()}>Patient List</Text></CardItem>
                        <CardItem style={styles.seccard}><Text style={styles.patientcaption} onPress={() => Actions.patientsearch()}>Search Patients</Text></CardItem>
                    </View>
                </DrawerLayoutAndroid >
            </Container>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#2C3286',
    },
    drawer: {
        backgroundColor: '#2C3286'
    },
    pic: {
        width: '100%',
        height: 260
    },
    cover: {
        width: 10
    },
    view: {
        flex: 1,
        flexDirection: 'row',
        marginTop: 30,
        marginLeft: 30
    },
    card1: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    card2: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20
    },
    card3: {
        width: 80,
        height: 80,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20
        , borderColor: '#2C3286'
    },
    seccard: {
        width: 80,
        height: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginLeft: 20,
        borderColor: '#2C3286',
        backgroundColor: '#2C3286',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -20
    },
    patientcaption: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center'
    },
    image: {
        width: 50,
        height: 50,
    },
    drawermenu: {
        backgroundColor: '#4E48B2'
    },
    drawertext: {
        fontSize: 12,
        color: 'white'
    },
    drawericon: {
        color: 'white'
    },


})

const mapStateToProps = ({ patientSearch }) => {

    const { patientsearch } = patientSearch;
    return { patientsearch };

};
const mapDispatchToProps = (dispatch) => {
    return {
        logoutRequest: () => dispatch(AuthActions.logoutRequest()),
    };
};

const mainRootContainer = connect(mapStateToProps, mapDispatchToProps)(Dashboard)
export default mainRootContainer;