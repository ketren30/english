import { useDispatch, useSelector } from "react-redux";
import './modal.css';
import { SendNewLesson, ChangeVisibility } from "../../../store/actionCreators";
import { useState } from "react";
import * as types from '../../../type'

export const Modal = () => {
    const dispatch: types.DispatchType = useDispatch();
    const isVisible = useSelector((state: types.ScheduleState) => state.isVisible);

    const [lesson, setLesson] = useState<types.Lesson>({
        teacher:'',
        level: '',
        numberOfStudents: 0,
        groupID: 0});
        const onTeacherChange = (e: React.FormEvent<HTMLSelectElement>) => {
            setLesson((prevState)=>{
                return {...prevState, teacher: e.currentTarget.value}
            })
        }
        const onLevelChange = (e: React.FormEvent<HTMLInputElement>) => {
            setLesson((prevState)=>{
                return {...prevState, level: e.currentTarget.value}
            })
        }
        const onNumberChange = (e: React.FormEvent<HTMLSelectElement>) => {
            setLesson((prevState)=>{
                return {...prevState, numberOfStudents: +e.currentTarget.value}
            })
        }
        const onIDChange = (e: React.FormEvent<HTMLInputElement>) => {
            setLesson((prevState)=>{
                return {...prevState, groupID: +e.currentTarget.value}
            })
        }
        const onButtonClick = () => {
            dispatch(SendNewLesson(lesson));
            dispatch(ChangeVisibility());
        }

        if (isVisible) return (
            <div className="modal">
                <h4>Изменить расписание:</h4>
                <span>Выберите учителя:</span>
                <select onChange={onTeacherChange}>
                    <option value="Лилия Владимировна">Лилия Владимировна</option>
                    <option value="Аркадий Алексеевич">Аркадий Алексеевич</option>
                    <option value="Екатерина Юрьевна">Екатерина Юрьевна</option>
                    <option value="Алексей Константинович">Алексей Константинович</option>
                    <option value="Евгения Александровна">Евгения Александровна</option>
                </select><br/>
                <span>Впишите уровень группы:</span>
                <input onChange={onLevelChange}/><br/>
                <span>Выберите количество учеников:</span>
                <select onChange={onNumberChange}>
                    <option value='1'>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select><br/>
                <span>Укажите код группы:</span>
                <input onChange={onIDChange}/>
                <button disabled={Object.entries(lesson).some((item)=>{
                    item[1]==false
                })} onClick={onButtonClick} />
            </div>
    ); else return null
}