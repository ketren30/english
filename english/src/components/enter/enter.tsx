import React, { useEffect, useState } from 'react';
import { Inp } from '../htmls/inp';
import { But } from '../htmls/but';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { CheckUser } from '../../store/actionCreators';

type Props = {
    name?: string
}

export const Enter: React.FC<Props> = ({name}) => {
    const [potencialUser, setPotencialUser] = useState<PotUser>({login: '', password: ''});
    const [error, setError] = useState<string>('');
    const dispatch: Dispatch<any> = useDispatch();
    const isLogged: boolean = useSelector((state: LogState)=> state.isLogged);
    const loggedUser: User | undefined = useSelector((state: LogState) => state.activeUser);
    
    const getUserLogin = (event: React.FormEvent<HTMLInputElement>) => {
        const value:string = event.currentTarget.value;
        setPotencialUser({...potencialUser, login: value}
        );
    }
    const getUserPassword = (event: React.FormEvent<HTMLInputElement>) => {
        const value:string = event.currentTarget.value;
        setPotencialUser({...potencialUser, password: value}
        );
    }
    const onClickF = () => {
        dispatch(CheckUser(potencialUser));
        console.log(isLogged)
        if (!isLogged) setError("Логин или пароль неверны! Попытайтесь еще раз.")
        else setError('')
        console.log(error)
    }
    console.log(isLogged, loggedUser)
    return (
        <div>
            {isLogged?
            <h3>Добро пожаловать, {loggedUser!.name +' '+ loggedUser!.lastName}</h3>
            :<div>
                Введите логин: <Inp onChangeFunc={getUserLogin}/><p/>
                Введите пароль: <Inp onChangeFunc={getUserPassword}/><p/>
                <But text='Войти' onClickFunc={onClickF}/>
                {error!=='' && <h3>{error}</h3>}
            </div>}
        </div>
    )
}