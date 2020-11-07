import { GET_MESSAGES, CREATE_MESSAGE } from './messages.types';

export const createMessage = msg => {
    return {
        type: CREATE_MESSAGE,
        payload: msg
    }
}