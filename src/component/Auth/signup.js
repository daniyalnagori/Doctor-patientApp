import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left, Text } from 'native-base';
import { Image, StyleSheet, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { AuthActions } from '../../store/actions'
import { connect } from 'react-redux';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {

        }
    }

    onEmailChange(text) {
        this.props.emailChange(text)
    }
    onPasswordChange(text) {
        this.props.passwordChange(text)
    }
    firstName(text) {
        this.props.firstChange(text)
    }
    lastName(text) {
        this.props.lastChange(text)
    }


    onButtonPress() {
        const { first, last, email, password, } = this.props;
        this.props.signupUser({ first, last, email, password });
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" style={styles.spinnerStyle} />
        }
        return (
            <Button rounded style={styles.button} onPress={() => this.onButtonPress()}>
                <Text style={{marginLeft : '35%'}}>Register</Text>
            </Button>
        );

    }
    render() {
        return (
            <Container style={styles.backgroundImage}>
                <Image source={require('../../Assets/splash.png')} style={styles.backImage}>
                    <Form style={styles.form}>
                        <Item rounded style={styles.input}>
                            <Icon active name='ios-person' style={styles.icons} />
                            <Input placeholder="First Name"
                                style={styles.field}
                                onChangeText={this.firstName.bind(this)}
                            />
                        </Item>
                        <Item rounded style={styles.input}>
                            <Icon active name='ios-person' style={styles.icons} />
                            <Input placeholder="Last Name"
                                style={styles.field} F
                                onChangeText={this.lastName.bind(this)}
                            />
                        </Item>
                        <Item rounded style={styles.input}>
                            <Icon active name='ios-person' style={styles.icons} />
                            <Input placeholder="Username"
                                style={styles.field}
                                onChangeText={this.onEmailChange.bind(this)}
                            />
                        </Item>
                        <Item rounded style={styles.input} transparent>
                            <Icon active name='unlock' style={styles.icons} />
                            <Input placeholder="Password"
                                style={styles.field}
                                secureTextEntry
                                onChangeText={this.onPasswordChange.bind(this)}
                            />
                        </Item>
                        <Text style={styles.errorStyle}>
                            {this.props.error}
                        </Text>
                        {this.renderButton()}

                        <Button rounded style={styles.button1} onPress={() => Actions.login()}>
                            <Text>Back</Text>
                        </Button>
                    </Form>
                </Image>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: null,
        height: null
    },

    backImage: {
        width: 360,
        height: 620
    },
    form: {
        marginTop: 270,
        alignItems: 'center'
    },
    input: {
        width: '92%',
        height: 40,
        marginTop: 10
    },
    field: {
        color: '#fff',
        borderRadius: 50
    },
    icons: {
        color: '#fff'
    },
    button: {
        marginTop: 15,
        width: '90%',
        marginLeft: 20,
        backgroundColor: '#61C39C'
    },
    button1: {
        marginTop: 15,
        width: '30%',
        marginLeft: '35%',
        backgroundColor: '#13A679',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        width: '90%',
        marginLeft: 20,
        marginTop: 10
    },
    errorStyle: {
        fontSize: 14,
        alignSelf: 'center',
        color: 'red'
    }
});

const mapStateToProps = ({ auth }) => {
    const { first, last, email, password, loading, error } = auth;

    return { first, last, email, password, loading, error };

};

const mapDispatchToProps = (dispatch) => {
    return {
        firstChange: (text) => dispatch(AuthActions.firstChange(text)),
        lastChange: (text) => dispatch(AuthActions.lastChange(text)),
        emailChange: (text) => dispatch(AuthActions.emailChanged(text)),
        passwordChange: (text) => dispatch(AuthActions.passwordChanged(text)),
        signupUser: (userData) => dispatch(AuthActions.signupUser(userData))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(SignUp); 