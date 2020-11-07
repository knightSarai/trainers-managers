import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectErrosMsg, selectErrosStatus} from '../../redux/errors/errors.selector';
import {withAlert} from 'react-alert';

class Alert extends Component {
    componentDidUpdate() {
        const {alert, msg} = this.props;
        msg.name && alert.show(`Name: ${msg.name.join()}`);
        msg.email && alert.show(`Email: ${msg.email.join()}`)

    }
    render() {
        return <Fragment/>
    }
}

const withAlertComponent = withAlert()(Alert);

const mapStateToProps = createStructuredSelector({
    msg: selectErrosMsg,
    status: selectErrosStatus
})

export default connect(mapStateToProps)(withAlertComponent);
