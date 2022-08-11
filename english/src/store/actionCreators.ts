import * as actionTypes from './actionTypes';
import * as types from '../type';
import {store} from '../index'
import {Dispatch} from 'redux';

export const CheckUser = (user: types.PotUser) => {
    const action: types.MainAction = {
        type: actionTypes.checkUser,
        payload: user
    }
    return action
}

export const LogOut = () => {
    const action: types.MainAction = {
        type: actionTypes.logOut
    }
    return action
}

export const ShowLoading = () => {
    const action: types.MainAction = {
        type: actionTypes.showLoading
    }
    return action
}

export const HideLoading = () => {
    const action: types.MainAction = {
        type: actionTypes.hideLoading
    }
    return action
}

export const ShowAlert = (alert: string) => {
    const action: types.MainAction = {
        type: actionTypes.showAlert,
        payload: alert
    }
    return action
}

export function FetchData () {
    return async (dispatch: Dispatch): Promise<void> => {
        dispatch(ShowLoading());

        const url = 'https://raw.githubusercontent.com/ketren30/english/main/english/src/components/schedule/schedule.json';
        
        const action = await (await fetch(url)).json();

        dispatch({
            type: actionTypes.fetchData,
            payload: action,
        });

        dispatch(HideLoading());

    }
}

    
export const ChangeVisibility = () => {
    const action: types.MainAction = {
        type: actionTypes.changeVisibility
    }
    return action
}

export const ChooseCell = (indexes: (number|string)[]) => {
    const action: types.MainAction = {
        type: actionTypes.chooseCell,
        payload: indexes
    }
    return action
}

export const EditSchedule = (lesson: types.Lesson) => {
    const action: types.MainAction = {
        type: actionTypes.editSchedule,
        payload: lesson
    }
    return action
}