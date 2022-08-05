export interface User {
    login: string,
    password: string,
    name: string,
    lastName: string,
    id: number,
    male: string
}
 export interface PotUser {
    login: string,
    password: string
}


export type LogState = {
    users: User[],
    activeUser: User | undefined,
    isLogged: boolean
} 

export type LogAction = {
    type: string;
    payload?: any 
}

 export type DispatchType = (args: LogAction) => LogAction
