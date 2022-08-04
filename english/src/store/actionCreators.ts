import { checkUser } from './actionTypes';

export const CheckUser = (user: PotUser) => {
    const action: LogAction = {
        type: checkUser,
        payload: user
    }
    return action
}