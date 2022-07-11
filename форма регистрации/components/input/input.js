import React from 'react';

export const Inp = (prop) => {
    return (
        <input onChange={prop.onHandleChange} onBlur={prop.onBlurChange}/>
    )
}