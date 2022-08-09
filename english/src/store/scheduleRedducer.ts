import * as actionTypes from './actionTypes';
import { ScheduleState, MainAction, Lesson, Keys } from '../type';
const initialState = {
    timetable: [],
    loading: false,
    isVisible: false,
    changingCell: []
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
        case actionTypes.editSchedule:
            console.log(action.payload)
            return {...state, changingCell: action.payload}
        /* case actionTypes.sendNewLesson: {
            const index1 = state.changingCell[0];
            const index2= +state.changingCell[2];
            const newTimetable = state.timetable.map((item, index)=>{
                if (index===index1) {
                    for (var prop in item) {
                        if (prop===state.changingCell[1]) {
                            item[prop].map((elem: Lesson|{}, ind: number)=>{
                                if (ind===index2) return action.payload
                                else return elem
                            })
                        } else return
                    }
                } else return item
            })
            
            return {...state, timetable: newTimetable} */
        //}
    }
    return state
}

export default scheduleReducer