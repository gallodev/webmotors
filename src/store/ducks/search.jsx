import { createActions , createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types , Creators } = createActions({
    dispatchSelectMark : ['selectMark'],       
    dispatchSelectModel : ['selectModel'],
    dispatchSelectVersion : ['selectVersion'],    
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
    vehicles : [],
    loadVersion : false,
    loadModel : false,   
    page : 1,
});


const dispatchModel = (state = INITIAL_STATE , action) => {             
    return state.merge({models : action.models , loadModel : false})
};

const dispatchSelectModel = (state = INITIAL_STATE , action) => {    
    return state.merge({selectedModel : action.selectModel , loadVersion : true});        
}

const dispatchSelectMark = (state = INITIAL_STATE , action) => {        
    return state.merge({selectMark : action.selectMark , loadModel : true});        
};

const dispatchVersion = (state = INITIAL_STATE , action ) => {
    return state.merge({versions : action.versions , loadVersion: false});        
};

const dispatchSelectVersion = (state = INITIAL_STATE , action) => {
    return state.merge({selectVersion : action.selectVersion});        
};

const dispatchVehicle = (state = INITIAL_STATE , action) => {
    return state.merge({vehicles : action.vehicles});        
}


export default createReducer(INITIAL_STATE,{
    [Types.DISPATCH_SELECT_MARK] : dispatchSelectMark,    
    [Types.DISPATCH_SELECT_MODEL] : dispatchSelectModel,
    [Types.DISPATCH_SELECT_VERSION] : dispatchSelectVersion,    
    [Types.DISPATCH_MODEL] : dispatchModel,
    [Types.DISPATCH_VERSION] : dispatchVersion,   
    [Types.DISPATCH_VEHICLE] : dispatchVehicle 
})
