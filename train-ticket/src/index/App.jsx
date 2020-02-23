import React, { useCallback, useMemo } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';

import Header from '../common/Header.jsx';
import DepartDate from './DepartDate.jsx';
import HighSpeed from './HighSpeed.jsx';
import Journey from './Journey.jsx';
import Submit from './Submit.jsx';

function App(props) {
    const onBack = useCallback(() => {
        window.history.back();
    }, []);
    return (
        <div>
            <Header title="火车票" onBack={onBack} />
            <DepartDate />
            <HighSpeed />
            <Journey />
            <Submit />
        </div>
    );
}

export default connect(
    function mapStateToProps(state) {
        return state;
    },
    function mapDispatchToProps(dispatch) {
        return { dispatch };
    }
)(App);
