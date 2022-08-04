import React from 'react';

type Props = {
    name?: string
}
export const Cambridge: React.FC<Props> = ({name}) => {
    return (
        <h1>Кембриджские экзамены</h1>
    )
}