import React,{useState , useEffect} from 'react'
import { FaLocationArrow , FaWindowClose } from "react-icons/fa";
import { Location } from '../services/index';
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../store/ducks/search';
import { connect } from 'react-redux';

function LocationInput({dispatchLocation,props}) {
    const [location,setLocation] = useState("São Paulo - SP")    

    // eslint-disable-next-line react-hooks/exhaustive-deps
    function get_current_location(){
        navigator.geolocation.getCurrentPosition(showPosition);
    }

    function showPosition(position){        
        let coords = position.coords.latitude+","+position.coords.longitude;
        Location.get(coords)
        .then( res => {
            let res_node = res.results[0].components;
            let format_location = res_node.city + " - " + res_node.state_code
            setLocation(format_location);     
            dispatchLocation(format_location);   
        })        
    }

    function handleChange(e){
        setLocation(e.target.value);
        dispatchLocation(e.target.value);
    }

    function handleClickRemove(){
        dispatchLocation("");
        setLocation("");
    }

    useEffect(()=>{
       get_current_location(); 
    },[]);


    return (
        <div className="container-location-input">
            <input type="text" onChange={handleChange} placeholder={"Onde : " + location} value={location}/>
            <FaLocationArrow size={25} className="location-ico"  />            
            <FaWindowClose size={25} onClick={handleClickRemove} className="remove-ico"  />                        
        </div>
    )
}

const mapStateToProps = (state , props) => ({       
    props    
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(searchActions,dispatch)    


export default (connect(mapStateToProps,mapDispatchToProps))(LocationInput);