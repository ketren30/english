import { combineReducers } from 'redux';
import logReducer from './logReducer';
import scheduleReducer from './scheduleRedducer';
type RootState = ReturnType<typeof rootReducer>;
const rootReducer = combineReducers({
    logging: logReducer,
    schedule: scheduleReducer
})

export default rootReducer