import React, { Component, Fragment } from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectErrosMsg, selectErrosStatus} from '../../redux/errors/errors.selector';
import {selectMessages} from '../../redux/massages/messages.selector';
import {withAlert} from 'react-alert';

class Alert extends Component {
    componentDidUpdate(prevProp) {
        const {alert, msg, message} = this.props;
        if(msg !== prevProp.msg) {
            msg.name && alert.error(`Name: ${msg.name.join()}`);
            msg.email && alert.error(`Email: ${msg.email.join()}`)
        }
        if(message !== prevProp.message) {
            message.trainerDeleted && alert.success(`Message: ${message.trainerDeleted}`);
        message.trainerAdded && alert.success(`Message: ${message.trainerAdded}`);
        }
    }
    render() {
        return <Fragment/>
    }
}

const withAlertComponent = withAlert()(Alert);

const mapStateToProps = createStructuredSelector({
    msg: selectErrosMsg,
    status: selectErrosStatus,
    message: selectMessages
})

export default connect(mapStateToProps)(withAlertComponent);
