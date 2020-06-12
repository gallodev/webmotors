import { combineReducers } from 'redux';
import ApplicationReducer from './application';
import SearchReducer from './search'

const rootReducer = combineReducers({    
    application : ApplicationReducer,    
    search : SearchReducer
});

export default rootReducer;