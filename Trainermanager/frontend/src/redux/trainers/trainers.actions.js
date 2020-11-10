import axios from 'axios';
import { GET_TRAINERS, DELETE_TRAINERS, ADD_TRAINERS } from './trainers.types';
import { GET_ERRORS } from '../errors/errors.types';
import { createMessage, returnErrors } from '../massages/messages.actions';
// GET TRAINERS
export const getTrainers = () => async dispatch => {
    try {
        const response = await axios.get('/api/trainers/');
        dispatch({
            type: GET_TRAINERS,
            payload: response.data
        })
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status))
    }
}

// DELETE TRAINERS
export const deleteTrainer = (id) => async dispatch => {
    try {
        await axios.delete(`/api/trainers/${id}`);
        dispatch(createMessage({ trainerDeleted: 'Trainer DELETED' }))
        dispatch({
            type: DELETE_TRAINERS,
            payload: id
        })
    } catch (err) {
        dispatch(returnErrors(err.response.data, err.response.status))
    }
}

// ADD TRAINERS
export const addTrainer = (trainer) => dispatch => {
    axios
        .post(`/api/trainers/`, trainer)
        .then(res => {
            dispatch(createMessage({ trainerAdded: 'Trainer Added' }))
            dispatch({
                type: ADD_TRAINERS,
                payload: res.data
            })
        })
        .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
}