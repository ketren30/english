import React from 'react';
import './menu.css';

type Props = {
    name: string
    onClickEvent?: Function
}
export const Menu: React.FC<Props> = ({name, onClickEvent}) => {
    return (
        <button className='menu' onClick={()=>onClickEvent}>{name}</button>
    )
}