import React from 'react';
import "./app.css";
import {Inp} from '../input/input';





  export const Form = (prop) => {
    const setName = (event) => { prop.onInputChange({type: "changeName", payload: event.target.value})};
    const setSurname = (event) => { prop.onInputChange({type: "changeSurname", payload: event.target.value})};
    const setBd = (event) => { prop.onInputChange({type: "changeBd", payload: event.target.value})};
    
    const setEmail = (event) => { 
      const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (!re.test(String(event.target.value).toLowerCase())) {
        setEmailError("Некорректный email.");
      } else {
        setEmailError(''); 
      }
      if (event.target.value==='') {
        setEmailError("email не может быть пустым.");
      } 
      
      return prop.onInputChange({type: "changeEmail", payload: event.target.value})};
    
    
    const [emailDirty, setEmailDirty] = React.useState(false);
    const [emailError, setEmailError] = React.useState("email не может быть пустым.");
    const [isValid, setIsValid] = React.useState(false);

    React.useEffect( () => {
      if (!emailError) {setIsValid(true)}
    }, 
    [emailError]
    )
    return (
        <div className='forma'>
        { prop.title } <p /><p />
        Введите имя: <Inp onHandleChange= { setName }/>
        <p />
        Введите фамилию: <Inp onHandleChange= { setSurname }/>
        <p />
        Введите дату рождения: <Inp onHandleChange= { setBd }/>
        <p />
        Введите адрес электронной почты: <Inp onHandleChange= { setEmail } onBlurChange={(event)=>{setEmailDirty(true)}}/>
        {(emailDirty && emailError) && <div className='mistake'> {emailError}</div>} <p />
        <button onClick = {prop.onChangeVisible} disabled={!isValid}> Отправить </button>
      </div>
     
      
    
    );
    }
    