import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title,Text } from 'native-base';

class HeaderComp extends Component {
    render() {
        return (
            <Header>
                <Left>
                    <Button transparent onPress={this.props.press}>
                        <Icon name={this.props.name} ></Icon>
                    </Button>
                </Left>
                <Body>
                    <Title>{this.props.header}</Title>
                </Body>
             
                  <Right transparent>
                    <Button onPress={this.props.logout}>
                        <Icon name={this.props.logouticon}></Icon>
                    </Button>
                </Right>
                
              
            </Header>
        )
    }
}

const styles = {
    // logo : {
    //     color : 'white'
    // }
}

export default HeaderComp;