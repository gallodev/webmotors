import React from 'react'
import Checkbox from './checkbox';
import LocationInput from './LocationInput';
import SelectBox from './Seletbox';

export default function Search() {
    return (
        <div className="search-content left col-xs-12">
            <ul>
                <li><Checkbox attr={{name:"new",label:"Novos"}} /></li>
                <li><Checkbox attr={{name:"used",label:"Usados"}} /></li>                
                <li className="clearfix mb-20"/>
                <li className="left col-xs-3">
                    <LocationInput/>
                </li>
                <li className="left col-xs-2">
                    <SelectBox name="radius" label="Raio"/>
                </li>
                <li className="left ml-20 col-xs-3">
                    <SelectBox name="mark" label="Marca" class="w-200"/>
                </li>
                <li className="left ml-20 col-xs-3">
                    <SelectBox name="model" label="Modelo" class="w-200"/>
                </li>
                <li className="clearfix mb-20"/>
                <li className="left col-xs-3">
                    <SelectBox name="model" label="Ano Desejado" class="w-200"/>
                </li>
                <li className="left ml-20 col-xs-3">
                    <SelectBox name="model" label="Faixa de preço" class="w-200"/>
                </li>
                <li className="left ml-20 col-xs-5">
                    <SelectBox name="model" label="Versão" class="w-200"/>
                </li>
                <li className="clearfix mb-20"/>

            </ul>
        </div>
    )
}
