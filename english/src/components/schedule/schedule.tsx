import { time } from 'console';
import React, { useEffect, useState } from 'react';

interface Lesson {
    teacher: string
    level: string,
    numberOfStudents: number
}
interface Time {
    Monday: Lesson,
        Tuesday: Lesson,
        Wednesday: Lesson,
        Thursday: Lesson,
        Friday: Lesson,
        Saturday: Lesson
}
interface Classroom {
    "09-00": Time,
    "10-00": Time,
    "11-00": Time,
    "12-00": Time,
    "13-00": Time,
    "14-00": Time,
    "15-00": Time,
    "16-00": Time,
    "17-00": Time,
    "18-00": Time,
}
export const Schedule: React.FC = () => {
        const [timetable, setTimetable] = useState<Classroom[]>([]);
        //const [table, setTable] = useState<Element>();
        const [loading, setLoading] = useState<boolean>(false);

        const GetData = (link: string) => {
            setLoading(true);
            fetch(link)
            .then((res) => {return res.json().then((result)=> {
              setTimetable(result); console.log(result);
              setTimeout(()=>setLoading(false), 1500);
            })})
          };
        useEffect(()=>{
        GetData('https://raw.githubusercontent.com/ketren30/english/main/english/src/components/schedule/schedule.json');
        console.log(timetable);
        }, []);

        const table=
        <table>
            <>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesdayday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturdayday</th>
            {timetable.map((item)=> {
                <tr>
                    <td colSpan={7}>{Object.keys(item)[0]}</td>
                </tr>
            const classRoom: any = (Object.entries(item)[0][1]);
            for (var prop in classRoom) {
                <tr>
                    <td>
                        <td>{prop}</td>
                        <td>
                            Teacher: {classRoom.prop.Monday.teacher}<br/>
                            Level: {classRoom.prop.Monday.level}<br/>
                            Students: {classRoom.prop.Monday.numberOfStudents}
                        </td>
                    </td>
                </tr>
            }

        })}
        </>
        </table>
    
    return (
        <div>
            <>
                {loading && <h3>Loading...</h3>}
                {!loading && timetable.length!==0 && {table}}
            </>
        </div>
    )
}