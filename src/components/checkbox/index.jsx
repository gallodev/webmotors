import React from 'react'
import classnames from 'classnames';
import './style.css';

export default function Checkbox(props) {
    return (
        <ul>
            <li className={classnames("checkbox-container left",props.class)}>
                <input type="checkbox" name={props.attr.name}/>
                <label to={props.attr.name}>{props.attr.label}</label>
            </li>
        </ul>
    )
}
