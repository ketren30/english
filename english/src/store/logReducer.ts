import { toEditorSettings } from "typescript";
import { checkUser, logOut } from './actionTypes';
import * as types from '../type';


const initialState: types.LogState = {
    users: [
        {
            "login": "arkadii",
            "password": "9181632716",
            "name": "Аркадий",
            "lastName": "Алексеевич",
            "id": 1,
            "male": 'male'
        },
        {
            "login": "e",
            "password": "9",
            "name": "Екатерина",
            "lastName": "Юрьевна",
            "id": 2,
            "male": 'female'
        },
        {
            "login": "aleksey",
            "password": "9817346457",
            "name": "Алексей",
            "lastName": "Константинович",
            "id": 3,
            "male": 'male'
        },
        {
            "login": "evgeniya",
            "password": "9530806270",
            "name": "Евгения",
            "lastName": "Александровна",
            "id": 4,
            "male": 'female'
        },
        {
            "login": "liliya",
            "password": "9182322272",
            "name": "Лилия",
            "lastName": "Владимировна",
            "id": 5,
            "male": 'female'
        }
    ],
    activeUser: undefined,
    isLogged: false
}

const logReducer = (
    state: types.LogState = initialState,
    action: types.LogAction
): types.LogState => {
    switch (action.type) {
        case checkUser:
            state.users.map((item: types.User)  => {
                if (item.login===action.payload.login && item.password===action.payload.password) {
                    state.activeUser=item;
                    state.isLogged=true;
                }
                console.log(state.isLogged)
                return item
            });
            return state
        case logOut: 
            return {...state, activeUser: undefined, isLogged: false}
    }
    return state
}

export default logReducer