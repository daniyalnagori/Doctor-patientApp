import React, { Component } from 'react';
import { View, ListView, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Thumbnail, Text, Left, Body, List, ListItem, Right, Header, Item, Icon, Input } from 'native-base'
import HeaderComp from '../common/header'

class ListItems extends Component {
    constructor() {
        super();
        this.state = {
            filtered: null,
        }
    }
    RowPress(value) {
        Actions.patientprofile({ text: value })
    }
    inputUserChangeHandler = (e) => {
        const data = this.props.patient;
        const array = [];
        for (var x in data.val) {
            array.push(data.val[x])
        }
        let filtered = null;
        if (e) {
            filtered = array.filter(x => {
                return x.patientname.indexOf(e) >= 0;
            });
        }
        else {
            filtered = array
        }
        this.setState({ filtered });
    }
    userRender() {
        const data = this.props.patient;
        const array = [];
        for (var x in data.val) {
            array.push(data.val[x])
        }
        let list = (this.state.filtered) ? this.state.filtered : array;
         <Thumbnail source={require('../../Assets/male.jpg')} />
        return (
            <List dataArray={list}
                renderRow={(item) =>
                    <ListItem avatar onPress={() => this.RowPress(item)}>
                        <Left>
                           <Thumbnail source={require('../../Assets/male.jpg')} />
                        </Left>
                        <Body>
                            <Text>{item.patientname}</Text>
                            <Text note>{"Disease:" + item.patientdisease}</Text>
                            <Text note>{"Medication:" + item.patientmedication}</Text>
                        </Body>
                        <Right>
                            <Text note>{item.datechange}</Text>
                        </Right>
                    </ListItem>
                }>

            </List>
        )
    }
    render() {
        const data = this.props.patient;
        const arr = [];
        for (var x in data.val) {
            arr.push(data.val[x])
        }
        return (
            <View>
                <View>
                    <Header searchBar rounded>
                        <Item>
                            <Icon name="home" onPress={()=>Actions.dashboard()}/>
                            <Input placeholder="Search" onChangeText={(e) => { this.inputUserChangeHandler(e) }}/>
                            <Icon name="ios-people" />
                        </Item>
                    </Header>
                </View>
                <View style={{ marginTop: 10 }}>
                    {this.userRender()}
                </View>
            </View>
        )
    }
}

export default ListItems