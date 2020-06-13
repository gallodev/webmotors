import React,{useState , useEffect} from 'react'
import { connect } from 'react-redux';
import className from 'classnames';
import { FaChevronDown } from "react-icons/fa";
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../../store/ducks/search';
import { Vehicles } from '../../services';
import PropTypes from 'prop-types';

const MarkSelectBox = ({
                    dispatchSelectMark,
                    dispatchModel,  
                    dispatchSelectModel,
                    dispatchVersion,
                    dispatchSelectVersion,                   
                    props}) => {   

    const [currentValue,setCurrentValue] = useState("");            
    const [options,setOptions] = useState([]);   
    const [loading,setLoading] = useState(true);
    
                
    function handleChange(e){ 
        e.preventDefault();
        const cur_value = parseInt(e.target.value);
        
        if(loading !== true || cur_value !== 0){                        
            dispatchSelectMark(cur_value);     
            //load models
            Vehicles.getModel(cur_value)
            .then(res=>{
                dispatchModel(res);                                        
            });                                            
        }

        if(cur_value === 0){
            dispatchSelectModel(0);
            dispatchVersion([]);
            dispatchSelectVersion(0);
        }

        //use to get formated value user friendly
        let cur_value_label = e.target.selectedOptions[0].getAttribute('data-value')
        
        setCurrentValue(cur_value_label);
    }    
    
    async function getMarkOptions(){
        let data = [];
        const marks = await Vehicles.getMark();                                       

        data.push(<option key={0} selected data-value={"Selecione"} value={0}> Selecione </option>);

        data.push(marks.map(mark => {
            return <option key={mark.ID} data-value={mark.Name} value={mark.ID}>{mark.Name}</option>
        }));
        
        return data;
    }

    useEffect(() => {
        setCurrentValue("Carregando")
        getMarkOptions().then( res => {
            setOptions(res);
            setLoading(false);
            setCurrentValue("Selecione");
        });
    }, [])
    
    
    return (
        <div>
            <div className={className('container-select',props.class)}>
                <div className="custom-select-box">
                    <span className="select-label">{props.label} : {currentValue} </span>
                    <select value={0} name={props.name}  onChange={(e)=>handleChange(e)}>
                        {options}
                    </select>                
                    <FaChevronDown size={10} className="bottom-arrow-ico"  />            
                </div>                
            </div>            
        </div>
    )
}

const mapStateToProps = (state , props) => ({   
    props    
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(searchActions,dispatch)    


export default (connect(mapStateToProps,mapDispatchToProps))(MarkSelectBox);

MarkSelectBox.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,        
};