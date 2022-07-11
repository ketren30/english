import React from "react";
import "./modal.css";
import {Main} from '../main/main';

export const Modal = (prop) => {
    if (prop.isVisible) {
        return (
            <div className="mod">
                <h4>Проверьте правильность введенных вами данных!</h4>
                Ваше имя: {prop.name}
                <p /> 
                Ваша фамилия: {prop.surname}
                <p />
                Ваша дата рождения: {prop.bd}
                <p /> 
                Ваша электронная почта: {prop.email}
                <p />
                <button onClick = {prop.onChangeVisible}>Подтвердить</button>
            </div>)
        } else {
            return (
                <div />
            );
            
        }
}