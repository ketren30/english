import React from 'react';
import './htmls.css';
import { Dispatch } from 'redux';

type Props = {
    onClickFunc: any
    text: string
}

export const But: React.FC<Props> = ({onClickFunc, text}) => {
    return (
        <button className='but' onClick= {onClickFunc} >{text}</button>
    )
}