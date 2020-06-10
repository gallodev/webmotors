import { createActions , createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types , Creators } = createActions({
    dispatchActiveTab : ['activeTab'],    
});

const INITIAL_STATE = Immutable({
    activeTab : 1,    
});

const dispatchActiveTab = (state = INITIAL_STATE , action ) => {    
    return state.merge({activeTab : action.activeTab})
};


export default createReducer(INITIAL_STATE,{
    [Types.DISPATCH_ACTIVE_TAB] : dispatchActiveTab,    
})
