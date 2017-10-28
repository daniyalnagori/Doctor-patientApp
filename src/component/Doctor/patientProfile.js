import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Tex, Card, CardItem, Thumbnail, Text } from 'native-base';
import HeaderComp from '../common/header';
import { Actions } from 'react-native-router-flux';
import { Image, View } from 'react-native';

class PatientProfile extends Component {
    render() {
        const array = [];
        const data = this.props.text;
        for (var x in data) {
            array.push(data[x])
        }


        return (
            <Container style={styles.container}>
                <View style={{ flex: 1 }}>
                    <HeaderComp header="Patient Profile" name="arrow-back" press={() => Actions.patientlist()} />
                    <Image source={require('../../Assets/blurred-background-21.jpg')} style={{ width: '100%', height: 150 }}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            {array[2] == 'Male' ? <Thumbnail circle source={require('../../Assets/male.jpg')} style={styles.avatar} /> : <Thumbnail circle source={require('../../Assets/avatar-female.png')} style={styles.avatar} />}
                        </View>
                    </Image>
                    <View>
                        <CardItem style={styles.cartitem}>
                            <Icon name='ios-person' />
                            <Text style={styles.cardtext1}>Name</Text>
                            <Text style={styles.cardtext2}>{array[6]}</Text>
                        </CardItem>
                        <CardItem style={styles.cartitem}>
                            <Icon name='ios-person' />
                            <Text style={styles.cardtext1}>Patient Disease</Text>
                            <Text style={styles.cardtext2}>{array[4]}</Text>
                        </CardItem>
                        <CardItem style={styles.cartitem}>
                            <Icon name='ios-medical-outline' />
                            <Text style={styles.cardtext1}>Medication</Text>
                            <Text style={styles.cardtext2}>{array[5]}</Text>
                        </CardItem>
                        <CardItem style={styles.cartitem}>
                            <Icon name='male' />
                            <Text style={styles.cardtext1}>Gender</Text>
                            <Text style={styles.cardtext2}>{array[2]}</Text>
                        </CardItem>
                        <CardItem style={styles.cartitem}>
                            <Icon name='ios-call' />
                            <Text style={styles.cardtext1}>Mobile</Text>
                            <Text style={styles.cardtext2}>{array[3]}</Text>
                        </CardItem>
                        <CardItem style={styles.cartitem}>
                            <Icon name='ios-cash' />
                            <Text style={styles.cardtext1}>Cost</Text>
                            <Text style={styles.cardtext2}>{array[0]}</Text>
                        </CardItem>
                        <CardItem style={styles.cartitem}>
                            <Icon name='calendar' />
                            <Text style={styles.cardtext1}>Date</Text>
                            <Text style={styles.cardtext2}>{array[1]}</Text>
                        </CardItem>
                    </View>

                </View>
            </Container>
        )
    }
}

const styles = {
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 52
    },
    cartitem: {
        marginTop: 1
    },
    cardtext1: {
        width: '40%',

    },
    cardtext2: {

        width: '50%',
        textAlign: 'right'
    },
    container: {
        backgroundColor: 'rgba(167, 174, 190, 1)'
    }

}

export default PatientProfile;