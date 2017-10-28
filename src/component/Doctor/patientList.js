import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text } from 'native-base';
import HeaderComp from '../common/header'
import { ListView } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'
import { PatientAction } from '../../store/actions'
import ListItems from './ListShow'

class PatientList extends Component {

    componentWillMount() {
        this.props.loadPatientList()
        this.createDataSource(this.props)

    }
    componentWillReceiveProps(nextProps) {
        this.createDataSource(nextProps);
    }
    createDataSource({ patients }) {

        const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.dataSource = ds.cloneWithRows(patients);
    }
    renderRow(patients) {
        return <ListItems patient={patients} />;
    }
    render() {
        return (
            <ListView
                enableEmptySections
                dataSource={this.dataSource}
                renderRow={this.renderRow}
            />
        )
    }
}
const mapStateToProps = state => {
    
    const patients = _.map(state.patientList, (val, uid) => {
        return { val, uid };
    });
    return { patients };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loadPatientList: () => dispatch(PatientAction.loadPatientList()),
    };
};

const PatientListContainer = connect(mapStateToProps, mapDispatchToProps)(PatientList);

export default PatientListContainer