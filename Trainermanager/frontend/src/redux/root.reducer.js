import {combineReducers} from 'redux';
import trainersReducer from './trainers/trainers.reducer';
import errorsReducer from './errors/errors.reducer'
import messageReducer from './massages/massages.reducer';

const rootReducer = combineReducers({
    trainers: trainersReducer,
    errors: errorsReducer,
    messages: messageReducer
});

export default rootReducer;