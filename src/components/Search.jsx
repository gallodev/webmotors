import React , {useEffect , useState} from 'react'
import Checkbox from './checkbox';
import LocationInput from './LocationInput';
import SelectBox from './selectbox/Selectbox';
import MarkSelect from './selectbox/MarkSelectbox';
import ModelSelect from './selectbox/ModelSelectbox';
import VersionSelectbox from './selectbox/VersionSelectbox';
import ClearFilter from './ClearFilter';
import SearchButton from './SearchButton';

const selectBoxObj = {
    "radius" : {
        type : "radius",
        initRange : 10,
        endRange : 100,
        defaultValue : 100  
    },    
    "year" : {
        type : "year",
        initRange : 2020,
        endRange : 1970,
        defaultValue : 2020
    },
    "price" : {
        type : "price",
        initRange : 500000,
        endRange : 15000,
        defaultValue : 0
    }    
};

export default function Search() {
    const [radius,setRadius] = useState([]),    
          [year,setYear] = useState([]),
          [price,setPrice] = useState([]),
          [loading,setLoading] = useState(true);

    function getYearOptions(){
        const obj = selectBoxObj['year'];
        let range = obj.initRange;        
        let i = 1;
        let data = [];

        data.push(<option key={0} selected data-value={"Selecione"} value={0}>Selecione</option>);

        for(range;range>=obj.endRange;range-=1){                                    

            data.push(
                <option key={i} data-value={range} value={range}>{range} </option>
            )
            i++;
        }

        return data;  
    }

    function getPriceOptions(){
        const obj = selectBoxObj['price'];
        let range = obj.initRange;        
        let i = 1;
        let data = [];

        data.push(<option key={0} selected data-value={"Selecione"} value={0}>Selecione</option>);

        for(range;range>=obj.endRange;range-=5000){                                    

            data.push(
                <option key={i} data-value={"R$ "+range} value={range}>{"R$ " + range} </option>
            )
            i++;
        }
        
        return data;  
    }

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
    
    useEffect(() => {                                
        setRadius(getRadiusOptions());    
        setYear(getYearOptions());
        setPrice(getPriceOptions());
        setLoading(false);                                   
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
                           <SelectBox name="radius" label="Raio" options={radius} sufixLabel={" Km"} defaultValue={selectBoxObj['radius']['defaultValue']}/> 
                        </div>
                    </div>
                    <div className="form-group col-xs-6">
                        <div className="ml-20 col-xs-5-min">
                            <MarkSelect name="mark" label="Marca" />
                        </div>
                        <div className="ml-20 col-xs-5-min">
                            <ModelSelect name="model" label="Modelo"/>
                        </div>
                    </div>
                </div>                
                <div className="row mb-20"/>
                <div className="col-xs-12">
                    <div className="form-group col-xs-6">
                        <div className="col-xs-5">
                            <SelectBox name="year" label="Ano Desejado" options={year} />
                        </div>
                        <div className="ml-20 col-xs-5">
                            <SelectBox name="price" label="Faixa de preço" options={price} />
                        </div>
                    </div>                
                    <div className="form-group ml-20 col-xs-5">
                        <div className="col-xs-12">
                            <VersionSelectbox name="version" label="Versão" />
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
