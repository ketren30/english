import React from 'react';

type Props = {
    name?: string
}
export const Teachers: React.FC<Props> = ({name}) => {
    return (
        <h1>Наши учителя</h1>
    )
}