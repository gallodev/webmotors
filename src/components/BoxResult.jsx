import React , {useEffect , useState} from 'react'
import { connect } from 'react-redux';
import className from 'classnames';
import { bindActionCreators } from 'redux';
import { Creators as searchActions } from '../store/ducks/search';
import BoxVehicle from './BoxVehicle';

function BoxResult({SEARCH,props}) {

    const [content,setContent] = useState([]);
    
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
                return <BoxVehicle vehicle={vehicle} />
            }));

            setContent(data);
        }
    }, [SEARCH])


    return (
        <div className={className('',props.className)}>
            {content}
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