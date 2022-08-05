import React from 'react';
import './submitButton.css';

type Props = {
    onbuttonClick: any
    text: string
}

export const SubmitButton: React.FC<Props> = ({onbuttonClick, text}) => {
    return (
        <button className='button' onClick= {onbuttonClick} >{text}</button>
    )
}