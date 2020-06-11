import React from 'react'
import classnames from 'classnames';
import './style.css';

export default function Checkbox(props,attr) {
    return (
        <li className={classnames("checkbox-container left",props.class)}>
            <input type="checkbox" name={attr.name}/>
            <label for={attr.name}>{attr.label}Novos</label>
        </li>
    )
}
