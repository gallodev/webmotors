import React from 'react'
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../store/ducks/search';
import { Vehicles } from '../services';
import { connect } from 'react-redux';

function SearchButton({SEARCH,dispatchVehicle,props}) {

    const page = 1

    function handleSearch(){        
        Vehicles.get(page)
        .then(res =>{
            dispatchVehicle(res);            
        });
        console.log(SEARCH);
    }

    return (
        <div className={classnames("search-button",props.class)} onClick={handleSearch} >
            <span>Ver Ofertas</span>
        </div>
    )
}

const mapStateToProps = (state , props) => ({   
    SEARCH : state.search,
    props    
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(searchActions,dispatch)    


export default (connect(mapStateToProps,mapDispatchToProps))(SearchButton);