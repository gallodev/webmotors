import React from 'react'
import classnames from 'classnames';
import './style.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../../store/ducks/search';
import PropTypes from 'prop-types';

function Checkbox({dispatchCheckCategory,props}) {

    function handleChange(e,name){               
        
        const category = {
            name : name,
            value : e.target.checked
        }    

        dispatchCheckCategory(category);        
    }

    return (
        <ul>
            <li className={classnames("checkbox-container left",props.class)} onChange={(e)=>handleChange(e,props.name)} >
                <input type="checkbox" name={props.name}/>
                <label to={props.name}>{props.label}</label>
            </li>
        </ul>
    )
}

const mapStateToProps = (state , props) => ({   
    props    
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(searchActions,dispatch)    


export default (connect(mapStateToProps,mapDispatchToProps))(Checkbox);

Checkbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,        
};