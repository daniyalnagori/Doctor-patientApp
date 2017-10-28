import React, { Component } from 'react'
import { connect } from 'react-redux';
import PatientAdd from '../../component/Doctor/patientAdd'
import { PatientAction } from '../../store/actions'

class AddPatients extends Component {
    constructor() {
        super();
        this.state = {
            selected1: "Male",
            date: new Date()
        }
    }
    patientadd(val) {
        this.props.onpatientNameChange(val)
    }
    patientdisease(val) {
        this.props.onpatientdiseaseChange(val)
    }

    patientmedication(val) {
        this.props.onpatientMedChange(val)
    }
    cost(val) {
        this.props.oncostChange(val)
    }
    onMObile(val) {
        this.props.onMObileChange(val)
    }
    Genderchange(value) {
        this.setState({
            selected1: value
        })
        console.log(value, "value from container")
        this.props.onGenderChange(value)
    }
    date(value) {
        this.setState({
            date: value
        })
        this.props.onDateChange(value)
        console.log("Selected Date", value)
    }

    onButtonPress() {

        const { patientname, patientdisease, patientmedication, cost, mobile, genderchange, datechange } = this.props;
        if (patientname && patientmedication && patientmedication && mobile && cost && datechange, genderchange) {
            this.props.addPatient({ patientname, patientdisease, patientmedication, cost, mobile, genderchange, datechange })
            alert("Success Insert")
        }
        else {
            alert("Insert Unfill Data")
        }
    }

    render() {
        return (
            <PatientAdd dateSelected={this.state.date} genderSelected={this.state.selected1} onPress={() => this.onButtonPress()} patientName={this.patientadd.bind(this)} patientDisease={this.patientdisease.bind(this)} patientMedication={this.patientmedication.bind(this)} cost={this.cost.bind(this)} gender={this.Genderchange.bind(this)} date={this.date.bind(this)} mobile={this.onMObile.bind(this)} />
        )
    }
}

const mapStateToProps = ({ patient }) => {

    const { patientname, patientdisease, patientmedication, cost, mobile, genderchange, datechange, loading } = patient;
    return { patientname, patientdisease, patientmedication, cost, mobile, genderchange, datechange, loading };

};

const mapDispatchToProps = (dispatch) => {
    return {
        onpatientNameChange: (val) => dispatch(PatientAction.onpatientNameChange(val)),
        onpatientdiseaseChange: (val) => dispatch(PatientAction.onpatientdiseaseChange(val)),
        onpatientMedChange: (val) => dispatch(PatientAction.onpatientMedChange(val)),
        oncostChange: (val) => dispatch(PatientAction.oncostChange(val)),
        onMObileChange: (userData) => dispatch(PatientAction.onMObileChange(userData)),
        addPatient: (userData) => dispatch(PatientAction.addPatient(userData)),
        onGenderChange: (userData) => dispatch(PatientAction.onGenderChange(userData)),
        onDateChange: (userData) => dispatch(PatientAction.onDateChange(userData)),
    };
};

const AddPatientContainer = connect(mapStateToProps, mapDispatchToProps)(AddPatients);

export default AddPatientContainer;