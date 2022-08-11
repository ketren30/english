import React, { useEffect, useState } from 'react';
import { LoggingInput } from '../../UI/loggingInput/loggingInput';
import { SubmitButton } from '../../UI/submitButton/submitButton';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from 'redux';
import { CheckUser } from '../../store/actionCreators';
import * as types from '../../type';
import {useNavigate} from 'react-router-dom';


export const Enter = () => {
    const [potentialUserLogin, setPotentialUserLogin] = useState<string>('');
    const [potentialUserPasswword, setPotentialUserPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const dispatch: Dispatch<any> = useDispatch();
    const navigate = useNavigate();
    const isLogged: boolean = useSelector((state: types.MainState)=> state.logging.isLogged);
    const loggedUser: types.User | undefined = useSelector((state: types.MainState) => state.logging.activeUser);
    
    const onLoginChange = (event: React.FormEvent<HTMLInputElement>) => {
        setPotentialUserLogin(event.currentTarget.value)
    }
    const onPasswordChange = (event: React.FormEvent<HTMLInputElement>) => {
        setPotentialUserPassword(event.currentTarget.value)
    }

    useEffect(()=> {
        if (isLogged) setTimeout(()=> navigate('/'), 1500);
    }, [isLogged]);

    const onButtonClick = () => {
        dispatch(CheckUser({login: potentialUserLogin, password: potentialUserPasswword}));
        console.log(isLogged);
        if (!isLogged) setError("Логин или пароль неверны! Попытайтесь еще раз.")
        else { 
            setError('');
        }
    }
    
    return (
        <div>
            {isLogged?
            <h3>Добро пожаловать, {loggedUser!.name +' '+ loggedUser!.lastName}</h3>
            :<div>
                Введите логин: <LoggingInput onChangeFunction={onLoginChange}/><p/>
                Введите пароль: <LoggingInput onChangeFunction={onPasswordChange}/><p/>
                <SubmitButton text='Войти' onbuttonClick={onButtonClick}/>
                {error!! && <h3>{error}</h3>}
            </div>}
        </div>
    )
}