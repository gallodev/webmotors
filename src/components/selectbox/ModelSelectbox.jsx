import React,{useState , useEffect} from 'react'
import { connect } from 'react-redux';
import className from 'classnames';
import { FaChevronDown } from "react-icons/fa";
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../../store/ducks/search';
import { Vehicles } from '../../services';
import PropTypes from 'prop-types';

const ModelSelectbox = ({
                    SEARCH,
                    dispatchSelectModel,
                    dispatchVersion,                     
                    props}) => {   

    const [currentValue,setCurrentValue] = useState("Selecione");            
    const [options,setOptions] = useState([]);        
    
                
    function handleChange(e){ 
        e.preventDefault();
        const cur_value = parseInt(e.target.value);
        
        if(cur_value !== 0){                        
            dispatchSelectModel(e.target.value);     
            //load versions
            Vehicles.getVersion(e.target.value)
            .then(res=>{                    
                dispatchVersion(res);                                                        
            });                                       
        }else{
            dispatchVersion([]);
        }

        //use to get formated value user friendly
        let cur_value_label = e.target.selectedOptions[0].getAttribute('data-value')        
        setCurrentValue(cur_value_label);        
    }    

    function handleClick(){        
        if(SEARCH.models.length === 0){
            alert("É necessário escolher uma marca");
        }
    }
        
    useEffect(() => {        
        if(SEARCH.models.length === 0){
            setCurrentValue("Selecione");
        }
        if(SEARCH.loadModel === true){
            setCurrentValue("Carregando ...");
        }                 

        let data = [];

        data.push(<option key={0} selected data-value={"Selecione"} value={0}> Selecione </option>);

        data.push(SEARCH.models.map(model => {
            return <option key={model.ID} data-value={model.Name} value={model.ID}>{model.Name}</option>
        }));                            
        setOptions(data);        

        if(options.length > 0 && SEARCH.loadModel === false){
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


export default (connect(mapStateToProps,mapDispatchToProps))(ModelSelectbox);

ModelSelectbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,    
    SEARCH : PropTypes.object.isRequired
};