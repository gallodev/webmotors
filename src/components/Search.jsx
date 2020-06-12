import React , {useEffect , useState} from 'react'
import Checkbox from './checkbox';
import LocationInput from './LocationInput';
import SelectBox from './Seletbox';
import ClearFilter from './ClearFilter';
import SearchButton from './SearchButton';
import { Vehicles } from '../services';

const selectBoxObj = {
    "radius" : {
        type : "radius",
        initRange : 10,
        endRange : 100,
        defaultValue : 100  
    },
    "mark" : {
        type : "mark",
    },
    "model" : {
        type : "model",
        requiredSelected : "marca"
    },
    "year" : {
        type : "year"
    },
    "price" : {
        type : "price"
    },
    "version" : {
        type : "version",
        requiredSelected : "modelo"
    }
};

export default function Search() {
    const [radius,setRadius] = useState([]),
          [mark,setMark] = useState([]),          
          [loading,setLoading] = useState(true);

    function getRadiusOptions(){        
        const obj = selectBoxObj['radius'];
        let range = obj.initRange;
        let selectedValue = false;
        let i = 0;
        let data = [];

        for(range;range<=obj.endRange;range+=10){            
            if(range === obj.defaultValue){                
                selectedValue = true;
            }

            data.push(
                <option key={i} selected={selectedValue} data-value={range} value={range}>{range} Km </option>
            )
            i++;
        }

        return data;        
    }

    async function getMarkOptions(){
        let data = [];
        const marks = await Vehicles.getMark();                                       

        data.push(marks.map(mark => {
            return <option key={mark.ID} data-value={mark.Name} value={mark.ID}>{mark.Name}</option>
        }));
        
        return data;
    }
    
    useEffect(() => {                                
        setRadius(getRadiusOptions());                        
        getMarkOptions().then(res=> {
            setMark(res);
            setLoading(false);
        });            
    },[]);
    
    function getContent(){
        if(loading === true){
            return <>Carregando ...</>
        }else{
            return (
              <div className="search-content left col-xs-12">            
                <div className="col-xs-12">
                    <div>
                        <Checkbox attr={{name:"new",label:"Novos"}} />
                    </div>
                    <div>
                        <Checkbox attr={{name:"used",label:"Usados"}} />
                    </div>                
                </div>
                <div className="row mb-20 mb-margin"/>
                <div className="col-xs-12">                
                    <div className="form-group col-xs-6">
                        <div className="col-xs-8">
                            <LocationInput/>
                        </div>
                        <div className="col-xs-4">
                           <SelectBox name="radius" label="Raio" options={radius} sufixLabel={" Km"} obj={selectBoxObj['radius']}/> 
                        </div>
                    </div>
                    <div className="form-group col-xs-6">
                        <div className="ml-20 col-xs-5-min">
                            <SelectBox name="mark" label="Marca" options={mark} obj={selectBoxObj['mark']} />
                        </div>
                        <div className="ml-20 col-xs-5-min">
                            <SelectBox name="model" label="Modelo" obj={selectBoxObj['model']} />
                        </div>
                    </div>
                </div>                
                <div className="row mb-20"/>
                <div className="col-xs-12">
                    <div className="form-group col-xs-6">
                        <div className="col-xs-5">
                            <SelectBox name="year" label="Ano Desejado" obj={selectBoxObj['year']}/>
                        </div>
                        <div className="ml-20 col-xs-5">
                            <SelectBox name="price" label="Faixa de preço" obj={selectBoxObj['price']}/>
                        </div>
                    </div>                
                    <div className="form-group ml-20 col-xs-5">
                        <div className="col-xs-12">
                            <SelectBox name="version" label="Versão" obj={selectBoxObj['version']}/>
                        </div>
                    </div>
                </div>
                <div className="row mb-40"/>
                <div className="form-group col-xs-6">
                    <a href="#advanced-search" className="advaned-search-link"> > Busca avançada </a>
                </div>
                <div className="form-group col-xs-5 ml-20">
                    <div className="left col-xs-3">
                        <ClearFilter/>
                    </div>
                    <div className="left ml-20 col-xs-8-max">
                        <SearchButton/>
                    </div>
                </div>                            
            </div>
            );
        }
    }

    return (
        getContent()        
    )
}
