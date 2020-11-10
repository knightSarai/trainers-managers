import { GET_MESSAGES, CREATE_MESSAGE } from './messages.types';
import { GET_ERRORS } from '../errors/errors.types';
export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}

export const returnErrors = (msg, status) => {
    console.log("err");
    return {
        type: GET_ERRORS,
        payload: {
            msg,
            status
        }
    }
}