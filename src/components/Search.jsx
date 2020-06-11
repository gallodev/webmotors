import React from 'react'
import Checkbox from './checkbox';
import LocationInput from './LocationInput';
import SelectBox from './Seletbox';
import ClearFilter from './ClearFilter';
import SearchButton from './SearchButton';

export default function Search() {
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
                            <SelectBox name="radius" label="Raio"/>
                        </div>
                    </div>
                    <div className="form-group col-xs-6">
                        <div className="ml-20 col-xs-5-min">
                            <SelectBox name="mark" label="Marca"/>
                        </div>
                        <div className="ml-20 col-xs-5-min">
                            <SelectBox name="model" label="Modelo"/>
                        </div>
                    </div>
                </div>                
                <div className="row mb-20"/>
                <div className="col-xs-12">
                    <div className="form-group col-xs-6">
                        <div className="col-xs-5">
                            <SelectBox name="model" label="Ano Desejado"/>
                        </div>
                        <div className="ml-20 col-xs-5">
                            <SelectBox name="model" label="Faixa de preço"/>
                        </div>
                    </div>                
                    <div className="form-group ml-20 col-xs-5">
                        <div className="col-xs-12">
                            <SelectBox name="model" label="Versão"/>
                        </div>
                    </div>
                </div>
                <div className="row mb-40"/>
                <div className="form-group col-xs-6">
                    <a href="#a"> > Busca avançada </a>
                </div>
                <div className="form-group col-xs-6">
                    <div className="left col-xs-4">
                        <ClearFilter/>
                    </div>
                    <div className="left col-xs-8">
                        <SearchButton/>
                    </div>
                </div>                            
        </div>
    )
}
