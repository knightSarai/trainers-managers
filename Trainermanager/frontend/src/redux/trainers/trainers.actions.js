import axios from 'axios';
import {GET_TRAINERS} from './trainers.types';

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
