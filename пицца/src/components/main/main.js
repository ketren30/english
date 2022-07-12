import React from 'react';
import margarita from "../margarita.jpg";
import pepper from "../pepperony.jpg";
import cheese from "../cheese.jpg";
import meat from "../meat.jpg";
import spicy from "../spicy.jpg";
import './main.css';




export const Calc = (prop) => {
    const [info, setInfo] = React.useState([
        {name:'Сырная', rate: '1.2', src: cheese},
        {name:'Острая', rate: '1.2', src: spicy},
        {name:'Пепперони', rate: '1', src: pepper},
        {name:'Маргарита', rate: '1.1', src: margarita},
        {name:'Мясная', rate: '1.3', src: meat}
    ]);
    const [pizza, setPizza] = React.useState({});
    const [size, setS] = React.useState();
    const [valRes, setRes] = React.useState();
    const [isCheeseSide, setCheeseSide] = React.useState();
       
    const setValueP = (event) => {
        info.forEach(function(item) {
            if (item.name == event.target.value) {setPizza(item);}
        });       
    }

    const Count = (kind, size) => {
        if (!size) { 
            setRes(+kind.rate*300) 
        } else {
            switch(size) {
                case "1":
                    setRes(+kind.rate*300);
                    break;
                case "2":
                    setRes(+kind.rate*450);
                    break;
                case "3":
                    setRes(+kind.rate*600);
                    break;    
            }
        }
    }

    React.useEffect(()=>{
        if (isCheeseSide) {
            Count(pizza, size);
            setRes(+valRes+70);
        } else {
            Count(pizza, size);
        }
    }, [pizza, size, isCheeseSide]);

    const setValueS = (event) => {
        setS(event.target.value);
    };
    
    return (
        <div className='wrapper'>
            {valRes && <img src={pizza.src} className='picture'></img>}
            <p/><select className='choose' defaultValue='1' onChange={ setValueP } >
                <option disabled value='1'>Выберите пиццу</option>
                <option value="Сырная">Сырная</option>
                <option value="Острая">Острая</option>
                <option value="Пепперони">Пепперони</option>
                <option value="Маргарита">Маргарита</option>
                <option value="Мясная">Мясная</option>
            </select><p/>
            Выберите размер: <p/>
            <select className='choose' onChange={ setValueS } defaultValue='1' >
                <option disabled >Выберите размер</option>
                <option value="1">25см</option>
                <option value="2">30см</option>
                <option value="3">35см</option>
            </select><p/> 
            {valRes && <label><input type='checkbox' checked={isCheeseSide} onChange={()=>{setCheeseSide(!isCheeseSide); }}/>Сырный бортик</label>}<p/>
            
            {valRes && <span className='string'>Стоимость { valRes }руб.</span>}
        </div>
    );
};



 