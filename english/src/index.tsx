import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, Store} from 'redux';
import thunk from 'redux-thunk';
import logReducer from './store/logReducer';
import * as types from './type';
import { BrowserRouter as Router } from "react-router-dom";

const store: Store<types.LogState, types.LogAction> & {dispatch: types.DispatchType} = createStore(logReducer, applyMiddleware(thunk))

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

