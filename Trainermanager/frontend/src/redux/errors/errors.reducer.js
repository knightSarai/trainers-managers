import { GET_ERRORS } from './errors.types';

const INITIAL_STATE = {
    msg: {},
    status: null
}

const errorsReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status
            }
        default:
            return state
    }
}

export default errorsReducer;

