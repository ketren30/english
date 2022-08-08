import * as actionTypes from './actionTypes';
import * as types from '../type';
import {store} from '../index'
//import { useDispatch } from 'react-redux';
//const dispatch:types.DispatchType=useDispatch();

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
    store.dispatch(ShowLoading());
    const action = fetch('https://raw.githubusercontent.com/ketren30/english/main/english/src/components/schedule/schedule.json')
            .then((res) => {return res.json().then((result) => {
                return {type: actionTypes.fetchData, payload: result}}); 
    })
    return action
}
    


export const ChangeVisibility = () => {
    const action: types.MainAction = {
        type: actionTypes.changeVisibility
    }
    return action
}