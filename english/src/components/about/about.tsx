import React from 'react';
import './about.css';
import background from '../../images/background.jpg'

type Props = {
    name?: string
}
export const About: React.FC<Props> = ({name}) => {
    return (
        <img src={background} className='back'/>
    )
}