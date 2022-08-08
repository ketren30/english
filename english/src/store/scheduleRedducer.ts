import * as actionTypes from './actionTypes';
import { ScheduleState, MainAction } from '../type';

const initialState = {
    timetable: [],
    loading: false,
    isVisible: false
}

const scheduleReducer = (
    state: ScheduleState = initialState,
    action: MainAction
): ScheduleState => {
    switch(action.type) {
        case actionTypes.changeVisibility:
            return {...state, loading: !state.loading}
        case actionTypes.fetchData:
            return {...state, timetable: action.payload}
        case actionTypes.showLoading:
            return {...state, loading: true}
        case actionTypes.hideLoading:
            return {...state, loading: false}
    }
    return state
}

export default scheduleReducer