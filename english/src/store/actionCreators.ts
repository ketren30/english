import { checkUser, logOut } from './actionTypes';
import * as types from '../type';

export const CheckUser = (user: types.PotUser) => {
    const action: types.LogAction = {
        type: checkUser,
        payload: user
    }
    return action
}

export const LogOut = () => {
    const action: types.LogAction = {
        type: logOut
    }
    return action
}