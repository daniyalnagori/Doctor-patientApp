import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, Item, Input, Footer, FooterTab, Card, CardItem, Content, List, ListItem, Thumbnail } from 'native-base';
import HeaderComp from '../common/header'
import { Actions } from 'react-native-router-flux'
import { View } from 'react-native'

class PatientSearch extends Component {
    constructor() {
        super();
        this.state = {
            search: ''
        }
    }
    RowPress(value) {
        Actions.patientprofile({ text: value })
    }
    onChange(value) {
        this.setState({ search: value })
        this.props.onPatientSearch(value)
    }
    render() {
        const data = this.props.patientsearch;
        const arr = [];
        for (var x in data) {
            arr.push(data[x])
        }
        // console.log("Ehsan",arr)
        return (
            <Container>
                <Header searchBar rounded>
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" onChangeText={(value) => this.onChange(value)} />
                        <Icon name="ios-people" />
                    </Item>
                </Header>
                <Content>   
                    {arr.map((val, index) => {
                        return (
                            <List key={index} onTouchStart={() => this.RowPress(val)}>
                                <ListItem avatar>
                                    <Left>
                                        {val.genderchange == 'Male' ? <Thumbnail source={require('../../Assets/male.jpg')} /> : <Thumbnail source={require('../../Assets/avatar-female.png')} />}
                                    </Left>
                                    <Body>
                                        <Text>{val.patientname}</Text>
                                        <Text note>{"Disease : " + val.patientdisease}</Text>
                                        <Text note>{"Mobile : " + val.mobile}</Text>
                                    </Body>
                                    <Right>
                                        <Text note>{val.datechange}</Text>
                                    </Right>
                                </ListItem>
                            </List>
                        )
                    })}
                </Content>

                <Footer>
                    <FooterTab>
                        <Button onPress={() => Actions.dashboard()}><Text>Back</Text></Button>
                    </FooterTab>
                </Footer>

            </Container >
        )
    }
}

const styles = {
    cardSearch: {
        marginTop: 20
    }
}


export default PatientSearch;