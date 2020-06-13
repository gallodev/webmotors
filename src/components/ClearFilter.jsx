import React from 'react'
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../store/ducks/search';
import { connect } from 'react-redux';


function ClearFilter({dispatchClear,props}) {

    function handleClick(){
        dispatchClear();
    }

    return (
        <div onClick={handleClick} className={classnames("btn-clear-filter",props.class)}>
            <span>Limpar Filtros</span>
        </div>
    )
}

const mapStateToProps = (state , props) => ({       
    props    
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(searchActions,dispatch)    


export default (connect(mapStateToProps,mapDispatchToProps))(ClearFilter);