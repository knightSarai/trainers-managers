import { createStore } from 'redux';
import {createSelector} from 'reselect';

const selectErrors = state => state.errors;

export const selectErrosMsg = createSelector(
    [selectErrors],
    errors => errors.msg
)

export const selectErrosStatus = createSelector(
    [selectErrors],
    errors => errors.status
)