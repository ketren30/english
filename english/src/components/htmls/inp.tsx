import React from 'react';
import './htmls.css'

type Props = {
    onChangeFunc: (event: React.FormEvent<HTMLInputElement>) => void
}

export const Inp: React.FC<Props> = ({onChangeFunc}) => {
    return (
    <input className='inp' onChange={onChangeFunc} />
    )
}