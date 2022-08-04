import React from 'react';

type Props = {
    name?: string
}
export const News: React.FC<Props> = ({name}) => {
    return (
        <h1>Новости</h1>
    )
}