import React from 'react';

type Props = {
    name?: string
}
export const Schedule: React.FC<Props> = ({name}) => {
    return (
        <h1>Расписание</h1>
    )
}