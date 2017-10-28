import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, CardItem, Item, Input, Label, Spinner, Picker, Form, Item as FormItem } from 'native-base';
import { StyleSheet, DatePickerAndroid, ScrollView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import HeaderComp from '../common/header'
import DatePicker from 'react-native-datepicker'


class PatientAdd extends Component {

    constructor() {
        super();
        this.state = {
            date: new Date(),
        }
    }
    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large" />
        }
        return (
            <Button full style={{ flex: 1, flexDirection: 'row' }}>
                <Text onPress={this.props.onPress}>Add Patient</Text>
            </Button>
        )
    }
    render() {
        return (
            <Container>
                <ScrollView>
                    <HeaderComp header="Patient Add" name="arrow-back" press={() => Actions.dashboard()} />
                    <CardItem>
                        <Item success floatingLabel >
                            <Label>Patient name</Label>
                            <Input
                                onChangeText={this.props.patientName}
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item success floatingLabel >
                            <Label>Patient Disease</Label>
                            <Input
                                onChangeText={this.props.patientDisease}
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item success floatingLabel >
                            <Label>Patient Medication</Label>
                            <Input
                                onChangeText={this.props.patientMedication}
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item success floatingLabel >
                            <Label>Mobile No</Label>
                            <Input
                                onChangeText={this.props.mobile}
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Item success floatingLabel >
                            <Label>Cost</Label>
                            <Input
                                onChangeText={this.props.cost}
                            />
                        </Item>
                    </CardItem>
                    <CardItem>
                        <Picker
                            style={styles.picker}
                            mode="dropdown"
                            selectedValue={this.props.genderSelected}
                            onValueChange={(value) => this.props.gender(value)}
                        >
                            <Item label="Select" value="Select" />
                            <Item label="Male" value="Male" />
                            <Item label="Female" value="Female"></Item>

                        </Picker>
                    </CardItem>
                    <CardItem style={styles.datepicker}>
                        <DatePicker
                            style={{ width: 200 }}
                            date={this.props.dateSelected}
                            mode="date"
                            placeholder="select date"
                            format="YYYY-MM-DD"
                            minDate={new Date()}
                            maxDate="2017-12-31"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 0,
                                    top: 4,
                                    marginLeft: 0
                                },
                                dateInput: {
                                    marginLeft: 36
                                }
                            }}
                            onDateChange={(value) => this.props.date(value)}
                        />
                    </CardItem>
                    <CardItem>
                        {this.renderButton()}
                    </CardItem>
                </ScrollView>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    label: {
        paddingLeft: 5
    },
    picker: {
        width: '100%'
    },
    datepicker: {
        flex: 1,
        flexDirection: 'row'
    }
})

export default PatientAdd;