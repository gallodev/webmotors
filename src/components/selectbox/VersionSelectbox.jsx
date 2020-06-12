import React,{useState , useEffect} from 'react'
import { connect } from 'react-redux';
import className from 'classnames';
import { FaChevronDown } from "react-icons/fa";
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../../store/ducks/search';
import PropTypes from 'prop-types';

const VersionSelectbox = ({
                    SEARCH,
                    dispatchSelectVersion,                    
                    props}) => {   

    const [currentValue,setCurrentValue] = useState("Selecione");            
    const [options,setOptions] = useState([]);        
    
                
    function handleChange(e){ 
        e.preventDefault();
        const cur_value = parseInt(e.target.value);
        
        if(cur_value !== 0){                        
            dispatchSelectVersion(e.target.value);                 
        }

        //use to get formated value user friendly
        let cur_value_label = e.target.selectedOptions[0].getAttribute('data-value')        
        setCurrentValue(cur_value_label);        
    }    

    function handleClick(){
        if(SEARCH.versions.length === 0){
            alert("É necessário escolher um modelo");
        }
    }
        
    useEffect(() => {
        
        if(SEARCH.loadVersion === true){
            setCurrentValue("Carregando ...");
        }
        
        if(SEARCH.versions.length === 0){
            setCurrentValue("Selecione");
        }

        let data = [];

        data.push(<option key={0} selected data-value={"Selecione"} value={0}> Selecione </option>);

        data.push(SEARCH.versions.map(version => {
            return <option key={version.ID} data-value={version.Name} value={version.ID}>{version.Name}</option>
        }));                    
        
        setOptions(data);    
        
        if(options.length > 0 && SEARCH.loadVersion === false){
            if(currentValue === "Carregando ..."){
             setCurrentValue("Selecione");
            }
        }            
        
    }, [SEARCH,currentValue,options.length])
    
    
    return (
        <div>
            <div className={className('container-select',props.class)}>
                <div className="custom-select-box">
                    <span className="select-label">{props.label} : {currentValue} </span>
                    <select name={props.name} onClick={handleClick} onChange={(e)=>handleChange(e)}>
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


export default (connect(mapStateToProps,mapDispatchToProps))(VersionSelectbox);

VersionSelectbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,    
    SEARCH : PropTypes.object.isRequired
};