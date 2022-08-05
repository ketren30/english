import React from 'react';
import './loggingInput.css'

type Props = {
    onChangeFunction: (event: React.FormEvent<HTMLInputElement>) => void
}

export const LoggingInput: React.FC<Props> = ({onChangeFunction}) => {
    return (
    <input className='input' onChange={onChangeFunction} />
    )
}