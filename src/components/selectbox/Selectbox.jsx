import React,{useState , useEffect} from 'react'
import className from 'classnames';
import { FaChevronDown } from "react-icons/fa";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../../store/ducks/search';

const Selectbox = ({props,
                    SEARCH,
                    dispatchSelectPrice,
                    dispatchSelectYear,
                    dispatchSelectRadius}) => {   
    
    const [options,setOptions] = useState([]);                
                        
    function dispatchAction(cur_value,name){
        switch(name){
            case "radius":
                dispatchSelectRadius(cur_value);
            break;
            case "year":
                dispatchSelectYear(cur_value);
            break;
            case "price":
                dispatchSelectPrice(cur_value);
            break;
            default:
                console.log(`Selectbox component no has dipatch for ${name}`);            
        }
    }

    function handleChange(e,name){               
        //use to get formated value 
        let cur_value = e.target.selectedOptions[0].getAttribute('data-value')        

        dispatchAction(cur_value,name);                    
    }    
    
    function mountOptions(){
        let arrOptions = [];
        let storeIndex = props.selectStore;        
                
        arrOptions.push(<option key={0} selected data-value={"Selecione"} value={0}>Selecione</option>);    

        arrOptions.push(props.options.map(
            item => {

                if(props.defaultValue && SEARCH[storeIndex].length === 0){
                    return <option key={item.key} selected data-value={item.dataValue} value={item.value} >{item.dataValue}</option>
                }

                if(item.dataValue === SEARCH[storeIndex]){
                    return <option key={item.key} selected data-value={item.dataValue} value={item.value} >{item.dataValue}</option>
                }

                return <option key={item.key} data-value={item.dataValue} value={item.value} >{item.dataValue}</option>
        }));

        setOptions(arrOptions);        
    }
    
    useEffect(() => {                
        mountOptions();        
                
        if(props.defaultValue && props.defaultValue !== SEARCH[props.selectStore]){
            dispatchAction(props.defaultValue,props.name);
        }                    
    }, [])
    
    const formated_data = (SEARCH[props.selectStore] !== "") ? SEARCH[props.selectStore] + props.sufixLabel : "";
    
    return (
        <div>
            <div className={className('container-select',props.class)}>
                <div className="custom-select-box">
                    <span className="select-label">{props.label} : {formated_data} </span>
                    <select name={props.name} value={SEARCH[props.selectStore]} onChange={(e)=>handleChange(e,props.name)}>
                        {options}
                    </select>                
                    <FaChevronDown size={10} className="bottom-arrow-ico"  />            
                </div>                
            </div>            
        </div>
    );
}



const mapStateToProps = (state , props) => ({   
    props,
    SEARCH : state.search
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(searchActions,dispatch)    


export default (connect(mapStateToProps,mapDispatchToProps))(Selectbox);


Selectbox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    selectStore : PropTypes.string.isRequired,
    options : PropTypes.array.isRequired
};
