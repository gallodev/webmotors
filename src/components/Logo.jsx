import React from 'react'
import classnames from 'classnames';
import logo from '../assets/img/logo.svg';
import { Link , Route } from "react-router-dom";

export default function Logo(props) {
    return (
        <div className={classnames("left-container",props.class)} >
            <Route>
                <Link to="/" className="left home-link">
                    <img src={logo} alt="Webmotors"/>
                </Link>
            </Route>
        </div>
    )
}
