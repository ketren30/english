import React from 'react';
import flag from './images/flag.jpg';
import './App.css';
import call from './images/call.jpg';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Enter } from './components/enter/enter';
import { News } from './components/news/news';
import { Schedule } from './components/schedule/schedule';
import { Teachers } from './components/teachers/teachers';
import { Cambridge } from './components/cambridge/cambridge';
import { About } from './components/about/about';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink
} from "react-router-dom";


export default function App() {
const isLogged: boolean = useSelector((state: LogState) => state.isLogged);
const LoggedUser: User| undefined = useSelector((state: LogState) => state.activeUser);
console.log(isLogged);

  return (
    <Router>
      <div className='app'>
        <div className='wrap'>
          <div className='wrap' style={{width: 'fit-content'}}>
            <img src={flag} className='pic-icon'/>
            <h1>Enjoy English school</h1>
          </div>
          <div className='wrap' style={{width: 'fit-content'}}>
            <img src={call} className='pic-call'/>
            <div>
              <h4>Позвоните сейчас</h4>
              <h2>928-422-42-91</h2>
            </div>
          </div>
        </div>
         <div className='str'/>
        <nav>
          <ul className='menu-wrapper'>
           
            <li className='lists'>
              <NavLink className={(navData) => navData.isActive ? "activeMenu" : "menu" } to="/" >О нас</NavLink>
            </li>
            <li className='lists'>
              <NavLink className={(navData) => navData.isActive ? "activeMenu" : "menu" } to="/cambridge" >Кембриджские экзамены</NavLink>
            </li>
              <li className='lists'>
            <NavLink className={(navData) => navData.isActive ? "activeMenu" : "menu" } to="/teachers" >Наши учителя</NavLink>
              </li>
            <li className='lists'>
              <NavLink className={(navData) => navData.isActive ? "activeMenu" : "menu" } to="/schedule" >Расписание</NavLink>
            </li>
            <li className='lists'>
              <NavLink className={(navData) => navData.isActive ? "activeMenu" : "menu" } to="/news" >Новости</NavLink>
            </li>
            {isLogged? 
            <li className='lists'>
              <span className='menu'>{LoggedUser!.name}</span>
            </li>
            :<li className='lists'>
              <NavLink className={(navData) => navData.isActive ? "activeMenu" : "menu" } to="/enter" >Войти</NavLink>
            </li>}
          </ul>
        </nav>

    <Routes>
          <Route path='/' element={<About/>} />
          <Route path='/cambridge' element={<Cambridge/>} />
          <Route path='/teachers' element={<Teachers/>} />
          <Route path='/schedule' element={<Schedule/>} />
          <Route path='/news' element={<News/>} />
          <Route path='/enter' element={<Enter/>} />
        </Routes>

      </div>
    </Router>
  );
}


