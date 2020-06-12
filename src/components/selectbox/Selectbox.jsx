import React,{useState} from 'react'
import className from 'classnames';
import { FaChevronDown } from "react-icons/fa";
import PropTypes from 'prop-types';

const Selectbox = (props) => {   

    const [currentValue,setCurrentValue] = useState(props.defaultValue);                
                
    function handleChange(e){               
        //use to get formated value 
        let cur_value = e.target.selectedOptions[0].getAttribute('data-value')
        
        setCurrentValue(cur_value);
    }            
    
    return (
        <div>
            <div className={className('container-select',props.class)}>
                <div className="custom-select-box">
                    <span className="select-label">{props.label} : {currentValue} {props.sufixLabel} </span>
                    <select name={props.name} onChange={(e)=>handleChange(e)}>
                        {props.options}
                    </select>                
                    <FaChevronDown size={10} className="bottom-arrow-ico"  />            
                </div>                
            </div>            
        </div>
    )
}


export default Selectbox;

Selectbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    options : PropTypes.array.isRequired
};
