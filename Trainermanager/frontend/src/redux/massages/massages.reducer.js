import { CREATE_MESSAGE } from './messages.types';

const errorsReducer = (state={}, action) => {
    switch(action.type) {
        case CREATE_MESSAGE:
            return (state = action.payload)
        default:
            return state
    }
}

export default errorsReducer;