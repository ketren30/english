import { time } from 'console';
import React, { useEffect, useState } from 'react';
import { isEmptyBindingElement } from 'typescript';
import './schedule.css';

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

        
    
    return <>
        <div>
            {loading && <h3>Loading...</h3>}
            {!loading && timetable.length!==0 && 
                <table className='tablica'>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Monday</th>
                            <th>Tuesday</th>
                            <th>Wednesday</th>
                            <th>Thursday</th>
                            <th>Friday</th>
                            <th>Saturday</th>
                        </tr>
                    </thead>
                    <tbody>
                        {timetable.map((item, index)=> {
                            return <>
                                <tr>
                                    <td colSpan={7} key={index} className='header'>Classroom №{index+1}</td>
                                </tr>
                                {Object.entries(item).map((elem)=>{
                                    return (
                                        <tr>
                                            <td className='side-header'>{elem[0]}</td>
                                            {elem[1].map((lesson: Lesson, ind: number)=>{
                                                if (Object.keys(lesson).length !== 0)
                                                return <td key={ind}>
                                                    <span className='bold-blue'>Учитель: </span> {lesson.teacher}<br/>
                                                    <span className='bold-green'>Уровень: </span>{lesson.level}<br/>
                                                    <span className='bold-red'>Ученики: </span>{lesson.numberOfStudents}
                                                    </td>
                                                else return <td></td>    
                                            })}
                                        </tr>
                                    )
                                })}
                            </>                   
                        })}
                    </tbody>
                </table>
            }
        </div>
    </>
}