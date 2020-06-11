import React from 'react'
import Checkbox from './checkbox';

export default function Search() {
    return (
        <div className="search-content">
            <ul>
                <li><Checkbox attr={{name:"new",label:"Novos"}} /></li>
                <li><Checkbox attr={{name:"used",label:"Usados"}} /></li>                
                <li className="clearfix"></li>
                <li>
                    <input type="text"/>
                </li>
            </ul>
        </div>
    )
}
