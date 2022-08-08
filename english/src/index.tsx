import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/rootReducer';
import * as types from './type';
import { BrowserRouter as Router } from "react-router-dom";

export const store: Store<types.MainState, types.MainAction> & {dispatch: types.DispatchType} = 
createStore(rootReducer, applyMiddleware(thunk));

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);


