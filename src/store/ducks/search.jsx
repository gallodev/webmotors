import { createActions , createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types , Creators } = createActions({
    dispatchSelectMark : ['selectMark'],       
    dispatchSelectModel : ['selectModel'],
    dispatchSelectVersion : ['selectVersion'],    
    dispatchSelectYear : ['year'],
    dispatchSelectPrice : ['price'],
    dispatchSelectRadius : ['radius'],
    dispatchCheckCategory : ['category'],    
    dispatchLocation : ['location'],
    dispatchModel : ['models'],
    dispatchVersion : ['versions'],
    dispatchVehicle : ['vehicles'],    
    dispatchClear : []
});

const INITIAL_STATE = Immutable({        
    selectMark : 0,    
    selectedModel : 0,    
    models : [],
    selectVersion : 0,  
    versions : [],   
    category : {
        isNew : false,
        isUsed : false
    },
    location : "",    
    vehicles : [],      
    selectYear : "",
    selectPrice : "", 
    selectRadius : "",
    loadVersion : false,
    hasCleared : false,
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

const dispatchCheckCategory = (state = INITIAL_STATE , action) => {
    // used if because was two categorys    
    if(action.category.name === "new"){
        return state.merge({category: {isUsed : state.category.isUsed , isNew : action.category.value}});        
    }else{
        return state.merge({category: {isUsed : action.category.value , isNew: state.category.isNew}});        
    }
}

const dispatchLocation = (state = INITIAL_STATE , action) => {
    return state.merge({location : action.location});        
}

const dispatchClear = (state = INITIAL_STATE , action) => {                
    return state.merge(state = INITIAL_STATE);                 
}

const dispatchSelectPrice = (state = INITIAL_STATE , action) => {
    return state.merge({selectPrice : action.price});        
}

const dispatchSelectYear = (state = INITIAL_STATE , action) => {
    return state.merge({selectYear : action.year});        
}

const dispatchSelectRadius = (state = INITIAL_STATE , action) => {
    return state.merge({selectRadius : action.radius});        
}


export default createReducer(INITIAL_STATE,{
    [Types.DISPATCH_SELECT_MARK] : dispatchSelectMark,    
    [Types.DISPATCH_SELECT_MODEL] : dispatchSelectModel,
    [Types.DISPATCH_SELECT_VERSION] : dispatchSelectVersion,    
    [Types.DISPATCH_SELECT_PRICE] : dispatchSelectPrice,
    [Types.DISPATCH_SELECT_YEAR] : dispatchSelectYear,
    [Types.DISPATCH_SELECT_RADIUS] : dispatchSelectRadius,
    [Types.DISPATCH_MODEL] : dispatchModel,
    [Types.DISPATCH_VERSION] : dispatchVersion,   
    [Types.DISPATCH_VEHICLE] : dispatchVehicle,
    [Types.DISPATCH_CHECK_CATEGORY] : dispatchCheckCategory,
    [Types.DISPATCH_LOCATION] : dispatchLocation,
    [Types.DISPATCH_CLEAR] : dispatchClear    
    
})
