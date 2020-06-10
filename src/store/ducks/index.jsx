import { combineReducers } from 'redux';
import ApplicationReducer from './application';

const rootReducer = combineReducers({    
    application : ApplicationReducer,    
});

export default rootReducer;