import {GET_TRAINERS, ADD_TRAINERS, DELETE_TRAINERS} from './trainers.types';

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
        case ADD_TRAINERS:
            return {
                ...state,
                trainers: [...state.trainers, action.payload]
            }
        case DELETE_TRAINERS:
            return {
                ...state,
                trainers: state.trainers.filter(trainer => trainer.id !== action.payload)
            }
        default:
            return state
    } 
};

export default trainersReducer;