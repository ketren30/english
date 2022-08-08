import { time } from 'console';
import React, { useEffect, useState } from 'react';

interface Lesson {
    teacher: string
    level: string,
    numberOfStudents: number
}

interface Classroom {
    "09-00": Lesson[],
    "10-00": Lesson[],
    "11-00": Lesson[],
    "12-00": Lesson[],
    "13-00": Lesson[],
    "14-00": Lesson[],
    "15-00": Lesson[],
    "16-00": Lesson[],
    "17-00": Lesson[],
    "18-00": Lesson[],
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
            
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesdayday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            {timetable.map((item, index)=> {
                console.log(item);
                return <>
                    <tr>
                        <td colSpan={7}>Classroom №{index+1}</td>
                    </tr>
                </>
                
        })}
        
        </table>;
    
    return (
        <div>
            <>
                {loading && <h3>Loading...</h3>}
                {!loading && timetable.length!==0 && {table}}
            </>
        </div>
    )
}