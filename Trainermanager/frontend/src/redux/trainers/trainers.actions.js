import axios from 'axios';
import {GET_TRAINERS, DELETE_TRAINERS, ADD_TRAINERS} from './trainers.types';

// GET TRAINERS
export const getTrainers = () => async dispatch => {
    try {
        const response = await axios.get('/api/trainers/');
        dispatch({
            type: GET_TRAINERS,
            payload: response.data
        })
    }catch(error){
        console.log(error);
    }
}

// DELETE TRAINERS
export const deleteTrainer = (id) => async dispatch => {
    try {
        await axios.delete(`/api/trainers/${id}`);
        dispatch({
            type: DELETE_TRAINERS,
            payload: id
        })
    }catch(error){
        console.log(error);
    }
}

// ADD TRAINERS
export const addTrainer = (trainer) => async dispatch => {
    try {
        const response = await axios.post(`/api/trainers/`, trainer);
        dispatch({
            type: ADD_TRAINERS,
            payload: response.data
        })
    }catch(error){
        console.log(error);
    }
}