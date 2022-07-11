import React from 'react';
import {Modal} from '../modal/modal';
import {Form} from '../app/app';

export const Main = () => {
    
    const [isVisible, setIsVisible] = React.useState(false);
    const Change = () => setIsVisible(!isVisible);

    function reducer(state, action) {
        switch (action.type) {
          case "changeName":
            return {
              name: action.payload,
              surname: state.surname,
              bd: state.bd,
              email: state.email
            };
      
            case "changeSurname":
              return {
                name: state.name,
                surname: action.payload,
                bd: state.bd,
                email: state.email
              };
      
            case "changeBd":
              return {
                name: state.name,
                surname: state.surname,
                bd: action.payload,
                email: state.email
              };
      
            case "changeEmail":
              return {
                name: state.name,
                surname: state.surname,
                bd: state.bd,
                email: action.payload
              };
        }
      }
      const [info, dispatch] = React.useReducer(reducer, {name: "", surname: '', bd: '', email: ''});
    
    return (
        <div>
            <Form isVisible={isVisible} onInputChange={dispatch} onChangeVisible={Change} />
            <Modal isVisible={isVisible} onChangeVisible={Change} name= {info.name} surname={info.surname} bd={info.bd} email={info.email} />
        </div>
    )
};



 