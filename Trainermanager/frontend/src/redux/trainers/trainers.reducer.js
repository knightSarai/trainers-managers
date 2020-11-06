import {GET_TRAINERS} from './trainers.types';

const INITIAL_STATE = {
    trainers: [],
};

const trainersReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_TRAINERS:
            return {
                ...state,
                trainers: action.payload
            }
        default:
            return state
    } 
};

export default trainersReducer;