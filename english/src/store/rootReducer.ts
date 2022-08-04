import { combineReducers } from 'redux';
import logReducer from './logReducer';

const rootReducer = combineReducers({
    logging: logReducer
})

export default rootReducer