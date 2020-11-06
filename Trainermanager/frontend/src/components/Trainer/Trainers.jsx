import React, { Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getTrainers} from '../../redux/trainers/trainers.actions'

class Trainers extends Component {
    static propTypes = {
        trainers: PropTypes.array.isRequired
    }
    componentDidMount() {
        this.props.getTrainers();
    }
    render() {
        return (
            <div>
                <h1>Trainers List</h1>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    trainers: state.trainers.trainers
})

export default connect(mapStateToProps, {getTrainers})(Trainers)