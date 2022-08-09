import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store, Middleware, Dispatch, AnyAction} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/rootReducer';
import * as types from './type';
import { BrowserRouter as Router } from "react-router-dom";

export const store = createStore(rootReducer, applyMiddleware(thunk as Middleware<{}, unknown, Dispatch<AnyAction>>));

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


