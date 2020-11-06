import React, { Component} from 'react';
import PropTypes from 'prop-types';
/**Redux */
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {getTrainers, deleteTrainers} from '../../redux/trainers/trainers.actions'
import {selectTrainers} from '../../redux/trainers/trainers.selectors'
class Trainers extends Component {
    static propTypes = {
        trainers: PropTypes.array.isRequired,
        getTrainers: PropTypes.func.isRequired,
        deleteTrainers: PropTypes.func.isRequired,
    }
    componentDidMount() {
        this.props.getTrainers();
    }
    render() {
        const {trainers, deleteTrainers} = this.props;
        return (
            <div>
                <h1>Trainers List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            trainers.map(trainer => (
                                <tr key={trainer.id}>
                                    <td>{trainer.id}</td>
                                    <td>{trainer.name}</td>
                                    <td>{trainer.email}</td>
                                    <td>{trainer.message}</td>
                                    <td><button className="btn btn-danger btn-sm" onClick={()=> deleteTrainers(trainer.id)}>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>  
            </div>
        )
    }
}

const mapStateToProps = createStructuredSelector({
    trainers: selectTrainers
})
export default connect(mapStateToProps, {getTrainers, deleteTrainers})(Trainers)