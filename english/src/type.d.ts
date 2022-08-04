interface User {
    login: string,
    password: string,
    name: string,
    lastName: string,
    id: number
}
interface PotUser {
    login: string,
    password: string
}


type LogState = {
    users: User[],
    activeUser: User | undefined,
    isLogged: boolean
} 

type LogAction = {
    type: string;
    payload?: any 
}

type DispatchType = (args: LogAction) => LogAction
