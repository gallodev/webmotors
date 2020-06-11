import React from 'react'
import className from 'classnames';


export default function Seletbox(props) {

    return (
        <div>
            <div className={className('container-select',props.class)}>
                <div className="custom-select-box">
                    <span className="select-label">{props.label}</span>
                    <select name={props.name}>
                        <option value="volvo">Volvo</option>
                        <option value="saab">Saab</option>
                        <option value="mercedes">Mercedes</option>
                        <option value="audi">Audi</option>
                    </select>                
                </div>                
            </div>            
        </div>
    )
}
