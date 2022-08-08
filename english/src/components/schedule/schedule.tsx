import React, { useEffect, useState } from 'react';
import './schedule.css';
import { Lesson, Classroom, DispatchType, ScheduleState } from '../../type';
import { useDispatch, useSelector } from 'react-redux';
import { FetchData } from '../../store/actionCreators';


export const Schedule: React.FC = () => {
        const dispatch: DispatchType = useDispatch();
        const loading = useSelector((state: ScheduleState)=> state.loading);
        const timetable = useSelector((state: ScheduleState)=> state.timetable);

        useEffect(()=>{
            dispatch(FetchData()); 
        }, [dispatch]);

            
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
                                                    <span className='bold-red'>Ученики: </span>{lesson.numberOfStudents}<br/>
                                                    <span>Код группы: </span>{lesson.groupID}
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