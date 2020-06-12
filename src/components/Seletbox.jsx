import React,{useState} from 'react'
import { connect } from 'react-redux';
import className from 'classnames';
import { FaChevronDown } from "react-icons/fa";
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../store/ducks/search';
import { Vehicles } from '../services';

const Selectbox = ({SEARCH,
                    dispatchSelectMark,
                    dispatchModel,                    
                    props}) => {   

    const [currentValue,setCurrentValue] = useState(props.obj.defaultValue);        
    let default_option = (props.options)?props.options:<option>É necessário selecionar o campo {props.obj.requiredSelected}</option>
    const [options,setOptions] = useState(default_option);   
    let data = [];         
                
    function handleChange(e,obj){       
        switch(obj.type){
            case "radius":                          
            break;
            case "mark":                
                dispatchSelectMark(e.target.value);     
                //load models
                Vehicles.getModel(e.target.value)
                .then(res=>{
                    dispatchModel(res)                                        
                });                                       
            break; 
            case "model":
                //console.log(SEARCH);
            break;           
            default:
                console.log(`Not exist type ${obj.type}`)                
            break;                
        } 
        setCurrentValue(e.target.value);
    }    

    function handleClick(e,obj){
        switch(obj.type){
            case "radius":                          
            break;
            case "mark":             
            break; 
            case "model":                             
                data.push(SEARCH.models.map(model => {
                    return <option key={model.ID} value={model.ID}>{model.Name}</option>
                }));                    
                
                setOptions(data);                
            break;           
            default:
                console.log(`Not exist type ${obj.type}`)                
            break;                
        } 
    }
    
    console.log(SEARCH);
    return (
        <div>
            <div className={className('container-select',props.class)}>
                <div className="custom-select-box">
                    <span className="select-label">{props.label} : {currentValue} {props.sufixLabel} </span>
                    <select name={props.name} onClick={(e)=>{handleClick(e,props.obj)}}onChange={(e)=>handleChange(e,props.obj)}>
                        {options}
                    </select>                
                    <FaChevronDown size={10} className="bottom-arrow-ico"  />            
                </div>                
            </div>            
        </div>
    )
}

const mapStateToProps = (state , props) => ({   
    props,
    SEARCH : state.search
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(searchActions,dispatch)    


export default (connect(mapStateToProps,mapDispatchToProps))(Selectbox);
