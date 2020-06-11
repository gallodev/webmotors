import React from 'react'
import Checkbox from './checkbox';
import LocationInput from './LocationInput';
import SelectBox from './Seletbox';
import ClearFilter from './ClearFilter';
import SearchButton from './SearchButton';

export default function Search() {
    return (
        <div className="search-content left col-xs-12">            
                <div>
                    <Checkbox attr={{name:"new",label:"Novos"}} />
                </div>
                <div>
                    <Checkbox attr={{name:"used",label:"Usados"}} />
                </div>                
                <div className="row mb-20 mb-margin"/>
                <div className="form-group left col-xs-3">
                    <LocationInput/>
                </div>
                <div className="form-group left col-xs-2">
                    <SelectBox name="radius" label="Raio"/>
                </div>
                <div className="form-group left ml-20 col-xs-3">
                    <SelectBox name="mark" label="Marca" class="w-200"/>
                </div>
                <div className="form-group left ml-20 col-xs-3">
                    <SelectBox name="model" label="Modelo" class="w-200"/>
                </div>
                <div className="row mb-20"/>
                <div className="form-group left col-xs-3">
                    <SelectBox name="model" label="Ano Desejado" class="w-200"/>
                </div>
                <div className="form-group left ml-20 col-xs-3">
                    <SelectBox name="model" label="Faixa de preço" class="w-200"/>
                </div>
                <div className="form-group left ml-20 col-xs-5">
                    <SelectBox name="model" label="Versão" class="w-200"/>
                </div>
                <div className="row mb-40"/>
                <div className="form-group left col-xs-6">
                    <a href="#a"> > Busca avançada </a>
                </div>
                <div className="form-group left col-xs-6">
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
