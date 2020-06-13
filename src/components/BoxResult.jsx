import React , {useEffect , useState} from 'react'
import { connect } from 'react-redux';
import className from 'classnames';
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../store/ducks/search';
import BoxVehicle from './BoxVehicle';
import { Vehicles } from '../services';
import PropTypes from 'prop-types';

function BoxResult({SEARCH,dispatchVehicle,props}) {

    const [content,setContent] = useState([]);
    const [pagintation,setPagination] = useState([]);
    
    function mountHeader(qtdy){
      return <h1 className="box-search-title"> Encontramos {qtdy} veiculos : </h1> 
    };

    

    useEffect(() => {        
        let data = [];
        const qtdy = SEARCH.vehicles.length;        
        if(qtdy > 0){
                        
            data.push(mountHeader(qtdy));

            data.push(SEARCH.vehicles.map(
            vehicle => {
                return <BoxVehicle key={vehicle.ID} vehicle={vehicle} />
            }));

            mountPagination();

            setContent(data);
        }
        
    }, [SEARCH])

    function handlePagination(page){
        console.log(page);
        Vehicles.get(page)
        .then(res =>{
            console.log(res);
            dispatchVehicle(res);            
        });        
    }

    function mountPagination(){        
        let data = [];
        const qtdy = SEARCH.vehicles.length;        

        if(qtdy > 0){            
            // has 3 pages and doesnt have total api data
            
            for(let i = 1;i<4;i++){
                data.push(
                    <li> 
                        <a href={"#"+i} onClick={(e)=>handlePagination(i)}>{i}</a>
                    </li>
                )
            }
         
            setPagination(
                <div className="pagination">
                    <ul>
                        {data}
                    </ul>
                </div>
            );
            
        }
    }
    

    return (
        <div className={className('',props.className)}>
            {content}
            {pagintation}
        </div>
    )
}

const mapStateToProps = (state , props) => ({   
    props,
    SEARCH : state.search
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(searchActions,dispatch)  

export default (connect(mapStateToProps,mapDispatchToProps))(BoxResult);

BoxResult.propTypes = {
    SEARCH: PropTypes.object.isRequired
};