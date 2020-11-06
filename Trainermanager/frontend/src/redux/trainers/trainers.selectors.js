import {createSelector} from 'reselect';

const selectTrainersState = state => state.trainers;

export const selectTrainers = createSelector(
    [selectTrainersState],
    trainers => trainers.trainers
)