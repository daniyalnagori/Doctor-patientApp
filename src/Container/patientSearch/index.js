import React, { Component } from 'react'
import { connect } from 'react-redux';
import PatientSearch from '../../component/Doctor/patientSearch'
import { PatientAction } from '../../store/actions'


const mapStateToProps = ({ patientSearch }) => {

    const { patientsearch } = patientSearch;
    return { patientsearch };

};

const mapDispatchToProps = (dispatch) => {
    return {
        onPatientSearch: (val) => dispatch(PatientAction.onPatientSearch(val)),
    };
};

const PatientSearchContainer = connect(mapStateToProps, mapDispatchToProps)(PatientSearch);

export default PatientSearchContainer;