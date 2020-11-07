import {combineReducers} from 'redux';
import trainersReducer from './trainers/trainers.reducer';
import errorsReducer from './errors/errors.reducer'

const rootReducer = combineReducers({
    trainers: trainersReducer,
    errors: errorsReducer
});

export default rootReducer;