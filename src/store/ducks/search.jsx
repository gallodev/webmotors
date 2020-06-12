import { createActions , createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types , Creators } = createActions({
    dispatchSelectMark : ['selectMark'],       
    dispatchSelectModel : ['selectModel'],
    dispatchSelectVersion : ['selectVersion'],
    dispatchSelectVehicle : ['selectVehicle'],
    dispatchModel : ['models'],
    dispatchVersion : ['versions'],
    dispatchVehicle : ['vehicles']
});

const INITIAL_STATE = Immutable({        
    selectMark : 0,    
    selectedModel : 0,    
    models : [],
    selectVersion : 0,  
    versions : [],      
});


const dispatchModel = (state = INITIAL_STATE , action) => {             
    return state.merge({models : action.models})
};

const dispatchSelectModel = (state = INITIAL_STATE , action) => {    
    return state.merge({selectedModel : parseInt(action.selectModel)});        
}

const dispatchSelectMark = (state = INITIAL_STATE , action) => {        
    return state.merge({selectMark : parseInt(action.selectMark)});        
};

const dispatchVersion = (state = INITIAL_STATE , action ) => {
    return state.merge({versions : action.versions});        
};

const dispatchSelectVersion = (state = INITIAL_STATE , action) => {
    return state.merge({selectVersion : parseInt(action.selectVersion)});        
};


export default createReducer(INITIAL_STATE,{
    [Types.DISPATCH_SELECT_MARK] : dispatchSelectMark,    
    [Types.DISPATCH_SELECT_MODEL] : dispatchSelectModel,
    [Types.DISPATCH_SELECT_VERSION] : dispatchSelectVersion,    
    [Types.DISPATCH_MODEL] : dispatchModel,
    [Types.DISPATCH_VERSION] : dispatchVersion,    
})
