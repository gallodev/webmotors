import React,{useState , useEffect} from 'react'
import { connect } from 'react-redux';
import className from 'classnames';
import { FaChevronDown } from "react-icons/fa";
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../../store/ducks/search';
import { Vehicles } from '../../services';

const ModelSelectbox = ({
                    SEARCH,
                    dispatchSelectModel,
                    dispatchVersion,                     
                    props}) => {   

    const [currentValue,setCurrentValue] = useState("Selecione");            
    const [options,setOptions] = useState([]);    
    const [hasChange,setHasChange] = useState(false);
    
                
    function handleChange(e){ 
        e.preventDefault();
        const cur_value = parseInt(e.target.value);
        
        if(cur_value != 0){                        
            dispatchSelectModel(e.target.value);     
            //load versions
            Vehicles.getVersion(e.target.value)
            .then(res=>{                    
                dispatchVersion(res);                                                        
            });                                       
        }

        //use to get formated value user friendly
        let cur_value_label = e.target.selectedOptions[0].getAttribute('data-value')        
        setCurrentValue(cur_value_label);
        setHasChange(true);
    }    

    function handleClick(){        
        if(SEARCH.models.length === 0){
            alert("É necessário escolher uma marca");
        }
    }
        
    useEffect(() => {
        
        if(SEARCH.loadModel === true){
            setCurrentValue("Carregando ...");
        }else{          
            if(hasChange != true){
              setCurrentValue("Selecione");
            }            
        }

        let data = [];

        data.push(<option key={0} selected data-value={"Selecione"} value={0}> Selecione </option>);

        data.push(SEARCH.models.map(model => {
            return <option key={model.ID} data-value={model.Name} value={model.ID}>{model.Name}</option>
        }));                            
        setOptions(data);        
        
    }, [SEARCH])
    
    
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
