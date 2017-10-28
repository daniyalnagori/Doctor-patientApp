import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Form, Item, Input, Label, Icon, Spinner, Right, Header, Body, Title, Button, Left, Text } from 'native-base';
import { Image, StyleSheet, View } from 'react-native';
import firebase from 'firebase'
import { AuthActions } from '../../store/actions'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'


class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChange(text);

    }
    onPasswordChange(text) {
        this.props.passwordChange(text);
    }
    onButtonPress() {
        const { email, password } = this.props;
        this.props.loginUser({ email, password });
    }
    componentWillReceiveProps() {
        if (this.props.isLoggin) {
            Actions.dashboard();
        }
    }
    // componentWillMount() {
    //     firebase.auth().onAuthStateChanged((user) => {
    //         (user) ? Actions.dashboard() : Actions.login()
    //     })
    // }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" style={styles.spinnerStyle} />;
        }
        return (
            <Button rounded style={styles.button} onPress={() => this.onButtonPress()}>
                <Text style={{marginLeft : '35%'}}>Login</Text>
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
                            <Input placeholder="Username"
                                onChangeText={this.onEmailChange.bind(this)}
                                style={styles.field}
                            />
                        </Item>
                        <Item rounded style={styles.input} transparent>
                            <Icon active name='unlock' style={styles.icons} />
                            <Input placeholder="Password"
                                onChangeText={this.onPasswordChange.bind(this)}
                                secureTextEntry
                                style={styles.field} />
                        </Item>
                        <Text style={styles.errorStyle}>
                            {this.props.error}
                        </Text>
                        {this.renderButton()}
                    </Form>
                    <View style={styles.footer}>
                        <Button style={{ width: '60%', backgroundColor: '#13A679' }} onPress={() => Actions.signup()} ><Text>Create Account</Text></Button>
                        <Button style={{ width: '40%', backgroundColor: '#13A679' }} ><Text>Need Hlep ?</Text></Button>
                    </View>
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
        marginTop: 350,
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
        // paddingLeft: '40%',
        backgroundColor: '#61C39C'
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
    const { email, password, loading, error, isLoggin } = auth;

    return { email, password, loading, error, isLoggin };

};

const mapDispatchToProps = (dispatch) => {
    return {
        emailChange: (text) => dispatch(AuthActions.emailChanged(text)),
        passwordChange: (text) => dispatch(AuthActions.passwordChanged(text)),
        loginUser: (userData) => dispatch(AuthActions.loginUser(userData))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm); 