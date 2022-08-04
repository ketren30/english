import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Menu } from './components/menus/menu'

const App: React.FC = () => {
  return (
    <div className="App">
      <div className='menu-wrapper'>
        <Menu name='О нас'/>
        <Menu name='Кембриджские экзамены'/>
        <Menu name='Преподаватели'/>
        <Menu name='Записаться на занятия'/>
        <Menu name='Расписание'/>
        <Menu name='Войти'/>

      </div>
    </div>
  );
}

export default App;
