import { toEditorSettings } from "typescript";
import { checkUser } from './actionTypes';


const initialState: LogState = {
    users: [
        {
            "login": "arkadii",
            "password": "9181632716",
            "name": "Аркадий",
            "lastName": "Алексеевич",
            "id": 1
        },
        {
            "login": "ekaterina",
            "password": "9002435991",
            "name": "Екатерина",
            "lastName": "Юрьевна",
            "id": 2
        },
        {
            "login": "aleksey",
            "password": "9817346457",
            "name": "Алексей",
            "lastName": "Константинович",
            "id": 3
        },
        {
            "login": "evgeniya",
            "password": "9530806270",
            "name": "Евгения",
            "lastName": "Александровна",
            "id": 4
        },
        {
            "login": "liliya",
            "password": "9182322272",
            "name": "Лилия",
            "lastName": "Владимировна",
            "id": 5
        }
    ],
    activeUser: undefined,
    isLogged: false
}

const logReducer = (
    state: LogState = initialState,
    action: LogAction
): LogState => {
    switch (action.type) {
        case checkUser:
            state.users.map((item: User)  => {
                if (item.login===action.payload.login && item.password===action.payload.password) {
                    state.activeUser=item;
                    state.isLogged=true;
                }
                console.log(state.isLogged)
                return item
            })
        return state
    }
    return state
}

export default logReducer